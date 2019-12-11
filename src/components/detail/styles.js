import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  background-color: #0b0a0b;
  border-radius: 6px;
  padding: 20px;
  position: relative;

  @media (max-width: 1050px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Name = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 30px;
`;

export const Text = styled.div`
  color: #fff;
  font-size: 2rem;
  display: flex;

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
  }

  @media (max-width: 1050px) {
    flex-direction: column;

    .content {
      margin-top: 50px;
    }
  }
`;

export const Description = styled.div`
  color: #fff;
  font-size: 2rem;
`;

export const Slogan = styled.div`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 20px;
  text-decoration: underline;
`;

export const Image = styled.div`
  max-height: 200px;
  width: 100%;
  flex-grow: 1;
  text-align: center;

  img {
    max-height: 100%;
  }
`;

export const Back = styled(Link)`
  position: absolute;
  top: -105px;
  left: 10px;
`;
