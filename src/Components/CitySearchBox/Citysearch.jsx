import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Select from 'react-select';
import countryData from './country.json'; // Importing JSON data
import Mumbai from '../../assets/mumbai.avif'
import Kolkata from '../../assets/kolk.avif'
import Kochi from '../../assets/koch.avif'
import Delhi from '../../assets/delhi.avif'
import Chennai from '../../assets/chen.avif'
import Banglore from '../../assets/bang.png'
import Ahemdabad from '../../assets/ahd.avif'


const Citysearch = () => {
    // Initialize selectedCountry state with default value "India"
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
        // Find the index of India in the options array
        const indiaIndex = countryData.findIndex(country => country.country === 'India');
        // Set India as the default selected option
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
            <Container fluid className='border border-danger'>
                <section className='flex-row align-items-center justify-content-center w-75 mx-auto m-5 p-5 border border-primary'>
                    <h2 className='text-center'>WE ARE IN CITY</h2>
                    <Row className='m-4'>
                        <Col md='6' lg={{
                            offset: 2,
                            size: 4
                        }} >
                            <Select
                                value={selectedCountry}
                                onChange={handleChange}
                                options={options}
                                placeholder="Select a country..."
                                isSearchable={true}

                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        borderRadius: 20, // Adjust the border radius to make it pill-shaped
                                        borderColor: '#80bdff', // Border color
                                        '&:hover': { borderColor: '#80bdff' } // Border color on hover
                                    })
                                }}
                            />

                        </Col>
                        <Col md='6' lg='4' >

                            <Select
                                placeholder="Select a State..."
                                isSearchable={true}
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        borderRadius: 20, // Adjust the border radius to make it pill-shaped
                                        borderColor: '#80bdff', // Border color
                                        '&:hover': { borderColor: '#80bdff' } // Border color on hover
                                    })
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="icon"><img src={Mumbai} alt="" srcset="" /></div>
                            <div className="city">Mumbai</div>
                        </Col>
                        <Col>
                            <div className="icon"><img src={Kolkata} alt="" srcset="" /></div>
                            <div className="city">Kolkatta</div>
                        </Col>
                        <Col>
                            <div className="icon"><img src={Kochi} alt="" srcset="" /></div>
                            <div className="city">Kochi</div>
                        </Col>
                        <Col>
                            <div className="icon"><img src={Delhi} alt="" srcset="" /></div>
                            <div className="city">Delhi</div>
                        </Col>
                        <Col>
                            <div className="icon"><img src={Chennai} alt="" srcset="" /></div>
                            <div className="city">Chennai</div>
                        </Col>
                        <Col>
                            <div className="icon"><img src={Banglore} alt="" srcset="" /></div>
                            <div className="city">Banglore</div>
                        </Col>
                        <Col>
                            <div className="icon"><img src={Ahemdabad} alt="" srcset="" /></div>
                            <div className="city">Ahemdabad</div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    )
}

export default Citysearch;
