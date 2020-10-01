import React from "react";

const FormInput = ({grid,...otherProps}) => (
  <div className={`groupme ${grid}`}>
   
      <input
        defaultValue=''
        className="myform-input"
        
{...otherProps}
      />
    
  </div>
);

export default FormInput;
