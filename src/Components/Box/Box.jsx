import React, { useState } from "react";
import { Container, Button, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from "reactstrap";
import SearchBg from '../../assets/search-box-bg.jpg'
import './Box.css';

const Box = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dropdown");

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleDropdownSelect = (item) => {
    setSelectedItem(item);
    setDropdownOpen(true);  // Close dropdown after selection
  };


  return (
    <Container fluid className="d-flex align-items-center justify-content-center" 
    style={{ backgroundImage: `url(${SearchBg})`,height: '400px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <Container className="shadow rounded-4 p-2 bg-white" style={{ width: "60rem", height: "auto" }}>
        <section>
          {/* Tab Pane Button Links */}
          <div className="tab-pane">
            <Nav className="justify-content-evenly">
              {[...Array(6)].map((_, index) => (
                <NavItem key={index}>
                  <NavLink
                    className={`text-dark ${activeTab === index ? "active" : ""}`}
                    href="#"
                    onClick={() => handleTabClick(index)}
                    style={{
                      borderBottom: activeTab === index ? "2px solid blue" : "none",
                      cursor: 'pointer'
                    }}
                  >
                    Link{index}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
          {/* Horizontel line break */}
          <hr className="mt-0" />

          {/* tab content show selected by user  */}
          <div className="tab-content m-3">
            {[...Array(6)].map((_, index) => (
              <div key={index} className={`tab-pane ${activeTab === index ? "active" : ""}`}>
                {activeTab === index && <div>Content for Link{index}</div>}
              </div>
            ))}
          </div>

        </section>
        {/* Search box and dropdown button */}

        <div className="container-box d-flex">
          {/* DropToggle & input Search box  */}
          <section>
            <div className="ms-5 mb-2 focus-container d-flex" style={{ width: '700px' }}>
              <div className="">
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle
                    caret
                    color="outline-primary"
                    className="droptoggle border rounded-start-pill border-primary"
                  >
                    {selectedItem}
                  </DropdownToggle>
                  <DropdownMenu className=" dropmenu border border-primary border-top-0 rounded-top-0" style={{ width: '700px' }}>
                    <DropdownItem onClick={() => handleDropdownSelect("Action")}>Action</DropdownItem>
                    <DropdownItem onClick={() => handleDropdownSelect("Another action")}>Another action</DropdownItem>
                    <DropdownItem onClick={() => handleDropdownSelect("Something else here")}>Something else here</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => handleDropdownSelect("Separated link")}>Separated link</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div style={{ width: '700px' }}>
                <Input
                  type="text"
                  className="form-control border rounded-end-pill  border-primary"
                  aria-label="Text input with dropdown button"
                  placeholder="Search Here..."
                  id="inputField"
                />
                {/* related to user searched */}
                <div className="list-container bg-white shadow border border-primary border-top-0 rounded-bottom">
                  <ul className="list-unstyled p-2">
                    <li>User input </li>
                    <li>User search</li>
                    <li>User input and search</li>
                    <li>Search history</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="search-btn ms-5">
              <Button color="primary" className="remove-focus rounded-pill  px-4 py-2 ">Search</Button>
            </div>
          </section>
        </div>

      </Container>
    </Container>

  );
};

export default Box;
