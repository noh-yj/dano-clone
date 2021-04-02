import React from 'react';
import styled from 'styled-components';

function Signup(props) {
  const { history } = props;
  return (
    <Container>
      <Header>
        <HeaderImg
          src='https://auth.dano.me/res/images/65309db7dcc5f8bdc78897f9943f0ea3.png'
          alt='dano'
        />
      </Header>
      <MainContainer>
        <TitleBox>
          <Title>회원 가입</Title>
        </TitleBox>
        <SignupTitleBox>
          <SignupTitle>기본 정보 입력</SignupTitle>
        </SignupTitleBox>
        <SignupBox>
          <table>
            <tbody>
              <tr>
                <th>아이디</th>
                <td>
                  <input type='text' placeholder='영문 4~16자' />
                </td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td>
                  <input
                    type='password'
                    placeholder='영문, 숫자, 특수문자 4~16자 이내'
                  />
                </td>
              </tr>
              <tr>
                <th>비밀번호 확인</th>
                <td>
                  <input type='password' />
                </td>
              </tr>
              <tr>
                <th>이름</th>
                <td>
                  <input
                    type='text'
                    placeholder='성과 이름을 모두 입력하세요.'
                  />
                </td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>
                  <input type='text' placeholder='abc@email.com' />
                </td>
              </tr>
              <tr>
                <th>휴대폰 번호</th>
                <td>
                  <input type='text' />
                </td>
              </tr>
            </tbody>
          </table>
        </SignupBox>
        <div>
          <SignupBtn
            onClick={() => {
              history.push('/');
            }}
          >
            통합 회원가입
          </SignupBtn>
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

const Header = styled.div`
  height: 42px;
  line-height: 42px;
  background: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: #0d0d0d;
  border-bottom: 1px solid #ebebeb;
`;

const HeaderImg = styled.img`
  font-size: 18px;
  height: 16px;
`;
const MainContainer = styled.div`
  margin: auto 40px;
`;

const TitleBox = styled.div`
  margin-top: 55px;
`;
const Title = styled.div`
  font-size: 21px;
  font-weight: bold;
  text-align: center;
  color: #0d0d0d;
  margin-bottom: 5px;
`;
const SignupTitleBox = styled.div`
  margin-top: 30px;
`;
const SignupTitle = styled.div`
  color: #000;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #000;
`;

const SignupBox = styled.div`
  padding: 15px 20px 20px;
  & table {
    border-spacing: 0;
    border: 0;
    border-collapse: collapse;
    width: 100%;
    height: 100%;
    & tbody {
      margin: 0;
      padding: 0;
      & th {
        height: 15px;
        font-size: 13px;
        text-align: left;
        color: #2c2c2c;
        width: 30%;
        vertical-align: initial;
        line-height: 44px;
      }
      & td {
        padding-bottom: 5px;
        & input {
          width: 100%;
          height: 44px;
          font-size: 13px;
          color: #2c2c2c;
          margin-bottom: 10px;
          border-radius: 2px;
          border: 0.7px solid #dadada;
          padding: 14px;
          box-sizing: border-box;
        }
      }
    }
  }
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

export default Signup;
