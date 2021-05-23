import React from 'react';
import styled from 'styled-components';

function MiniItem(props) {
  const price = props.price;
  return (
    <>
      <ItemContainer>
        <ItemBody>
          <Img src={props.imageUrl} alt='item-img' />
        </ItemBody>
        <ItemInfo>
          <Title>{props.title}</Title>
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
  width: 275px;
  margin-top: 25px;
  margin-right: 10px;
  margin-bottom: 50px;
  position: relative;
  height: 260px;
`;
const ItemBody = styled.div`
  height: 190px;
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
  margin-top: 15px;
  cursor: default;
  text-align: center;
`;
const Title = styled.span`
  font-size: 14px;
  width: 275px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 21px;
  padding-bottom: 14px;
  color: rgb(59, 59, 59);
  height: 22px;
  cursor: pointer;
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

export default MiniItem;
