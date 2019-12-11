/* eslint-disable import/no-unresolved */
import React from 'react';
import * as Ui from './styles';
import Beer from '../../components/beer';

function Home() {
  return (
    <Ui.Container>
      <Ui.Title>Beer app</Ui.Title>
      <Ui.listBeer>
        <Beer />
      </Ui.listBeer>
    </Ui.Container>
  );
}

export default Home;
