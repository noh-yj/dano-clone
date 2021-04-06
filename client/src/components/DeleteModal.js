import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

function DeleteModal({ user, status, close }) {
  const dispatch = useDispatch();
  const username = user.username;
  const deleteBtn = () => {
    dispatch(userActions.deleteUserDB(username));
  };

  return (
    <>
      {status ? (
        <>
          <Component onClick={close} />
          <ModalContainer>
            <Title>정말로 탈퇴하시겠습니까?</Title>
            <Button variant='contained' color='secondary' onClick={deleteBtn}>
              탈퇴하기
            </Button>
          </ModalContainer>
        </>
      ) : null}
    </>
  );
}

const Component = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  width: 50vw;
  height: 200px;
  border-radius: 10px;
  padding: 30px;
  box-sizing: border-box;
  z-index: 3000;
`;
const Title = styled.div`
  font-size: 16px;
  color: rgb(59, 59, 59);
  margin: 25px 20px 15px;
  padding-bottom: 15px;
  font-weight: 600;
`;

export default DeleteModal;
