import React from 'react';
import styled from 'styled-components';

function Item2(props) {
  const price = props.price;

  return (
    <>
      <ItemContainer>
        <ItemInfo>
          <Title>{props.title}</Title>
          <PriceBox>
            <Price>
              {price.slice(0, -1)}
              <Won>{price.slice(-1)}</Won>
            </Price>
          </PriceBox>
        </ItemInfo>
        <ItemBody>
          <Img src={props.imageUrl} alt='item-img' />
        </ItemBody>
      </ItemContainer>
    </>
  );
}

const ItemContainer = styled.div`
  width: 274px;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #ececec;
  margin-right: 10px;
  margin-bottom: 50px;
  padding: 0;
`;
const ItemInfo = styled.div`
  flex-shrink: 0;
  margin: 20px 16px 16px 24px;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
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
  margin-top: 10px;
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

export default Item2;
