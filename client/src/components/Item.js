import React from 'react';
import styled from 'styled-components';

function Item(props) {
  const price = props.price;

  return (
    <>
      <ItemContainer>
        <ItemBody>
          <Img src={props.image_url} alt='item-img' />
        </ItemBody>
        <ItemInfo>
          <Title>{props.product_name}</Title>
          <PriceBox>
            <Price>
              {price.slice(0, -1)}
              <Won>{price.slice(-1)}</Won>
            </Price>
          </PriceBox>
        </ItemInfo>
      </ItemContainer>
    </>
  );
}

const ItemContainer = styled.div`
  width: 274px;
  margin-right: 10px;
  margin-bottom: 50px;
  height: 389px;
  background-color: rgb(255, 255, 255);
  border: none;
`;
const ItemBody = styled.div`
  height: 274px;
  width: 100%;
  & Img:hover {
    opacity: 0.5;
  }
`;
const Img = styled.img`
  cursor: pointer;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const ItemInfo = styled.div`
  margin: 0 5px;
  cursor: default;
`;
const Title = styled.span`
  font-size: 14px;
  width: 274px;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 21px;
  padding-bottom: 14px;
  color: rgb(59, 59, 59);
`;
const PriceBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
const Won = styled.small`
  font-size: 14px;
  margin-left: 2px;
  font-weight: normal;
`;

export default Item;
