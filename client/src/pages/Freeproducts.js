import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Item from '../components/Item';
import Spinner from '../shared/Spinner';
import { actionCreators as productActions } from '../redux/modules/product';
import { useDispatch, useSelector } from 'react-redux';

// 무료 배송 페이지

function Freeproducts(props) {
  const { history } = props;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.list);
  const loading = useSelector((state) => state.product.is_loading);
  useEffect(() => {
    dispatch(productActions.getItemDB());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const free = products.filter((val) => {
    return val.free === true;
  });
  return (
    <>
      <Header />
      <Banner src='https://danoshop.net/mall/upload/2020/09/25/200914_W_category_FREETAK.png' />
      {loading ? (
        <Spinner />
      ) : (
        <Container text='무료배송'>
          {free.map((val) => {
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

export default Freeproducts;
