import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
import { config } from '../../config';

const GET_ITEMS = 'GET_ITEMS';
const LOADING = 'LOADING';

const getItems = createAction(GET_ITEMS, (item_list) => ({ item_list }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  is_loading: false,
};

const getItemDB = () => {
  return function (dispatch, getState, { history }) {
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
const getItemOneDB = (id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'get',
      url: `${config.api}/api/product`,
    }).then((res) => {
      const item = res.data.filter((val) => {
        return val.id === parseInt(id);
      });
      dispatch(getItems(item));
    });
  };
};

export default handleActions(
  {
    [GET_ITEMS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.item_list;
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
