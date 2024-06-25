import React from 'react'
import HeaderMain from './Components/Headers/HeaderMain'
import Carousel from './Components/Carousel/Carousel'
import Box from './Components/Box/Box'
import Banner from './Components/BannerBox/Banner'
import Citysearch from './Components/CitySearchBox/Citysearch';
import SearchLocate from './Components/Search-Locate-Ct/SearchLocate'
import Footer from './Components/Footer/Footer'
import Testingmonial from './Components/Tesimonial/TestimonialCard'
import ContactUs from './Components/ContactUs/ContactUs'
const App = () => {
  return (
    <>
       <HeaderMain />
      <Carousel />
      <Box /> 
      <SearchLocate/>
      <Banner />
      <Citysearch />
      <Testingmonial/>
      <ContactUs/>
      <Footer/> 
    </>
  )
}

export default App