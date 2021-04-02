// empty
import React from 'react';
import styled from "styled-components";

const OrderList = (props) => {
    return (
        <React.Fragment>
            <div style={{margin: 30}}>
                <h2>
                    장바구니 <br/><br/>
                </h2>
                <hr/>
                    <text style={{padding: 30}}> 장바구니에 담긴 상품이 없습니다. </text>
                <hr/>
            </div>
        </React.Fragment>
    )};

export default OrderList;

// full