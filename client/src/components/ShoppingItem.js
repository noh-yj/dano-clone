import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { actionCreators as cartActions } from '../redux/modules/cart';
function ShoppingItem(props) {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteCartDB(props.cartId));
  };
  return (
    <>
      <Tr>
        <td>
          <ItemBox>
            <img src={props.imageUrl} alt='item-img' />

            <TitleBox>
              <div>{props.title}</div>
              <DeleteBtn onClick={deleteItem}>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 1L15 15'
                    stroke='#A1A1A1'
                    strokeLinecap='square'
                  ></path>
                  <path
                    d='M15 1L1 15'
                    stroke='#A1A1A1'
                    strokeLinecap='square'
                  ></path>
                </svg>
              </DeleteBtn>
            </TitleBox>
          </ItemBox>
        </td>
        <td>{props.amount}</td>
        <td>
          <Span>{props.price}</Span>
        </td>
        <td>
          <Span>무료</Span>
        </td>
      </Tr>
    </>
  );
}

const Tr = styled.tr`
  height: 131px;
  & td {
    border: 1px solid rgb(236, 236, 236);
  }
  & td:first-child {
    border-left: none;
    width: 500px;
  }
  & td:last-child {
    border-right: none;
  }
`;

const ItemBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 500px;
  padding: 0 50px;
  box-sizing: border-box;
  & img {
    width: 90px;
    height: 90px;
    margin: 20px 0;
    border-radius: 9px;
    cursor: pointer;
  }
`;

const TitleBox = styled.div`
  margin: 40px;
`;

const DeleteBtn = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Span = styled.span`
  font-weight: bold;
  font-size: 16px;
  margin-right: 3px;
  color: rgb(59, 59, 59);
`;

export default ShoppingItem;
