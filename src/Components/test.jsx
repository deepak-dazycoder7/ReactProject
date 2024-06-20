import React from "react";
import {
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from "reactstrap";
import mainimg from "../../public/testimodial.jpg";
import pro1 from "../../public/p1img.jpg";
import pro2 from "../../public/p2img.jpg";
import pro3 from "../../public/p3img.jpg";

// Sample data for carousel
const items = [
    {
        src : pro1,
        altText: "Slide 1",
        caption: "Slide 1",
        text: "When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play, and I’ve got 25 testimonial examples showing how customers can build hype for your business.",
        name: "VIRAT KOHLI",
    },
    {
        src : pro2,
        altText: "Slide 2",
        caption: "Slide 2",
        text: "When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play, and I’ve got 25 testimonial examples showing how customers can build hype for your business.",
        name: "ANIL MEENA",
    },
    {
        src : pro3,
        altText: "Slide 3",
        caption: "Slide 3",
        text: "When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play, and I’ve got 25 testimonial examples showing how customers can build hype for your business.",
        name: "DEEPAK RATHOR",
    },
];

const Example = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

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
                key={item.src}
            >
                <Card>
                    <CardBody>
                        <Row className="align-items-center">
                            <Col xs="4">
                                <CardImg
                                    top
                                    width="100%"
                                    src={item.src}
                                    alt={item.altText}
                                    style={{
                                        borderRadius: "50%",
                                        border: "5px solid #000",
                                        width: "150px",
                                        height: "150px",
                                    }}
                                />
                            </Col>
                            <Col xs="8">
                                <CardText>{item.text}</CardText>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">
                                    <span style={{ color: "gold" }}>★★★★★</span>
                                </CardSubtitle>
                                <CardTitle tag="h5">{item.name}</CardTitle>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </CarouselItem>
        );
    });

    return (
        <Container fluid style={{ backgroundColor: "#E5C0AF" }}>
            <Row>
                <Col md="5">
                    <img
                        src={mainimg}
                        alt="Main"
                        style={{ width: "700px", height: "650px" }}
                    />
                </Col>
                
                <Col md={{ offset: '1', size: '5'}} className="d-flex  justify-content-between align-items-center me-5">
                <Row>
                    <Col>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous} >
                        <CarouselIndicators
                            items={items}
                            activeIndex={activeIndex}
                            onClickHandler={goToIndex}
                        />
                        {slides}
                    </Carousel>
                    
                   
                    </Col>
                </Row>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Example;
