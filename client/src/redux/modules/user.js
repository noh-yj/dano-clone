import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { setCookie, deleteCookie, getCookie } from '../../shared/Cookie';
import axios from 'axios';
import { config } from '../../config';

// 액션
const SET_USER = 'SET_USER';
const GET_USER = 'GET_USER';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';
const LOG_OUT = 'LOG_OUT';

// 액션 생성함수
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const updateUser = createAction(UPDATE_USER, (user) => ({ user }));
const deleteUser = createAction(DELETE_USER, () => ({}));

// 초기 state값
const initialState = {
  user: null,
  is_login: false,
};

// 회원 탈퇴
// 유저 id를 전송해 DB에 회원 정보를 삭제
const deleteUserDB = (username) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'delete',
      url: `${config.api}/api/unregister/${username}`,
    }).then((res) => {
      dispatch(deleteUser());
      window.alert('회원탈퇴가 완료되었습니다..😭');
      // replace를 사용한 이유: 뒤로가기 했을때 회원 정보 수정창이 나오면 비로그인 시 접근 차단은 했지만 사용자 경험이 별로이므로
      history.replace('/');
    });
  };
};

//회원정보 조회
const getUserDB = () => {
  return function (dispatch, getState, { history }) {
    // 토큰 값 조회
    const jwtToken = getCookie('is_login');
    // 새로고침 하면 헤더 default 날라가므로 다시 헤더에 토큰을 담아줌
    axios.defaults.headers.common['Authorization'] = `${jwtToken}`;
    axios({
      method: 'post',
      url: `${config.api}/api/getUser`,
      data: {
        token: jwtToken,
      },
    })
      .then((res) => {
        // 받은 유저 정보 저장
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
// 변경할 데이터를 서버에 보내줌
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
        // 스토어에서도 최신 데이터로 변경
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
    // 로그인 시 id password를 서버에 보내줌
    axios({
      method: 'post',
      url: `${config.api}/api/login`,
      data: {
        username: user_id,
        password: password,
      },
    })
      .then((res) => {
        const jwtToken = res.data.message1.jwt;
        // 받은 토큰을 쿠키에 저장
        setCookie('is_login', jwtToken);
        // 통신 시 헤더에 default로 저장
        axios.defaults.headers.common['Authorization'] = `${jwtToken}`;
        // 로그인 후 서버에서 받은 회원 정보를 스토어에 최신화
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
    // 회원 가입 시 작성한 유저 정보를 서버에 보내줌
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
        // 전송 후 로그인 페이지로 이동
        history.push('/user/login');
      })
      .catch((e) => {
        console.log('에러 발생:', e);
      });
  };
};

// 리듀서
// redux-actions와 immer를 사용
// user: 유저 정보, is_login: 로그인 상태
// 비슷한 코드라 2개에 액션으로 처리해도 되지만 logger에서 액션 타입만 보고 이해할 수 있게 나눔
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        // 로그인시 받은 회원정보
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // 로그 아웃 시 쿠키에 담긴 토큰 삭제, 회원정보 비워줌, 로그인 여부 false
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
        // 회원 탈퇴 시 쿠키에 담긴 토큰 삭제, 회원정보 비워줌, 로그인 여부 false
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
