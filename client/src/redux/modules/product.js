import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
import { config } from '../../config';

// 액션
const GET_ITEMS = 'GET_ITEMS';
const LOADING = 'LOADING';

// 액션 생성함수
const getItems = createAction(GET_ITEMS, (item_list) => ({ item_list }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

// 초기 state값
const initialState = {
  list: [],
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
      url: `${config.api}/api/product`,
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
      url: `${config.api}/api/product`,
    }).then((res) => {
      // 전체 리스트 중 특정 제품 하나 필터처리
      const item = res.data.filter((val) => {
        return val.id === parseInt(id);
      });
      dispatch(getItems(item));
    });
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
};

export { actionCreators };
