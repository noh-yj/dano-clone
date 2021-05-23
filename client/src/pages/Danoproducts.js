import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Item from '../components/Item';
import Spinner from '../shared/Spinner';
import { actionCreators as productActions } from '../redux/modules/product';
import { useDispatch, useSelector } from 'react-redux';

// 다노제품 페이지

function Danoproducts(props) {
  const { history } = props;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.dano_list);
  const loading = useSelector((state) => state.product.is_loading);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(productActions.getDanoDB());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Banner src='https://danoshop.net/mall/upload/2020/12/11/201125_W_category_%EB%8B%A4%EB%85%B8%EC%A0%9C%ED%92%88_1.png' />
      {loading ? (
        <Spinner />
      ) : (
        <Container text='다노제품'>
          {products.map((val) => {
            return (
              <div
                key={val.productId}
                onClick={() => {
                  history.push(`/detail/product/${val.productId}`);
                  window.scrollTo({ top: 0, left: 0 });
                }}
              >
                <Item key={val.productId} {...val} />
              </div>
            );
          })}
        </Container>
      )}
      <Footer />
    </>
  );
}

export default Danoproducts;
