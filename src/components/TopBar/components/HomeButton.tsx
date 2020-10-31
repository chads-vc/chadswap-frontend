import React from 'react'
import styled from 'styled-components'
import Button from '../../Button'

interface HomeButtonProps {}

const HomeButton: React.FC<HomeButtonProps> = (props) => {

  return (
    <StyledHomeButton>
      <Button to="/farms" size="md" text="farms" />
    </StyledHomeButton>
  )
}

const StyledHomeButton = styled.div``

export default HomeButton
