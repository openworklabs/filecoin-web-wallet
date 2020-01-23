import React from 'react'
import PropTypes from 'prop-types'
import 'styled-components/macro'

import { useProgress } from '../../hooks'
import { Button } from './styledComponents'
import { connectLedger, LEDGER_STATE_PROPTYPES } from '../../utils/ledger'

const ImportLedgerBtn = ({
  ledgerState,
  dispatchRdx,
  dispatchLocal,
  network
}) => {
  const { setProgress } = useProgress()
  return (
    <Button
      disabled={
        !(
          ledgerState.userVerifiedLedgerConnected &&
          ledgerState.userVerifiedLedgerUnlocked &&
          ledgerState.userVerifiedFilecoinAppOpen
        )
      }
      onClick={async () => {
        const successfulConnection = await connectLedger(
          dispatchLocal,
          dispatchRdx,
          network
        )
        if (successfulConnection) setProgress(2)
      }}
    >
      {ledgerState.userImportFailure ? 'Try again' : 'Import Ledger Wallet'}
    </Button>
  )
}

ImportLedgerBtn.propTypes = {
  ledgerState: LEDGER_STATE_PROPTYPES,
  dispatchLocal: PropTypes.func.isRequired,
  dispatchRdx: PropTypes.func.isRequired,
  network: PropTypes.string.isRequired
}

export default ImportLedgerBtn
