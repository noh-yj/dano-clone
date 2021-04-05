import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items = [
  {
    id: 1,
    src: 'https://danoshop.net/mall/upload/2021/04/01/0331_WRB_mat.png'
  },
  {
    id: 2,
    src: 'https://danoshop.net/mall/upload/2021/01/22/1214_WRB_earth.png'
  },
  {
    id: 3,
    src: 'https://danoshop.net/mall/upload/2021/03/27/0329_WRB_first.png'
  }
];

const  TopCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.src}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        // image="image"
      >
        {/* <div className="image"> */}
          <img style={{margin:"0", display:"flex", width:"100%", height:"300px"}} src={item.src}/>
        {/* </div> */}
          
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
        
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              // width: 1140px;
              max-width: 100%;
              background: black;
              display: flex;
            }`
            // `.TopCarousel {
            //     width: 100%;

            // }`
        }
        {/* {
          `.custom-tag {
              max-width: 100%;
              width: 1250px;
              background: black;
              display: flex;
            }`,

            `.image {
                height: 100%;
                width: 100%;
                display: flex;
                margin: auto;
            }`
        } */}
      </style>
        <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
      
</div>
  );
}


// const Img = styled.img`
//   width: 1250px;
//   height: 1250px;
//   width: 100%;
//   height: 100%;
//   display: block;
//   border: none;
//   margin: auto;
//   `;

// const Main = styled.img`
//     max-width: 100%;

// `;


export default TopCarousel;
