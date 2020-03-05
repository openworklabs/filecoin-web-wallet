import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Box, Button, Card, Text, Input } from '../../../Shared'

import { useWalletProvider } from '../../../../WalletProvider'
import StepCard from './StepCard'
import ProviderCreator from './CreateProvider'

const validateSeed = () => true

export default () => {
  const { setWalletType } = useWalletProvider()
  const [seed, setSeed] = useState('')
  const [validSeed, setValidSeed] = useState('')
  const { network, wallets } = useSelector(state => ({
    network: state.network,
    wallets: state.wallets
  }))
  const router = useRouter()

  useEffect(() => {
    if (wallets.length > 0) {
      const params = new URLSearchParams(router.query)
      router.push(`/wallet?${params.toString()}`)
    }
    return () => {
      setSeed('')
      setValidSeed('')
    }
  }, [router, wallets, network])
  return (
    <>
      <ProviderCreator network={network} mnemonic={validSeed} />
      <Box
        mt={8}
        mb={6}
        display='flex'
        flexDirection='row'
        justifyContent='center'
      >
        <StepCard step={1} />
        <Card
          width='auto'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
        >
          <Text>Please input your 12-word seed phrase below</Text>
          <Input.Seed value={seed} onChange={e => setSeed(e.target.value)} />
        </Card>
      </Box>
      <Box mt={6} display='flex' flexDirection='row' justifyContent='center'>
        <Button
          title='Back'
          onClick={() => setWalletType(null)}
          variant='secondary'
          mr={2}
        />
        <Button
          title='Next'
          onClick={() => {
            const isValid = validateSeed(seed)
            if (isValid) setValidSeed(seed)
          }}
          variant='primary'
          ml={2}
        />
      </Box>
    </>
  )
}