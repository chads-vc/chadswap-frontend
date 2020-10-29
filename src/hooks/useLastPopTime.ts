import { useCallback, useEffect, useState } from 'react'

import { provider } from 'web3-core'
import useSushi from './useSushi'

import { useWallet } from 'use-wallet'

import {getSushiAddress, getLastPopTime} from '../sushi/utils'

const useLastPopTime = () => {

  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
 
  const sushi = useSushi()

  const [lastPopTime, setLastPopTime] = useState(0)

  const fetchLastPopTime = useCallback(async () => {
    setLastPopTime( await getLastPopTime(getSushiAddress(sushi)) )
    console.log(lastPopTime)
  }, [lastPopTime, sushi])

  useEffect(() => {
    if (account && ethereum) {
      fetchLastPopTime()
    }
  }, [account, ethereum, fetchLastPopTime])

  return lastPopTime;
}

export default useLastPopTime
