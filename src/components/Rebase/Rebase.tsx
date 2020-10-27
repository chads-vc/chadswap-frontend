import React, { useCallback, useEffect, useState, useMemo } from 'react'

import Countdown, { CountdownRenderProps} from 'react-countdown'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../components/Card'
import CardContent from '../../components/CardContent'
import useSushi from '../../hooks/useSushi'

import useModal from '../../hooks/useModal'
import Button from '../../components/Button'
import { getNextPopCherryTimestamp, getSushiContract } from '../../sushi/utils'
import RebaseWarningModal from './components/RebaseWarningModal'


interface RebaseProps {
    type?: 'bar' | 'circle',
}

const Rebase: React.FC<RebaseProps> = ({ type }) => {
  const sushi = useSushi()

  const [nextRebase, setNextRebase] = useState(0)
  const [rebaseWarningModal, setRebaseWarningModal] = useState(false)
  const [onPresentRebaseWarning] = useModal(<RebaseWarningModal />)
  
  const { account } = useWallet()
  const fetchNextRebase = useCallback( async() => {
    if (!sushi) return

    const nextRebaseTimestamp = await getNextPopCherryTimestamp(getSushiContract(sushi))
    if (nextRebaseTimestamp) {
      setNextRebase(Date.now() + nextRebaseTimestamp * 1000)
    } else {
      setNextRebase(0)
    }
  }, [
    setNextRebase,
    sushi
  ])

  /*
  useEffect(() => {
    if (sushi) {
      fetchNextRebase()
    }
  }, [fetchNextRebase, sushi])
  */

  const renderer = (countdownProps: CountdownRenderProps) => {
    const { hours, minutes, seconds } = countdownProps
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const paddedHours = hours < 10 ? `0${hours}` : hours
    return (
      <span>{paddedHours}:{paddedMinutes}:{paddedSeconds}</span>
    )
  }

  setNextRebase(1603623206000) 
  const DisplayRebaseProgress = useMemo(() => {
    if (type === "bar") {
      return (
          <StyledCountdown>
            <StyledCountdownTextBar>
              {!nextRebase ? "--" : <Countdown date={new Date(nextRebase)} renderer={renderer} />}
            </StyledCountdownTextBar>
          </StyledCountdown>
      );
    } else {
      return (
            <StyledCountdown>
              <StyledCountdownText>
                {!nextRebase ? "--" : <Countdown date={new Date(nextRebase)} renderer={renderer} />}
              </StyledCountdownText>
            </StyledCountdown>
      );
    }
  }, [nextRebase, type]);


  return (
    <>
      <Card>
        <CardContent>
          {DisplayRebaseProgress}
          <Button
            disabled={!account}
            onClick={() => setRebaseWarningModal(true)}
            text="Rebase"
            variant="secondary"
          />
        </CardContent>
      </Card>
   </>
  )
}

const StyledCountdown = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledCountdownText = styled.span`
  color: ${props => props.theme.colors.primary.main};
  font-size: 36px;
  font-weight: 700;
`

const StyledCountdownTextBar = styled.span`
  color: ${props => props.theme.colors.primary.main};
  font-size: 36px;
  font-weight: 700;
  height: 41px;
`


export default Rebase
