import React from "react";
import Carousel from "../Carousel/Carousel";
import Box from "../Box/Box";
import Banner from "../BannerBox/Banner";
import Citysearch from "../CitySearchBox/Citysearch";
import SearchLocate from "../Search-Locate-Ct/SearchLocate";
import Testingmonial from "../Tesimonial/TestimonialCard";
const Home = () => {
  return (
    <>
      <Carousel />
      <Box />
      <SearchLocate />
      <Banner />
      <Citysearch />
      <Testingmonial />
    </>
  );
};

export default Home;
