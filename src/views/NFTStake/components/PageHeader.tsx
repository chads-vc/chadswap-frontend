import React from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import Container from '../../../components/Container'

const PageHeader = () => (
  <Container size="lg">
    <StyledPageHeader>
      <StyledTitle>
        <StyledText color="#DE43CF" fontSize={133} height={100}>Stake and burn</StyledText>
      </StyledTitle>
      <StyledHiddenTitle>
        <StyledText color="#8015E8" fontSize={90} height={70}>Chads of Defi NFTs</StyledText>
      </StyledHiddenTitle>
      <StyledSubtitle>
        <StyledText color="#DE43CF" fontSize={60} height={40}>for stacy yield bonuses</StyledText>
      </StyledSubtitle>
      <StyledButton>
        <Button href={`https://chads.limited/`} size="xl" text="mint NFTs"/>
      </StyledButton>
    </StyledPageHeader>
  </Container>
)

const StyledButton = styled.div`
  margin-top: 80px;
  button {
    text-transform: none;
  }
  @media (max-width: 576px) {
    button {
      height: 80px;
    }
  }
`

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const StyledTitle = styled.div`
  text-align: center;
  white-space: nowrap;
  overflow: visible;
  @media (max-width: 970px) {
    div {
      font-size: 100px;
      height: 70px;
    }
  }
  @media (max-width: 768px) {
    div {
      font-size: 70px;
      height: 50px;
    }
  }
  @media (max-width: 576px) {
    div {
      font-size: 50px;
      height: 40px;
    }
  }
`

const StyledHiddenTitle = styled.div`
  font-weight: 400;
  white-space: nowrap;
  overflow: visible;
  margin: 0;
  z-index: -1;
  @media (max-width: 970px) {
    div {
      font-size: 68px;
      height: 50px;
    }
  }
  @media (max-width: 768px) {
    div {
      font-size: 50px;
      height: 40px;
    }
  }
  @media (max-width: 576px) {
    div {
      font-size: 40px;
      height: 30px;
    }
  }
`

const StyledSubtitle = styled.div`
  font-weight: 400;
  white-space: nowrap;
  overflow: visible;
  margin: 0;
  @media (max-width: 970px) {
    div {
      font-size: 45px;
      height: 30px;
    }
  }
  @media (max-width: 768px) {
    div {
      font-size: 35px;
      height: 20px;
    }
  }
  @media (max-width: 576px) {
    div {
      font-size: 25px;
      height: 15px;
    }
  }
`

interface StyledTextProps {
  color: string
  fontSize: number
  height?: number
}

const StyledText = styled.div<StyledTextProps>`
  font-family: 'Third-rail'; 
  color: ${(props) => props.color};
  flex:1;
  font-size: ${(props) => props.fontSize}px;
  height: ${(props) => props.height ? props.height + 'px' : '100%'};
  text-shadow: #c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px;
}
`

export default PageHeader
