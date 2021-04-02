import React from 'react';
import styled from 'styled-components';

function Login(props) {
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
          <Title>로그인</Title>
        </TitleBox>
        <LoginTitleBox>
          <LoginTitle>통합ID 로그인</LoginTitle>
        </LoginTitleBox>

        <InputBox>
          <Input type='text' placeholder='아이디' />
        </InputBox>
        <InputBox>
          <Input type='text' placeholder='비밀번호' />
        </InputBox>
        <FindId>
          <span
            onClick={() => {
              history.push('/');
            }}
          >
            아이디/비밀번호 찾기{' '}
            <img
              src='https://auth.dano.me/res/images/ec1e39bf2b6a3857a9e6bd2c3364a67f.png'
              alt='화살표'
            />
          </span>
        </FindId>
        <div>
          <LoginBtn>로그인</LoginBtn>
          <SignupBtn
            onClick={() => {
              history.push('/signup');
            }}
          >
            회원가입
          </SignupBtn>
        </div>
        <SnsBox>
          <SnsText>SNS로 시작하기</SnsText>
          <SnsBtnBox>
            <KakaoBtn>
              <img
                src='https://auth.dano.me/res/images/49c343639ceea64b1fe7f46e2d6442ef.svg'
                alt='카톡'
              />
              카카오톡
            </KakaoBtn>

            <AppleBtn>
              <img
                src='https://auth.dano.me/res/images/0a578dbded0dfd9ed03290e39f9b1b22.svg'
                alt='애플'
              />
              Apple
            </AppleBtn>
          </SnsBtnBox>
        </SnsBox>
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
const LoginTitleBox = styled.div`
  margin-top: 30px;
`;
const LoginTitle = styled.div`
  color: #ff6f61;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #ff6f61;
`;
const InputBox = styled.div`
  margin-top: 15px;
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

const FindId = styled.div`
  text-align: right;
  margin: 12px 0;
  font-size: 13px;
  & span {
    color: #b0b0b0;
    text-decoration: underline;
    margin: 0;
    padding: 0;
    cursor: pointer;
    & img {
      width: 7px;
      margin-left: 5px;
    }
  }
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

const SnsBox = styled.div`
  padding-top: 40px;
`;
const SnsText = styled.div`
  color: rgb(59, 59, 59);
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
  line-height: 14px;
`;
const SnsBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const KakaoBtn = styled.button`
  height: 50px;
  width: 47%;
  border-radius: 27.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  background-color: rgb(254, 229, 0);
  border: 0;
  cursor: pointer;
  & img {
    width: 22px;
    margin-right: 12px;
  }
`;
const AppleBtn = styled.button`
  height: 50px;
  width: 47%;
  border-radius: 27.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(218, 218, 218);
  cursor: pointer;
  & img {
    width: 22px;
    margin-right: 12px;
  }
`;

export default Login;
