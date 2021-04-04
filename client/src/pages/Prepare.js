import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import styled from 'styled-components';

function Prepare(props) {
  return (
    <Container>
      <Modal>
        <GoBack
          onClick={() => {
            props.history.goBack();
          }}
        >
          <ExitToAppIcon style={{ fontSize: '30px', color: '#EC7063' }} />
        </GoBack>
        <h1>
          페이지 준비중입니다.
          <br />
          <HourglassEmptyIcon style={{ fontSize: '60px', color: '#85C1E9' }} />
          <br />
          돌아가기 버튼을 눌러주세요 :)
        </h1>
      </Modal>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 24px 50px;
  border-radius: 4px;
  width: 600px;
  height: 400px;
  box-sizing: border-box;
  & h1 {
    line-height: 2;
    text-align: center;
    color: #99a3a4;
  }
  @media only screen and (max-width: 768px) {
    & h1 {
      line-height: 1.5;
    }
  }
`;
const GoBack = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: relative;
  left: -30px;
`;
export default Prepare;
