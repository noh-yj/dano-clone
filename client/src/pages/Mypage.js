import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Mypage(props) {
  const { history } = props;
  return (
    <>
      <Header />

      <Container>
        <Img
          src='https://danoshop.net/mall/upload/resource/mypage/intro.png'
          alt='banner'
        />
        <Ul>
          <li
            onClick={() => {
              history.push('/orderlist');
            }}
          >
            주문내역
          </li>
          <li
            onClick={() => {
              history.push('/prepare');
            }}
          >
            나의 게시글
          </li>

          <li
            onClick={() => {
              history.push('/user/mypage');
            }}
          >
            회원정보수정
          </li>
          <li
            onClick={() => {
              history.push('/prepare');
            }}
          >
            배송주소록 관리
          </li>
          <li
            onClick={() => {
              history.push('/prepare');
            }}
          >
            포인트 조회
          </li>
          <li
            onClick={() => {
              history.push('/prepare');
            }}
          >
            적립금 조회
          </li>
          <li
            onClick={() => {
              history.push('/prepare');
            }}
          >
            예치금 조회
          </li>
          <li
            onClick={() => {
              history.push('/prepare');
            }}
          >
            나의 쿠폰
          </li>
          <li
            onClick={() => {
              history.push('/prepare');
            }}
          >
            나의 등급
          </li>
        </Ul>
      </Container>

      <Footer />
    </>
  );
}

const Container = styled.div`
  min-height: 350px;
  text-align: center;
  max-width: 840px;
  margin: 50px auto 0;
  cursor: default;
`;
const Img = styled.img`
  width: 840px;
  max-width: 100%;
  border: none;
  vertical-align: middle;
`;
const Ul = styled.ul`
  margin-top: 15px;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  letter-spacing: -0.3px;
  padding: 0;
  display: flex;
  & li {
    list-style: none;
    padding: 0 13px;
    margin: 20px auto;
    border-right: 1px solid #e8e8e8;
    line-height: 14px;
    color: #000;
    cursor: pointer;
    font-size: 14px;
    font-weight: normal;
    &:last-child {
      border-right: none;
    }
  }
`;

export default Mypage;
