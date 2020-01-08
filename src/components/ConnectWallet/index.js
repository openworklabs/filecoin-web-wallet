import React, { useState, useReducer, useEffect } from 'react'
import styled from 'styled-components'
import 'styled-components/macro'
import TransportWebHID from '@ledgerhq/hw-transport-webhid'
import Filecoin, {
  LedgerProvider
} from '@openworklabs/filecoin-wallet-provider'
import { useDispatch, useSelector } from 'react-redux'

import { error, clearError, walletList } from '../../store/actions'
import { useProgress } from '../../hooks'
import { OnboardingContainer } from '../StyledComponents'
import {
  reducer,
  initialLedgerState,
  USER_VERIFIED_LEDGER_CONNECTED,
  USER_UNVERIFIED_LEDGER_CONNECTED,
  USER_VERIFIED_FILECOIN_APP_OPEN,
  USER_UNVERIFIED_FILECOIN_APP_OPEN,
  USER_INITIATED_IMPORT,
  LEDGER_NOT_FOUND,
  ESTABLISHING_CONNECTION_W_FILECOIN_APP,
  FILECOIN_APP_NOT_OPEN,
  FILECOIN_APP_OPEN,
  USER_UNVERIFIED_LEDGER_UNLOCKED,
  USER_VERIFIED_LEDGER_UNLOCKED,
  LEDGER_LOCKED,
  LEDGER_UNLOCKED,
  RESET_STATE,
  LEDGER_CONNECTED
} from './ledgerStateManagement'
import {
  ConnectWalletContainer,
  EducationalCheckboxContainer,
  EducationalCheckboxItem,
  Checkbox,
  ColoredDot,
  InputLabel,
  Button
} from './styledComponents'
import {
  determineDotColorForLedgerConnection,
  determineDotColorForLedgerUnlocked,
  determineDotColorForFilecoinAppOpen
} from './helpers'

