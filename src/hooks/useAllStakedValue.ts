import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import { StakedValue } from '../utils'

import {
  getMasterChefContract,
  getWethContract,
  getFarms,
  getTotalLPWethValue,
} from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefContract = getMasterChefContract(sushi)
  const wethContact = getWethContract(sushi)
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
        }) =>
          getTotalLPWethValue(
            masterChefContract,
            wethContact,
            lpContract,
            tokenContract,
            pid,
          ),
      ),
    )

    setBalance(balances)
  }, [farms, masterChefContract, wethContact])

  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchAllStakedValue()
    }
  }, [account, block, fetchAllStakedValue, masterChefContract, setBalance, sushi])

  return balances
}

export default useAllStakedValue
