import React from "react";
import FormHeader from "../../Pages/Contact/ContactFormHeader";
import { InputsContainer } from "..";


const FormCon = () => (
  <div
    style={{background: "orange"}}
    className="tm-sc tm-sc-custom-columns-holder-item section-typo-light bg-theme-colored1"
    data-item-class="econsul-mascot-custom-columns-924797"
    data-1200-up="80px 15% 100px 10%"
    data-1199-down="80px 10% 100px 10%"
  >
    
      <div style={{padding: "60px"}}  className=" item-content econsul-mascot-custom-columns-924797">
      
      <FormHeader/>
      <InputsContainer/>
      </div>
    </div>

);
export default FormCon;
