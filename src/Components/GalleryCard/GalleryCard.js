import React from "react";
import gall from "../../Assets/images/gallery/3.jpg"



const Card = ()=>(
    <div className="isotope-item wide helping home water">
    <div className="tm-gallery box-hover-effect">
      <div className="effect-wrapper">
        <div className="thumb">
          <img src={gall} alt="" />
          <div className="d-none">
            <a href="#!"> </a>
            <a href="#!"> </a>
          </div>
        </div>
        <div
          className="overlay-shade shade-theme-colored2"
        ></div>
        <div className="text-holder text-holder-bottom-left">
          <div className="title">Demo Gallery 1</div>
        </div>
        <div className="icons-holder icons-holder-middle">
          <div className="icons-holder-inner">
            <div
              className="styled-icons icon-dark icon-circled icon-theme-colored1"
            >
              <a
                className="lightgallery-trigger styled-icons-item"
                href={gall}
                title="Gallery 1"
                data-exthumbimage={gall}
                data-src={gall}
              >
                <i className="fa fa-picture-o"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Card;