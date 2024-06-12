import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "./test.css"; // You can import your custom CSS for styling

const SearchableFlagsSelect = () => {
  const [selected, setSelected] = useState('');

  // Function to handle search input
  const handleSearch = (searchQuery) => {
    // You can implement your own search logic here
    // For example, filtering based on country name or code
    // This is a simple example that filters based on country name
    const filteredCountries = countryList.filter((country) =>
      country.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredCountries;
  };

  return (
    <div className="container d-flex justify-content-center align-items-center border p-0 m-0 w-100">
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        placeholder="Select Country"
        searchable
        customSearch={handleSearch} // Custom search function
      />
    </div>
  );
};

// Sample country list
const countryList = [
  { value: "US", label: "United States", title: "United States" },
  { value: "GB", label: "United Kingdom", title: "United Kingdom" },
  { value: "CA", label: "Canada", title: "Canada" },
  // Add more countries as needed
];

export default SearchableFlagsSelect;
