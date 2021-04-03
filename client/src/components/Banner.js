import React from 'react';
import styled from 'styled-components';

function Banner(props) {
  const { src } = props;

  return (
    <>
      <Div>
        <Img src={src} alt='banner' />
      </Div>
    </>
  );
}

const Div = styled.div`
  background: rgb(241, 231, 220);
`;

const Img = styled.img`
  max-width: 1250px;
  width: 100%;
  display: block;
  border: none;
  margin: auto;
`;

export default Banner;
