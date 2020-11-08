import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'

import gradientBgFirst from '../../assets/img/small-button-bevel.png'

import { Link } from 'react-router-dom'

interface ButtonProps {
  customColor?: 'purple' | 'blue' | 'pink' | 'white',
  backgroundGradient?: string,
  children?: React.ReactNode,
  disabled?: boolean,
  href?: string,
  onClick?: () => void,
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'cs' | 'pc',
  text?: string,
  to?: string,
  variant?: 'default' | 'secondary' | 'tertiary'
  buttonWidth?: number
}

const Button: React.FC<ButtonProps> = ({
  customColor,
  backgroundGradient,
  children,
  disabled,
  href,
  onClick,
  size,
  text,
  to,
  variant,
  buttonWidth
}) => {
  const { color, spacing } = useContext(ThemeContext)

  let backgroundUrl: string

  let buttonColor: string = color.purple

  switch (customColor) {
    case 'purple':
      buttonColor = "#BA83F0"
      break
    case 'blue':
      buttonColor = "#BA83F0"
      break
    case 'pink':
      buttonColor = "#BA83F0"
      break
    case 'white':
      buttonColor = "#FFFFFF"
      break
    default:
      buttonColor = color.purple
  }

  let boxShadow: string
  let buttonSize: number
  let buttonPadding: number
  let fontSize: number
  switch (size) {
    case 'sm':
      buttonPadding = spacing[5]
      buttonSize = 40
      fontSize = 14
      break
    case 'lg':
      buttonPadding = spacing[5]
      buttonSize = 72
      fontSize = 33
      break
    case 'xl':
      buttonPadding = spacing[5]
      buttonSize = 100
      fontSize = 49
      break
    case 'cs':
      buttonSize=40
      fontSize=27
      buttonPadding=spacing[4]
      break
    case 'pc':
      buttonSize=40
      fontSize=17
      buttonPadding=spacing[4]
      break
    case 'md':
    default:
      buttonPadding = spacing[5]
      buttonSize = 50
      fontSize = 27
  }

  const ButtonChild = useMemo(() => {
    if (to) {
      return <StyledLink to={to}>{text}</StyledLink>
    } else if (href) {
      return <StyledExternalLink href={href} target="__blank">{text}</StyledExternalLink>
    } else {
      return text
    }
  }, [href, text, to])

  if (variant === 'secondary') { 
    return (
      <StyledButtonSecondary
        color={buttonColor}
        disabled={disabled}
        fontSize={fontSize}
        onClick={onClick}
        padding={buttonPadding}
        size={buttonSize}
        width={buttonWidth}
      >
      {children}
      {ButtonChild}
      </StyledButtonSecondary>
    )
  } else {
    return (
      <StyledButton
      boxShadow={boxShadow}
      color={buttonColor}
      backgroundUrl={gradientBgFirst}
      disabled={disabled}
      fontSize={fontSize}
      onClick={onClick}
      padding={buttonPadding}
      size={buttonSize}
      >
      {children}
      {ButtonChild}
      </StyledButton>
    )
  } 
}

interface StyledButtonProps {
  boxShadow?: string,
  backgroundUrl?: string,
  color: string,
  disabled?: boolean,
  fontSize: number,
  padding: number,
  size?: number,
  width?: number
}

const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  font-weight: bold;
  line-height: 0.9;
  background-color: transparent;
  border: 0;
  color: ${props => !props.disabled ? props.color : `${props.color}55`};
  cursor: pointer;
  display: flex;
  font-size: ${props => props.fontSize}px;
  font-weight: 400;
  text-transform: lowercase;
  height: ${props => props.size}px;
  justify-content: center;
  outline: none;
  padding-left: ${props => props.padding}px;
  padding-right: ${props => props.padding}px;
  pointer-events: ${props => !props.disabled ? undefined : 'none'};
  width: 100%;
  background-image: url(${props => props.backgroundUrl});
  background-size: 100% 100%;
  box-shadow: none;

  white-space:nowrap;
  &:hover {
    opacity: 0.9;
  }
`

const StyledButtonSecondary = styled.button<StyledButtonProps>`
  align-items: center;
  font-weight: bold;
  line-height: 0.9;
  border: 0;
  color: ${props => !props.disabled ? props.color : `${props.color}55`};
  cursor: pointer;
  display: flex;
  font-size: ${props => props.fontSize}px;
  font-weight: 400;
  text-transform: lowercase;
  height: ${props => props.size}px;
  width: 103px;
  justify-content: center;
  outline: none;
  padding-left: ${props => props.padding}px;
  padding-right: ${props => props.padding}px;
  pointer-events: ${props => !props.disabled ? undefined : 'none'};
  box-shadow: none;
  transition: all 0.2s ease, visibility 0s;
  border-radius: 50px;
  background: linear-gradient(141deg, #a54daa 0%, #1b77cd 100%);
  background-image: linear-gradient(141deg, rgb(165, 77, 170) 0%, rgb(27, 119, 205) 100%);
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;

  width: ${props => props.width}px;
  white-space:nowrap;
  &:hover {
    opacity: 0.9;
  }
`



const StyledLink = styled(Link)`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${props => -props.theme.spacing[4]}px;
  padding: 0 ${props => props.theme.spacing[4]}px;
  text-decoration: none;
`

const StyledExternalLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 36px;
  justify-content: center;
  margin: 0 ${props => -props.theme.spacing[4]}px;
  padding: 0 ${props => props.theme.spacing[4]}px;
  text-decoration: none;
`

export default Button
