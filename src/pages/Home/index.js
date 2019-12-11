/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import * as Ui from './styles';
import Beer from '../../components/beer';
import api from '../../services/api';

export default function Home() {
  const [listBeers, setListBeers] = useState([]);

  useEffect(() => {
    console.log('teste');
    async function listOfBeers() {
      try {
        const response = await api.get('/beers');
        setListBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    listOfBeers();
  }, []);

  return (
    <Ui.Container>
      <Ui.Title>Beer app</Ui.Title>
      <Ui.listBeer>
        {listBeers.map(({ tagline, name, image_url }) => (
          <Beer tagline={tagline} name={name} key={name} image={image_url} />
        ))}
      </Ui.listBeer>
    </Ui.Container>
  );
}
