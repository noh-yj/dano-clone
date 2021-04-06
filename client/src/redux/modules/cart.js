import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
import { config } from '../../config';

const ADD_ITEM = "ADD_ITEM" // 액션 만듦

const addItem = createAction(ADD_ITEM, (item) => ({ item })); // 액션 크리에이터

const initialState = {
  cart_list: [{
    user_name: "",
    image_url: "https://danoshop.net/mall/upload/2019/03/04/brownie_hover_1.png",
    product_name: "다노 프로틴 브라우니 1BOX (5개입)",
    product_quantity: 2,
    product_price: 16000
  }]
};

// 리듀서 -> 스토어(configure store)에 저장 (완전 별개의 컴포넌트에서 컴포넌트로 데이터 옮기기 어려우니)
export default handleActions(
  {
    [ADD_ITEM]: (state, action) => // 두개의 파라미터(상태값, 액션)
    produce(state, (draft) => {  // state를 복사해서  draft로 만듦(=복사본) (원본은 불변(immer)) 
      draft.cart_list.unshift(action.payload.cart_list);
       // unshift 배열에서 제일 앞에 추가하기
       // 맨 뒤면 push써도됨
       // payload 콘솔 찍으면 payload로뜸 -> 전송되는 데이터
    }),
  }, initialState // 기본값
);

// 미들웨어 -> 서버로 전달
const addItemDB = () => {
  return function (dispatch, getState, { history }) {
    // history.push 여기서 써줌
    // getState -> state에 접근한다는 뜻
// 여기 이해안됨
        axios({
          method: 'post',
          url: `${config.api}/api/product`,
        })
          .then((res) => {
            let item_list = [...res.data];
            console.log('helloworld',item_list)
            dispatch(addItem(item_list));
          })
          .catch((e) => console.log(e));
      };
    };


const actionCreators = {
  // addItemDB, // 서버에 전달(외부)
  addItem // 리덕스에 데이터 전달(내부)
};

export { actionCreators };
