import React from 'react';
import styled from 'styled-components';

function OrderItem(props) {
  return (
    <>
      <>
        <Tr>
          <td>
            <ItemBox>
              <img
                src={
                  'https://danoshop.net/mall/upload/2021/03/22/n6y6niunfvmv7mdy44e8.png'
                }
                alt='item-img'
              />

              <TitleBox>
                <div>다노 프로틴 브라우니 1BOX (5개입)</div>
              </TitleBox>
            </ItemBox>
          </td>
          <td>2</td>
          <td>
            <Span>19,000</Span>원
          </td>
          <td>
            <Span>무료</Span>
          </td>

          <td>
            <Span>배송 완료</Span>
          </td>
        </Tr>
      </>
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

const Span = styled.span`
  font-weight: bold;
  font-size: 16px;
  margin-right: 3px;
  color: rgb(59, 59, 59);
`;

export default OrderItem;
