import React from 'react'
import styled from 'styled-components'

import Button from '../Button'
import Container from '../Container'

//load local images
import stacy_icon from '../../assets/img/stacy.png'
import chads_icon from '../../assets/img/chads.png'
import emtrg_icon from '../../assets/img/emtrg.png'
import usdc_icon from '../../assets/img/usdc.png'
import usdt_icon from '../../assets/img/usdt.png'
import wbtc_icon from '../../assets/img/wbtc.png'


interface PageHeaderProps {
  tokenSymbol?: string
  title?: string
  tokenAddress?: string
}



const PageHeader: React.FC<PageHeaderProps> = ({ tokenSymbol, title, tokenAddress }) => {
  const lp_images: {[key: string]: any} = {
    'STACY': stacy_icon,
    'CHADS': chads_icon,
    'EMTRG': emtrg_icon,
    'USDC': usdc_icon,
    'USDT': usdt_icon,
    'WBTC': wbtc_icon
  }


  return (
    <Container size="lg">
      <StyledPageHeader>
        <StyledIcon backgroundUrl={lp_images[tokenSymbol]}/>
        <StyledTitle>{title}-ETH</StyledTitle>
        <ButtonsWrapper>
          <StyledButton>
            <Button href={`https://app.uniswap.org/#/add/${tokenAddress}/ETH`} size="lg" text="add liquidity"/>
          </StyledButton>
          <StyledButton>
            <Button size="lg" text="stake NFT"/>
          </StyledButton>
        </ButtonsWrapper>
        { tokenSymbol === 'STACY' && 
          <StyledText fontSize={25} lineHeight={25} color="#8015E8">
            all liquidity added to this pool is locked forever
          </StyledText>
        } 
     </StyledPageHeader>
    </Container>
  )
}

interface StyledIconProps {
  backgroundUrl: string
}

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 900px;
`

const StyledButton = styled.div`
  button {
    text-transform: none;
  }
`

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
`

const StyledIcon = styled.div<StyledIconProps>`
  font-size: 120px;
  height: 309px;
  line-height: 120px;
  text-align: center;
  width: 309px;  
  background-image: url(${props => props.backgroundUrl});
  background-size: 100% 100%;
`

const StyledTitle = styled.span`
  font-family: 'third-rail';
  color: #DE43CF;
  font-size: 120px;
  white-space:nowrap;
  @media (max-width: 900px) {
    font-size:60px;
  }
  margin-top:-90px;
  text-shadow: #c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px;
`

interface StyledTextProps {
  color: string
  fontSize: number
  lineHeight: number
}



const StyledText = styled.div<StyledTextProps>`
  font-family: 'Third-rail'; 
  color: ${(props) => props.color};
  flex:1;
  margin-top:10px;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight}px;
  text-shadow: #c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px;
}
`

const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default PageHeader
