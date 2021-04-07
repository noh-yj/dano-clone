import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderItem from '../components/OrderItem';

function Order(props) {
  return (
    <>
      <Header />
      <Container>
        <Title>
          주문목록/배송조회
          <CurrentPage>
            01 마이페이지
            <RightArrow></RightArrow>
            <Strong>02 주문목록/배송조회</Strong>
          </CurrentPage>
        </Title>
        <Subtitle>주문상품 정보</Subtitle>
        <CartContainer>
          <Thead>
            <tr>
              <th>상품정보</th>
              <th>수량</th>
              <th>총 상품금액</th>
              <th>배송비</th>
              <th>주문처리상태</th>
            </tr>
          </Thead>
          <Tbody>
            {/* <tr style={{ height: '51px' }}>
              <td colSpan='5'>구매한 내역이 없습니다 :)</td>
            </tr> */}
            {/* 상품이 존재할때 안할때 조건부 렌더링 */}
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </Tbody>
        </CartContainer>
        <br />
        <br />
        <br />
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  width: 1140px;
  margin: auto;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 70px 0px;
`;
const CurrentPage = styled.div`
  float: right;
  font-size: 14px;
  letter-spacing: -0.3px;
  line-height: 160%;
`;
const Strong = styled.div`
  font-weight: bold;
  color: #ff6f61;
  display: inline-block;
`;

const RightArrow = styled.div`
  width: 7px;
  height: 7px;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  transform: rotate(45deg);
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  margin: 20px 0px;
`;
const CartContainer = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`;

const Thead = styled.thead`
  border-top: 2px solid rgb(51, 51, 51);
  font-weight: normal;
  font-size: 14px;
  width: 1140px;
  max-width: 100%;
  text-align: center;
  font-weight: bold;
  & th {
    height: 51px;
    margin: 0;
    padding: 0;
  }
  & th:first-child {
    width: 500px;
  }
`;

const Tbody = styled.tbody`
  font-weight: normal;
  line-height: 160%;
  font-size: 14px;
  color: #000;
  letter-spacing: -0.3;
  cursor: default;
  border-bottom: 1px solid rgb(51, 51, 51);
  text-align: center;
`;

export default Order;
