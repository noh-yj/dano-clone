import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { actionCreators as productActions } from '../redux/modules/product';
import { useDispatch, useSelector } from 'react-redux';

// 컴포넌트와 리덕스 연결
import { connect } from "react-redux";

const mapStateToProps = (state) => { // 프롭스의 형태로 컴포넌트에 넣어줌
  return {}
}

const mapDispatchToProps = () => { // 

}

function DetailProduct(props) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const id = props.match.params.id;
  const products = useSelector((state) => state.product.list);
  const product_idx = products.findIndex((val) => val.id === parseInt(id));
  const product = products[product_idx];
  useEffect(() => {
    if (product) {
      return;
    }
    dispatch(productActions.getItemOneDB(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const price = product?.price;
  const price_won = product?.price.slice(0, -1).split(',').join('');
  const price_num = parseInt(price_won);
  const total_price = price_num * count;
  const result_price = total_price
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return (
    <>
      <Header />
      {product && (
        <Container>
          <ItemBox>
            <ImgBox>
              <img src={product.image_url} alt='상품이미지' />
            </ImgBox>
            <ItemInfoBox>
              <InfoBox>
                <p>{product.product_name}</p>
                <PriceBox>
                  <span>
                    {price.slice(0, -1)}
                    <small>{price.slice(-1)}</small>
                  </span>
                  <CountBox>
                    <button
                      onClick={() => {
                        if (count < 1) {
                          return;
                        }
                        setCount(count - 1);
                      }}
                    >
                      -
                    </button>
                    <div>{count}</div>
                    <button
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      +
                    </button>
                  </CountBox>
                </PriceBox>

                <TotalPrice>
                  <span>
                    합계 <strong>{result_price} 원</strong>
                  </span>
                </TotalPrice>
                <ButtonBox>
                  <CartBtn>장바구니 담기</CartBtn>
                  <BuyBtn>바로 구매하기</BuyBtn>
                </ButtonBox>
              </InfoBox>
            </ItemInfoBox>
          </ItemBox>
        </Container>
      )}

      <Footer />
    </>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 200px;
  width: 1140px;
  background: rgb(255, 255, 255);
`;
const ItemBox = styled.div`
  box-sizing: border-box;
  display: flex;
  padding-top: 60px;
  flex-direction: row;
`;

const ImgBox = styled.div`
  min-width: 609px;
  cursor: default;
  & img {
    width: 609px;
    height: 407px;
    min-height: 230px;
    border: none;
    vertical-align: middle;
    max-width: 100%;
  }
`;
const ItemInfoBox = styled.div`
  width: 100%;
`;

const InfoBox = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 30px 24px;
  flex: 1 1 0%;
  color: rgb(59, 59, 59);
  cursor: default;
  & p {
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    margin-bottom: 6px;
  }
`;
const PriceBox = styled.div`
  margin-top: 40px;
  display: flex;
  & span {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
    width: 100%;
    & small {
      font-size: 14px;
      margin-left: 2px;
      font-weight: bold;
    }
  }
`;
const CountBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;

  & button {
    width: 28px;
    height: 28px;
    padding: 0;
    margin: 0 10px;
    border: 1px solid rgb(236, 236, 236);
    cursor: pointer;
    overflow: visible;
    background: rgb(255, 255, 255);
    outline: none;
  }
`;
const TotalPrice = styled.div`
  padding: 16px 0;
  margin-top: 150px;
  text-align: right;
  & span {
    font-size: 14px;
    & strong {
      font-size: 22px;
      color: rgb(255, 111, 97);
      margin-left: 7px;
    }
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CartBtn = styled.button`
  height: 52px;
  font-size: 16px;
  border-radius: 4px;
  font-weight: bold;
  width: 49%;
  background-color: rgb(255, 240, 239);
  color: rgb(255, 111, 97);
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: 0;
  overflow: visible;
`;

const BuyBtn = styled.button`
  height: 52px;
  font-size: 16px;
  border-radius: 4px;
  font-weight: bold;
  width: 49%;
  background-color: rgb(255, 111, 97);
  color: rgb(255, 255, 255);
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: 0;
  overflow: visible;
`;

export default DetailProduct;
