import React from 'react';
import Navbar1 from './Navbar1';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';

function Header() {
  return (
    <>
    <Navbar1 />
    <div className = "container">
      <div className = "row">
        <div className="col-12 mt-5">
          <h1>We Are Here For A Reason.</h1> 
          <hr></hr>
        </div>
      </div>
      <div className = "row row-content align-content-center">
        <div className = "col">
          <div id="mycarousel" className="carousel slide" data-ride="carousel">
            <Carousel>
              <Carousel.Item>
                <img
                  className="col-ml-4 d-block img-fluid"
                  src="images/vishnu.png" width='400px'
                  alt="First slide"
                />
                <Carousel.Caption>
                  <div className="carousel-caption col-10 col-sm d-none d-md-block">
                    <h1>Shri Vishnu Engineering College For Women (Autonomous).</h1>
                    <h3>Bhimavaram,Vishnupur.</h3>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid"
                  src="images/logo.png" height='25px' width='350px'
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <div className="carousel-caption col-10 col-sm d-none d-md-block">
                    <h1>COMMUNITY CONNECT</h1>
                    <h3>Explore More To Improve Your intellectuality.</h3>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid"
                  src="images/mentor.png" height='50px' width='350px'
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <div className="carousel-caption col-10 col-sm d-none d-md-block">
                    <h1>ASSOCIATION</h1>
                    <h4>Knowledge can only be volunteered it cannot be conscripted,</h4>
                    <h4>“In the context of real need few people will withhold their knowledge.”</h4>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    </> 
  );
}

export default Header;