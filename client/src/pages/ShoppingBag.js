// empty
import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShoppingBag = (props) => {
    const { history } = props;
    return (
        // <React.Fragment>
        <React.Fragment>
            <Container>
                <Header/>
                    <Title>
                        장바구니
                        <CurrentPage>
                            <Strong>01 장바구니</Strong>
                            <RightArrow/>
                            02 주문/결제
                            <RightArrow/>
                            03 주문완료
                        </CurrentPage>
                    </Title>
                    <List>
                        장바구니에 담긴 상품이 없습니다.
                    </List>
                    <Btn>
                        추천상품 보러가기
                    </Btn>
            </Container>
            <Footer/>
        </React.Fragment>
    );}
    


    const Container = styled.div`
        text-align: center;
        padding: 30px;
        width: 100%;
        // width: 1140px;
    `;
    const Title = styled.div`
        line-height: 24px;
        font-size: 24px;
        font-weight: bold;
        text-align: left;
        margin: 50px 0px 30px 0px;
    `;
    const CurrentPage = styled.div`
        float: right;
        font-size: 14px;
        letter-spacing: -0.3px;
        line-height: 160%;
        font-weight: normal;
    `; 

    const Strong = styled.div`
        font-weight: bold;
        color: #000000;
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
    const List = styled.div`
        padding: 100px 0px;
        border-top: 2px solid rgb(51, 51, 51);
        border-bottom: 1px solid rgb(236, 236, 236);
        font-size: 14px;
    `;
    const Btn = styled.div`
        border: 1px solid rgb(255, 111, 97);
        background-color: rgb(255, 255, 255);
        color: rgb(255, 111, 97);
        width: 170px;
        height: 45px;
        line-height: 47px;
        margin: 50px auto;
        cursor: pointer;
        text-align: center;
        font-size: 14px;
    `;

export default ShoppingBag;