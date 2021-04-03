import React from 'react';
import styled from 'styled-components';

function NonUserOrderList(props) {
  const { history } = props;
  return (
    <Container>
      <MainContainer>
        <TitleBox>
          <Title>비회원 주문조회</Title>
        </TitleBox>
        <LoginTitleBox>
          <SubTitle>비회원의 경우, 주문시 받은 주문번호로 주문조회가 가능합니다.</SubTitle>
        </LoginTitleBox>

        <OrderNum>
          <OrderNumInput type='text' placeholder='주문번호1' /> <span className="dash">-</span> <OrderNumInput type='text' placeholder='주문번호2' />
        </OrderNum>
        <InputBox>
          <Input type='text' placeholder='비회원 주문 비밀번호' />
        </InputBox>

        <div>
          <ChkBtn>조회하기</ChkBtn>
          <LoginBtn
            onClick={() => {
              history.push('/login');
            }}
          >
            회원로그인
          </LoginBtn>
          아직도 다노샵/마이다노 회원이 아니신가요? <SignupBtn>회원가입</SignupBtn>
        </div>

      </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  min-width: 290px;
  max-width: 460px;
  position: relative;
`;

const MainContainer = styled.div`
  margin: auto 40px;
`;

const TitleBox = styled.div`
  margin-top: 55px;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: #0d0d0d;
  margin-bottom: 5px;
`;
const LoginTitleBox = styled.div`
//   margin-top: 30px;
`;
const SubTitle = styled.div`
  color: grey;
  font-size: 13px;
//   font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
//   border-bottom: 2px solid #ff6f61;
  margin-bottom: 30px;
`;
const OrderNum = styled.div`
  display: felx;
  width: 45%;
//   border: 1px solid #e7e7e7;
  background-color: #fff;
  text-align: left;
  font-size: 13px;
  color: #2c2c2c;
//   padding: 0 15px;
  height: 45px;
//   box-sizing: border-box;

  .dash{
    margin: 15px;
    } // 데쉬 색, 위치 변경
`;
const InputBox = styled.div`
  margin-top: 15px;
`;

const OrderNumInput = styled.input`
  display: flex;
  width: 100%;
  border: 1px solid #e7e7e7;
  background-color: #fff;
  text-align: left;
  font-size: 13px;
  color: #2c2c2c;
  padding: 0 15px;
  height: 45px;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #e7e7e7;
  background-color: #fff;
  text-align: left;
  font-size: 13px;
  color: #2c2c2c;
  padding: 0 15px;
  height: 45px;
  box-sizing: border-box;
`;


const ChkBtn = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 2px;
  font-size: 14px;
  border: 1px solid #e7e7e7;
  background-color: #fbfbfb;
  color: #ff6f61;
  cursor: pointer;
`;
const SignupBtn = styled.button`
  margin-top: 10px;
  color: #fff;
  background-color: #ff6f61;
  width: 100%;
  height: 45px;
  border-radius: 2px;
  font-size: 14px;
  border: 1px solid #e7e7e7;
  cursor: pointer;
`;
const LoginBtn = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 2px;
  font-size: 14px;
  border: 1px solid #e7e7e7;
  background-color: #fbfbfb;
  color: #ff6f61;
  cursor: pointer;
`;



export default NonUserOrderList;
