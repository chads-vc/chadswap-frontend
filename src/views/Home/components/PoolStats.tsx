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
import useTokenBalance from '../../../hooks/useTokenBalance'
import useSushi from '../../../hooks/useSushi'
import { getSushiAddress, getSushiSupply } from '../../../sushi/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'

const PendingRewards: React.FC = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)

  const { account, ethereum }: { account: any; ethereum: any } = useWallet()
  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }

  const [farms] = useFarms()

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [end, sumEarning])

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
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const sushi = useSushi()
  const sushiBalance = useTokenBalance(getSushiAddress(sushi))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getSushiSupply(sushi)
      setTotalSupply(supply)
    }
    if (sushi) {
      fetchTotalSupply()
    }
  }, [sushi, setTotalSupply])

  return (
    <StyledWrapper>
        <StyledBalances>
            <StyledBalance>
             <StyledLabelValueWrapper>
                <Label text="tvl:" horizontal={true} />
                <Value
                  value={"$40,000,000" }
                  horizontal={true}
                  fontSize={23}
                />
              </StyledLabelValueWrapper>
              <div style={{'width': 11, 'height': 11}}/>
              <StyledLabelValueWrapper>
                <Label text="stacy price:" horizontal={true} />
                <Value
                  value={!!account ? "$0.069" : 'Locked'}
                  horizontal={true}
                  fontSize={23}
                />
              </StyledLabelValueWrapper>
              <div style={{'width': 9, 'height': 9}}/>
               <StyledLabelValueWrapper>
                <Label text="stacy marketcap:" horizontal={true} />
                <Value
                  value={!!account ? "$420,000,000" : 'Locked'}
                  horizontal={true}
                  fontSize={23}
                />
              </StyledLabelValueWrapper>
              <div style={{'width': 9, 'height': 9}}/>
                <StyledLabelValueWrapper>
                  <Label text="stacy/eth uniswap pool:" horizontal={true} />
                <Value
                  value={!!account ? "$69,000,000" : 'Locked'}
                  horizontal={true}
                  fontSize={23}
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
  font-size:18px;
  line-height:15px;
  display:flex;
  justify-content: center;
  align-items: center;
`

const StyledBalance = styled.div`
  display: flex;
  flex: 1;
  flex-direction:column;
`

export default Balances
