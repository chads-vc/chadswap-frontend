import React, { useState } from 'react'
import Value from '../../../components/Value/'
import Button from '../../../components/Button'
import Container from '../../../components/Container'
import Card from '../../../components/Card'


import CardContent from '../../../components/CardContent'
import styled from 'styled-components'

import { useWallet } from 'use-wallet'
import { getBalanceNumber } from '../../../utils/formatBalance'
import useEthContributed from '../../../hooks/useEthContributed'

import useClaimLPTokens from '../../../hooks/useClaimLPTokens'

import cardBgFlipped from '../../../assets/img/small-rectangle-pink-blue-flip.png'

import useSushi from '../../../hooks/useSushi'
import {getSushiContract} from '../../../sushi/utils'

const ClaimLPCards: React.FC = () => {

    const [pendingTx, setPendingTx] = useState(false)
  
    const { account, ethereum }: { account: any; ethereum: any } = useWallet()
    const ethContributed = useEthContributed()

    const sushi = useSushi()
    const {onClaimLPTokens} = useClaimLPTokens(getSushiContract(sushi))

    return (
      <Container size="lg">
        <StyledWrapper>
       <StyledCardWrapper width={446} height={148}>
          <StyledTextWrapper>
             <StyledText color="#8015e8" fontSize={50} lineHeight={45}>
              You have contributed
            </StyledText>
            <Value fontSize={80} color="#31ED02" value={!!account ? getBalanceNumber(ethContributed) : 'Locked'}/> 
            <StyledText color="#8015e8" fontSize={80} lineHeight={75}>
              ETH
            </StyledText>
 
            <StyledText color="#8015e8" fontSize={50} lineHeight={45}>
              to the <span style={{color: '#E08DE3'}}>stacy</span> lge
            </StyledText>
            <StyledButton>
              <Button size="lg" text="claim lp tokens"
                disabled={!ethContributed.toNumber() || pendingTx}
                onClick={async () => {
                  setPendingTx(true)
                  await onClaimLPTokens()
                  setPendingTx(false)
                }}
              />
            </StyledButton>
            
          </StyledTextWrapper>

      </StyledCardWrapper>

     </StyledWrapper>
      </Container>
  );
};

interface StyledCardWrapperProps {
  height: number
  width: number
}

interface StyledTextProps {
  color: string
  fontSize: number
  lineHeight: number
}

const StyledButton = styled.div`
  flex: 1;
  margin-top:30px;
`

const StyledText = styled.div<StyledTextProps>`
  font-family: 'Third-rail'; 
  color: ${(props) => props.color};
  flex:1;
  white-space: nowrap;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight}px;
  text-shadow: #c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px;
}
`

const StyledCardWrapper = styled.div<StyledCardWrapperProps>`
  display: flex;
  height: ${(props) => props.height}px ;
  width: ${(props) => props.width}px ;
  flex: 1;
  margin: auto;
`
const StyledWrapper = styled.div`
  display: flex;
  flex-direction:column;
`

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  margin: 0 auto;
  width:100%;
  height:100%;
`

const StyledCard = styled.div`
  background-size:100% 100%;
  background-image: url(${cardBgFlipped});
  border-radius: 12px;
  display: flex;
  flex: 1;
  flex-direction: column;
`
export default ClaimLPCards;
