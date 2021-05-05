import React, { useState } from "react";

import Modal from "react-modal";
import { CustomButton } from "..";
import FormInput from "../FormInput";
import Textarea from "../TextArea/Textarea";

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
    opacity: 1,
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("div");

function Mode() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
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
    <div>
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
          <i
            onClick={closeModal}
            className=" fa fa-window-close"
            style={{
              top: "1px",
              right: "1px",
              position: "fixed",
              color: "red",
            }}
          ></i>
        </h2>
        <div>
          <h3
            ref={(_subtitle) => (subtitle = _subtitle)}
            style={{ textAlign: "center" }}
          >
            Connect With Us{" "}
          </h3>
          <div className="row">
            <FormInput
              name="name"
              type="text"
              placeholder="Name*"
              required
              grid="col-md-6"
              onChange={(e) => setName(e.target.value)}
            />
            <FormInput
              name="email"
              type="email"
              placeholder="Email*"
              onChange={(e) => setEmail(e.target.value)}
              required
              grid="col-md-6"
            />
          </div>
          <div className="row">
            <FormInput
              onChange={(e) => setPhone(e.target.value)}
              name="phone number"
              type="phone"
              placeholder="Phone*"
              required
              grid="col-md-6"
            />
            <FormInput
              name="company"
              type="text"
              placeholder="Company Name*(optional)"
              required
              grid="col-md-6"
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="row">
            <FormInput
              name="subject"
              type="text"
              placeholder="Subject*"
n              required
              onChange={(e) => setSubject(e.target.value)}
              grid="col-md-12"
            />
          </div>
          <Textarea />
          <a
            href={`https://m.me/akortechservices?target=${JSON.stringify({
              name,
              email,
              phone,
              subject,
              company,
            })}`}
            className="button cusbutton"
          >
            Submit{" "}
          </a>
        </div>
      </Modal>
    </div>
  );
}
export default Mode;
