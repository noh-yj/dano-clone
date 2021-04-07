import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Banner>
        <img
          alt='수상배너'
          src='https://danoshop.net/mall/upload/resource/common/w-footer-img-brand-2020@2x.png'
        />
      </Banner>
      <MainFooter>
        <ContactBlock>
          <Title>
            <svg
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{
                width: '24px',
                height: '24px',
                marginTop: '2px',
                marginBottom: '6px',
              }}
            >
              <path
                d='M10.9949 19H8.3639C7.06437 19 6 17.986 6 16.7459V9.72089C6 6.57474 8.70013 4 12.0005 4C15.2999 4 18 6.57474 18 9.72089V16.5'
                stroke='currentColor'
              ></path>
              <path
                d='M18 10H19C20.1046 10 21 10.8954 21 12V14C21 15.1046 20.1046 16 19 16H18'
                stroke='currentColor'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.7431 19.002C13.7431 19.8437 13.0599 20.5269 12.2181 20.5269C11.3764 20.5269 10.6932 19.8437 10.6932 19.002C10.6932 18.1602 11.3764 17.477 12.2181 17.477C13.0599 17.477 13.7431 18.1602 13.7431 19.002Z'
                stroke='currentColor'
              ></path>
              <path
                d='M6 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16H6'
                stroke='currentColor'
              ></path>
            </svg>
            &nbsp;무엇을 도와드릴까요
          </Title>
          <ContactTime>
            평일 10:00 ~ 18:00 (주말 및 공휴일 휴무) <br />
            점심시간 12:30 ~ 13:30{' '}
          </ContactTime>
        </ContactBlock>
        <div>
          <FirstBlock>
            <Title> 다노샵 </Title>
            <Contents>
              <Highlight>채팅 상담하기</Highlight>
              <hr style={{ width: 200 }} />
              문의 글 남기기
              <hr style={{ width: 200 }} />
              전화 문의하기 (02-2135-1885)
            </Contents>
          </FirstBlock>
        </div>
        <SecondBlock>
          <Title> 마이다노 </Title>
          <Contents>
            {' '}
            <Highlight>채팅 상담하기</Highlight>
            <hr style={{ width: 200 }} />
            문의 글 남기기{' '}
          </Contents>
        </SecondBlock>
        <ThirdBlock>
          <Title> 제휴 / 입점문의 </Title>
          <div>
            <Box href='https://forms.gle/yCTC138E3sQ68CoV8' target='_blank'>
              다노샵 입점 신청하기
            </Box>
            <Email>
              입점 제안 문의 &nbsp;
              <Atag href='mailto:support@danoshop.net'>
                support@danoshop.net
              </Atag>
            </Email>
            <Email>
              마케팅 제휴 문의 &nbsp;
              <Atag href='mailto:dano.mkt@gmail.com'>dano.mkt@gmail.com</Atag>
            </Email>
          </div>
          <div>
            <Img>
              <img
                alt='유튜브 다노TV'
                src='https://danoshop.net/mall/upload/resource/common/footer-icon-youtube.png'
              ></img>
              &nbsp;&nbsp;&nbsp;
              <img
                alt='인스타그램 다노샵'
                src='https://danoshop.net/mall/upload/resource/common/footer-icon-instagram.png'
              ></img>
              &nbsp;&nbsp;&nbsp;
              <img
                alt='다노 블로그'
                src='https://danoshop.net/mall/upload/resource/common/footer-icon-blog.png'
              ></img>
              &nbsp;&nbsp;&nbsp;
              <img
                alt='페이스북 다노'
                src='https://danoshop.net/mall/upload/resource/common/footer-icon-facebook.png'
              ></img>
            </Img>
          </div>
        </ThirdBlock>
      </MainFooter>

      <Bottom>
        <Text>
          다노샵 소개 | 통합 약관 | 이용 약관 |{' '}
          <strong>개인정보처리방침</strong>
          <br />
          <br />
          대표:정범윤 | 주소:서울시 마포구 토정로 271 (주)다노 |
          사업자등록번호:106-87-00202 사업자 정보 확인
          <br />
          개인정보보호책임자:이지수 | 통신판매업 신고번호:제2017-마포-0722 |
          건강기능식품판매업 신고번호:제 2018-0069040호
          <br />
          Copyright © DANO, Inc. All Rights Reserved.
          <br />
        </Text>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  max-height: 100%;
  margin: 0 auto;
  cursor: default;
`;

const MainFooter = styled.div`
  width: 1140px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
`;
const ContactBlock = styled.div`
  margin-right: -60px;
`;
const FirstBlock = styled.div`
  margin-right: -30px;
`;
const SecondBlock = styled.div`
  margin-left: -30px;
`;

const ThirdBlock = styled.div`
  margin-left: -60px;
  margin-right: 60px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ContactTime = styled.div`
  font-size: 14px;
  color: #a1a1a1;
  padding: 15px 0px;
`;
const Contents = styled.div`
  font-size: 16px;
  color: #a1a1a1;
  padding: 15px 0px;
  cursor: pointer;
`;
const Box = styled.div`
  border: 1px solid #e7e7e7;
  cursor: pointer;
  color: #a1a1a1;
  padding: 15px;
  text-align: center;
  font-size: 12px;
  margin: 20px 0px;
  border-radius: 10px;
`;
const Email = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 12px;
  line-height: 30px;
  @media screen and (max-width: 1024px) {
    display: block;
    line-height: 18px;
  }
`;
const Atag = styled.div`
  color: #a1a1a1;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #a1a1a1;
  }
`;
const Img = styled.div`
  width: 20px;
  height: 40px;
  display: flex;
  border: none;
  max-width: 100%;
  vertical-align: middle;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    padding-right: 200px;
    padding-top: 10px;
  }
`;

const Bottom = styled.div`
  display: flex;
  width: 100%;
  background-color: #f3f3f3;
  font-size: 12px;
  padding: 30px;
`;

const Text = styled.div`
  width: 1140px;
  margin: 0 auto;
  color: #a1a1a1;
  & strong {
    color: #696969;
  }
`;

const Highlight = styled.div`
  color: #ff6f61;
`;

const Banner = styled.div`
  & img {
    width: 100%;
  }
`;

export default Footer;
