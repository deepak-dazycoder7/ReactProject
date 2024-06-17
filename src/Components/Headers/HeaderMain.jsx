import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from 'reactstrap';
import Logo from '../../../public/Techlogo.png.png';
import { IoLocation } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoLanguageSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import './HeaderMain.css';

const HeaderMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar color={isScrolled ? 'primary' : 'transparent'} light={!isScrolled} expand="md" fixed="top" style={{ height: '60px', borderBottom: '1px solid rgba(255, 255, 255, 0.5)' }}>
        <NavbarBrand href="/" className="d-flex align-items-center ms-auto me-auto">
          <img src={Logo} alt="Logo" style={{ height: '60px' }} className='ms-4' />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="ml-auto bg-light border-primary text-primary" />
        <Collapse isOpen={isOpen} navbar className="fs-5">
          <Nav className="m-2 justify-content-between" navbar>
            <NavItem>
              <NavLink className="text-white" href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ms-auto me-4 d-flex flex-row justify-content-center align-items-center" navbar>
            <NavItem>
              <NavLink className="text-white" href="#">
                <IoLocation />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="#">
                <RiCustomerService2Fill />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="#">
                <IoLanguageSharp />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="#">
                <FaCircleUser />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <style jsx>{`
        .nav-link {
          padding: 10px;
        }
        @media (max-width: 767px) {
          .navbar-collapse {
            background-color: lightblue;
            position: absolute;
            top: 60px; /* Adjusted for the height of the navbar */
            right: 0;
            width: 100%;
            text-align: center;
            color: white;
            font-weight: 700;
            border-top: 1px solid rgba(255, 255, 255, 0.5); /* Border above the navbar */
          }
          .navbar-collapse .nav-item {
            padding: 0.3rem 0;
          }
          .navbar-collapse .nav-item .nav-link {
            padding: 0.5rem 0.5rem;
          }
         
          .navbar-toggler {
            position: absolute;
            right: 15px;
            top: 10px; /* Adjust as needed */
          }
           .navbar-brand {
             position: absolute;
            left: 10%;
            transform: translateX(-50%);
           }
        }
      `}</style>
    </>
  );
};

export default HeaderMain;
