import React from 'react'
import { Container, Row, Col, Input,  } from 'reactstrap'
import bgimg from '../../assets/locate-City.jpg'
import lotus from '../../assets/lotus-temple.png'
import taj from '../../assets/taj-mahal.png'
import indiaGate from '../../assets/india-gate.png'
import Redfort from '../../assets/red-fort.png'
import Hawamahal from '../../assets/hawa-mahal.png'
import Statue from '../../assets/statue-of-unity.png'
import './SearchLocate.css'
const SearchLocate = () => {
    return (
        <>
            <Container fluid className='d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${bgimg})`, height: '500px', marginTop: '10px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', overflow: 'hidden' }}>
                <Container className='bg-white  p-4 w-75 '>
                    <Row>
                        <Col md={{
                                    offset: 2,
                                    size: '8'
                                }}>
                            <div className="mb-5 focus-contrl">
                                <Input
                                    id=""
                                    name="text"
                                    placeholder="Search City...."
                                    type="text"
                                    className="form-contrl"
                                />
                                <div className="ul-list bg-white shadow-lg  border border-primary rounded-bottom border-top-0">
                                    <ul className='list-unstyled p-2'>
                                        <li className='m-1'>react projects javascript css html</li>
                                        <li className='m-1'>react projects javascript css html</li>
                                        <li className='m-1'>react projects javascript css html</li>
                                        <li className='m-1'>react projects javascript css html</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col md='2' sm='6' >
                                <div sm='6' className="mb-2 text-center">
                                    <img src={Redfort} alt="" srcset="" style={{ width: '80px' }}/>
                                    <div className="pt-2 fs-5">DELHI</div>
                                </div>
                        </Col>
                        <Col md='2' sm='6'>
                                <div sm='6' className="mb-2 text-center ">
                                    <img src={Hawamahal} alt="" style={{ width: '80px' }}/>
                                    <div className="pt-2 fs-5">JAIPUR</div>
                                </div>
                        </Col>
                        <Col md='2' sm='6'>
                                <div sm='6' className="mb-2 text-center ">
                                <img src={Statue} alt="" srcset="" style={{ width: '80px' }}/>
                                <div className="pt-2 fs-5">GUJRAT</div>
                                </div>
                        </Col>
                        <Col md='2' sm='6'>
                                <div sm='6' className="mb-2 text-center ">
                                <img src={lotus} alt="" style={{ width: '80px' }} />
                                <div className="pt-2 fs-5">GUJRAT</div>
                                </div>
                        </Col>
                        <Col md='2' sm='6'>
                                <div sm='6' className="mb-2 text-center ">
                                <img src={taj} alt="" srcset="" style={{ width: '80px' }} />
                                <div className="pt-2 fs-5">AAGARA</div>
                                </div>
                        </Col>
                        <Col md='2' sm='6'>
                                <div sm='6' className="mb-2 text-center ">
                                <img src={indiaGate} alt="" srcset=""  style={{ width: '80px' }}/>
                                    <div className="pt-2 fs-5">DELHI</div>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default SearchLocate