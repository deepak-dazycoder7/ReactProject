import React, { useState } from "react";
import { Button, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from "reactstrap";
import './Box.css'; // Import the custom CSS for Box component

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
    setDropdownOpen(false);  // Close dropdown after selection
  };


  return (
    <div className="container">
      <div className="container-fluid shadow rounded-4 p-2 container bg-white" style={{ width: "60rem", height: "auto" }}>
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
            <div className="ms-5" style={{ width: '700px' }}>
              <div className="drop-search d-flex border border-primary rounded-pill">
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle
                    caret
                    color="outline-primary"
                    className="border rounded-start-pill"
                  >
                    {selectedItem}
                  </DropdownToggle>
                  <DropdownMenu className="border border-primary border-top-0" style={{ width: '700px' }}>
                    <DropdownItem onClick={() => handleDropdownSelect("Action")}>Action</DropdownItem>
                    <DropdownItem onClick={() => handleDropdownSelect("Another action")}>Another action</DropdownItem>
                    <DropdownItem onClick={() => handleDropdownSelect("Something else here")}>Something else here</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => handleDropdownSelect("Separated link")}>Separated link</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Input
                  type="text"
                  className="remove-focus form-control border rounded-end-pill"
                  aria-label="Text input with dropdown button"
                  placeholder="Search Here..."

                />
              </div>
              <div className="drop-search d-flex border border-primary border-bottom-o rounded-top">
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle
                    caret
                    color="outline-primary"
                    className="border rounded-0 rounded-top "
                  >
                    {selectedItem}
                  </DropdownToggle>
                  <DropdownMenu className="border border-primary border-top-0 rounded-top-0" style={{ width: '700px', marginLeft: '-1px', }}>
                    <DropdownItem onClick={() => handleDropdownSelect("Action")}>Action</DropdownItem>
                    <DropdownItem onClick={() => handleDropdownSelect("Another action")}>Another action</DropdownItem>
                    <DropdownItem onClick={() => handleDropdownSelect("Something else here")}>Something else here</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => handleDropdownSelect("Separated link")}>Separated link</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Input
                  type="text"
                  className="remove-focus form-control border rounded-0 rounded-top"
                  aria-label="Text input with dropdown button"
                  placeholder="Search Here..."

                />
              </div>
              {/* related to user searched */}
              <div className="search-drop-item border outline-primary p-1">
                <ul>
                  <li>user input and search</li>
                  <li>user input and search</li>
                </ul>
              </div>

            </div>
          </section>
          <section>
            <div className="search-btn ms-5">
              <Button color="primary" className="remove-focus rounded-pill  px-4 py-1 ">Search</Button>
            </div>
          </section>
        </div>

      </div>
    </div>

  );
};

export default Box;
