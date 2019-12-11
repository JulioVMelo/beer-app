import React from 'react';
import { Eye } from 'styled-icons/remix-line/Eye';
import * as Ui from './styles';

export default function Beer({ tagline, name, image }) {
  return (
    <Ui.Container>
      <Ui.Image>
        <img src={image} alt={name} />
      </Ui.Image>
      <div className="text">
        <Ui.Name>{name}</Ui.Name>
        <Ui.TagLine>{tagline}</Ui.TagLine>
      </div>
      <Ui.Button>
        <Eye color="#fff" size={20} />
      </Ui.Button>
    </Ui.Container>
  );
}
