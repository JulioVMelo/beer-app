import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #0b0a0c;
  max-width: 200px;
  height: 300px;
  border-radius: 4px;
  padding: 10px;
  position: relative;

  .text {
    flex-grow: 1;
  }
`;

export const Name = styled.h2`
  color: #f7df4b;
  font-size: 3rem;
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

export const Button = styled.button`
  position: absolute;
  right: -25px;
  bottom: 60px;
  width: 50px;
  height: 50px;
  border: none;
  background-color: #f7df4b;
  border-radius: 50%;
`;
