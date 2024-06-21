import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
} from 'reactstrap';

const CardCarousel = ({ items, CardComponent, showIndicators = true }) => {
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

    const slides = items.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <CardComponent item={item} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            style={{ borderRadius: '20px', overflow: 'hidden' ,boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}
        >
            {slides}
            {showIndicators && (
                <>
                    <CarouselControl
                     //   direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                    />
                    <CarouselControl
                      //  direction="next"
                        directionText="Next"
                        onClickHandler={next}
                    />
                </>
            )}
        </Carousel>
    );
};

export default CardCarousel;
