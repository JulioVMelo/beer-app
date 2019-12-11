import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-basis: 320px;

  height: 340px;
  width: 300px;
  background-color: #0b0a0c;
  border-radius: 4px;
  padding: 10px 16px;
  margin-bottom: 20px;
  position: relative;

  .text {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    width: 100%;
  }
`;

export const Name = styled.h2`
  color: #f7df4b;
  font-size: 2.7rem;
  text-overflow: ellipsis;
`;

export const TagLine = styled.h3`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 400;
`;

export const Image = styled.div`
  overflow: hidden;
  width: 50px;
  margin-bottom: 10px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Button = styled(Link)`
  position: absolute;
  right: -25px;
  bottom: 80px;
  width: 50px;
  height: 50px;
  border: none;
  background-color: #62d462;
  border-radius: 50%;
  outline: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 360px) {
    left: 10px;
    top: 10px;
  }
`;
