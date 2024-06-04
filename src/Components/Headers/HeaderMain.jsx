import React from 'react';
import Logo from '../../../public/Techlogo.png.png';
import './HeaderMain.css';
import { IoLocation } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoLanguageSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";

const HeaderMain = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top z-3 position-absolute p-4 navbar-light">
        <div className="container-fluid m-0 p-0">
          <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse justify-content-between fs-5" id="ftco-nav">
            <ul className="navbar-nav ms-5">
              <li className="nav-item active"><a href="#" className="nav-link text-white">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link text-white">About Us</a></li>
              <li className="nav-item"><a href="#" className="nav-link text-white">Contact</a></li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a href="#" className="nav-link text-white"><IoLocation /></a></li>
              <li className="nav-item"><a href="#" className="nav-link text-white"><RiCustomerService2Fill /></a></li>
              <li className="nav-item"><a href="#" className="nav-link text-white"><IoLanguageSharp /></a></li>
              <li className="nav-item"><a href="#" className="nav-link text-white"><FaCircleUser /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderMain;
