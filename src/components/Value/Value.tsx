import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'

import styled from 'styled-components'

interface ValueProps {
  value: string | number
  decimals?: number
  fontSize?: number
  horizontal?: boolean
  color?: string
  lineHeight?: number
}

const Value: React.FC<ValueProps> = ({ value, decimals, fontSize, horizontal, color, lineHeight }) => {
  const [start, updateStart] = useState(0)
  const [end, updateEnd] = useState(0)

  useEffect(() => {
    if (typeof value === 'number') {
      updateStart(end)
      updateEnd(value)
    }
  }, [end, value])

  if (start > 0 && start === end) {
    updateStart(start * 0.98);
  }
  console.log(start, end)
  return (
    <StyledValue fontSize={fontSize} horizontal={horizontal} color={color} lineHeight={lineHeight}>
      {typeof value == 'string' ? (
        value
      ) : (
        <CountUp
          start={start}
          end={end}
          decimals={
            decimals !== undefined ? decimals : end < 0 ? 4 : end > 1e5 ? 0 : 3
          }
          duration={1}
          separator=","
        />
      )}
    </StyledValue>
  )
}

interface StyledValueProps {
  fontSize?: number
  horizontal?: boolean
  color?: string
  lineHeight?: number
}

const StyledValue = styled.div<StyledValueProps>`
  font-family: Third-rail;
  color: ${(props) => props.theme.color.purple};
  font-size: ${(props) => props.fontSize}px;
  text-shadow: #c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px;
  ${(props) => props.horizontal && ` 
    width: 50%;
    text-align:right;`
  }

  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight}px;

`

export default Value
