import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
import { config } from '../config';

const GET_ITEMS = 'GET_ITEMS';

const getItems = createAction(GET_ITEMS, (item_list) => ({ item_list }));

const initialState = {
  list: [],
  is_loading: false,
};

const getItemDB = () => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'get',
      url: `${config.api}/api/product`,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };
};

export default handleActions(
  {
    [GET_ITEMS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.item_list;
        draft.is_loading = false;
      }),
  },
  initialState,
);

const actionCreators = {
  getItemDB,
};

export { actionCreators };
