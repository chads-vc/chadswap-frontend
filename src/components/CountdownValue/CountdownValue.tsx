import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'

import Countdown, { CountdownRenderProps } from 'react-countdown'
import styled from 'styled-components'

interface CountdownValueProps {
  timestamp: number | string
  fontSize?: number
  horizontal?: boolean
  color?: string
  lineHeight?: number
}

const CountdownValue:React.FC<CountdownValueProps> = ({ timestamp, fontSize, horizontal, color, lineHeight }) => {
  
  const renderer = (countdownProps: CountdownRenderProps) => {
    const { hours, minutes, seconds } = countdownProps
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const paddedHours = hours < 10 ? `0${hours}` : hours
    return (
      <span style={{ width: '100%' }}>
        {paddedHours}:{paddedMinutes}:{paddedSeconds}
      </span>
    )
  }



  return (
    <StyledValue lineHeight={lineHeight} color={color} fontSize={fontSize} horizontal={horizontal}>
    {typeof timestamp == 'string' ? (
        timestamp
    ) : (
    <Countdown
      date={new Date(timestamp * 1000)}
      renderer={renderer}
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

export default CountdownValue
