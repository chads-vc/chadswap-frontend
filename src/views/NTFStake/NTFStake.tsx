import React, { useEffect } from 'react'
import Page from '../../components/Page'
import PageHeader from './components/PageHeader'
import Cards from './components/Cards'

const NTFStake: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Page>
      <PageHeader />
      <Cards type="commons" description="15% bonus for 24 hours" />
      <Cards type="rares" description="15% bonus for 24 hours"/>
      <Cards type="limited" description="15% bonus for 24 hours"/>
    </Page>
  )
}

export default NTFStake
