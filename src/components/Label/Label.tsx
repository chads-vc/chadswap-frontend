import React from 'react'
import styled from 'styled-components'

interface LabelProps {
  text?: string
  horizontal?: boolean
  fontSize?: number
  fontWeight?: number
}

const Label: React.FC<LabelProps> = ({ text, horizontal, fontSize, fontWeight }) => (
  <StyledLabel horizontal={horizontal} fontSize={fontSize} fontWeight={fontWeight}>{text}</StyledLabel>
)

interface StyledLabelProps {
  horizontal?: boolean,
  fontSize?: number,
  fontWeight?: number,
}

const StyledLabel = styled.div<StyledLabelProps>`
  color: ${(props) => props.theme.color.purple};
  width: ${(props) => props.horizontal ? "50%": "100%"};
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
`

export default Label
