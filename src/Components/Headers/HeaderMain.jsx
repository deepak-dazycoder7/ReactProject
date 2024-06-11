import React from 'react';
import Logo from '../../../public/Techlogo.png.png';
import './HeaderMain.css';
import { IoLocation } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoLanguageSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const HeaderMain = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="transparent" light expand="lg" fixed="top" className="z-10 position-fixed w-100 p-4">
        <Container fluid className="m-0 p-0 d-flex">
          <NavbarBrand href="#">
            <img src={Logo} alt="Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="justify-content-between fs-5">
            <Nav className="ms-5" navbar>
              <NavItem>
                <NavLink href="#" className="text-white">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-white">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-white">Contact</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="#" className="text-white"><IoLocation /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-white"><RiCustomerService2Fill /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-white"><IoLanguageSharp /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-white"><FaCircleUser /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderMain;
