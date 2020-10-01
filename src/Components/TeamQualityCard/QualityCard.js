import React from "react";



const QualityCard =({title,icon,description})=>(
    <div className="col-md-6 col-lg-6 col-xl-3" style={{fontFamily: "Poppins sans-serif", fontSize: "22px", }}>
    <div
      className="tm-sc tm-sc-icon-box icon-box icon-top tm-iconbox-icontype-font-icon text-center iconbox-style7-hover-moving-border bg-white iconbox-box-shadow iconbox-theme-colored1 iconbox-default-padding icon-position-icon-top mb-lg-50"
    >
      <div className="icon-box-wrapper">
        <div className="icon-wrapper">
          <a href="#!" className="icon icon-type-image icon-default">
            <img src={icon} alt={title} />
          </a>
        </div>
        <div className="icon-text">
          <h5 className="icon-box-title mt-0">
            {title}
          </h5>
          <div className="content">
            <p>
               {description}
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
)
export default QualityCard;