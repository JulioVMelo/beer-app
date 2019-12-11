import React from 'react';
import { Link as LinkIcon } from 'styled-icons/icomoon/Link';
import * as Ui from './styles';

export default function Beer({ idBeer, tagline, name, image }) {
  return (
    <Ui.Container>
      <Ui.Image>
        <img src={image} alt={name} />
      </Ui.Image>
      <div className="text">
        <Ui.Name>{name}</Ui.Name>
        <Ui.TagLine>{tagline}</Ui.TagLine>
      </div>
      <Ui.Button to={`/detail/${idBeer}`}>
        <LinkIcon color="#fff" size={20} />
      </Ui.Button>
    </Ui.Container>
  );
}
