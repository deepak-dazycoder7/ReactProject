// CarouselComponent.jsx
import React, { useState } from 'react';
import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.jpg'
import Img3 from '../../assets/img3.jpg'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: Img1,
    key: 1,
  },
  {
    src: Img2,
    key: 2,
  },
  {
    src: Img3,
    key: 3,
  },
];

function CarouselComponent(args) {
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
        key={item.key} // Use a unique identifier as key
      >
        <img src={item.src} alt={item.altText} style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      style={{ width: '100%', height: '100vh' }}
    >
       <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      /> 
      {slides}
      <CarouselControl
       // direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
       // direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselComponent;
