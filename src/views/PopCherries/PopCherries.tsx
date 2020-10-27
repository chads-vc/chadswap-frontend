import React from 'react'
import Container from '../../components/Container'

import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import TopCards from './components/TopCards'

const PopCherries: React.FC = () => {
  return (
    <Page>
      <PageHeader icon="📊" subtitle="Overview of the YAM ecosystem" title="YAM Dashboard" />
      <Container size="lg">
        <TopCards />
      </Container>
    </Page>
  );
};

export default PopCherries;
