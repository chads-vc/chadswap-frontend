import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import Label from '../../../components/Label'
import Spacer from '../../../components/Spacer'
import Value from '../../../components/Value'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useFarms from '../../../hooks/useFarms'
import useSushi from '../../../hooks/useSushi'
import { getBalanceNumber } from '../../../utils/formatBalance'
import useVestingBalance from '../../../hooks/useVesting'

const PendingRewards: React.FC = () => {

  const { account, ethereum }: { account: any; ethereum: any } = useWallet()
  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }


  return (
    <StyledLabelValueWrapper>
      <Label text="pending harvest"/> 
      <Value
        value={!!account ? sumEarning : 'Locked'}
      />
    </StyledLabelValueWrapper>
  )
}

const Balances: React.FC = () => {
  const sushi = useSushi()
  const vesting = useVestingBalance()
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  return (
    <StyledWrapper>
        <StyledBalances>
            <StyledBalance>
              <PendingRewards />
              <div style={{'width': 7, 'height': 7}}/>
               <StyledLabelValueWrapper>
                <Label text="pending vesting" />
                <Value
                  value={!!account ? getBalanceNumber(vesting) : 'Locked'}
                />
              </StyledLabelValueWrapper>
            </StyledBalance>
          </StyledBalances>

          {/*
      <Card>
        <CardContent>
          <Label text="Total SUSHI Supply" />
          <Value
            value={totalSupply ? getBalanceNumber(totalSupply) : 'Locked'}
          />
        </CardContent>
      </Card>
            */ }
    </StyledWrapper>
  )
}

const FootnoteValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  float: right;
`

const StyledWrapper = styled.div`
  align-items: center;
  display: block;
`

const StyledBalances = styled.div`
  display: flex;
`

const StyledLabelValueWrapper = styled.div`
  font-size:28px;
  line-height:27px;
  white-space:nowrap;
`

const StyledBalance = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default Balances
