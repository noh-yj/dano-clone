import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Item from '../components/Item';
import Spinner from '../shared/Spinner';
import { actionCreators as productActions } from '../redux/modules/product';
import { useDispatch, useSelector } from 'react-redux';

// 알뜰 상품 페이지

function Cheapproducts(props) {
  const { history } = props;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.list);
  const loading = useSelector((state) => state.product.is_loading);
  useEffect(() => {
    dispatch(productActions.getItemDB());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const bestDeal = products.filter((val) => {
    return val.bestDeal === true;
  });
  return (
    <>
      <Header />
      <Banner src='https://danoshop.net/mall/upload/2020/12/11/201125_W_category_%EC%95%8C%EB%9C%B0%EC%83%81%ED%92%88_1.png' />
      {loading ? (
        <Spinner />
      ) : (
        <Container text='알뜰상품'>
          {bestDeal.map((val) => {
            return (
              <div
                key={val.id}
                onClick={() => {
                  history.push(`/detail/product/${val.id}`);
                  window.scrollTo({ top: 0, left: 0 });
                }}
              >
                <Item key={val.id} {...val} />
              </div>
            );
          })}
        </Container>
      )}
      <Footer />
    </>
  );
}

export default Cheapproducts;
