import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
import { config } from '../../config';

const ADD_CART = 'ADD_CART';
const GET_CART = 'GET_CART';
const DELETE_CART = 'DELETE_CART';
const BUY_CART = 'BUY_CART';

const addCart = createAction(ADD_CART, (cart_item) => ({ cart_item }));
const getCart = createAction(GET_CART, (cart_item) => ({ cart_item }));
const deleteCart = createAction(DELETE_CART, (item_name) => ({ item_name }));
const buyCart = createAction(BUY_CART, () => ({}));

const initialState = {
  list: [],
};

const buyCartDB = (username) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'post',
      url: `${config.api}/api/MyOrder/${username}`,
    }).then((res) => {
      window.alert('구매가 완료되었습니다! 😍');
      history.push('/Purchase');
      dispatch(buyCart());
    });
  };
};

const deleteCartDB = (username, product_id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'delete',
      url: `${config.api}/api/cart/${username}/removeItem/${product_id}`,
    })
      .then((res) => {
        dispatch(deleteCart(product_id));
      })
      .catch((e) => {
        console.log('에러발생:', e);
      });
  };
};

const getCartDB = () => {
  return function (dispatch, getState, { history }) {
    const username = getState().user.user?.username;
    axios({
      method: 'get',
      url: `${config.api}/api/cart/${username}`,
    })
      .then((res) => {
        let cart_list = [...res.data];
        dispatch(getCart(cart_list));
      })
      .catch((e) => {
        console.log('에러발생:', e);
      });
  };
};

const addCartDB = (cart_item) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'post',
      url: `${config.api}/api/cart`,
      data: {
        amount: cart_item.count,
        img_url: cart_item.image_url,
        price: cart_item.total_price,
        product_name: cart_item.product_name,
        username: cart_item.username,
      },
    })
      .then((res) => {
        dispatch(addCart({ ...cart_item }));
        window.alert('장바구니에 추가가 완료되었습니다 :)');
        history.push('/cart');
      })
      .catch((e) => {
        console.log('에러발생:', e);
      });
  };
};

export default handleActions(
  {
    [ADD_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.cart_item);
      }),
    [GET_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.cart_item;
      }),
    [DELETE_CART]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (val) => val.id === action.payload.item_name,
        );
        draft.list.splice(idx, 1);
      }),
    [BUY_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list = null;
      }),
  },
  initialState,
);

const actionCreators = {
  addCartDB,
  getCartDB,
  deleteCartDB,
  buyCartDB,
};

export { actionCreators };
