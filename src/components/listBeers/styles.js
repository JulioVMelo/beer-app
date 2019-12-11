import styled from 'styled-components';

export const listBeer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 875px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
