import React from 'react';
import * as Ui from './styles';

export default function Beer() {
  return (
    <Ui.Container>
      <Ui.Image>
        <img src="https://images.punkapi.com/v2/22.png" alt="Buzz" />
      </Ui.Image>
      <div className="text">
        <Ui.Name>Buzz</Ui.Name>
        <Ui.TagLine>A Real Bitter Experience.</Ui.TagLine>
      </div>
      <Ui.Button>ir</Ui.Button>
    </Ui.Container>
  );
}
