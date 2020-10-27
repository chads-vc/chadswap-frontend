import React from 'react'
import styled from 'styled-components'

import cardBg from '../../assets/img/main-block-blue-pink.png'
import invertedCardBG from '../../assets/img/small-block-pink-blue.png'

interface CardProps {
  width?: number,
  height?: number
  flipped?: boolean
}

const Card: React.FC<CardProps> = ({ width, height, flipped, children }) => <StyledCard width={width} height={height} backgroundUrl={ !flipped ? cardBg : invertedCardBG } className="test">{children}</StyledCard>


interface StyledCardProps {
  backgroundUrl: string,
  width?: number, 
  height?: number
}

const StyledCard = styled.div<StyledCardProps>`
  background-size:100% 100%;
  background-image: url(${ props => props.backgroundUrl });
  border-radius: 12px;
  display: flex;
  flex: 1;
  flex-direction: column;
  
  ${props => (props.width && `width: props.width`) }
  ${props => (props.height && `height: props.height`) }

`

export default Card
