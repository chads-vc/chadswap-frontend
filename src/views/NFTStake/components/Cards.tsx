import React from 'react'
import styled from 'styled-components'
import Card from './Card';

interface CardProps {
  id: number,
  copped: number
}

interface CardsProps {
  type: 'commons' | 'rares' | 'limited',
  description: string,
  cards: Array<CardProps>
}

const Cards: React.FC<CardsProps> = ({ type, description, cards }) => {
  
  return (
    <StyledCards>
      <CardsHeader>
        <StyledTitle>
          <StyledText color="#DE43CF" fontSize={113}>{type}</StyledText>
        </StyledTitle>
        <StyledDescription>
          <StyledText color="#31ED02" fontSize={40}>{description}</StyledText>
        </StyledDescription>
        {type === 'limited' && (
          <>
            <StyledTitle>
              <StyledText color="#8015E8" fontSize={113}>No Limit no burn</StyledText>
            </StyledTitle>
            <StyledDescription>
              <StyledText color="#31ED02" fontSize={40}>Can unstake at any time</StyledText>
            </StyledDescription>
          </>
        )}
      </CardsHeader>
      <CardsContent>
        {cards.map((card:CardProps) => (
            <Card key={card.id} data={card}/>
          )
        )}
      </CardsContent>
    </StyledCards>
  )
}

const StyledCards = styled.div`
  width: 100%;
  max-width: 980px;
`;

// header
const CardsHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  margin-top: 80px;
  white-space: nowrap;
  overflow: visible;
`;

const StyledTitle = styled.div`
  div {
    height: 90px;
  }
  @media (max-width: 970px) {
    div {
      font-size: 85px;
      height: 70px;
    }
  }
  @media (max-width: 768px) {
    div {
      font-size: 70px;
      height: 55px;
    }
  }

  @media (max-width: 576px) {
    div {
      font-size: 50px;
      height: 40px;
    }
  }
`

const StyledDescription = styled.h3`
  font-weight: 400;
  white-space: nowrap;
  overflow: visible;
  margin: 0;
  @media (max-width: 970px) {
    div {
      font-size: 30px;
    }
  }
  @media (max-width: 768px) {
    div {
      font-size: 25px;
    }
  }
  @media (max-width: 576px) {
    div {
      font-size: 20px;
    }
  }
`

// content
const CardsContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

interface StyledTextProps {
  color: string
  fontSize: number
  lineHeight?: number
}

const StyledText = styled.div<StyledTextProps>`
  font-family: 'Third-rail'; 
  color: ${(props) => props.color};
  flex:1;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight ? props.lineHeight + 'px' : '100%'};
  text-shadow: #c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px;
}
`

export default Cards
