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
                <table>
                    <Table>
                        <Thead>
                                <th className='th1'>날짜 및 주문번호</th>
                                <th>주문정보</th>
                                <th>수량</th>
                                <th>총 상품 금액</th>
                                <th>배송비</th>
                                <th>총 주문금액</th>
                                <th>주문처리상태</th>
                        </Thead>
                            <Tbody>
                            <th>
                                구매한 내역이 없습니다 :)
                            </th>
                        </Tbody>
                    </Table>
                </table>
            </Container>   
            <Footer/>
        </React.Fragment>
    )};

const Container = styled.div`
    // display: flex;
    // text-align: center;
    // padding: 30px;
    // width: 100%;
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
const Table = styled.div`
    border-top: 2px solid #000;
    border-bottom: 1px solid #797979;
    // display: table-column-group;
    width: 100%;
    margin-bottom: 100px;
    display: flex;
    `;

const Thead = styled.div`
    // vertical-align: inherit;
    display: fixed;
    margin: 0 auto;
    font-weight: normal;
    font-size: 14px;
    letter-spacing: -0.3px;
    margin: 30px 0px;
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    `;

const Tbody = styled.div`
    text-align: center;
    margin: 20px 0px;
    font-size: 12px;
    letter-spacing: -0.3px;
    text-indent: initial;
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