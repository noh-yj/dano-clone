import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useDispatch, useSelector} from "react-redux";
import { applyMiddleware } from 'redux';

function FullCart(props) {
    const { history } = props;
    const product_info = useSelector(state => state.cart.cart_list);
    console.log(product_info);

    return (
        <React.Fragment>
        <div className="Cart">
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
                            <thead>
                                <tr>
                                    <td style={{width:300}}>상품정보</td>
                                    <td>수량</td>
                                    <td>주문금액</td>
                                    <td>배송비</td>
                                </tr>
                            </thead>
                        </Thead>
                        <Tbody>
                            <tbody>
                                <tr>
                                    <td colSpan="2"><InfoBox>
                                        {/* useSelector제대로 안돼서 일단 임의로 데이터 넣어둠 */}
                                        <img src={product_info.image_url} alt='item-img' style={{width: 90, height:90, borderRadius: 8}}/>
                                        {product_info.product_name}
                                        &nbsp; 다노 프로틴 브라우니 1BOX (5개입) &nbsp;
                                        <DeleteBtn>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L15 15" stroke="#A1A1A1" stroke-linecap="square">
                                            </path><path d="M15 1L1 15" stroke="#A1A1A1" stroke-linecap="square">
                                                </path></svg>
                                        </DeleteBtn>
                                    </InfoBox></td>
                                {/* <tr style={{marginLeft: 40}}> */}
                                    <td>
                                    <ItemQuantityBox>2</ItemQuantityBox>

                                        {/* <ItemQuantityBox>{product_info.product_quantity}</ItemQuantityBox> */}
                                    </td>
                                {/* <tr style={{marginLeft: 170}}> */}
                                    <td>
                                    <ItemPrice>19000*2</ItemPrice></td>

                                    {/* <ItemPrice>{product_info.product_price}*{product_info.product_quantity}</ItemPrice></td></tr> */}
                                    <td>무료</td>
                                </tr>
                            </tbody>
                        </Tbody>
                            
                    </CartContainer>
                    <PriceContainer>
                        <PriceHead>
                            <tr>
                                <td style={{marginLeft: 100}}>총 상품</td>
                                <td>총 할인가격</td>
                                <td>총 결제금액</td>
                            </tr>
                        </PriceHead>
                        <PriceBody>
                            <tr>
                                {/* <td>{product_info.product_price}원</td> */}
                                <td>19000원</td>
                                <Sign>-</Sign>
                                <td>0 원</td><Sign>=</Sign>
                                {/* <td>{product_info.product_price}원</td> */}
                                <td>19000원</td>
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
                        <PurchaseBtn onClick={() => {history.push('/OrderList');}}>
                            구매하기
                            {/* // 장바구니에서 구매 목록으로 데이터 모두 넘어가기
                            // 장바구니에서 데이터 모두 삭제 */}
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
    // width: 100%;
    position: relative;
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
const DeleteBtn = styled.div`
    cursor: pointer;

`;
const Thead = styled.div`
    background: rgb(248, 248, 248);
    border-top: 2px solid rgb(51, 51, 51);
    font-weight: bold;
    width: 700px;
    height: 50px;
    display: table;
    text-align: center;
`;

const Sign = styled.div`
    // position: absolute;
    // left: 0px;
    // top: 36%;
    background: rgb(250, 248, 248);
    width: 30px;
    height: 30px;
    border-radius: 100%;
    line-height: 32px;
    font-size: 18px;
    font-weight: normal;
`;
const PriceContainer = styled.div`
    display: table;
    border-collapse: separate;
    border-spacing: 0 10px;
    text-align: center;
`;
const PriceHead = styled.div`
    background: rgb(248, 248, 248);
    border-top: 2px solid rgb(51, 51, 51);
    font-weight: bold;
    width: 700px;
    height: 50px;
    display: table;
    text-align: center;
    vertical-align: middle;

`;
const PriceBody = styled.div`
    // border-bottom: 1px solid rgb(51, 51, 51);
    width: 700px;
    display: table;
    // border-collapse: collapse;
    border-bottom: 1px solid rgb(236, 236, 236);
    border-top: 1px solid rgb(236, 236, 236);
    vertical-align: middle;
    `;
const InfoBox = styled.div`
    // width: 50px;
    text-align: center;
    font-size: 14px;
    display: flex;
`;
const ItemQuantityBox = styled.div`
    text-align: center;
    font-size: 14px;
    display: flex;
`;
const ItemPrice = styled.div`
    text-align: center;
    font-size: 14px;
    display: flex;
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
    width: 700px;
    display: flex;
    border-bottom: 1px solid rgb(236, 236, 236);
    border-top: 1px solid rgb(236, 236, 236);
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



export default FullCart;