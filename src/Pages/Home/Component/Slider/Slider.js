import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../../Assets/images/include/banner-1.jpg";
import banner2 from "../../../../Assets/images/include/banner-2.jpg";
import banner3 from "../../../../Assets/images/include/banner-3.jpg";
import SliderDetails from "./SliderDetails";






class Slider extends Component {
  render() {
    return (
      
        <Carousel
          
          transitionTime={2000}
          stopOnHover={false}
          infiniteLoop={true}
          interval={5000}
          autoPlay
          showThumbs={false}
          showStatus={false}
          
          
         
        >
          <div >
          <SliderDetails /> 
          <img alt="ban2" src={banner2} />
          
          
          </div>
          <div>
          <img alt="ban1" src={banner1} />
          
          </div>
          <div>
          <img alt="ban3" src={banner3} />
          
          
          </div>
        </Carousel>
      
    );
  }
}
export default Slider;
      