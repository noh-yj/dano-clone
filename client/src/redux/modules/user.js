import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { setCookie, deleteCookie } from '../../shared/Cookie';
import axios from 'axios';

const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
};

const LoginDB = (user_id, password) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'post',
      url: '/api/login',
      data: {
        user_id: user_id,
        password: password,
      },
    })
      .then((res) => {
        dispatch(
          setUser({
            user_id: user_id,
            password: password,
          }),
        );
        history.push('/');
      })
      .catch((e) => {
        console.log('에러발생:', e);
      });
  };
};

const SignupDB = (user_id, password, user_name, user_email, phone_num) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'post',
      url: '/api/signup',
      date: {
        user_id: user_id,
        password: password,
        user_name: user_name,
        user_email: user_email,
        phone_num: phone_num,
      },
    })
      .then((res) => {
        dispatch(
          setUser({
            user_id: user_id,
            password: password,
            user_name: user_name,
            user_email: user_email,
            phone_num: phone_num,
          }),
        );
        history.push('/');
      })
      .catch((e) => {
        console.log('에러 발생:', e);
      });
  };
};

const logoutDB = () => {
  return function (dispatch) {
    dispatch(logOut());
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie('is_login', 'danoclone login success!');
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie('is_login');
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState,
);

const actionCreators = {
  SignupDB,
  LoginDB,
  logoutDB,
};

export { actionCreators };
