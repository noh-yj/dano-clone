// empty
import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';

const OrderList = (props) => {
    return (
        <React.Fragment>
            <Header/>
            <div style={{margin: 80}}>
                <h2>
                    주문목록/배송조회 <br/><br/>
                </h2>
                <text>주문상품 정보</text>
                <div style={{size: 100}}><hr/>
                    <text style={{padding: 30}}> 날짜 및 주문번호 </text>
                <hr/></div>

  테이블 구현 필요!!!!!!
            </div>

        </React.Fragment>
    )};


const Btn = styled.div`
    text-align: center;
    padding: 30px;
`;

export default OrderList;

// full