import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import EmptyCart from '../components/EmptyCart';
import FullCart from '../components/FullCart';

function Cart(props) {
    const product_info = useSelector(state => state.cart.cart_list);
    console.log(product_info);
if (product_info.length === 0){
    return (
        <EmptyCart/>
    )

} else {
    return (
        <FullCart/>

    )};}



export default Cart;