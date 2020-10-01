import React from "react";

import Modal from "react-modal";
import { CustomButton } from "..";
import FormInput from "../FormInput";
import Textarea from "../TextArea/Textarea";
import Modeno from "./Modal2";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "600px",
    border: `8px solid black`,
    
    
    
    
  },
  overlay: {
    position: "absolute",
    opacity: 1
   
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("div");

function Mode() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "orange";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div >
    <CustomButton className="cusbutton">
    <div onClick={openModal}>GET YOURS</div>
    </CustomButton>
    <Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    
    contentLabel="Logo Development"
    >
    <h2>
    
    <i onClick={closeModal} className=" fa fa-window-close" 
    style={{top:"1px", right: "1px", position: "fixed", color:"red" }} ></i>
    </h2>
      <div>
      <h3 
      ref={(_subtitle) => (subtitle = _subtitle)}
      style={{textAlign:"center"}}
      >Connect With Us </h3>
      <div className="row">
      <FormInput name="name"
            type="text"
            placeholder="Name*"
           
            required 
            grid='col-md-6'
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Email*"
            
            required
            grid='col-md-6'
            />
            </div>
            <div className="row">
          <FormInput
          name="phone number"
          type="phone"
            placeholder="Phone*"
           
            required
            grid='col-md-6'
          />
          <FormInput
          name="company"
          type="text"
          placeholder="Company Name*(optional)"
          
          required
          grid='col-md-6'
          />
          
          
          </div>
          <div className="row">
          <FormInput
          name="subject"
          type="text"
          placeholder="Subject*"
          
          required
          grid='col-md-12'
          />
          </div>
          <Textarea />
          
          <Modeno closeModal={closeModal}/>
          </div>
          </Modal>
    </div>
  );
}
export default Mode;
