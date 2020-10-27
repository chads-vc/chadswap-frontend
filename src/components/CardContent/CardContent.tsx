import React from 'react'
import styled from 'styled-components'

interface CardContentProps {
  divPadding?: 'sm' | 'lg'
  customPadding?: number
}

const CardContent: React.FC<CardContentProps> = ({ divPadding, customPadding, children }) => (
  <StyledCardContent divPadding={((!divPadding || divPadding === 'lg') ? 3 : 2)} customPadding={customPadding}>{children}</StyledCardContent>
)


interface StyledCardContentProps {
  divPadding?: number;
  customPadding?: number;
}


const StyledCardContent = styled.div<StyledCardContentProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing[props.divPadding]}px;
  padding: ${(props) => props.customPadding}px;
`

export default CardContent
