import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardFooter,
  CardBody,
  CardText,
  CardHeader,
} from "reactstrap";
import "./AboutUs.css";
import abimg1 from "./Aboutimg/aboutimg1.jpg";
import abimg2 from "./Aboutimg/aboutimg2.jpg";
import abimg3 from "./Aboutimg/aboutimg3.jpg";
import abimg4 from "./Aboutimg/aboutimg4.jpg";
import abimg5 from "./Aboutimg/aboutimg5.jpg";
const Aboutpage = () => {
  const svgData = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#00cba9" fill-opacity="1" d="M0,256L1440,0L1440,320L0,320Z"></path>
  </svg>`;

  const svgDataUrl = `data:image/svg+xml;base64,${btoa(svgData)}`;

  return (
    <>
      <Container fluid className="m-0 p-0">
        <div
          className=""
          style={{
            backgroundImage: `url(${svgDataUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100vh", // Adjust height as needed
            width: "100%",
          }}
        >
          <Row>
            <Col md={{ size: "5", offset: "1" }}>
              <Card style={{ marginTop: "80px" }}>
                <CardHeader style={{ background: 'linear-gradient(90deg, #affcaf, #12dff3)'}}>
                  <h3 className="text-center"> Who We Are?</h3>
                </CardHeader>
                <CardBody >
                  <CardText >
                    According to my profile, my brand‘s story started with my
                    sister’s Sailor Moon VHS tapes. Those tapes eventually led
                    me to create content centered around anime and different
                    “nerdy” entertainment aspects. My brand's story is unlike
                    any other, and the same goes for yours. No two companies
                    have the same founding story or reason for existing. Your
                    history and values are integral parts of your brand.
                  </CardText>
                </CardBody>
                <CardFooter style={{ background: 'linear-gradient(90deg, #affcaf, #12dff3)', textAlign:'center'}}>Footer</CardFooter>
              </Card>
            </Col>

            <Col md={{ size: "5" }}>
              <div
                className="d-flex justify-content-center gap-3"
                style={{ marginTop: "100px" }}
              >
                <div className="d-flex flex-column gap-3">
                  <div className="image-wrapper rounded-5 image-small">
                    <img
                      src={abimg4}
                      alt="Image 3"
                      className="w-100 h-100 img-fluid"
                    />
                  </div>
                  <div className="image-wrapper rounded-5 image-small">
                    <img
                      src={abimg5}
                      alt="Image 5"
                      className="w-100 h-100 img-fluid"
                    />
                  </div>
                </div>
                <div className="image-wrapper image-large">
                  <img
                    src={abimg1}
                    alt="Image 1"
                    className="w-100 h-100 img-fluid"
                  />
                </div>
                <div className="d-flex flex-column gap-3">
                  <div className="image-wrapper img2 image-small">
                    <img
                      src={abimg2}
                      alt="Image 2"
                      className="w-100 h-100 img-fluid"
                    />
                  </div>
                  <div className="image-wrapper img3 image-small">
                    <img
                      src={abimg3}
                      alt="Image 3"
                      className="w-100 h-100 img-fluid"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Aboutpage;
