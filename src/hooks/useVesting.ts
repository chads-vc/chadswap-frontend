import { useCallback, useEffect, useState } from 'react'

import { provider } from 'web3-core'
import useSushi from './useSushi'

import { useWallet } from 'use-wallet'

import {getVestingAmount, getVestingContract} from '../sushi/utils'

import BigNumber from 'bignumber.js'

const useVesting = () => {

  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
 
  const sushi = useSushi()

  const [vesting, setVesting] = useState(new BigNumber(0))

  const vestingContract = getVestingContract(sushi)

  const fetchVestingBalance = useCallback(async () => {
    const t = await getVestingAmount(vestingContract, account) 
    setVesting(new BigNumber(t) )
    //const r = await getCherryPopRewardPercent(getSushiContract(sushi))
    //setPopCherryBurnRewardPct(r/100.0)
    //console.log('reward pct', popCherryBurnRewardPct)
  }, [account, vestingContract])

  useEffect(() => {
    if (account && ethereum && sushi && vestingContract) {
      fetchVestingBalance()
    }    
  }, [account, ethereum, fetchVestingBalance, sushi, vestingContract])

  return vesting
}

export default useVesting
