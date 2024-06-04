import React from 'react'
import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.jpg'
import Img3 from '../../assets/img3.jpg'
import './Banner.css';

const Banner = () => {
  return (
    <>
     
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Img1} class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Img2} class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Img3} class="d-block w-100 " alt="..."/>
    </div>
  </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Next</span>
  </button> 
</div>
    </>
  )
}

export default Banner