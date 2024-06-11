import React, { useState } from 'react'
import {
    Container, Row, Col
} from 'reactstrap';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import ReactFlagsSelect from 'react-flags-select';
const Citysearch = () => {
    const options = countryList().getData();
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleChange = value => {
        setSelectedCountry(value);
    };



    return (
        <>
            <Container className='search-city-contaier bg-white shadow  border m-5 bg-'>
                <Row className='d-flex justify-content-center align-items-center w-100 h-100'>
                    <Col md='6' lg='4' className='w-100'>
                        <h2 className='m-4 d-flex justify-content-center'>WE ARE IN CITY</h2>
                        <div className="filter-city m-5 ">
                            <Row>
                                <Col className="bg-light border">
                                    .col
                                </Col>
                                <Col className="bg-light border">
                                    .col
                                </Col>
                                <Col className="bg-light border">

                                    <div className="container d-flex justify-content-center align-items-center">
                                        <Select
                                            options={options}
                                            value={selectedCountry}
                                            onChange={handleChange}
                                            placeholder="Select a country"
                                            className=""
                                        />
                                        {selectedCountry && (
                                            <div className="flag-container bg-0">
                                                <ReactFlagsSelect
                                                    selected={selectedCountry.value}
                                                    countries={[selectedCountry.value]}
                                                    showSelectedLabel={false}
                                                    showOptionLabel={false}
                                                    className="flag-select"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="show-city-icon">
                            <div className="city-icons">
                                <ul>
                                    <li>icon1</li>
                                    <li>icon2</li>
                                    <li>icon3</li>
                                </ul>
                            </div>
                            <div className="show-city">
                                <ul>
                                    <li>INDORE</li>
                                    <li>SURAT</li>
                                    <li>MUMBAI</li>
                                </ul>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Citysearch;