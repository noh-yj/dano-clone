import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Empty from '../components/Empty';
import ShoppingItem from '../components/ShoppingItem';

function Shopping(props) {
  const { history } = props;
  return (
    <>
      <Header />
      <Container>
        <Title>
          장바구니
          <CurrentPage>
            <Strong>01 장바구니</Strong>
            <RightArrow />
            02 주문/결제
            <RightArrow />
            03 주문완료
          </CurrentPage>
        </Title>
        {/* <Empty /> */}
        {/* 상품이 존재할때 안할때 조건부 렌더링 */}
        <CartContainer>
          <Thead>
            <tr>
              <th>상품정보</th>
              <th>수량</th>
              <th>상품금액</th>
              <th>배송비</th>
            </tr>
          </Thead>
          <Tbody>
            <ShoppingItem />
          </Tbody>
        </CartContainer>

        <PriceContainer>
          <PriceHead>
            <tr>
              <th>총 상품 금액</th>
              <th>총 할인가격</th>
              <th>총 결제금액</th>
            </tr>
          </PriceHead>
          <PriceBody>
            <tr>
              <td>
                <Span>38,000</Span>원
              </td>
              <SailPrice>
                <Sign>-</Sign>
                <div>
                  <Span>0</Span>원
                </div>
                <Sign>=</Sign>
              </SailPrice>

              <td>
                <Span>38,000</Span>원
              </td>
            </tr>
          </PriceBody>
        </PriceContainer>
        <Btn>
          <ShoppingBtn
            onClick={() => {
              history.push('/');
            }}
          >
            쇼핑하러 가기
          </ShoppingBtn>
          <PurchaseBtn
            onClick={() => {
              history.push('/OrderList');
            }}
          >
            구매하기
          </PurchaseBtn>
        </Btn>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  text-align: center;
  padding: 30px;
  margin: auto;
  width: 1140px;
  cursor: default;
`;

const Title = styled.div`
  line-height: 24px;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin: 50px 0px 30px 0px;
`;
const CurrentPage = styled.div`
  float: right;
  font-size: 14px;
  letter-spacing: -0.3px;
  line-height: 160%;
  font-weight: normal;
`;

const Strong = styled.div`
  font-weight: bold;
  color: #000000;
  display: inline-block;
`;

const RightArrow = styled.div`
  width: 7px;
  height: 7px;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  transform: rotate(45deg);
  display: inline-block;
  margin-right: 5px;
`;

const CartContainer = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`;

const Thead = styled.thead`
  background: rgb(248, 248, 248);
  border-top: 2px solid rgb(51, 51, 51);
  font-weight: bold;
  vertical-align: middle;
  cursor: default;
  font-size: 14px;
  letter-spacing: -0.3px;
  color: #000;
  & th {
    height: 46px;
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
`;

const PriceContainer = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  height: 100%;
  margin-top: 100px;
  cursor: default;
`;
const PriceHead = styled.thead`
  background: rgb(248, 248, 248);
  border-top: 2px solid rgb(51, 51, 51);
  font-weight: bold;
  cursor: default;
  font-size: 14px;
  letter-spacing: -0.3px;
  color: #000;
  & th {
    height: 46px;
    margin: 0;
    padding: 0;
  }
`;
const PriceBody = styled.tbody`
  width: 100%;
  border-bottom: 1px solid rgb(236, 236, 236);
  border-top: 1px solid rgb(236, 236, 236);

  & tr {
    height: 111px;
    align-items: center;
  }
`;

const SailPrice = styled.td`
  display: flex;
  height: 111px;
  align-items: center;
  justify-content: space-between;
`;

const Sign = styled.div`
  background: rgb(250, 248, 248);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  line-height: 32px;
  font-size: 18px;
  font-weight: normal;
`;

const Span = styled.span`
  font-weight: bold;
  font-size: 24px;
  margin-right: 3px;
  color: rgb(59, 59, 59);
`;

const Btn = styled.div`
  margin: 50px 90px;
`;

const ShoppingBtn = styled.div`
  background: rgb(255, 255, 255);
  border: 1px solid rgb(218, 218, 218);
  color: rgb(105, 105, 105);
  height: 52px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px 20px;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  width: 256px;
  display: inline-flex;
  cursor: pointer;
  margin: 0px 5px;
`;

const PurchaseBtn = styled.div`
  background-color: rgb(255, 111, 97);
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  opacity: 1;
  height: 52px;
  width: 256px;
  display: inline-flex;
  cursor: pointer;
  margin: 0px 5px;
`;

export default Shopping;
