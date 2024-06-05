import React from 'react'
import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.jpg'
import Img3 from '../../assets/img3.jpg'
import './Banner.css';

const Banner = () => {
  return (
    <>
     
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Img1} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Img2} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Img3} className="d-block w-100 " alt="..."/>
    </div>
  </div>
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span className="visually-hidden">Next</span>
  </button> 
</div>
    </>
  )
}

export default Banner