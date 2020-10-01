import React from "react";

const Button = ({ children, HandleClick, className,  }) => (
  
    <button className={className}
    onClick={HandleClick}
   
    >{children}</button>
  
);
export default Button;
