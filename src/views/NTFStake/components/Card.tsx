import React from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import CountdownValue from '../../../components/CountdownValue'
import Value from '../../../components/Value'
import Label from '../../../components/Label'
import gradientBg from '../../../assets/img/small-button-bevel.png'

interface CardProps {
  imgSrc: string,
  status: number
}

const Card: React.FC<CardProps> = ({ imgSrc, status }) => {

  const onClickStake = () => {
    console.log('stake & burn button clicking!')
    // TODO: Call a function on our smart contract
  }

  return (
    <StyledCard>
      <StyledCardContent>
        <img src={imgSrc} alt="gif" />
      </StyledCardContent>
      <StyleCardFooter>
        {status === 0 && (
          <>
            <StyledValue>
              <Value value={0} decimals={0}/>
              <span>copped</span>
            </StyledValue>
            <Button href={`https://chads.limited/`} size="pc" text="mint"/>
          </>
        )}
        {status === 1 && (
          <>
            <StyledValue>
              <Value value={1} decimals={0}/>
              <span>copped</span>
            </StyledValue>
            <Button size="pc" text="stake & burn" onClick={onClickStake}/>
          </>
        )}
        {status === 2 && (
          <>
            <StyledValue>
              <Label text="staked"/>
            </StyledValue>
            <StyledValue>
              <CountdownValue fontSize={18} timestamp={1604804863}/>
            </StyledValue>
          </>
        )}
      </StyleCardFooter>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  margin: 10px 10px 0px 10px;
  width: 30%;
  min-width: 275px;
`;

const StyledCardContent = styled.div`
  img {
    width: 100%;
  }
`;

const StyleCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    max-width: 50%;
    font-size: 18px;
  }
`;

const StyledValue = styled.div`
  width: 50%;
  max-width: 50%;
  height: 40px;
  background-image: url(${gradientBg});
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8015E8;
  text-align: center;
  font-size: 18px;
  span {
    margin-left: 5px;
  }
`;

export default Card;
