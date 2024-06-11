import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import ReactFlagsSelect from 'react-flags-select';

const CountrySelect = () => {
  const options = countryList().getData();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleChange = value => {
    setSelectedCountry(value);
  };

  return (
    <div className='d-flex'>
      <Select
        options={options}
        value={selectedCountry}
        onChange={handleChange}
        placeholder="Select a country"
      />
      {selectedCountry && (
        <ReactFlagsSelect
          selected={selectedCountry.value}
          countries={[selectedCountry.value]}
          showSelectedLabel={false}
          showOptionLabel={false}
        />
      )}
    </div>
  );
};

export default CountrySelect;
