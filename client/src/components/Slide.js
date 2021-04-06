import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: 'https://danoshop.net/mall/upload/2021/04/01/0331_WRB_mat.png',
    altText: 'Slide 1',
  },
  {
    src: 'https://danoshop.net/mall/upload/2021/01/22/1214_WRB_earth.png',
    altText: 'Slide 2',
  },
  {
    src: 'https://danoshop.net/mall/upload/2021/03/27/0329_WRB_first.png',
    altText: 'Slide 3',
  },
  {
    src: 'https://danoshop.net/mall/upload/2021/04/02/0405_WRB_dak.png',
    altText: 'Slide 4',
  },
  {
    src: 'https://danoshop.net/mall/upload/2021/04/02/0405_WRB_2week.png',
    altText: 'Slide 5',
  },
];

const DanoCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.altText}
        interval={300}
      >
        <Img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  );
};

const Img = styled.img`
  width: 100%;
  height: 400px;
  cursor: pointer;
`;

export default DanoCarousel;
