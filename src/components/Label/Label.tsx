import React from 'react'
import styled from 'styled-components'

interface LabelProps {
  text?: string
  horizontal?: boolean
  fontSize?: number
}

const Label: React.FC<LabelProps> = ({ text, horizontal, fontSize }) => (
  <StyledLabel horizontal={horizontal} fontSize={fontSize}>{text}</StyledLabel>
)

interface StyledLabelProps {
  horizontal?: boolean,
  fontSize?: number
}

const StyledLabel = styled.div<StyledLabelProps>`
  color: ${(props) => props.theme.color.purple};
  width: ${(props) => props.horizontal ? "50%": "100%"};
  font-size: ${(props) => props.fontSize};
`

export default Label
