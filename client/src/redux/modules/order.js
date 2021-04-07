import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import axios from 'axios';
import { config } from '../../config';

const ADD_ORDER = 'ADD_ORDER';
const GET_ORDER = 'GET_ORDER';

const addOrder = createAction(ADD_ORDER, (order_item) => ({ order_item }));
const getOrder = createAction(GET_ORDER, (order_item) => ({ order_item }));

const initialState = {
  list: [],
};

const getOrderDB = () => {
  return function (dispatch, getState, { history }) {
    const username = getState().user.user?.username;
    axios({
      method: 'get',
      url: `${config.api}/api/MyOrder/${username}`,
    })
      .then((res) => {
        let order_list = [...res.data];
        dispatch(getOrder(order_list));
      })
      .catch((e) => {
        console.log('에러발생:', e);
      });
  };
};

const addOrderDB = (order_item) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'post',
      url: `${config.api}/api/DirectOrder/${order_item.username}`,
      data: {
        amount: order_item.count,
        img_url: order_item.image_url,
        price: order_item.total_price,
        product_name: order_item.product_name,
        username: order_item.username,
      },
    })
      .then((res) => {
        dispatch(addOrder({ ...order_item }));
        window.alert('구매가 완료되었습니다 :)');
        history.push('/purchase');
      })
      .catch((e) => {
        console.log('에러발생', e);
      });
  };
};

export default handleActions(
  {
    [ADD_ORDER]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.order_item);
      }),
    [GET_ORDER]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.order_item;
      }),
  },
  initialState,
);

const actionCreators = {
  addOrderDB,
  getOrderDB,
};

export { actionCreators };
