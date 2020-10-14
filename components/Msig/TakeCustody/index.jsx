import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import dayjs from 'dayjs'
import { BigNumber, FilecoinNumber } from '@glif/filecoin-number'
import { Message } from '@glif/filecoin-message'
import { validateAddressString } from '@glif/filecoin-address'

import { useWalletProvider } from '../../../WalletProvider'
import useWallet from '../../../WalletProvider/useWallet'
import {
  Box,
  Button,
  ButtonClose,
  StepHeader,
  Input,
  Text,
  IconLedger,
  InlineBox,
  Form
} from '../../Shared'
import {
  ADDRESS_PROPTYPE,
  FILECOIN_NUMBER_PROP
} from '../../../customPropTypes'
import makeFriendlyBalance from '../../../utils/makeFriendlyBalance'
import { CardHeader, TakeCustodyHeaderText } from '../Shared'
import Preface from './Preface'
import { useWasm } from '../../../lib/WasmLoader'
import ErrorCard from '../../Wallet/Send.js/ErrorCard'
import ConfirmationCard from '../../Wallet/Send.js/ConfirmationCard'
import CustomizeFee from '../../Wallet/Send.js/CustomizeFee'
import { LEDGER, PROPOSE, emptyGasInfo } from '../../../constants'
import {
  reportLedgerConfigError,
  hasLedgerError
} from '../../../utils/ledger/reportLedgerConfigError'
import reportError from '../../../utils/reportError'
import toLowerCaseMsgFields from '../../../utils/toLowerCaseMsgFields'
import { confirmMessage } from '../../../store/actions'
import { pickPLSigner, getMethod6SerializedParams } from '../../../utils/msig'

