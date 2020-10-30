import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      {/*<StyledLink
        target="_blank"
        href="https://etherscan.io/address/0xc2edad668740f1aa35e4d8f227fb8e17dca888cd#code"
      >
        Staking Contract
      </StyledLink>*/}
      <StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xdfcc12a0aad50d84639d558551edd7a523b69ac5"
      >
        Uniswap STACY-ETH
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/NJAYnjC">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/chads-vc">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/chadsvc">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/chads_vc">
        Telegram
      </StyledLink>


    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.pink};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
