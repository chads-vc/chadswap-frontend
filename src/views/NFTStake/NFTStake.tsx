import React, { useState, useEffect, useCallback } from 'react'
import { useWallet } from 'use-wallet'
import Page from '../../components/Page'
import PageHeader from './components/PageHeader'
import Cards from './components/Cards'
import Button from '../../components/Button'
import WalletProviderModal from '../../components/WalletProviderModal'
import useModal from '../../hooks/useModal'
import { getTotalCopped } from '../../yam-sdk/utils';
import useYam from '../../hooks/useYam'

const initialChadletsCards = [
  {id: 1, copped: 0},
  {id: 2, copped: 0},
  {id: 3, copped: 0},
  {id: 4, copped: 0},
  {id: 5, copped: 0},
  {id: 6, copped: 0},
  {id: 7, copped: 0},
  {id: 8, copped: 0},
];

function chunk(array:Array<any>, size:number):Array<any> {
  if (!array) return [];
  const firstChunk = array.slice(0, size)
  if (!firstChunk.length) {
    return array;
  }
  return [firstChunk].concat(chunk(array.slice(size, array.length), size));  
}

const NFTStake: React.FC = () => {
  const [chadletsCards, setChadletsCards] = useState(initialChadletsCards)
  const { account } = useWallet()
  const yam = useYam()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

  const fetchTotalCopped = useCallback(async () => {
    const _chadletsCards = [...chadletsCards]
    for (let i = 0; i < _chadletsCards.length; i++) {
      const cardCopped = await getTotalCopped(yam, _chadletsCards[i].id)
      _chadletsCards[i].copped = cardCopped.toNumber()
    }
    setChadletsCards(_chadletsCards)
  }, [yam, setChadletsCards])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (yam) {
      fetchTotalCopped()
    }
  }, [yam, fetchTotalCopped])

  const rows = chunk(chadletsCards, 3)

  return (
    <Page>
      {!!account ? (
          <>
            <PageHeader />
            <Cards type="commons" description="15% bonus for 24 hours" cards={rows[0]}/>
            <Cards type="rares" description="15% bonus for 24 hours" cards={rows[1]}/>
            <Cards type="limited" description="15% bonus for 24 hours" cards={rows[2]}/>
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="🔓 Unlock Wallet"
            />
          </div>
        )}
    </Page>
  )
}

export default NFTStake
