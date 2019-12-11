import React from 'react';
import { Link as LinkIcon } from 'styled-icons/icomoon/Link';
import PropTypes from 'prop-types';
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

Beer.propTypes = {
  idBeer: PropTypes.number,
  tagline: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

Beer.defaultProps = {
  idBeer: 1,
  tagline: 'Uma cerveja qualquer',
  name: 'Cerveja',
  image:
    'https://images.vexels.com/media/users/3/145468/isolated/preview/53d87c0a2f96e388df08ae49d197bf59-garrafa-de-cerveja-by-vexels.png',
};
