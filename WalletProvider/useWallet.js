import { useSelector } from 'react-redux'
import { useWalletProvider } from '.'

export default () => {
  const { walletType } = useWalletProvider()
  const { wallet, selectedWalletIdx } = useSelector(state => {
    if (state.wallets.length === 0)
      return { wallet: null, selectedWalletIdx: -1 }
    if (!state.wallets[state.selectedWalletIdx])
      return { wallet: null, selectedWalletIdx: -1 }
    return {
      wallet: state.wallets[state.selectedWalletIdx],
      selectedWalletIdx: state.selectedWalletIdx
    }
  })

  return {
    ...wallet,
    type: walletType,
    index: selectedWalletIdx
  }
}
