import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DanoInfo() {
  return (
    <>
      <Header />
      <Container>
        <Img
          src='https://danoshop.net/mall/upload/resource/company/introduce.jpg'
          alt='danoinfo'
        />
        <div>
          <Img
            src='https://danoshop.net/mall/upload/resource/company/banner.jpg'
            alt='dano'
          />
        </div>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  text-align: center;
  line-height: 100%;
`;
const Img = styled.img`
  border: none;
  vertical-align: middle;
  max-width: 100%;
`;

export default DanoInfo;
