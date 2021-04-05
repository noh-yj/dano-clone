import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { setCookie, deleteCookie } from '../../shared/Cookie';
import axios from 'axios';
import { config } from '../../config';

const SET_USER = 'SET_USER';
const GET_USER = 'GET_USER';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';
const LOG_OUT = 'LOG_OUT';

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const updateUser = createAction(UPDATE_USER, (user) => ({ user }));
const deleteUser = createAction(DELETE_USER, () => ({}));

const initialState = {
  user: null,
  is_login: false,
};

// 회원 탈퇴
const deleteUserDB = (id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'delete',
      url: `${config.api}/api/deleteuser`,
    }).then((res) => {
      dispatch(deleteUser());
      history.push('/');
    });
  };
};

// 수정페이지 회원정보 조회 시 필요
const getUserDB = () => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'get',
      url: `${config.api}/api/getuser`,
    })
      .then((res) => {
        dispatch(
          getUser({
            username: res.data.username,
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone,
          }),
        );
      })
      .catch((e) => {
        console.log('에러발생', e);
      });
  };
};

// 회원 정보 수정
const updateUserDB = (password, email, phone) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'put',
      url: `${config.api}/api/updateuser`,
      data: {
        username: getState().user.username,
        password: password,
        email: email,
        phone: phone,
      },
    })
      .then((res) => {
        dispatch(
          updateUser({
            username: getState().user.username,
            password: password,
            email: email,
            phone: phone,
          }),
        );
      })
      .catch((e) => {
        console.log('에러발생', e);
      });
  };
};

// 로그인
const LoginDB = (user_id, password) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'post',
      url: `${config.api}/api/login`,
      data: {
        username: user_id,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        setCookie('is_login', res.request.response);
        dispatch(
          setUser({
            username: user_id,
          }),
        );
        history.push('/');
      })
      .catch((e) => {
        console.log('에러발생:', e);
      });
  };
};
// 회원가입
const SignupDB = (user_id, password, user_name, user_email, phone_num) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'post',
      url: `${config.api}/api/signup`,
      data: {
        username: user_id,
        password: password,
        name: user_name,
        email: user_email,
        phone: phone_num,
      },
    })
      .then((res) => {
        history.push('/user/login');
      })
      .catch((e) => {
        console.log('에러 발생:', e);
      });
  };
};

// 로그아웃
// const logoutDB = () => {
//   return function (dispatch) {
//     dispatch(logOut());
//   };
// };

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie('is_login');
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [UPDATE_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [DELETE_USER]: (state, action) =>
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
  logOut,
  getUserDB,
  updateUserDB,
  deleteUserDB,
};

export { actionCreators };
