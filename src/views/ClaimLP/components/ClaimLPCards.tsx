import React from 'react'
import Container from '../../../components/Container'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'

import Value from '../../../components/Value/'
import Label from '../../../components/Label'


import styled from 'styled-components'

import cardBgFlipped from '../../../assets/img/small-rectangle-pink-blue-flip.png'

const ClaimLPCards: React.FC = () => {
  return (
      <Container size="lg">
        <StyledWrapper>
       <StyledCardWrapper width={446} height={148}>
       <StyledCard>
         <CardContent divPadding="lg">
           <Label text="ETH contributed"/> 
        </CardContent>
       </StyledCard>
      </StyledCardWrapper>
 
        <StyledCardWrapper width={430} height={244}>
         <Card flipped={true}>
           <CardContent divPadding="sm">

          </CardContent>
         </Card>
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
