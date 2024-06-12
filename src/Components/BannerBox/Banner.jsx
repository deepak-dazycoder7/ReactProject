import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./Banner.css";
import bannerImg from "../../assets/bannerimg.jpg";

const Banner = () => {
    return (
        <Container fluid className="p-0" style={{ marginTop: '150px', marginBottom : "50px" }}>
            <Row noGutters>
                <Col xs="12" className="position-relative p-0">
                    <img
                        src={bannerImg}
                        alt="Banner"
                        className="w-100"
                        style={{ objectFit: 'cover', height: '50vh' }}
                    />
                    <svg
                        className="position-absolute top-0 start-0 h-100 w-100 svg-overlay"
                        preserveAspectRatio="none"
                        viewBox="0 0 80 100"
                    >
                        <path
                            d="M0,0 L45,0 C20,50 70,75 0,160z"
                            fill="#fff"
                        />
                    </svg>
                    <div className="position-absolute w-100 text-white d-flex flex-column align-items-start p-4 ms-5 gap-5 top-0 overlay-content">
                        <div className="mb-3">
                            <h1>BELIEVE IN YOURSELF</h1>
                            <h3>FOCUS ON YOUR GOAL</h3>
                            <h5>EVERYTHING IS POSSIBLE</h5>
                        </div>
                        <div>
                            <Button className="me-3" color="success">
                                SUCCESS
                            </Button>
                            <Button color="danger">
                                HARDWORK
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;
