import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { getCookie } from '../shared/Cookie';

// 마이 페이지

function Mypage(props) {
  const cookie = getCookie('is_login') ? true : false;
  useEffect(() => {
    if (!cookie) {
      // 쿠키에 토큰 없으면 접근 차단
      window.alert('잘못된 접근입니다!');
      history.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { history } = props;
  const username = useSelector((state) => state.user.user?.username);

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
              history.push('/purchase');
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
              history.push(`/user/mypage/${username}`);
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
