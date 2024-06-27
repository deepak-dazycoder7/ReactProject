import React from "react";
import Carousel from "../Carousel/Carousel";
import Box from "../Box/Box";
import Banner from "../BannerBox/Banner";
import Citysearch from "../CitySearchBox/Citysearch";
import SearchLocate from "../Search-Locate-Ct/SearchLocate";
import Testingmonial from "../Tesimonial/TestimonialCard";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <Carousel />
      <Box />
      <SearchLocate />
      <Banner />
      <Citysearch />
      <Testingmonial />
      <Footer />
    </>
  );
};

export default Home;
