import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';


function Cart(props) {
    const { history } = props;

    return (
        <React.Fragment>
        <div classNAme="Cart">
            <Header/>
                <Container>
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
                    <CartContainer>
                        <Thead>
                            <tr>
                                <td>상품정보</td>
                                <td>수량</td>
                                <td>주문금액</td>
                            </tr>
                        </Thead>
                        <Tbody>
                            <Img src={props.image_url} alt='item-img'/>
                            <Title>{props.product_name}</Title>
                            <Title>{props.product_quantity}</Title>
                            <Title>{props.product_price}</Title>
                        </Tbody>
                    </CartContainer>
                    <PriceContainer>
                        <PriceHead>
                            <tr>
                                <td>총 상품 금액</td>
                                <td>총 할인가격</td>
                                <td>총 결제금액</td>
                            </tr>
                        </PriceHead>
                        <PriceBody>
                            <tr>
                                <td>{props.product_price}원</td>
                                <td>0 원</td>
                                <td>{props.product_price}원</td>
                            </tr>
                        </PriceBody>
                    </PriceContainer>
                    <Btn>
                        <ShoppingBtn
                        onClick={() => {
                            history.push('/');
                          }}
                        >
                            쇼핑하러 가기
                        </ShoppingBtn>
                        <PurchaseBtn>
                            구매하기
                        </PurchaseBtn>
                    </Btn>
                </Container>    
            <Footer/>
        </div>
    </React.Fragment>
    )
}

const Container = styled.div`
    // width: 1140px;
    margin: auto; 
    display: table;

`;

const CartContainer = styled.div`
    display: table;
    border-collapse: separate;
    border-spacing: 0 10px;
    text-align: center;
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
const Thead = styled.div`
    background: rgb(248, 248, 248);
    border-top: 2px solid rgb(51, 51, 51);
    // display: table-header-group;
    // vertical-align: middle;
    // border-color: inherit;
    // border-collapse: separate;
    // border-spacing: 0 10px;
    width: 700px;
    display: table;   
`;
const PriceContainer = styled.div`
    // border-top: 2px solid rgb(51, 51, 51);
    display: table;
    width: 700px;
    text-align: center;
    margin-bottom: 80px;
`;
const PriceHead = styled.div`
    background: rgb(248, 248, 248);
    border-top: 2px solid rgb(51, 51, 51);
    width: 700px;
    display: table;
`;
const PriceBody = styled.div`
    // border-bottom: 1px solid rgb(51, 51, 51);
    width: 700px;
    display: table;
`;
const Img = styled.div`
    display: table;

`;
const Title = styled.div`
    // display: table;
    line-height: 24px;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    margin: 50px 0px 30px 0px;

`;
const Tbody = styled.div`
    display: table;

`;
const Btn = styled.div`
    margin: 50px 90px;
    

`;
const ShoppingBtn = styled.div`
    background: rgb(255, 255, 255);
    border: 1px solid rgb(218, 218, 218);
    color: rgb(105, 105, 105);
    height: 52px;
    font-size: 16px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 10px 0px 20px;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    width: 256px;
    display: inline-flex;
    cursor: pointer;
    margin: 0px 5px;
`;

const PurchaseBtn = styled.div`
    background-color: rgb(255, 111, 97);
    color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    opacity: 1;
    height: 52px;
    width: 256px;
    display: inline-flex;
    cursor: pointer;
    margin: 0px 5px;
`;



export default Cart;