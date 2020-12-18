import { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
import { cherryPop } from '../sushi/utils'

const useCherryPop = (cherryContract: Contract) => {
  const { account } = useWallet()

  const handleCherryPop= useCallback(async () => {
    const txHash = await cherryPop(cherryContract, account)
    console.log(txHash)
    return txHash
  }, [account, cherryContract])

  return { onCherryPop: handleCherryPop }
}

export default useCherryPop
