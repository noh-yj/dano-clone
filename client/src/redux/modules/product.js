import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
import { config } from '../../config';

// 액션
const GET_ITEMS = 'GET_ITEMS';
const GET_BEST_ITEMS = 'GET_BEST_ITEMS';
const GET_NEW_ITEMS = 'GET_NEW_ITEMS';
const GET_DANO_ITEMS = 'GET_DANO_ITEMS';
const GET_THRIFTY_ITEMS = 'GET_THRIFTY_ITEMS';
const GET_FREE_ITEMS = 'GET_FREE_ITEMS';
const LOADING = 'LOADING';

// 액션 생성함수
const getItems = createAction(GET_ITEMS, (item_list) => ({ item_list }));
const bestItems = createAction(GET_BEST_ITEMS, (list) => ({ list }));
const newItems = createAction(GET_NEW_ITEMS, (list) => ({ list }));
const danoItems = createAction(GET_DANO_ITEMS, (list) => ({ list }));
const thriftyItems = createAction(GET_THRIFTY_ITEMS, (list) => ({ list }));
const freeitems = createAction(GET_FREE_ITEMS, (list) => ({ list }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

// 초기 state값
const initialState = {
  list: [],
  best_list: [],
  new_list: [],
  dano_list: [],
  thrifty_list: [],
  free_list: [],
  is_loading: false,
};
// 미들웨어

// 크롤링한 상품 조회
// 메인페이지 및 카테고리별 페이지에서 조회
const getItemDB = () => {
  return function (dispatch, getState, { history }) {
    // 데이터 로딩시 스피너를 보여주기 위한 처리
    dispatch(loading(true));
    axios({
      method: 'get',
      url: `${config.api}/api/product/all`,
    })
      .then((res) => {
        let item_list = [...res.data];
        dispatch(getItems(item_list));
      })
      .catch((e) => console.log(e));
  };
};

// 디테일 페이지 상품 조회(리렌더링시 에러 방지)
const getItemOneDB = (id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'get',
      url: `${config.api}/api/product/all`,
    }).then((res) => {
      // 전체 리스트 중 특정 제품 하나 필터처리
      const item = res.data.filter((val) => {
        return val.productId === parseInt(id);
      });
      dispatch(getItems(item));
    });
  };
};

// 인기 상품 조회
const getBestDB = () => {
  return function (dispatch, getState, { history }) {
    // 데이터 로딩시 스피너를 보여주기 위한 처리
    dispatch(loading(true));
    axios({
      method: 'get',
      url: `${config.api}/api/product/best`,
    })
      .then((res) => {
        let item_list = [...res.data];
        dispatch(bestItems(item_list));
      })
      .catch((e) => console.log(e));
  };
};

// 신상품 조회
const getNewDB = () => {
  return function (dispatch) {
    dispatch(loading(true));
    axios({
      method: 'get',
      url: `${config.api}/api/product/new`,
    })
      .then((res) => {
        let item_list = [...res.data];
        dispatch(newItems(item_list));
      })
      .catch((e) => console.log(e));
  };
};
// 다노상품 조회
const getDanoDB = () => {
  return function (dispatch) {
    dispatch(loading(true));
    axios({
      method: 'get',
      url: `${config.api}/api/product/dano`,
    })
      .then((res) => {
        let item_list = [...res.data];
        dispatch(danoItems(item_list));
      })
      .catch((e) => console.log(e));
  };
};
// 알뜰상품 조회
const getThriftyDB = () => {
  return function (dispatch) {
    dispatch(loading(true));
    axios({
      method: 'get',
      url: `${config.api}/api/product/thrifty`,
    })
      .then((res) => {
        let item_list = [...res.data];
        dispatch(thriftyItems(item_list));
      })
      .catch((e) => console.log(e));
  };
};

// 무료배송 상품 조회
const getfreeDB = () => {
  return function (dispatch) {
    dispatch(loading(true));
    axios({
      method: 'get',
      url: `${config.api}/api/product/free`,
    })
      .then((res) => {
        let item_list = [...res.data];
        dispatch(freeitems(item_list));
      })
      .catch((e) => console.log(e));
  };
};

// 리듀서
// redux-actions와 immer를 사용
export default handleActions(
  {
    [GET_ITEMS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.item_list;
        // 통신이 완료되면 스피너 대신 리스트 보기 위해 loading: false
        draft.is_loading = false;
      }),
    [GET_BEST_ITEMS]: (state, action) =>
      produce(state, (draft) => {
        draft.best_list = action.payload.list;
        // 통신이 완료되면 스피너 대신 리스트 보기 위해 loading: false
        draft.is_loading = false;
      }),
    [GET_NEW_ITEMS]: (state, action) =>
      produce(state, (draft) => {
        draft.new_list = action.payload.list;
        // 통신이 완료되면 스피너 대신 리스트 보기 위해 loading: false
        draft.is_loading = false;
      }),
    [GET_DANO_ITEMS]: (state, action) =>
      produce(state, (draft) => {
        draft.dano_list = action.payload.list;
        // 통신이 완료되면 스피너 대신 리스트 보기 위해 loading: false
        draft.is_loading = false;
      }),
    [GET_THRIFTY_ITEMS]: (state, action) =>
      produce(state, (draft) => {
        draft.thrifty_list = action.payload.list;
        // 통신이 완료되면 스피너 대신 리스트 보기 위해 loading: false
        draft.is_loading = false;
      }),
    [GET_FREE_ITEMS]: (state, action) =>
      produce(state, (draft) => {
        draft.free_list = action.payload.list;
        // 통신이 완료되면 스피너 대신 리스트 보기 위해 loading: false
        draft.is_loading = false;
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState,
);

const actionCreators = {
  getItemDB,
  getItemOneDB,
  getBestDB,
  getDanoDB,
  getNewDB,
  getThriftyDB,
  getfreeDB,
};

export { actionCreators };
