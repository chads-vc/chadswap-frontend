import React from 'react'
import Container from '../../components/Container'

import Page from '../../components/Page'
import TopCards from './components/TopCards'

const PopCherries: React.FC = () => {
  return (
    <Page>
      <Container size="lg">
        <TopCards />
      </Container>
    </Page>
  );
};

export default PopCherries;
