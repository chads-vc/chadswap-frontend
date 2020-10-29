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
import Button from '../../../components/Button'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useFarms from '../../../hooks/useFarms'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useSushi from '../../../hooks/useSushi'

import { getChadsAddress, getEmtrgAddress} from '../../../sushi/utils'
import {getBalanceNumber} from '../../../utils/formatBalance'


const BuyCard: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const sushi = useSushi()
  const chadsBalance = useTokenBalance(getChadsAddress(sushi))
  const emtrgBalance = useTokenBalance(getEmtrgAddress(sushi))

  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  return (
    <StyledWrapper>
      <StyledRow>
        <Label text="CHADS balance:" horizontal={true} />
        <Value value={!!account ? getBalanceNumber(chadsBalance) : 'Locked'} fontSize={25} />
        <StyledButton>
          <Button variant="secondary" customColor="white" buttonWidth={80} text="buy" size="pc" href="https://app.uniswap.org/#/swap?outputCurrency=0x69692d3345010a207b759a7d1af6fc7f38b35c5e"/>
        </StyledButton>
      </StyledRow>
      <div style={{"width":5, "height":5}}/>
       <StyledRow>
        <Label text="EMTRG balance:" horizontal={true} />
        <Value value={!!account ? getBalanceNumber(emtrgBalance) : 'Locked'} fontSize={25} />
        <StyledButton>
          <Button variant="secondary" customColor="white" buttonWidth={80} text="buy" size="pc" href="https://app.uniswap.org/#/swap?outputCurrency=0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F"/>
        </StyledButton>
      </StyledRow>
    </StyledWrapper>
  )
}


const StyledText = styled.span`
  text-shadow: #c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px;
  font-size: 80px;
  color: #31ED02;
  text-align: center;
  font-family: 'Third-rail';
  margin-top:100px;
`

const StyledButton = styled.div`
  flex:1;
  & > button {
    margin-left:auto;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding:16px 12px;
`

const StyledRow = styled.div`
  flex: 1;
  display: flex;
  justify-content; center;
  align-items: center;
  font-size: 22px;
  line-height:25px;
`

const StyledContent = styled.div`
  flex: 1;
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
  vertical-align:middle;
`

export default BuyCard
