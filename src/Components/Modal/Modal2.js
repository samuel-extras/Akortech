import React from "react";
import Popup from "reactjs-popup";



import { CustomButton } from "..";

 
const Modeno =({closeModal}) => (
    <Popup trigger={<button className="button cusbutton" > 
    Submit </button>} modal
    
   
    
   
    
    >
    {close => (
      <div >
        <a className="close" href onClick={closeModal} style={{color:"red"}}>
          &times;
        </a>
        <h4 className="header"> Thank You For Contacting Us </h4>
       <p>We will get back to you shortly</p>
         
          <CustomButton  HandleClick={closeModal}>OK</CustomButton>
        
      </div>
    )}
  </Popup>
);

export default Modeno