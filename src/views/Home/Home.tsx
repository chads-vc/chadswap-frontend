import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

import swap from '../../assets/img/swap.png'

const Home: React.FC = () => {
  return (
    <Page>
      <Container>
        <StyledDiv/>
      </Container>
   </Page>
  )
}

const StyledDiv = styled.div`
  margin:auto;
  width:500px;
  height:300px;
  background-image: url(${swap});
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
