// import React, { useState, useEffect } from 'react';
// import './HeaderMain.css';
// import { IoLocation } from "react-icons/io5";
// import { RiCustomerService2Fill } from "react-icons/ri";
// import { IoLanguageSharp } from "react-icons/io5";
// import { FaCircleUser } from "react-icons/fa6";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarToggler,
//   Collapse,
//   Nav,
//   NavItem,
//   NavLink,
//   Container
// } from 'reactstrap';

// const HeaderMain = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <Navbar
//         color={isScrolled ? 'secondary' : 'transparent'}
//         light={!isScrolled}
//         dark={isScrolled}
//         expand="lg"
//         fixed="top"
//         className="p-4"
//       >
//         <Container fluid className="m-0 p-0 d-flex">
//           <NavbarBrand href="#">
//             <img src='' alt="Logo" />
//           </NavbarBrand>
//           <NavbarToggler onClick={toggle} />
//           <Collapse isOpen={isOpen} navbar className="fs-5">
//             <Nav className="ms-5 justify-content-between" navbar>
//               <NavItem>
//                 <NavLink href="#" className="text-white">Home</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#" className="text-white">About Us</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#" className="text-white">Contact</NavLink>
//               </NavItem>
//             </Nav>
//             <Nav className="ms-auto" navbar>
//               <NavItem>
//                 <NavLink href="#" className="text-white"><IoLocation /></NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#" className="text-white"><RiCustomerService2Fill /></NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#" className="text-white"><IoLanguageSharp /></NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#" className="text-white"><FaCircleUser /></NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default HeaderMain;
