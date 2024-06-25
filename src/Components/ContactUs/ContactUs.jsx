import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";
import { MdLocationOn } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import contactbg from './contactleft.svg'
import './ContactUs.css';
const ContactUs = () => {
    return (
        <>
            <Container fluid style={{ height: "750px" }}>
                <Row>
                    <Col lg="12" md="12" xs="12">
                        <h1 className="text-center my-3" style={{ color: "#F5AA01" }}>
                            Contact Us
                        </h1>
                        <h4 className="text-center mb-5">
                            Any Quetion or remarks? just write a message!
                        </h4>
                    </Col>
                </Row>
                <Container
                    style={{
                        height: "500px",
                    }}
                >
                    <Row>
                        <Col md={{size:'7', offset:'1'}} >
                            <div className="" style={{ width: '500px', height: '450px', alignItems: 'center' }}>
                                <img src={contactbg} alt="" className="w-100 h-100"/>
                                <span className="d-flex justify-content-center mt-3 ">
                                    <Button className='me-5 rounded-pill' color="success">Contact Us</Button>
                                    <Button className="text-white rounded-pill" color="warning">Use Email</Button>
                                    </span>
                            </div>
                        </Col>
                        <Col md="4" className="px-2">
                            <Form className="shadow rounded-3 py-3 px-4" >
                                <h4 className="text-center mb-3" style={{ color: "#F5AA01" }}>
                                    Request a Call
                                </h4>
                                <FormGroup className="form-group">
                                    <Input
                                        className="input"
                                        id=""
                                        type="text"
                                        placeholder=" " />
                                    <Label for="name" className="form-label"> Name </Label>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Input
                                        className="input"
                                        id=""
                                        name="Name"
                                        placeholder=""
                                        type="text"
                                    />
                                    <Label for="exampleName" className="form-label"> LastName </Label>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Input
                                        className="input"
                                        id="exampleEmail"
                                        name="email"
                                        placeholder=""
                                        type="email"
                                    />
                                    <Label for="exampleEmail" className="form-label">Email</Label>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Input
                                        className="input"
                                        type="tel"
                                        name="mobileNumber"
                                        id="mobileNumber"
                                        placeholder=""
                                    />
                                    <Label for="mobileNumber" className="form-label">Mobile Number</Label>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Input
                                        className="input"
                                        id="exampleText"
                                        name="text"
                                        type="textarea"
                                        placeholder=""
                                    />
                                    <Label for="exampleText" className="form-label">Drope Your Problem Query</Label>
                                </FormGroup>
                                <div className="d-flex justify-content-center">
                                    <Button style={{ width: '323px', borderRadius: '20px' }} color="primary">CONTACT ME</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default ContactUs;
