import React from 'react'
import Container from '../../components/Container'
import Card from '../../components/Card'
import CardContent from '../../components/CardContent'
import Page from '../../components/Page'
import PopCherryCard from './components/PopCherryCard'
import BuyCard from './components/BuyCard'
import Value from '../../components/Value'
import { getBalanceNumber } from '../../utils/formatBalance'
import  usePopCherryAmount from '../../hooks/usePopCherryAmount'
import { useWallet } from 'use-wallet'

import styled from 'styled-components'

import cardBgFlipped from '../../assets/img/small-rectangle-pink-blue-flip.png'
import heart from '../../assets/img/hearts.gif'

const PopCherry: React.FC = () => {

  const { account, ethereum }: { account: any; ethereum: any } = useWallet()
  const {popCherryAmount, popCherryBurnRewardPct} = usePopCherryAmount()
  console.log('rendering Pop Cherry', typeof(popCherryAmount))
  return (
    <Page>
      <Container size="lg">
        <StyledWrapper>

        <StyledCardWrapper width={430} height={244}>
         <Card flipped={true}>
           <CardContent divPadding="sm">
             <PopCherryCard/>
          </CardContent>
         </Card>
       </StyledCardWrapper>

       <StyledCardWrapper width={446} height={148}>
       <StyledCard>
         <CardContent divPadding="lg">
           <BuyCard />
        </CardContent>
       </StyledCard>
      </StyledCardWrapper>
      <div style={{"width":20,"height":20}}/>

      <StyledCardWrapper width={446} height={170}>
        <StyledTextWrapper>

        <StyledText color="#8015E8" fontSize={48} lineHeight={40}>
          EARN
         </StyledText>


          <Value fontSize={90} color="#31ED02" lineHeight={69} decimals={0} value={!!account ? getBalanceNumber(popCherryAmount) * popCherryBurnRewardPct : 'Locked'} />
          {/*
         <StyledText color="#31ED02" fontSize={80} lineHeight={70}>
           TEST
         </StyledText>
          */}
        <StyledText color="#8015E8" fontSize={48} lineHeight={40}>
          STACY FOR
         </StyledText>

         <StyledText color="#8015E8" fontSize={64} lineHeight={63}>
            POPPING HER <span style={{color: "#E08DE3"}}>CHERRY</span>
         </StyledText>
 
        </StyledTextWrapper>
      </StyledCardWrapper>

      <div style={{"width":45,"height":45}}/>
      <StyledCardWrapper width={446} height={100}>
        <StyledTextWrapper>
          <StyledImg/>  
        </StyledTextWrapper>
      </StyledCardWrapper>

      <StyledCardWrapper width={446} height={170}>
        <StyledTextWrapper>
          <Value fontSize={90} color="#31ED02" lineHeight={79} decimals={0} value={!!account ? getBalanceNumber(popCherryAmount): 'Locked'} />
          {/*
         <StyledText color="#31ED02" fontSize={80} lineHeight={70}>
           TEST
         </StyledText>
          */}
        <StyledText color="#8015E8" fontSize={48} lineHeight={40}>
          STACY WAITING TO GET
         </StyledText>

         <StyledText color="#8015E8" fontSize={64} lineHeight={63}>
            THEIR <span style={{color: "#E08DE3"}}>CHERRIES</span> POPPED
         </StyledText>
 
        </StyledTextWrapper>
      </StyledCardWrapper>

      <div style={{"width":45,"height":45}}/>
      <StyledCardWrapper width={446} height={100}>
        <StyledTextWrapper>
          <StyledImg/>  
        </StyledTextWrapper>
      </StyledCardWrapper>



      <StyledCardWrapper width={446} height={50}>
        <StyledTextWrapper>

        <StyledText color="#8015E8" fontSize={29} lineHeight={27}>
          YOU NEED AT LEAST <span style={{color: "#E08DE3"}}>10K CHADS</span> OR
         </StyledText>

         <StyledText color="#8015E8" fontSize={29} lineHeight={27}>
           <span style={{color: "#E08DE3"}}>1K EMTRG</span> TO POP STACY'S CHERRY
         </StyledText>
 
        </StyledTextWrapper>
      </StyledCardWrapper>


      <div style={{"width":75,"height":75}}/>

      </StyledWrapper>
      </Container>
    </Page>
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

const StyledImg = styled.div`

  width: 67px;
  height: 65px;
  background-image: url(${heart});
  background-size: 100% 100%;
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
export default PopCherry;
