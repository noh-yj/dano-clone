import React from 'react';
import styled from 'styled-components';

function MainPageBanner(props) {
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
  width: 1140px;
  margin: 50px auto 0;
`;

const Img = styled.img`
  border: none;
  vertical-align: middle;
  max-width: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export default MainPageBanner;
