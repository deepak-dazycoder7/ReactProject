import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import contactbg from './contactleft.svg';
import './ContactUs.css';

const ContactUs = () => {
  const [VisibleForm, setVisibleForm] = useState('second'); // Default to show email query form
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    alert('Logged in successfully!');
  };

  const showFirstForm = () => setVisibleForm('first');
  const showSecondForm = () => setVisibleForm('second');

  return (
    <Container fluid style={{ height: "750px" }}>
      <Row>
        <Col lg="12" md="12" xs="12">
          <h1 className="text-center my-3" style={{ color: "#F5AA01" }}>
            Contact Us
          </h1>
          <h4 className="text-center mb-5">
            Any Question or remarks? Just write a message!
          </h4>
        </Col>
      </Row>
      <Container style={{ height: "500px" }}>
        <Row>
          <Col md={{ size: '7', offset: '1' }}>
            <div style={{ width: '500px', height: '400px', alignItems: 'center' }}>
              <img src={contactbg} alt="" className="w-100 h-100" />
              <span className="d-flex justify-content-center mt-3">
                {isLoggedIn ? (
                  <>
                    <Button onClick={showFirstForm} className='rounded-pill' color="success" style={{width:'150px'}}>Request Call</Button>
                    <Button onClick={showSecondForm} className="ms-3 text-white rounded-pill" color="warning" style={{width:'150px'}}>Email Query</Button>
                  </>
                ) : (
                  <>
                    <Button onClick={showFirstForm} className='rounded-pill' color="primary" style={{width:'150px'}}>Ask Query</Button>
                    <Button onClick={showSecondForm} className=" ms-3 text-white rounded-pill" color="warning" style={{width:'150px'}}>Email Query</Button>
                    <Button onClick={handleLogin} className="ms-3 rounded-pill" color="danger" style={{width:'150px'}}>Login</Button>
                  </>
                )}
              </span>
            </div>
          </Col>
          <Col md="4" className="px-2">
            <div>
              {isLoggedIn ? (
                <div>
                  {VisibleForm === 'first' && (
                    <Form className="shadow rounded-3 py-3 px-4">
                      <h4 className="text-center mb-3" style={{ color: "green", fontWeight: '700' }}>
                        Request a Call
                      </h4>
                      <FormGroup className="call-form">
                        <Input className="input" type="text" placeholder=" " />
                        <Label className="call-label">Name</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="text" placeholder=" " />
                        <Label className="call-label">LastName</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="email" placeholder=" " />
                        <Label className="call-label">Email</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="tel" placeholder=" " />
                        <Label className="call-label">Mobile Number</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="textarea" placeholder=" " />
                        <Label className="call-label">Drop Your Problem Query</Label>
                      </FormGroup>
                      <div className="d-flex justify-content-center">
                        <Button style={{ width: '400px', fontWeight: '600', borderRadius: '20px' }} color="primary">CONTACT ME</Button>
                      </div>
                    </Form>
                  )}
                  {VisibleForm === 'second' && (
                    <Form className="shadow rounded-3 py-3 px-4">
                      <h4 className="text-center mb-3" style={{ color: "#F5AA01", fontWeight: '700' }}>
                        Email Query
                      </h4>
                      <FormGroup className="call-form">
                        <Input className="input" type="text" placeholder=" " />
                        <Label className="call-label">Name</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="text" placeholder=" " />
                        <Label className="call-label">LastName</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="email" placeholder=" " />
                        <Label className="call-label">Email</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="tel" placeholder=" " />
                        <Label className="call-label">Mobile Number</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="textarea" placeholder=" " />
                        <Label className="call-label">Drop Your Problem Query</Label>
                      </FormGroup>
                      <div className="d-flex justify-content-center">
                        <Button style={{ width: '400px', fontWeight: '600', borderRadius: '20px' }} color="primary">SUBMIT EMAIL</Button>
                      </div>
                    </Form>
                  )}
                </div>
              ) : (
                <div>
                  {VisibleForm === 'first' ? (
                    <Form className="shadow rounded-3 py-3 px-4">
                      <h4 className="text-center mb-3" style={{ color: "blue", fontWeight: '700' }}>
                        Ask a Query
                      </h4>
                      <FormGroup className="call-form">
                        <Input className="input" type="text" placeholder=" " />
                        <Label className="call-label">Name</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="text" placeholder=" " />
                        <Label className="call-label">LastName</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="email" placeholder=" " />
                        <Label className="call-label">Email</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="tel" placeholder=" " />
                        <Label className="call-label">Mobile Number</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="textarea" placeholder=" " />
                        <Label className="call-label">Drop Your Problem Query</Label>
                      </FormGroup>
                      <div className="d-flex justify-content-center">
                        <Button style={{ width: '400px', fontWeight: '600', borderRadius: '20px' }} color="primary">SUBMIT QUERY</Button>
                      </div>
                    </Form>
                  ) : (
                    <Form className="shadow rounded-3 py-3 px-4">
                      <h4 className="text-center mb-3" style={{ color: "#F5AA01", fontWeight: '700' }}>
                        Email Query
                      </h4>
                      <FormGroup className="call-form">
                        <Input className="input" type="text" placeholder=" " />
                        <Label className="call-label">Name</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="text" placeholder=" " />
                        <Label className="call-label">LastName</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="email" placeholder=" " />
                        <Label className="call-label">Email</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="tel" placeholder=" " />
                        <Label className="call-label">Mobile Number</Label>
                      </FormGroup>
                      <FormGroup className="call-form">
                        <Input className="input" type="textarea" placeholder=" " />
                        <Label className="call-label">Drop Your Problem Query</Label>
                      </FormGroup>
                      <div className="d-flex justify-content-center">
                        <Button style={{ width: '400px', fontWeight: '600', borderRadius: '20px' }} color="primary">SUBMIT EMAIL</Button>
                      </div>
                    </Form>
                  )}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactUs;
