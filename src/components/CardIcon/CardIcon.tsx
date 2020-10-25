import React from 'react'
import styled from 'styled-components'

//load local images
import stacy_icon from '../../assets/img/stacy.png'
import chads_icon from '../../assets/img/chads.png'
import emtrg_icon from '../../assets/img/emtrg.png'
import usdc_icon from '../../assets/img/usdc.png'
import usdt_icon from '../../assets/img/usdt.png'
import wbtc_icon from '../../assets/img/wbtc.png'


interface CardIconProps {
  children?: React.ReactNode,
  tokenSymbol?: string
}

const CardIcon: React.FC<CardIconProps> = ({tokenSymbol, children }) => {

  const lp_images: {[key: string]: any} = {
    'STACY': stacy_icon,
    'CHADS': chads_icon,
    'EMTRG': emtrg_icon,
    'USDC': usdc_icon,
    'USDT': usdt_icon,
    'WBTC': wbtc_icon
  }

  if (lp_images[tokenSymbol]) {
    return (
      <StyledCardIcon2 backgroundUrl={lp_images[tokenSymbol]}>
        {children}
      </StyledCardIcon2>
    ) 
  } else {
    return (
      <StyledCardIcon>
        {children}
      </StyledCardIcon>
    ) 
  }
}

interface StyledCardIconProps {
  backgroundUrl: string
}

const StyledCardIcon = styled.div`
  background-color: ${props => props.theme.color.grey[200]};
  font-size:36px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  box-shadow: inset 4px 4px 8px ${props => props.theme.color.grey[300]},
    inset -6px -6px 12px ${props => props.theme.color.grey[100]};
  margin: 0 auto ${props => props.theme.spacing[3]}px;
`

const StyledCardIcon2 = styled.div<StyledCardIconProps>`
  height: 176px;
  width: 176px;
  border-radius: 88px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-image: url(${props => props.backgroundUrl});
  background-size: 100% 100%;
`

export default CardIcon
