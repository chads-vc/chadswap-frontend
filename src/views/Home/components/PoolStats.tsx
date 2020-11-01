import BigNumber from 'bignumber.js'
import React, { useEffect, useState, useCallback } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import Label from '../../../components/Label'
import Spacer from '../../../components/Spacer'
import Value from '../../../components/Value'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useFarms from '../../../hooks/useFarms'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useSushi from '../../../hooks/useSushi'
import { getSushiAddress, getSushiSupply, fetchCoingeckoData} from '../../../sushi/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'
import useAllStakedValue from '../../../hooks/useAllStakedValue'
import useCoingeckoData from '../../../hooks/useCoingeckoData'

const Balances: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const sushi = useSushi()
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  const [farms] = useFarms()
  console.log(farms)

  const [stacyPrice, setStacyPrice] = useState(0)
  const [stacyMarketCap, setStacyMarketCap] = useState(0)
  const [ethPrice, setEthPrice] = useState(0)
  const [tvl, setTvl] = useState(0)
  const [liq, setLiq] = useState(0)

  const stakedValue = useAllStakedValue()

  //@ts-ignore
  window.stakedValue = stakedValue

  console.log('staked', stakedValue)

  const getCoingecko = useCallback(async() => {
    const [s, m, e] = await fetchCoingeckoData()
    setStacyPrice(s)
    setStacyMarketCap(m)
    setEthPrice(e)
    const totaltvl = stakedValue.reduce((t, s, i) => {
      if (farms[i].tokenSymbol === 'STACY'){
       setLiq(s.totalWethValue.toNumber() * e)
      }
 
      return t + s.totalWethValue.toNumber()
    }, 0)
    setTvl(totaltvl * e)
  }, [farms, stakedValue])

  useEffect(() => {
    getCoingecko()
  }, [getCoingecko])

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getSushiSupply(sushi)
      setTotalSupply(supply)
    }
    if (sushi) {
      fetchTotalSupply()
    }
  }, [sushi, setTotalSupply])

  return (
    <StyledWrapper>
        <StyledBalances>
            <StyledBalance>
             <StyledLabelValueWrapper>
                <Label text="tvl:" horizontal={true} />
                <Value
                  value={!!tvl ? tvl : 'TBD' }
                  horizontal={true}
                  fontSize={23}
                  money={true}
                />
              </StyledLabelValueWrapper>
              <div style={{'width': 11, 'height': 11}}/>
              <StyledLabelValueWrapper>
                <Label text="stacy price:" horizontal={true} />
                <Value
                  money={true}
                  value={!!stacyPrice ? stacyPrice: 'TBD'}
                  horizontal={true}
                  fontSize={23}
                  decimals={4}
                />
              </StyledLabelValueWrapper>
              <div style={{'width': 9, 'height': 9}}/>
               <StyledLabelValueWrapper>
                <Label text="stacy marketcap:" horizontal={true} />
                <Value
                  money={true}
                  value={!!stacyMarketCap ? stacyMarketCap : 'TBD'}
                  horizontal={true}
                  fontSize={23}
                />
              </StyledLabelValueWrapper>
              <div style={{'width': 9, 'height': 9}}/>
                <StyledLabelValueWrapper>
                  <Label text="stacy/eth uniswap pool:" horizontal={true} />
                <Value
                  value={!!liq ? liq : 'TBD'}
                  horizontal={true}
                  fontSize={23}
                  money={true}
                />
              </StyledLabelValueWrapper>
         </StyledBalance>
          </StyledBalances>

          {/*
      <Card>
        <CardContent>
          <Label text="Total SUSHI Supply" />
          <Value
            value={totalSupply ? getBalanceNumber(totalSupply) : 'Locked'}
          />
        </CardContent>
      </Card>
            */ }
    </StyledWrapper>
  )
}

const FootnoteValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  float: right;
`

const StyledWrapper = styled.div`
  align-items: center;
  display: block;
`

const StyledBalances = styled.div`
  display: flex;
`

const StyledLabelValueWrapper = styled.div`
  font-size:18px;
  line-height:15px;
  display:flex;
  justify-content: center;
  align-items: center;
`

const StyledBalance = styled.div`
  display: flex;
  flex: 1;
  flex-direction:column;
`

export default Balances
