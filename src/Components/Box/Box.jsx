import React, { useState } from "react";
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

        <div class="row input-group mb-3 d-flex justify-content-between container-fluid">
          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
          <input type="text" class="form-control" aria-label="Text input with dropdown button" />
        </div>

      </div>
    </div>

  );
};

export default Box;
