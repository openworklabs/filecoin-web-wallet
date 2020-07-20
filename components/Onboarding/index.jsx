import React from 'react'
import ChooseWallet from './Choose'
import ConfigureWallet from './Configure'
import { Box } from '../Shared'
import useWallet from '../../WalletProvider/useWallet'
import NodeConnectedWidget from '../Shared/NodeConnected'

export default () => {
  const wallet = useWallet()
  return (
    <Box
      display='flex'
      minHeight='100vh'
      justifyContent='center'
      alignContent='center'
      padding={[2, 3, 5]}
    >
      <NodeConnectedWidget apiAddress={process.env.LOTUS_NODE_JSONRPC} />
      {wallet.type ? (
        <ConfigureWallet walletType={wallet.type} />
      ) : (
        <ChooseWallet />
      )}
    </Box>
  )
}
