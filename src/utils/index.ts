import BigNumber from 'bignumber.js'

export interface StakedValue {
  tokenAmount: BigNumber
  wethAmount: BigNumber
  totalWethValue: BigNumber
  tokenPriceInWeth: BigNumber
  poolWeight: BigNumber
}


export { default as formatAddress } from './formatAddress'

export const bnToDec = (bn: BigNumber, decimals = 18): number => {
  return bn.dividedBy(new BigNumber(10).pow(decimals)).toNumber()
}

export const decToBn = (dec: number, decimals = 18) => {
  return new BigNumber(dec).multipliedBy(new BigNumber(10).pow(decimals))
}

export const calculateAPY = (stakedValue: StakedValue, sushiPrice: BigNumber, block: number, rewardsInThisEpoch: BigNumber) => {
  const BLOCKS_PER_YEAR = new BigNumber(2336000)
  const SUSHI_PER_BLOCK = new BigNumber(1000)
  const START_BLOCK = 11165824
  const ELAPSED_BLOCKS = new BigNumber(block - START_BLOCK)

  //console.log('calculate APY', stakedValue, sushiPrice)
  return (stakedValue ? sushiPrice
              .times(rewardsInThisEpoch)
              .times(BLOCKS_PER_YEAR)
              .times(stakedValue.poolWeight)
              .div(stakedValue.totalWethValue)
              .div(ELAPSED_BLOCKS)
              .div(new BigNumber(1e18))
              : null )

}
