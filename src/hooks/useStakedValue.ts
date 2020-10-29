import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import { StakedValue } from '../utils'

import {
  getMasterChefContract,
  getWethContract,
  getTotalLPWethValue,
} from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import useFarm from './useFarm'


const useStakedValue = (id: string) => {
  const [balance, setBalance] = useState<StakedValue>({
    tokenAmount: new BigNumber(0),
    wethAmount: new BigNumber(0),
    totalWethValue: new BigNumber(0),
    tokenPriceInWeth: new BigNumber(0),
    poolWeight: new BigNumber(0)

  })
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const farm = useFarm(id)
  const masterChefContract = getMasterChefContract(sushi)
  const wethContact = getWethContract(sushi)
  const block = useBlock()

  console.log('usestakedvalue', farm)
  const fetchStakedValue = useCallback(async () => {
    const balance = await getTotalLPWethValue(
            masterChefContract,
            wethContact,
            farm.lpContract,
            farm.tokenAddress,
            farm.pid,
          )

    setBalance(balance)
  }, [farm, masterChefContract, wethContact])

  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchStakedValue()
    }
  }, [account, block, fetchStakedValue, masterChefContract, setBalance, sushi])

  return balance
}

export default useStakedValue
