import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  CardText,
} from "reactstrap";
import "./Footer.css";
import { MdLocationOn } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import PlaystoreImg from "../../../public/playstore.png";
import appleapp from "../../../public/appleapp.png";

import Earth from "../../assets/earth-background.jpg";

const Footer = () => {
  return (
    <Container fluid className="footer-container mt-2">
      <div className="md-12 sm-6 bg-gradient-overlay" style={{ overflow: 'hidden' }}>
        <Row>
          <Col
            md={{
              offset: 4,
              size: "4",
            }}
            sm="12"
          >
            <div className="text-center">
              <h1 className="text-white  mb-3">
                Ready to get those mind-blowing ideas live?
              </h1>
              <h6 className="mb-3" style={{ color: "#CFD5DC" }}>
                Spend little to no time on DevOps and more time building. Super
                efficient way to host & scale your web app.
              </h6>
              <Button color="primary">Get Started</Button>
            </div>
          </Col>
        </Row>
        <Container style={{ position: "relative", top: "15%", marginLeft: '60px' }}>
          <Row >
            <Col md="3" sm="6">
              <Card className="bg-transparent">
                <CardBody>
                  <CardTitle tag="h2" className="text-white mb-4">
                    Dazy-Coders
                  </CardTitle>
                  <CardText>
                    <div className="text-white d-flex ">
                      <span className="border border-primary fs-5 rounded-circle  " style={{ padding:'5px 12px 0px 12px'}}>
                        <MdLocationOn />
                      </span>
                      <span className="ms-3 ">
                        1H second floore, Near Daya Tower, Neemuch (M.P.)
                      </span>
                    </div>
                  </CardText>
                  <CardText>
                    <span className="text-white border fs-4 border-primary p-2 px-2 pt-0 rounded-circle ">
                      <MdOutlinePhoneAndroid />
                    </span>
                    <span className="text-white ms-3"> +91 8834564340</span>
                  </CardText>
                  <CardText className="mt-4">
                    <span className="text-white border border-primary fs-4 p-2 px-2 pt-0 rounded-circle">
                      <MdOutlineAttachEmail />
                    </span>
                    <span className="text-white ms-3">
                      Support@Roomprofile.com
                    </span>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="2" sm="6">
              <Card className="bg-transparent">
                <CardBody className="d-flex flex-column ps-6">
                  <CardTitle tag="h5" className="text-white fs-4">
                    Company
                  </CardTitle>
                  <CardLink href="#" className="text-decoration-none py-1">
                    <span className="text-white">About Us</span>
                  </CardLink>
                  <CardLink href="#" className="text-decoration-none ms-0 py-1">
                    <span className="text-white">Privacy Policy</span>
                  </CardLink>
                  <CardLink href="#" className="text-decoration-none ms-0 py-1">
                    <span className="text-white">Feedback</span>
                  </CardLink>
                  <CardLink href="#" className="text-decoration-none ms-0 py-1">
                    <span className="text-white">Help?</span>
                  </CardLink>
                  <CardLink href="#" className="text-decoration-none ms-0 py-1">
                    <span className="text-white">More...</span>
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col md="2" sm="6">
              <Card className="bg-transparent">
                <CardBody className="ps-1 d-flex flex-column">
                  <CardTitle tag="h4" className="text-white">
                    Servicess
                  </CardTitle>
                  <CardLink href="#" className="text-decoration-none py-1">
                    <span className="text-white">Another Link</span>
                  </CardLink>
                  <CardLink href="#" className="text-decoration-none py-1 ms-0">
                    <span className="text-white">Another Link</span>
                  </CardLink>
                  <CardLink href="#" className="text-decoration-none py-1 ms-0">
                    <span className="text-white">Another Link</span>
                  </CardLink>
                  <CardLink href="#" className="text-decoration-none py-1 ms-0">
                    <span className="text-white">Another Link</span>
                  </CardLink>
                  <CardLink href="#" className="text-decoration-none py-1 ms-0">
                    <span className="text-white">Another Link</span>
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col md="2" sm="6">
              <Card className="bg-transparent">
                <CardBody className="ps-1 d-flex flex-column">
                  <CardTitle tag="h4" className="text-white">
                    Others
                  </CardTitle>
                  <CardLink href="#" className="text-decoration-none py-1">
                    <span className="text-white">Another Link</span>
                  </CardLink>
                  <CardLink href="#" className="text-decoration-none py-1  ms-0">
                    <span className="text-white">Another Link</span>
                  </CardLink>
                  <CardLink href="#" className="text-decoration-none py-1 ms-0">
                    <span className="text-white">Another Link</span>
                  </CardLink>
                  <CardLink href="#" className="text-decoration-none py-1 ms-0">
                    <span className="text-white">Another Link</span>
                  </CardLink>
                  <CardLink href="#" className="text-decoration-none py-1 ms-0">
                    <span className="text-white">Another Link</span>
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col md="3" sm="6">
              <Card className="bg-transparent">
                <CardBody>
                  <CardTitle tag="h4" className="text-white mb-4">
                    Follow Us
                  </CardTitle>
                  <CardLink href="#">
                    <span className="text-white border border-primary p-2 px-2 pt-1 rounded-circle">
                      <FaWhatsapp />
                    </span>
                  </CardLink>
                  <CardLink href="#">
                    <span className="text-white border border-primary p-2 px-2 pt-1 rounded-circle">
                      <FaLinkedin />
                    </span>
                  </CardLink>
                  <CardLink href="#">
                    <span className="text-white border border-primary p-2 px-2 pt-1 rounded-circle">
                      <FaInstagram />
                    </span>
                  </CardLink>
                  <CardLink href="#" className="">
                    <span className="text-white border border-primary p-2 px-2 pt-1 rounded-circle">
                      <FaFacebook />
                    </span>
                  </CardLink>
                  <CardLink href="#" className="">
                    <span className="text-white  border border-primary p-2 px-2 pt-1 rounded-circle">
                      <FaTwitter />
                    </span>
                  </CardLink>
                </CardBody>
                <CardBody>
                  <CardSubtitle tag="h5" className="text-white">
                    Download App
                  </CardSubtitle>
                  <CardLink href="#">
                    <img
                      src={PlaystoreImg}
                      alt=""
                      srcset=""
                      className="rounded"
                      style={{ backgroundColor: "white", width: '120px', marginTop: '10px'}}
                    />
                  </CardLink>
                  <CardLink href="#">
                  <img
                      src={appleapp}
                      alt=""
                      srcset=""
                      className="rounded"
                      style={{ backgroundColor: "white", width: '120px', marginTop: '10px'}}
                    />
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Row style={{ height: '50px', position: 'relative', top: '20%' }}>
          <Col md='12' sm='6'>
            <div className="text-white d-flex justify-content-center align-items-center bg-secondary"
              style={{ height: '50px' }}>
              <span>@2024.All rights reserved by Dazycoders  #copyright </span>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Footer;
