import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const ADD_ORDER = 'ADD_ORDER';
const GET_ORDER = 'GET_ORDER';

const addOrder = createAction(ADD_ORDER, (order_item) => ({ order_item }));
const getOrder = createAction(GET_ORDER, (order_item) => ({ order_item }));

const initialState = {
  list: [],
};

export default handleActions(
  {
    [ADD_ORDER]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.order_item);
      }),
    [GET_ORDER]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.order_item;
      }),
  },
  initialState,
);

const actionCreators = {
  addOrder,
  getOrder,
};

export { actionCreators };
