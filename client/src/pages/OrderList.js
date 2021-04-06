// empty
import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderList = (props) => {
    
    return (
        <React.Fragment>
            <Header/>
            <Container>
                <Title>
                    주문목록/배송조회
                    <CurrentPage>
                        01 마이페이지 
                        <RightArrow></RightArrow>
                        <Strong>02 주문목록/배송조회</Strong>
                    </CurrentPage>
                </Title>
                <Subtitle>
                    주문상품 정보
                </Subtitle>
                <ListContainer>
                    <Thead>
                        <tr>
                            <td>날짜 및 주문번호</td>
                            <td>주문정보</td>
                            <td>수량</td>
                            <td>총 상품 금액</td>
                            <td>배송비</td>
                            <td>총 주문금액</td>
                            <td>주문처리상태</td>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr>
                            구매한 내역이 없습니다 :)
                        </tr>
                    </Tbody>
                </ListContainer>
            </Container>   
            <Footer/>
        </React.Fragment>
    )};

const Container = styled.div`
    display: table;
    margin: auto;
    // text-align: center;
    // padding: 30px;
    // width: 100%;
`;
const ListContainer = styled.div`
    display: table;
    border-collapse: separate;
    border-spacing: 0 10px;
`;
const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin: 70px 0px;
`;

const Subtitle = styled.div`
    font-size: 14px;
    margin: 20px 0px;
`;

const Thead = styled.div`
    border-top: 2px solid rgb(51, 51, 51);
    display: table;
    font-weight: normal;
    font-size: 14px;
    width: 1140px;
    max-width: 100%;
    text-align: center;
    font-weight: bold;
    // letter-spacing: -0.3px;
    // vertical-align: middle;
    // border-color: inherit;
    `;

const Tbody = styled.div`
    text-align: center;
    margin: 20px 0px;
    font-size: 12px;
    letter-spacing: -0.3px;
    text-indent: initial;
    display: table;
    border-bottom: 1px solid rgb(51, 51, 51);
    width: 1140px;
    max-width: 100%;
`;
const CurrentPage = styled.div`
    float: right;
    font-size: 14px;
    letter-spacing: -0.3px;
    line-height: 160%;
`;

const Strong = styled.div`
    font-weight: bold;
    color: #ff6f61;
    display:inline-block;
`;

const RightArrow = styled.div`
    width: 7px;
    height: 7px;
    border-top: 1px solid #000;
    border-right: 1px solid #000;
    transform: rotate(45deg);
    display:inline-block;
    margin-right: 5px;
`;


export default OrderList;

// full