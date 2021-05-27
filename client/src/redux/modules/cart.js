import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
import { config } from '../../config';
import { getCookie } from '../../shared/Cookie';

// 액션
const GET_CART = 'GET_CART';
const DELETE_CART = 'DELETE_CART';
const BUY_CART = 'BUY_CART';

// 액션 생성함수
const getCart = createAction(GET_CART, (cart_item) => ({ cart_item }));
const deleteCart = createAction(DELETE_CART, (item_name) => ({ item_name }));
const buyCart = createAction(BUY_CART, () => ({}));

// 초기 state값 설정
const initialState = {
  list: [],
};

// 미들웨어

// 장바구니에서 구매하기
// 장바구니에 담겨있는 목록을 구매내역으로 보내주고 장바구니는 비워줌
const buyCartDB = () => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'post',
      url: `${config.api}/api/cart/order`,
    }).then((res) => {
      window.alert('구매가 완료되었습니다! 😍');
      history.push('/Purchase');
      dispatch(buyCart());
    });
  };
};

// 장바구니 제품 삭제
// 장바구니에서 x버튼을 클릭할때 특정 제품 1개를 삭제
const deleteCartDB = (cart_id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'delete',
      url: `${config.api}/api/cart/${cart_id}`,
    })
      .then((res) => {
        dispatch(deleteCart(cart_id));
      })
      .catch((e) => {
        console.log('에러발생:', e);
      });
  };
};

// 특정 유저가 장바구니에 담은 제품 조회
const getCartDB = () => {
  return function (dispatch, getState, { history }) {
    if (!getCookie('is_login')) {
      dispatch(getCart([]));
      return;
    }
    axios({
      method: 'get',
      url: `${config.api}/api/cart`,
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

// 장바구니에 추가하기
// 보내는 데이터: 갯수, 제품 id
const addCartDB = (cart_item) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'post',
      url: `${config.api}/api/cart`,
      data: {
        amount: cart_item.count,
        productId: cart_item.product_id,
      },
    })
      .then((res) => {
        window.alert('장바구니에 추가가 완료되었습니다 :)');
        history.push('/cart');
      })
      .catch((e) => {
        console.log('에러발생:', e);
      });
  };
};

// 리듀서
// redux-actions와 immer를 사용
export default handleActions(
  {
    [GET_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.cart_item;
      }),
    [DELETE_CART]: (state, action) =>
      produce(state, (draft) => {
        // 특정 요소에 해당하는 인덱스를 찾아 배열에서 제거해줌
        let idx = draft.list.findIndex(
          (val) => val.id === action.payload.item_name,
        );
        draft.list.splice(idx, 1);
      }),
    [BUY_CART]: (state, action) =>
      produce(state, (draft) => {
        // 장바구니에서 구매를 하면 항목을 비워야하므로 빈 배열로 처리
        draft.list = [];
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
