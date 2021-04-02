import React from 'react';
import styled from "styled-components";

const Footer = () => (
    <div className = "footer">
        <Container>
            <div>
                <h3> 무엇을 도와드릴까요? </h3>
                <text style={{color: "grey"}}>
                평일 10:00 ~ 18:00 (주말 및 공휴일 휴무) <br/>
                점심시간 12:30 ~ 13:30 </text>
            </div>
            <div style={{marginLeft: 50}}>
                <h3> 다노샵 </h3>
                <text style={{color: "grey"}}>
                채팅 상담하기 <br/>
                <hr style={{width: 200}}/>
                문의 글 남기기 <br/>
                <hr style={{width: 200}}/>
                전화 문의하기 (02-2135-1885) </text>
            </div>
            <div style={{marginRight: 50, marginLeft: 50}}>
                <h3> 마이다노 </h3>
                <text style={{color: "grey"}}> 채팅 상담하기 <br/>
                <hr style={{width: 200}}/>
                문의 글 남기기 </text>
            </div>
            <div style={{marginLeft: 50}}>
                <h3> 제휴 / 입점문의 </h3>
                <button style={{paddingRight: 30, paddingLeft: 30, paddingTop: 10, paddingBottom:10}}
                >다노샵 입점 신청하기</button> <br/>
                <span>
                    입점 제안 문의 support@danoshop.net <br/>
                    마케팅 제휴 문의 dano.mkt@gmail.com <br/>
                </span>
            </div>
        </Container>

        <SecondContainer>
            <text>
                다노샵 소개 | 통합 약관 | 이용 약관 | 개인정보처리방침
                <br/><br/>
                대표:정범윤 | 주소:서울시 마포구 토정로 271 (주)다노 | 사업자등록번호:106-87-00202 사업자 정보 확인<br/>
                개인정보보호책임자:이지수 | 통신판매업 신고번호:제2017-마포-0722 | 건강기능식품판매업 신고번호:제 2018-0069040호<br/>
                Copyright © DANO, Inc. All Rights Reserved.<br/>
            </text>
        </SecondContainer>
    </div>
)

const Container = styled.div`
    display: flex;
    margin: 30px; 
`;

const SecondContainer = styled.div`
    display: felx;
    background-color: lightgrey; 
    font-size: 12px;
    padding: 30px;
    
`;


// const SecondBlock = styled.div`
//     display: flex;
// `;

export default Footer;