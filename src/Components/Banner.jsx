import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Banner() {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="https://img.freepik.com/free-psd/new-smartphone-mockup-floating_252953-7.jpg?t=st=1715926038~exp=1715929638~hmac=93140874d7c952bf4837affacf388ef8592343ea5204e2556101979dc37fb069&w=1060" height={'600px'} width={'100%'} alt="" />
       
        
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src="https://img.freepik.com/premium-psd/smartphones-mockup_165789-171.jpg?w=900" height={'600px'} width={'100%'} alt="" />
       
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1715926246~exp=1715929846~hmac=7b56deefee49565281c9481e6b271566c85b1c0a6cd074c39396b4e2ce268cb7&w=360" height={'600px'} width={'100%'} alt="" />
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner