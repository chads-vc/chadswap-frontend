import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { provider } from 'web3-core'
import useSushi from './useSushi'

import { useWallet } from 'use-wallet'

import {getSushiAddress, getEthContributed, getSushiContract} from '../sushi/utils'

const useEthContributed = () => {

  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
 
  const sushi = useSushi()
  const sushiContract = getSushiContract(sushi)

  const [ethContributed, setEthContributed] = useState(new BigNumber(0))

  const fetchEthContributed = useCallback(async () => {
    const t = await getEthContributed(getSushiContract(sushi), account) 
    setEthContributed(new BigNumber(t))
  }, [account, sushi])

  useEffect(() => {
    if (account && ethereum && sushi && sushiContract) {
      fetchEthContributed()
    }
  }, [account, ethereum, fetchEthContributed, sushi, sushiContract])

  return ethContributed;
}

export default useEthContributed
