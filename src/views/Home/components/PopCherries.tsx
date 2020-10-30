import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import Label from '../../../components/Label'
import Spacer from '../../../components/Spacer'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useFarms from '../../../hooks/useFarms'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useSushi from '../../../hooks/useSushi'
import { getSushiAddress, getSushiSupply } from '../../../sushi/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'
import { Link } from 'react-router-dom';

import  usePopCherryAmount from '../../../hooks/usePopCherryAmount'

import cherry from '../../../assets/img/cherry.gif'
import Value from '../../../components/Value'

const PopCherries: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const sushi = useSushi()
  const sushiBalance = useTokenBalance(getSushiAddress(sushi))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  const popCherryAmount = usePopCherryAmount()

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
      <Link style={{textDecoration: "none", width:"100%", height:"100%"}} to="/popcherry">
        <StyledWrapper>
          <StyledContent><Label text="pop cherry" fontSize={33}/></StyledContent>
          <StyledContent style={{paddingTop:20}}>
            <Value fontSize={33} color="#31ED02" value={!!account ? getBalanceNumber(popCherryAmount) : 'Locked'} />
 
            </StyledContent>
          <StyledContent style={{paddingTop:24}}><Label text="stacy for cherry pop" fontSize={22}/></StyledContent>
        </StyledWrapper>
      </Link>
      
  )
}


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
  background-size: auto 60%;
  background-position: center;
  background-repeat: no-repeat;
  line-height:20px;
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
`

export default PopCherries
