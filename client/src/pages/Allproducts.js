import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Item from '../components/Item';
import axios from 'axios';
import { config } from '../config';

function Allproducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: `${config.api}/api/product`,
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <Header />
      <Banner src='https://danoshop.net/mall/upload/2020/12/11/201125_W_category_%EB%8B%A4%EB%85%B8%EC%A0%9C%ED%92%88_1.png' />
      <Container text='전체보기'>
        {products.map((val) => {
          return <Item key={val.id} {...val} />;
        })}
      </Container>
      <Footer />
    </>
  );
}

export default Allproducts;
