import { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
import { popCherry, getSushiContract } from '../sushi/utils'
import useSushi from './useSushi'

const usePopCherry = () => {
  const { account } = useWallet()

  const sushi = useSushi()

  const handlePopCherry = useCallback(async () => {
    const txHash = await popCherry(getSushiContract(sushi), account)
    console.log(txHash)
    return txHash
  }, [account, sushi])

  return { onPopCherry: handlePopCherry }
}

export default usePopCherry
