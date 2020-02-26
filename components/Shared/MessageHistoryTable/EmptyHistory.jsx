import React from 'react'
import Box from '../Box'
import { Text } from '../Typography'

export default () => {
  return (
    <Box>
      <Text ml={2} my='0' color='core.nearblack'>
        How do I see my transaction history?
      </Text>
      <Text ml={2} my='0' color='core.darkgray'>
        If you're seeing this, you haven't sent or received any FIL from this
        account yet. When you do, your transactions will appear.
      </Text>
    </Box>
  )
}
