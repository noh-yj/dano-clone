import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { setCookie, deleteCookie, getCookie } from '../../shared/Cookie';
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
const deleteUserDB = (username) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'delete',
      url: `${config.api}/api/unregister/${username}`,
    }).then((res) => {
      dispatch(deleteUser());
      window.alert('회원탈퇴가 완료되었습니다..😭');
      history.replace('/');
    });
  };
};

//회원정보 조회
const getUserDB = () => {
  return function (dispatch, getState, { history }) {
    const jwtToken = getCookie('is_login');
    axios({
      method: 'post',
      url: `${config.api}/api/getUser`,
      data: {
        token: jwtToken,
      },
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
const updateUserDB = (username, password, email, phone) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'put',
      url: `${config.api}/api/userEdit`,
      data: {
        username: username,
        password: password,
        email: email,
        phone: phone,
      },
    })
      .then((res) => {
        const name = getState().user.user.name;
        dispatch(
          updateUser({
            username: username,
            name: name,
            email: email,
            phone: phone,
          }),
        );
        window.alert('회원정보가 변경되었습니다!');
        history.replace('/');
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
        const jwtToken = res.data.message1.jwt;
        setCookie('is_login', jwtToken);
        dispatch(
          setUser({
            username: user_id,
            name: res.data.message2.name,
            email: res.data.message2.email,
            phone: res.data.message2.phone,
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
      url: `${config.api}/user/signup`,
      data: {
        username: user_id,
        password: password,
        name: user_name,
        email: user_email,
        phone: phone_num,
      },
    })
      .then((res) => {
        console.log(res);
        history.push('/user/login');
      })
      .catch((e) => {
        console.log('에러 발생:', e);
      });
  };
};

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