export default () => {
  const dispatchRdx = useDispatch()
  const errorFromRdx = useSelector(state => state.error)
  const [ledgerState, dispatchLocal] = useReducer(reducer, initialLedgerState)
  const { setProgress } = useProgress()

  console.log(ledgerState)

  useEffect(() => {
    if (!errorFromRdx) dispatchLocal({ type: RESET_STATE })
  }, [errorFromRdx])

  return (
    <ConnectWalletContainer>
      <OnboardingContainer>
        <form>
          <EducationalCheckboxContainer>
            <EducationalCheckboxItem>
              {!ledgerState.userInitiatedImport ? (
                <Checkbox
                  onChange={() =>
                    dispatchLocal({
                      type: ledgerState.userVerifiedLedgerConnected
                        ? USER_UNVERIFIED_LEDGER_CONNECTED
                        : USER_VERIFIED_LEDGER_CONNECTED
                    })
                  }
                  type='checkbox'
                  name='ledger_connected'
                  id='ledger_connected'
                  checked={ledgerState.userVerifiedLedgerConnected}
                />
              ) : (
                <ColoredDot
                  color={determineDotColorForLedgerConnection(ledgerState)}
                />
              )}
              <InputLabel htmlFor='ledger_connected'>
                My Ledger is connected to my computer and unlocked.
              </InputLabel>
            </EducationalCheckboxItem>
            <EducationalCheckboxItem>
              {!ledgerState.ledgerUnlocked && !ledgerState.ledgerLocked ? (
                <Checkbox
                  onChange={() =>
                    dispatchLocal({
                      type: ledgerState.userVerifiedLedgerUnlocked
                        ? USER_UNVERIFIED_LEDGER_UNLOCKED
                        : USER_VERIFIED_LEDGER_UNLOCKED
                    })
                  }
                  type='checkbox'
                  name='ledger_unlocked'
                  id='ledger_unlocked'
                  checked={ledgerState.userVerifiedLedgerUnlocked}
                  disabled={!ledgerState.userVerifiedLedgerConnected}
                />
              ) : (
                <ColoredDot
                  color={determineDotColorForLedgerUnlocked(ledgerState)}
                />
              )}
              <InputLabel
                htmlFor='ledger_unlocked'
                disabled={!ledgerState.userVerifiedLedgerConnected}
              >
                My Ledger device is unlocked.
              </InputLabel>
            </EducationalCheckboxItem>
            <EducationalCheckboxItem>
              {!ledgerState.filecoinAppOpen &&
              !ledgerState.filecoinAppNotOpen ? (
                <Checkbox
                  onChange={() =>
                    dispatchLocal({
                      type: ledgerState.userVerifiedFilecoinAppOpen
                        ? USER_UNVERIFIED_FILECOIN_APP_OPEN
                        : USER_VERIFIED_FILECOIN_APP_OPEN
                    })
                  }
                  type='checkbox'
                  name='filecoin_app_open'
                  id='filecoin_app_open'
                  checked={ledgerState.userVerifiedFilecoinAppOpen}
                  disabled={
                    !ledgerState.userVerifiedLedgerConnected ||
                    !ledgerState.userVerifiedLedgerUnlocked
                  }
                />
              ) : (
                <ColoredDot
                  color={determineDotColorForFilecoinAppOpen(ledgerState)}
                />
              )}
              <InputLabel
                htmlFor='filecoin_app_open'
                disabled={
                  !ledgerState.userVerifiedLedgerConnected ||
                  !ledgerState.userVerifiedLedgerUnlocked
                }
              >
                The Filecoin App is open on my Ledger.
              </InputLabel>
            </EducationalCheckboxItem>
          </EducationalCheckboxContainer>
        </form>
        <Button
          disabled={
            !(
              ledgerState.userVerifiedLedgerConnected &&
              ledgerState.userVerifiedLedgerUnlocked &&
              ledgerState.userVerifiedFilecoinAppOpen
            )
          }
          onClick={async () => {
            dispatchRdx(clearError())
            dispatchLocal({ type: USER_INITIATED_IMPORT })
            let transport = ledgerState.transport
            try {
              if (!transport) {
                transport = await TransportWebHID.create()
              }
              dispatchLocal({ type: LEDGER_CONNECTED, transport })
            } catch (err) {
              if (
                err.message &&
                !err.message.toLowerCase().includes('device is already open')
              ) {
                dispatchLocal({ type: LEDGER_NOT_FOUND })
                // if we want to display banner instead:
                dispatchRdx(error(err))
                return
              }
            }

            dispatchLocal({ type: ESTABLISHING_CONNECTION_W_FILECOIN_APP })
            let provider = ledgerState.provider
            if (!provider) {
              try {
                provider = new Filecoin(new LedgerProvider(transport), {
                  token: process.env.REACT_APP_LOTUS_JWT_TOKEN
                })
                const response = await provider.wallet.getVersion()
                if (response.device_locked) {
                  dispatchLocal({ type: LEDGER_LOCKED })
                  dispatchRdx(error(new Error('Ledger device locked')))
                  return
                }

                dispatchLocal({ type: LEDGER_UNLOCKED })
                dispatchLocal({ type: FILECOIN_APP_OPEN, provider })
              } catch (err) {
                dispatchLocal({ type: FILECOIN_APP_NOT_OPEN })
                dispatchRdx(error(err))
                return
              }
            }

            try {
              const filAddresses = await provider.wallet.getAccounts(0, 1)
              const wallets = await Promise.all(
                filAddresses.map(async address => {
                  const balance = await provider.getBalance(
                    't1e2tmlvccdm6zdwxlu5h7mtihs3w23cqs5gg3c4q'
                  )
                  return {
                    balance,
                    address
                  }
                })
              )
              dispatchRdx(walletList(wallets))
              setProgress(2)
            } catch (err) {
              dispatchRdx(error(err))
            }
          }}
        >
          {ledgerState.userImportFailure ? 'Try again' : 'Import Ledger Wallet'}
        </Button>
      </OnboardingContainer>
    </ConnectWalletContainer>
  )
}
