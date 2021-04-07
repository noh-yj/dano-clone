import React from 'react';
import styled from 'styled-components';

function Spinner() {
  return (
    <>
      <SpinnerImg />
    </>
  );
}

const SpinnerImg = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  &::after {
    content: '';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 4px solid #ff6f61;
    border-color: #ff6f61 transparent #ff6f61 transparent;
    animation: Spinner 1.2s linear infinite;
  }
  @keyframes Spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
