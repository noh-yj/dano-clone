import React from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';

function Empty(props) {
  return (
    <>
      <List>장바구니에 담긴 상품이 없습니다.</List>
      <Btn
        onClick={() => {
          history.push('/products/popularproducts');
        }}
      >
        추천상품 보러가기
      </Btn>
    </>
  );
}

const List = styled.div`
  padding: 100px 0px;
  border-top: 2px solid rgb(51, 51, 51);
  border-bottom: 1px solid rgb(236, 236, 236);
  font-size: 14px;
  border-spacing: 0 10px;
`;
const Btn = styled.div`
  border: 1px solid rgb(255, 111, 97);
  background-color: rgb(255, 255, 255);
  color: rgb(255, 111, 97);
  width: 170px;
  height: 45px;
  line-height: 47px;
  margin: 50px auto;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
`;

export default Empty;
