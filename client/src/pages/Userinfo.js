import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DeleteModal from '../components/DeleteModal';
import { emailCheck, phone_numCheck } from '../shared/common';
import { getCookie } from '../shared/Cookie';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

function Userinfo(props) {
  const { history } = props;
  const cookie = getCookie('is_login') ? true : false;
  useEffect(() => {
    if (!cookie) {
      window.alert('잘못된 접근입니다!');
      history.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [user_email, setUserEmail] = useState(user?.email);
  const [phone_num, setPhoneNum] = useState(user?.phone);
  const [deleteModal, setDeleteModal] = useState(false);

  const OpenModal = () => {
    setDeleteModal(true);
  };
  const CloseModal = () => {
    setDeleteModal(false);
  };
  let confirm = true;
  if (
    password === '' ||
    passwordCheck === '' ||
    user_email === '' ||
    phone_num === ''
  ) {
    confirm = true;
  } else {
    confirm = false;
  }
  const update = () => {
    if (password !== passwordCheck) {
      window.alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }
    if (
      password.length < 4 ||
      password.length > 16 ||
      passwordCheck.length < 4 ||
      passwordCheck.length > 16
    ) {
      window.alert('비밀번호는 형식이 맞지 않습니다.');
      return;
    }

    if (!emailCheck(user_email)) {
      window.alert('이메일 형식이 맞지 않습니다.');
      return;
    }
    if (!phone_numCheck(phone_num)) {
      window.alert('핸드폰 형식이 맞지 않습니다.');
      return;
    }
    dispatch(userActions.updateUserDB(password, user_email, phone_num));
  };
  return (
    <>
      <Header />
      <div>
        <MypageHeader>
          <LeftHeader>마이페이지</LeftHeader>
          <RightHeader>
            홈<div>&gt;</div>
            <span>마이페이지</span>
          </RightHeader>
        </MypageHeader>
        <Container>
          <Info>기본 정보 입력</Info>

          <InfoItem>
            <Title>아이디</Title>
            <InputBox>
              <DisableInput type='text' disabled value={user?.username} />
            </InputBox>
          </InfoItem>
          <InfoItem>
            <Title>비밀번호</Title>
            <InputBox>
              <Input
                type='password'
                placeholder='영문 대소문자/숫자/특수문자(4자~16자)'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </InputBox>
          </InfoItem>
          <InfoItem>
            <Title>비밀번호 확인</Title>
            <InputBox>
              <Input
                type='password'
                onChange={(e) => {
                  setPasswordCheck(e.target.value);
                }}
              />
            </InputBox>
          </InfoItem>
          <InfoItem>
            <Title>이름</Title>
            <InputBox>
              <DisableInput type='text' disabled value={user?.name} />
            </InputBox>
          </InfoItem>
          <InfoItem>
            <Title>이메일</Title>
            <InputBox>
              <Input
                type='text'
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                value={user_email}
              />
            </InputBox>
          </InfoItem>
          <InfoItem>
            <Title>휴대폰 번호</Title>
            <InputBox>
              <Input
                type='text'
                onChange={(e) => {
                  setPhoneNum(e.target.value);
                }}
                value={phone_num}
              />
            </InputBox>
          </InfoItem>
          <Line />
          <SubmitContainer>
            <button disabled={confirm} onClick={update}>
              저장
            </button>
            <DeleteUser>
              <span>탈퇴 하시겠습니까?</span>
              <Delete onClick={OpenModal}>회원탈퇴</Delete>
            </DeleteUser>
          </SubmitContainer>
        </Container>
      </div>
      <DeleteModal user={user} status={deleteModal} close={CloseModal} />
      <Footer />
    </>
  );
}

const MypageHeader = styled.div`
  padding: 40px 20px;
  cursor: default;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftHeader = styled.div`
  font-size: 20px;
  line-height: 20px;
  color: #000;
  font-weight: bold;
`;
const RightHeader = styled.div`
  display: flex;
  font-size: 14px;
  & div {
    width: 7px;
    height: 7px;
    margin-right: 5px;
  }
  & span {
    color: rgb(255, 111, 97);
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: auto;
  cursor: default;
  color: #000;
  font-size: 13px;
`;
const Info = styled.div`
  font-size: 16px;
  color: rgb(59, 59, 59);
  margin: 25px 20px 15px;
  border-bottom: 2.5px solid rgb(59, 59, 59);
  padding-bottom: 15px;
  font-weight: 600;
`;
const InfoItem = styled.div`
  display: flex;
  width: 100%;
  padding: 7.5px 20px;
  box-sizing: border-box;
  cursor: default;
`;
const Title = styled.div`
  width: 100px;
  line-height: 44px;
  flex-shrink: 0;
`;
const InputBox = styled.div`
  flex-grow: 1;
`;
const DisableInput = styled.input`
  background-color: rgb(242, 242, 242);
  line-height: 44px;
  height: 44px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 2px;
  width: 100%;
  outline: none;
  max-width: 275px;
  font-size: 14px;
  padding: 5px 10px;
  box-sizing: border-box;
`;
const Input = styled.input`
  line-height: 44px;
  height: 44px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 2px;
  width: 100%;
  outline: none;
  max-width: 275px;
  font-size: 14px;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const Line = styled.div`
  margin: 25px 20px 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const SubmitContainer = styled.div`
  width: 100%;
  padding: 0px 20px 20px;
  box-sizing: border-box;
  text-align: center;
  & button {
    width: 100%;
    max-width: 330px;
    margin: auto;
    height: 45px;
    line-height: 45px;
    font-size: 12px;
    border: 1px solid rgb(255, 111, 97);
    background: rgb(255, 111, 97);
    color: rgb(255, 255, 255);
    box-sizing: border-box;
    border-radius: 2px;
    outline: none;
    &:disabled {
      color: rgb(255, 255, 255);
      background: rgba(255, 111, 97, 0.5);
      border-color: rgba(195, 195, 195, 0.3);
    }
  }
`;
const DeleteUser = styled.div`
  margin: 1.5em;
  font-size: 11px;
  color: rgb(154, 154, 154);
  cursor: default;
`;
const Delete = styled.span`
  text-decoration: underline;
  margin-left: 1em;
  cursor: pointer;
`;

export default Userinfo;
