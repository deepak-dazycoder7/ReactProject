import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CarouselComponent from './CardCarousel';
import CardComponent1 from './Card1';
import CardComponent2 from './Card2';
import pro1 from '../../../public/p1img.jpg';
import pro2 from '../../../public/p2img.jpg';
import pro3 from '../../../public/p3img.jpg';
import BgTestimo from '../../../public/bg-testimnial.jpg';

// Sample data for first carousel
const items1 = [
    {
        src: pro1,
        altText: 'Slide 1',
        caption: 'Slide 1',
        text: 'When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play, and I’ve got 25 testimonial examples showing how customers can build hype for your business.',
        name: 'SACHIN TENDULKAR'
    },
    {
        src: pro2,
        altText: 'Slide 2',
        caption: 'Slide 2',
        text: 'When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play, and I’ve got 25 testimonial examples showing how customers can build hype for your business.',
        name: 'RAVINDRA JADEJA'
    },
    {
        src: pro3,
        altText: 'Slide 3',
        caption: 'Slide 3',
        text: 'When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play, and I’ve got 25 testimonial examples showing how customers can build hype for your business.',
        name: 'SHUBHMAN GILL'
    }
];

// Sample data for second carousel
const items2 = [
    {
        src: pro1,
        altText: 'Slide 1',
        caption: 'Slide 1',
        text: 'When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play, and I’ve got 25 testimonial examples showing how customers can build hype for your business.',
        name: 'VIRAT KOHLI'
    },
    {
        src: pro2,
        altText: 'Slide 2',
        caption: 'Slide 2',
        text: 'When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play, and I’ve got 25 testimonial examples showing how customers can build hype for your business.',
        name: 'ROHIT SHARMA'
    },
    {
        src: pro3,
        altText: 'Slide 3',
        caption: 'Slide 3',
        text: 'When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play, and I’ve got 25 testimonial examples showing how customers can build hype for your business.',
        name: 'HARDIK PANDYA'
    }
];

const Example = () => {
    return (
        <Container
            className="d-flex align-items-center"
            fluid
            style={{
                backgroundImage: `url(${BgTestimo})`,
                backgroundSize: 'cover',
                minHeight: '100vh',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden'
            }}
        >
            <Row>
                <Col md={{ size: 6, offset: '5', order: 1 }} sm={{ size: 12, order: 2 }}>
                    <CarouselComponent items={items1} CardComponent={CardComponent1} />
                </Col>
                <Col md={{ size: 6, offset: '6',order: 2 }} sm={{ size: 12, order: 1 }} className="mt-md-5 mt-sm-0">
                    <CarouselComponent items={items2} CardComponent={CardComponent2} />
                </Col>
            </Row>

        </Container>
    );
};

export default Example;
