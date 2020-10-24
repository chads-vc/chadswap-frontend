import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import swap from '../../assets/img/swap.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={swap} height="132" style={{ top: 30 }} />
      <StyledText>
        <span style={{whiteSpace:'nowrap'}}>a division of chads.vc</span>
      </StyledText>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  top:10px;
  min-height: 154px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
  position: absolute;
`

const StyledText = styled.div`
  color: ${(props) => props.theme.color.pink};
  font-size: 20px;
  top:130px;
  position: absolute;
  margin-left: ${(props) => props.theme.spacing[2]}px;
  @media (max-width: 400px) {
    display: none;
  }
`

export default Logo
