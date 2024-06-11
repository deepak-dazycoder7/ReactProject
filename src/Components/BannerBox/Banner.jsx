import React from "react";
import { Container, Button } from "reactstrap";
import "./Banner.css";
import bannerImg from "../../assets/bannerimg.jpg";

const Banner = () => {
    return (
        <Container fluid className="banner" > 
            <div className=" w-100 h-100 position-relative " style={{ marginTop: '150px' }}>
                <img
                    src={bannerImg}
                    alt="Banner"
                    className="img-fluid h-100 w-100 object-fit-cover"
                />
                <svg
                    className="svg-overlay position-absolute top-0 start-0 w-100 h-100"
                    preserveAspectRatio="none"
                    viewBox="0 0 80 100"
                >
                    <path
                        d="M0,0 
                         L45,0
                         C20,50 70,75 0,160z"
                        fill="#fff"
                    />
                </svg>
                <div className="headings text-white position-absolute top-0 start-0 m-5">
                    <h1>BELIEVE IN YOURSELF</h1>
                    <h3>FOCUS ON YOUR GOAL</h3>
                    <h5>EVERYTHING IS POSSIBLE</h5>
                </div>
                <div className="btns position-absolute bottom-0 start-0 m-5">
                    <Button className="me-3" color="success">
                        SUCCESS
                    </Button>
                    <Button color="danger">
                        HARDWORK
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Banner;
