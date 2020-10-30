import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import styled, { keyframes } from 'styled-components'
import { useWallet } from 'use-wallet'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Spacer from '../../../components/Spacer'
import useSushi from '../../../hooks/useSushi'
import Balances from '../../Home/components/Balances'
import PoolStats from '../../Home/components/PoolStats'
import PopCherries from '../../Home/components/PopCherries'

const InfoBar: React.FC = () => {

   return (
     <>  
      <StyledCardWrapper>
       <Card flipped={true}>
         <CardContent divPadding="sm">
           <Balances/>
        </CardContent>
       </Card>
     </StyledCardWrapper>
     <StyledSpacer/>
      <StyledCardWrapper>
       <Card flipped={true}>
         <CardContent divPadding="sm">
           <PopCherries/>
        </CardContent>
       </Card>
     </StyledCardWrapper>
     <StyledSpacer/>
     <StyledCardWrapper>  
       <Card flipped={true}>
         <CardContent divPadding="sm" customPadding={9}>
           <PoolStats/>
        </CardContent>
       </Card>
     </StyledCardWrapper>
   </>
   ) 
}



const StyledCards = styled.div`
  width: 900px;
  margin-top:200px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`
const StyledCardWrapper = styled.div`
  display: flex;
  height: 141px;
  width: calc((900px - ${(props) => props.theme.spacing[6]}px * 2) / 3);
  position: relative;
`

const StyledTitle = styled.h4`
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 24px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[6]}px;
  width: ${(props) => props.theme.spacing[6]}px;
`

const StyledDetails = styled.div`
  text-align: center;
`


export default InfoBar


