import React from "react";

import {  Modal } from "../../Components";


const SubPage = ({name, details, logo, lh}) => (
  <section className="container">
    <div className="section-content">
      <div className="row">
        <div
          className="col-md-12 col-lg-12"
          style={{
            border: `1px solid orange`,
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h2>{name}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6"
         style={{
           
            padding: ` 37px 20px`,
            
          }}>
          <img alt="logo" src={logo} />
        </div>
       
        <div
          className="col-md-6 col-lg-6"
          style={{
            fontSize: "1.5em",
            padding: ` 20px 20px 10px 10px`,
            fontWeight: "5px",
            lineHeight: `${lh}`,
          }}
        >
        {details}
          <Modal/>
        </div>
        
      </div>
    </div>
  </section>
);
export default SubPage;
