import React, { useEffect } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Item from '../components/Item';
import axios from 'axios';
import { config } from '../config';

function Main(props) {
  useEffect(() => {
    axios({
      method: 'get',
      url: `${config.api}/api/product`,
      baseURL: 'http://3.35.169.245:8080',
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  });
  return (
    <>
      <Banner src='https://danoshop.net/mall/upload/2020/12/11/201125_W_category_%EC%9D%B8%EA%B8%B0%EC%A0%9C%ED%92%88_1.png' />
      <Container>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 1140px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Main;
