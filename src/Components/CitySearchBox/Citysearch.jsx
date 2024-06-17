import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Background from '../../assets/city.jpg'
import Select from 'react-select';
import countryData from './country.json'; // Importing JSON data
import Mumbai from '../../assets/mumbai.avif'
import Kolkata from '../../assets/kolk.avif'
import Kochi from '../../assets/koch.avif'
import Delhi from '../../assets/delhi.avif'
import Chennai from '../../assets/chen.avif'
import Banglore from '../../assets/bangluru.png'
import Ahemdabad from '../../assets/ahd.avif'
import Chandigarh from '../../assets/chd.avif'
import Hydrabaad from '../../assets/hyd.png'
import Pune from '../../assets/pune.png'
import './Citysearch.css'

const Citysearch = () => {
    const [selectedCountry, setSelectedCountry] = useState({
        value: 'India',
        label: (
            <div>
                <img src={countryData[0].flag} alt={countryData[0].country} style={{ width: 20, marginRight: 10 }} />
                {countryData[0].country}
            </div>
        ),
    });

    useEffect(() => {
        const indiaIndex = countryData.findIndex(country => country.country === 'India');
        setSelectedCountry({
            value: countryData[indiaIndex].country,
            label: (
                <div>
                    <img src={countryData[indiaIndex].flag} alt={countryData[indiaIndex].country} style={{ width: 20, marginRight: 10 }} />
                    {countryData[indiaIndex].country}
                </div>
            ),
        });
    }, []);

    const options = countryData.map(country => ({
        value: country.country,
        label: (
            <div>
                <img src={country.flag} alt={country.country} style={{ width: 20, marginRight: 10 }} />
                {country.country}
            </div>
        ),
    }));

    const handleChange = selectedOption => {
        setSelectedCountry(selectedOption);
    };

    return (
        <>
            <Container fluid
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <Container className='p-5'>
                    <Card className='mb-5' style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                    }}>
                        <CardHeader>
                            <h2 className='text-center'>WE ARE IN CITY</h2>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col md={{
                                    offset: 1,
                                    size: '5'
                                }} sm='12' className='text-center mb-2'>
                                    <Select
                                        value={selectedCountry}
                                        onChange={handleChange}
                                        options={options}
                                        placeholder="Select a country..."
                                        isSearchable={true}
                                        styles={{
                                            control: (provided) => ({
                                                ...provided,
                                                borderRadius: 20,
                                                borderColor: '#70bdff',
                                                '&:hover': { borderColor: '#70bdff' }
                                            })
                                        }}
                                    />
                                </Col>
                                <Col md={{
                                    offset: 0,
                                    size: '5'
                                }} sm='12' className='text-center '>
                                    <Select
                                        placeholder="Select a State..."
                                        isSearchable={true}
                                        styles={{
                                            control: (provided) => ({
                                                ...provided,
                                                borderRadius: 20,
                                                borderColor: '#70bdff',
                                                '&:hover': { borderColor: '#70bdff' }
                                            })
                                        }}
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <Row>
                        <Col md='2' sm='6'>
                            <div className="hover-box mb-3 bg-white rounded d-flex flex-column justify-content-center align-items-center " style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '90%', marginBottom: '20px', height: '180px' }}>
                                <div className="py-3"><img src={Mumbai} alt="Mumbai" className="img-fluid" /></div>
                                <div className="pb-2">Mumbai</div>
                            </div>
                        </Col>
                        <Col md='2' sm='6'>
                            <div className="hover-box mb-3 bg-white rounded d-flex flex-column justify-content-center align-items-center " style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '90%', marginBottom: '20px', height: '180px' }}>
                                <div className="py-3"><img src={Mumbai} alt="Mumbai" className="img-fluid" /></div>
                                <div className="pb-2">Mumbai</div>
                            </div>
                        </Col>
                        <Col md='2' sm='6'>
                            <div className="hover-box mb-3 bg-white rounded d-flex flex-column justify-content-center align-items-center " style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '90%', marginBottom: '20px', height: '180px' }}>
                                <div className="py-3"><img src={Mumbai} alt="Mumbai" className="img-fluid" /></div>
                                <div className="pb-2">Mumbai</div>
                            </div>
                        </Col>
                        <Col md='2' sm='6'>
                            <div className="hover-box mb-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '90%', marginBottom: '20px', height: '180px' }}>
                                <div className="py-3"><img src={Kolkata} alt="Kolkata" className="img-fluid" /></div>
                                <div className="pb-2">Kolkata</div>
                            </div>
                        </Col>
                        <Col md='2' sm='6'>
                            <div className="hover-box mb-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '90%', height: '180px' }}>
                                <div className="py-3"><img src={Delhi} alt="Delhi" className="img-fluid" /></div>
                                <div className="pb-2">Delhi</div>
                            </div>
                        </Col>
                        <Col md='2' sm='6'>
                            <div className="hover-box mb-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '90%', height: '180px' }}>
                                <div className="py-3"><img src={Chennai} alt="Chennai" className="img-fluid" /></div>
                                <div className="pb-2">Chennai</div>
                            </div>
                        </Col>
                        <Col md='2' sm='6'>
                            <div className="hover-box mb-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '90%', height: '180px' }}>
                                <div className="py-3"><img src={Kochi} alt="Kochi" className="img-fluid" /></div>
                                <div className="pb-2">Kochi</div>
                            </div>
                        </Col>
                        <Col md='2' sm='6'>
                            <div className="hover-box mb-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '90%', height: '180px' }}>
                                <div className="py-3"><img src={Chandigarh} alt="Chandigarh" className="img-fluid" /></div>
                                <div className="pb-2">Chandigarh</div>
                            </div>
                        </Col>
                        <Col md='2' sm='6'>
                            <div className="hover-box mb-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '90%',  height: '180px' }}>
                                <div className="py-3"><img src={Ahemdabad} alt="Ahemdabad" className="img-fluid" /></div>
                                <div className="pb-2">Ahemdabad</div>
                            </div>
                        </Col>
                        <Col md='2' sm='6'>
                            <div className="hover-box mb-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '90%', height: '180px' }}>
                                <div className="py-3"><img src={Banglore} alt="Banglore" className="img-fluid" /></div>
                                <div className="pb-2">Banglore</div>
                            </div>
                        </Col>
                        <Col md='2' sm='6'>
                            <div className="hover-box mb-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '90%', height: '180px' }}>
                                <div className="py-3"><img src={Hydrabaad} alt="hydrabaad" className="img-fluid" /></div>
                                <div className="pb-2">Hydrabaad</div>
                            </div>
                        </Col>
                        <Col md='2' sm='6'>
                            <div className="hover-box mb-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '90%', height: '180px' }}>
                                <div className="py-3"><img src={Pune} alt="Pune" className="img-fluid" /></div>
                                <div className="pb-2">Pune</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Citysearch;
