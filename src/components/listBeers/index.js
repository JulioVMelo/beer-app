/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import * as Ui from './styles';
import Beer from '../beer';
import api from '../../services/api';

export default function ListBeers() {
  const [listBeers, setListBeers] = useState([]);

  useEffect(() => {
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
    <Ui.listBeer>
      {listBeers.map(({ tagline, name, image_url, id }) => (
        <Beer
          tagline={tagline}
          name={name}
          key={name}
          image={image_url}
          idBeer={id}
        />
      ))}
    </Ui.listBeer>
  );
}
