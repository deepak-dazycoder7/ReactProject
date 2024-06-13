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
            <Container fluid className="h-100 w-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <section className='w-75 w-md-100 mx-auto p-5'>
                    <Card className='mb-5' style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                    }}>
                        <CardHeader>
                            <h2 className='text-center'>WE ARE IN CITY</h2>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="12" md="6" lg={{
                                    offset: 1,
                                    size: 5
                                }}>
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
                                                borderColor: '#80bdff',
                                                '&:hover': { borderColor: '#80bdff' }
                                            })
                                        }}
                                    />
                                </Col>
                                <Col xs="12" md="6" lg="5" className="mt-3 mt-md-0">
                                    <Select
                                        placeholder="Select a State..."
                                        isSearchable={true}
                                        styles={{
                                            control: (provided) => ({
                                                ...provided,
                                                borderRadius: 20,
                                                borderColor: '#80bdff',
                                                '&:hover': { borderColor: '#80bdff' }
                                            })
                                        }}
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <ul className="row m-0 p-0 list-unstyled">
                        <li className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center" style={{ flexShrink: 0 }}>
                            <div className="hover-box bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '100%' }}>
                                <div className="px-4 py-2"><img src={Mumbai} alt="Mumbai" className="img-fluid" /></div>
                                <div className="pb-2">Mumbai</div>
                            </div>
                        </li>
                        <li className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center" style={{ flexShrink: 0 }}>
                            <div className="hover-box bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '100%' }}>
                                <div className="px-4 py-2"><img src={Kolkata} alt="Kolkata" className="img-fluid" /></div>
                                <div className="pb-2">Kolkata</div>
                            </div>
                        </li>
                        <li className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center" style={{ flexShrink: 0 }}>
                            <div className="hover-box bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '100%' }}>
                                <div className="px-4 py-2"><img src={Delhi} alt="Delhi" className="img-fluid" /></div>
                                <div className="pb-2">Delhi</div>
                            </div>
                        </li>
                        <li className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center" style={{ flexShrink: 0 }}>
                            <div className="hover-box bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '100%' }}>
                                <div className="px-4 py-2"><img src={Chennai} alt="Chennai" className="img-fluid" /></div>
                                <div className="pb-2">Chennai</div>
                            </div>
                        </li>
                        <li className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center" style={{ flexShrink: 0 }}>
                            <div className="hover-box bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '100%' }}>
                                <div className="px-4 py-2"><img src={Kochi} alt="Kochi" className="img-fluid" /></div>
                                <div className="pb-2">Kochi</div>
                            </div>
                        </li>
                        <li className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center" style={{ flexShrink: 0 }}>
                            <div className="hover-box bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '100%' }}>
                                <div className="px-4 py-2"><img src={Chandigarh} alt="Chandigarh" className="img-fluid" /></div>
                                <div className="pb-2">Chandigarh</div>
                            </div>
                        </li>
                        <li className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center" style={{ flexShrink: 0 }}>
                            <div className="hover-box bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '100%' }}>
                                <div className="px-4 py-2"><img src={Ahemdabad} alt="Ahemdabad" className="img-fluid" /></div>
                                <div className="pb-2">Ahemdabad</div>
                            </div>
                        </li>
                        <li className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center" style={{ flexShrink: 0 }}>
                            <div className="hover-box bg-white rounded d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', width: '100%' }}>
                                <div className="px-4 py-2"><img src={Banglore} alt="Banglore" className="img-fluid" /></div>
                                <div className="pb-2">Banglore</div>
                            </div>
                        </li>
                    </ul>
                </section>
            </Container>
        </>
    )
}

export default Citysearch;
