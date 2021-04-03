// empty
import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';

const ShoppingBag = (props) => {
    return (
        <React.Fragment>
            <Header/>
            <div style={{margin: 80}}>
                <h2>
                    장바구니 <br/><br/>
                </h2>
                <div><hr/>
                    <text style={{padding: 30}}> 장바구니에 담긴 상품이 없습니다. </text>
                <hr/></div>
                <Btn><button style={{width: 300, height: 50}}>추천상품 보러가기</button>
                    </Btn>
            </div>
        </React.Fragment>
    )};


const Btn = styled.div`
    text-align: center;
    padding: 30px;
`;

export default ShoppingBag;

// full