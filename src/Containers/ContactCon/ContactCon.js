import React from "react";
import Image from "../../Pages/Contact/FormImage"
import {  FormContainer } from "..";

const ContactCon = () => (
  <section id="contact" className="bg-white-f4">
    <div className="container" >
      <div className="section-content">
        <div className="row">
          <div className="col-sm-12">
            <div className="tm-sc tm-sc-custom-columns-holder tm-cc-two-columns tm-cc-responsive-mode-1280">
              <Image/>
              <FormContainer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default ContactCon;
