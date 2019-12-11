import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowBack } from 'styled-icons/boxicons-regular/ArrowBack';
import * as Ui from './styles';
import api from '../../services/api';

export default function Detail() {
  const { id } = useParams();
  const [beer, setBeer] = useState([{}]);

  useEffect(() => {
    async function listBeer() {
      try {
        const response = await api.get(`/beers/${id}`);
        setBeer(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    listBeer();
  }, [id]);

  return (
    <Ui.Container>
      <Ui.Name>{beer.name}</Ui.Name>
      <Ui.Text>
        <Ui.Image>
          <img src={beer.image_url} alt={beer.name} />
        </Ui.Image>
        <div className="content">
          <Ui.Slogan>{beer.tagline}</Ui.Slogan>
          <Ui.Description>{beer.description}</Ui.Description>
        </div>
      </Ui.Text>
      <Ui.Back to="/">
        <ArrowBack color="#fff" size={40} />
      </Ui.Back>
    </Ui.Container>
  );
}
