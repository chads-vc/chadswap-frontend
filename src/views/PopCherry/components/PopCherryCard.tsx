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
import { getChadsAddress, getEmtrgAddress, getSushiAddress, getSushiSupply, getSushiContract } from '../../../sushi/utils'

import cherry from '../../../assets/img/cherry.gif'
import useCherryPop from '../../../hooks/useCherryPop'
import {getBalanceNumber} from '../../../utils/formatBalance'

const PopCherryCard: React.FC = () => {
  const sushi = useSushi()
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  const {onCherryPop} = useCherryPop(getSushiContract(sushi))

  const [pendingTx, setPendingTx] = useState(false)

  const chadsBalance = useTokenBalance(getChadsAddress(sushi))
  const emtrgBalance = useTokenBalance(getEmtrgAddress(sushi))

  const disabled = (!chadsBalance || getBalanceNumber(chadsBalance) < 10000) && (!emtrgBalance || getBalanceNumber(emtrgBalance) < 1000) 

  const onClick = async () => {
    setPendingTx(true)
    await onCherryPop()
    setPendingTx(false)
  }

  return (
    <StyledLink href='#' onClick={onClick} disabled={disabled}>
        <StyledWrapper>
          <StyledBalance>
            <StyledText>Pop Cherry</StyledText>
          </StyledBalance>
        </StyledWrapper>
    </StyledLink>
      
  )
}

interface StyledLinkProps {
  disabled: boolean
}


const StyledLink = styled.a<StyledLinkProps>`
  text-decoration: none;
  width: 100%;
  height: 100%;

  ${(props) => props.disabled &&
    `pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;`
  }

`

const StyledText = styled.span`
  text-shadow: #c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px;
  font-size: 80px;
  color: #31ED02;
  text-align: center;
  font-family: 'Third-rail';
  margin-top:100px;
`

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction:column;
  &:hover {
    opacity:0.5;
  }
  cursor: pointer;
  width:100%;
  height:100%;
  background-image: url(${cherry});
  background-size: auto 80%;
  background-position: center;
  background-repeat: no-repeat;
  line-height:20px;
  margin: auto;
  vertical-align: middle;
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

export default PopCherryCard
