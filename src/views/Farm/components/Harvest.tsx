import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Label from '../../../components/Label'
import Value from '../../../components/Value'
import useEarnings from '../../../hooks/useEarnings'
import useReward from '../../../hooks/useReward'
import { getBalanceNumber } from '../../../utils/formatBalance'
import { calculateAPY, StakedValue } from '../../../utils'
import useAllStakedValue from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import BigNumber from 'bignumber.js'

interface HarvestProps {
  fpid: number
}

const Harvest: React.FC<HarvestProps> = ({ fpid }) => {
  const earnings = useEarnings(fpid)
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useReward(fpid)


  const [farms] = useFarms()
  const stakedValue = useAllStakedValue()

  const sushiIndex = farms.findIndex(
    ({ tokenSymbol }) => tokenSymbol === 'SUSHI',
  )

  const sushiPrice =
    sushiIndex >= 0 && stakedValue[sushiIndex]
      ? stakedValue[sushiIndex].tokenPriceInWeth
      : new BigNumber(0)

  const farmIndex = farms.findIndex(
    ({ pid }) => pid === fpid, 
  )

  let apy = calculateAPY(stakedValue[farmIndex], sushiPrice) 

  return (
    <Card width={380} height={211} flipped={true}>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <Value fontSize={55} value={getBalanceNumber(earnings)} />
            <Label fontSize={38} text="stacy earned" />
          </StyledCardHeader>
          <StyledCardHeader2>
            <Label fontSize={23} text={`APY ${(apy && !apy.isNaN()) ? `${apy
                      .times(new BigNumber(100))
                      .toNumber()
                      .toLocaleString('en-US')
                      .slice(0, -1)}%`
                  : 'TBD...' }`}
             />
          </StyledCardHeader2>
          <StyledCardActions>
            <Button
              disabled={!earnings.toNumber() || pendingTx}
              variant="secondary"
              customColor="white"
              text={pendingTx ? 'collecting...' : 'harvest'}
              buttonWidth={221}
              size="cs"
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  line-height:40px;
  padding-top:5px;
  flex:1;
`


const StyledCardHeader2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  line-height:23px;
  padding-top:10px;
  flex:0.5;
`


const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  flex:1;
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Harvest
