import React from "react";
import { Link } from "react-router-dom";




const Card = ({name,image,icon, description, button, url})=>(
 
    <div className="col-md-6 col-lg-6 col-xl-4" style={{fontFamily: "Poppins sans-serif", fontSize: "20px",marginBottom:"40px", }}>
    <Link to={`${url}`} style={{color:"black"}}>
    
    <div className="services-block mb-50">
      <div className="inner-box">
        <div className="thumb">
          <img
            
            src={image}
            alt="img"
          />
        </div>
        <div className="content">
          <div className="symbol-icon">
            <img src={icon} alt={name} />
          </div>
          <h4>{name}</h4>
          <p>
            {description}
          </p>
          
          <div className="btn btn-warning" > {button}</div>
          
        </div>
      </div>
    </div>
    </Link>
    </div>
  
)
export default Card