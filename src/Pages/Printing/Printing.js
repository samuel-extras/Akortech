import React, { Fragment } from "react";
import printing from "./data"
import { MainPagePattern } from "../../Components";



const Printing = ()=>(
    <Fragment>
    
        < MainPagePattern
         name={printing.name}
         header={printing.header}
         details={printing.details}
         buttons={printing.buttons}
         subs={printing.subs}
         
         />
    
    
    </Fragment>
   
    
)

export default Printing