const ChangeOwner = ({ address, msigBalance, signers, close }) => {
  const { ledger, connectLedger, resetLedgerState } = useWalletProvider()
  const wallet = useWallet()
  const dispatch = useDispatch()
  const { serializeParams } = useWasm()
  const [step, setStep] = useState(1)
  const [attemptingTx, setAttemptingTx] = useState(false)
  const [uncaughtError, setUncaughtError] = useState('')
  const [fetchingTxDetails, setFetchingTxDetails] = useState(false)
  const [mPoolPushing, setMPoolPushing] = useState(false)
  const [gasError, setGasError] = useState('')
  const [gasInfo, setGasInfo] = useState(emptyGasInfo)
  const [frozen, setFrozen] = useState(false)

  const [messageInfo, setMessageInfo] = useState({
    message: { ...emptyGasInfo },
    params: {}
  })

  const constructMsg = async (nonce = 0) => {
    const signer = pickPLSigner(signers)
    const innerParams = {
      Signer: signer,
      Decrease: false
    }
    console.log('SENDING!')
    try {
      const serializedInnerParams = await getMethod6SerializedParams(
        address,
        innerParams
      )
    } catch (err) {
      console.log('ERR!', err)
    }

    const serializedInnerParams = 'gkQAhKAB9A=='

    const outerParams = {
      to: address,
      value: '0',
      method: 6,
      params: serializedInnerParams
    }

    const serializedOuterParams = Buffer.from(
      serializeParams(outerParams),
      'hex'
    )

    const message = new Message({
      to: address,
      from: wallet.address,
      value: '0',
      method: 2,
      nonce,
      params: serializedOuterParams.toString('base64'),
      gasPremium: gasInfo.gasPremium.toAttoFil(),
      gasFeeCap: gasInfo.gasFeeCap.toAttoFil(),
      gasLimit: new BigNumber(gasInfo.gasLimit.toAttoFil()).toNumber()
    })

    return {
      message,
      params: {
        ...outerParams,
        params: innerParams
      }
    }
  }

  const sendMsg = async () => {
    setFetchingTxDetails(true)
    const provider = await connectLedger()

    if (provider) {
      const nonce = await provider.getNonce(wallet.address)
      const { message, params } = await constructMsg(nonce)
      setFetchingTxDetails(false)
      // const signedMessage = await provider.wallet.sign(
      //   msgWithGas.toSerializeableType(),
      //   wallet.path
      // )

      // const messageObj = msgWithGas.toLotusType()
      // setMPoolPushing(true)
      // const msgCid = await provider.sendMessage(messageObj, signedMessage)
      // messageObj.cid = msgCid['/']
      // messageObj.timestamp = dayjs().unix()
      // const maxFee = await provider.gasEstimateMaxFee(msgWithGas.toLotusType())
      // messageObj.maxFee = maxFee.toAttoFil()
      // // dont know how much was actually paid in this message yet, so we mark it as 0
      // messageObj.paidFee = '0'
      // messageObj.value = new FilecoinNumber(messageObj.Value, 'attofil').toFil()
      // // reformat the params and method for tx table
      // messageObj.params = { ...innerMessage, params: innerParams }
      // messageObj.method = PROPOSE
      // return messageObj
    }
    return null
  }

  const onSubmit = async e => {
    e.preventDefault()
    if (step === 1) {
      const messageInfo = await constructMsg()
      console.log(messageInfo, 'MESSAGE INFO')
      setMessageInfo(messageInfo)
      setStep(2)
    } else if (step === 2) {
      setStep(3)
    } else if (step === 3) {
      setAttemptingTx(true)
      try {
        const msg = await sendMsg()
        setAttemptingTx(false)
        if (msg) {
          dispatch(confirmMessage(toLowerCaseMsgFields(msg)))
          close()
        }
      } catch (err) {
        if (err.message.includes('19')) {
          setUncaughtError('Insufficient Multisig wallet available balance.')
        } else if (err.message.includes('2')) {
          setUncaughtError(
            `${wallet.address} has insufficient funds to pay for the transaction.`
          )
        } else if (err.message.includes('18')) {
          setUncaughtError(
            `${wallet.address} is not a signer of the multisig wallet ${address}.`
          )
        } else {
          reportError(20, false, err.message, err.stack)
          setUncaughtError(err.message || err)
        }
        setStep(2)
      } finally {
        setFetchingTxDetails(false)
        setAttemptingTx(false)
        setMPoolPushing(false)
      }
    }
  }

  const isSubmitBtnDisabled = () => {
    if (frozen) return true
    if (step === 1) return false
    if (step === 2 && gasError) return true
    if (uncaughtError) return false
    if (attemptingTx) return true
    if (step > 3) return true
  }

  return (
    <>
      <Box display='flex' flexDirection='column' width='100%'>
        <ButtonClose
          role='button'
          type='button'
          justifySelf='flex-end'
          marginLeft='auto'
          onClick={() => {
            setAttemptingTx(false)
            setUncaughtError('')
            resetLedgerState()
            close()
          }}
        />
        <Form onSubmit={onSubmit}>
          <Box
            maxWidth={13}
            width='100%'
            minWidth={11}
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            flexGrow='1'
          >
            <Box>
              {hasLedgerError({ ...ledger, otherError: uncaughtError }) && (
                <ErrorCard
                  error={reportLedgerConfigError({
                    ...ledger,
                    otherError: uncaughtError
                  })}
                  reset={() => {
                    setAttemptingTx(false)
                    setUncaughtError('')
                    resetLedgerState()
                    setStep(2)
                  }}
                />
              )}
              {attemptingTx && (
                <ConfirmationCard
                  loading={fetchingTxDetails || mPoolPushing}
                  walletType={LEDGER}
                  currentStep={4}
                  totalSteps={4}
                  msig
                />
              )}
              {!attemptingTx &&
                !hasLedgerError({ ...ledger, otherError: uncaughtError }) && (
                  <>
                    <StepHeader
                      title='Take full custody'
                      currentStep={step}
                      totalSteps={4}
                      glyphAcronym='Tc'
                    />
                    <TakeCustodyHeaderText step={step} />
                  </>
                )}
              {step === 1 && <Preface />}
              <Box boxShadow={2} borderRadius={4}>
                {step > 1 && (
                  <>
                    <CardHeader address={address} balance={msigBalance} />
                    <Box
                      width='100%'
                      px={3}
                      pb={step === 3 && 3}
                      border={0}
                      bg='background.screen'
                    >
                      <CustomizeFee
                        message={messageInfo.message.toLotusType()}
                        gasInfo={gasInfo}
                        setGasInfo={setGasInfo}
                        setFrozen={setFrozen}
                        setError={setGasError}
                        error={gasError}
                        feeMustBeLessThanThisAmount={wallet.balance}
                      />
                    </Box>
                  </>
                )}
              </Box>
            </Box>
            <Box
              display='flex'
              flex='1'
              flexDirection='row'
              justifyContent='space-between'
              alignItems='flex-end'
              margin='auto'
              maxWidth={13}
              width='100%'
              minWidth={11}
              maxHeight={12}
              my={3}
            >
              <Button
                title='Back'
                variant='secondary'
                onClick={() => {
                  setAttemptingTx(false)
                  setUncaughtError('')
                  resetLedgerState()
                  if (step === 1) {
                    close()
                  } else {
                    setStep(step - 1)
                  }
                }}
                disabled={attemptingTx}
              />
              <Button
                variant='primary'
                title='Next'
                disabled={isSubmitBtnDisabled()}
                type='submit'
              />
            </Box>
          </Box>
        </Form>
      </Box>
    </>
  )
}

ChangeOwner.propTypes = {
  address: ADDRESS_PROPTYPE,
  signers: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  msigBalance: FILECOIN_NUMBER_PROP
}

export default ChangeOwner
