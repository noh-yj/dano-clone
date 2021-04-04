import React from 'react';
import styled from "styled-components";

const Footer = () => (
    <div className = "footer">

            <Banner>
                <img alt="수상배너" src="https://danoshop.net/mall/upload/resource/common/w-footer-img-brand-2020@2x.png"/>
            </Banner>
        <Container>
            <div>
                
            <Title> 무엇을 도와드릴까요 </Title>
                <ContactTime>
                평일 10:00 ~ 18:00 (주말 및 공휴일 휴무) <br/>
                점심시간 12:30 ~ 13:30 </ContactTime>
            </div>
            <div>
            <FirstBlock>
                <Title> 다노샵 </Title>
                <Contents>
                    채팅 상담하기 <br/>
                    <hr style={{width: 200}}/>
                    문의 글 남기기 <br/>
                    <hr style={{width: 200}}/>
                    전화 문의하기 (02-2135-1885) 
                </Contents>
            </FirstBlock>
            </div>
            <div style={{marginRight: 50, marginLeft: 50}}>
            <Title> 마이다노 </Title>
                <Contents> 채팅 상담하기 <br/>
                <hr style={{width: 200}}/>
                문의 글 남기기 </Contents>
            </div>
            <FourthBlock>
                <Title> 제휴 / 입점문의 </Title>
                <div>
                    <Box href="https://forms.gle/yCTC138E3sQ68CoV8" target="_blank">
                        다노샵 입점 신청하기
                    </Box>
                    <Email>
                        입점 제안 문의 &nbsp;&nbsp;
                        <Atag href="mailto:support@danoshop.net">support@danoshop.net
                        </Atag>
                    </Email>
                    <Email>
                            마케팅 제휴 문의 &nbsp;&nbsp;
                        <Atag href="mailto:dano.mkt@gmail.com">
                            dano.mkt@gmail.com
                        </Atag>
                    </Email>
                </div>
                <div>
                    <div>
                        <Atag href="https://www.youtube.com/channel/UCxM_KJ601hwrOpjVC07iMVQ" target="_blank">
                            <Img alt="유튜브 다노TV" src="https://danoshop.net/mall/upload/resource/common/footer-icon-youtube.png"/>
                        </Atag>
                        <Atag href="http://instagram.com/danoshop_" target="_blank">
                            <Img alt="인스타그램 다노샵" src="https://danoshop.net/mall/upload/resource/common/footer-icon-instagram.png"/>
                        </Atag>
                        <Atag href="https://blog.naver.com/dagymdieting" target="_blank">
                            <Img alt="다노 블로그" src="https://danoshop.net/mall/upload/resource/common/footer-icon-blog.png"/>
                        </Atag>
                        <Atag href="https://www.facebook.com/dietnote" target="_blank">
                            <Img alt="페이스북 다노" src="https://danoshop.net/mall/upload/resource/common/footer-icon-facebook.png"/>
                        </Atag>
                    </div>
                </div>
            </FourthBlock>

        </Container>

        <Bottom>
            <text>
                다노샵 소개 | 통합 약관 | 이용 약관 | <span>개인정보처리방침</span>
                <br/><br/>
                대표:정범윤 | 주소:서울시 마포구 토정로 271 (주)다노 | 사업자등록번호:106-87-00202 사업자 정보 확인<br/>
                개인정보보호책임자:이지수 | 통신판매업 신고번호:제2017-마포-0722 | 건강기능식품판매업 신고번호:제 2018-0069040호<br/>
                Copyright © DANO, Inc. All Rights Reserved.<br/>
            </text>
        </Bottom>
    </div>
)

const Container = styled.div`
    display: flex;
    margin: 30px; 
    max-width: 100%;
    max-height: 100%;
`;

const FirstBlock = styled.div`
    margin: 0px 40px;
`;

const FourthBlock = styled.div`
    margin: 0px 20px; 
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
    font-size: 12px;
    line-height: 30px;
    setence-spacing: 20px;
`;
const Atag = styled.div`
    color: #a1a1a1;
    font-size: 12px;
    // margin: 0 11px 0 5px;
    cursor: pointer;
    // line-height: 40px;
    text-decoration: none;
    &:hover {
    text-decoration: none;
    color: #a1a1a1;
  }
`;
const Img = styled.div`
    display: flex;
    border: none;
    vertical-align: middle;
    max-width: 100%;
    margin: 0;
    padding: 0;
    
`;

const Bottom = styled.div`
    display: flex;
    background-color: #F3F3F3; 
    font-size: 12px;
    padding: 30px;    
    .span{font-weight: bold;}
`;


const Banner = styled.div`
    & img {
       width:100%;
    };
`;


export default Footer;