import React, { useState } from "react";
import { Button } from "reactstrap";
import './Box.css';

const Box = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };



  return (
    <div className="container">
      <div className="container-fluid shadow  rounded-4 p-2 container bg-white" style={{ width: "60rem", height: "auto" }}>
        <div className=" tab-pane">
          <ul className="nav justify-content-evenly">
            {[...Array(6)].map((_, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link text-dark ${activeTab === index ? "active" : ""}`}
                  href="#"
                  onClick={() => handleTabClick(index)}
                  style={{
                    borderBottom: activeTab === index ? "2px solid blue" : "none",
                  }}
                >
                  Link{index}
                </a>
              </li>
            ))}
          </ul>
          <hr className="mt-0" />
          <div className="tab-content m-3">
            {[...Array(6)].map((_, index) => (
              <div key={index} className={`tab-pane ${activeTab === index ? "active" : ""}`}>
                {activeTab === index && <div>Content for Link{index}</div>}
              </div>
            ))}
          </div>


        </div>
        {/* Search box and dropdown button */}
        <div className="search-box ms-5 d-flex justify-content-center align-item-center">
          <div class="row1 input-group border border-primary rounded-pill p-0 m-1">
            <button class="btn btn-outline-secondary fcsrmv dropdown-toggle border rounded-start-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
            <input type="text" class=" remove-focus form-control border rounded-end-pill" id="input-box" aria-label="Text input with dropdown button" placeholder="Search Here..." autoComplete="off" />

          </div>
          {/* <div className="result-box "style={{width: '660px'}}>
            <ul>
              <li>javascript</li>
              <li>webdevlopment</li>
              <li>React JS</li>
            </ul>
          </div> */}
          <div><Button color="primary" className=" remove-focus rounded-pill  mx-5 px-4 py-2 btn-lg">Search</Button></div>
        </div>
      </div>
    </div>

  );
};

export default Box;
