import React from "react";

import Textarea from "../../Components/TextArea/Textarea";

import { FormInput, CustomButton } from "../../Components";



const InputCont = () => (
   
  <div role="form" className="wpcf7" id="wpcf7-f452-p311-o1" lang="en-US" dir="ltr">
    <div className="screen-reader-response"></div>
    <form action="" method="post" className="wpcf7-form" noValidate="novalidate">
      <div className="tm-contact-form-transparent pr-0">
        <div className="row">
        
        <FormInput
        type="text"
         placeholder="Name*"
         
         name="your-name"
         grid='col-md-6'
         
         />
        <FormInput
        type="email"
         name="your-email" 
         placeholder="Email*"
         grid='col-md-6'
        
        />
        <FormInput 
        type="text"
        name="your-phone" 
        placeholder="Phone*"
        grid='col-md-6'
      
        />

        <FormInput type="text"
         name="your-subject" 
         placeholder="Subject*"
         grid='col-md-6'
         
        

         />
        
        <Textarea className='col-md-12' />
        </div>  
        <CustomButton className="invertedbtn">Submit</CustomButton>
      </div>
    </form>
  </div>
);      
export default InputCont;
