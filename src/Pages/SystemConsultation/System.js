import React, { Fragment } from "react";
import consult from "./data"
import { MainPagePattern } from "../../Components";



const Consultation = ()=>(
    <Fragment>
    
        < MainPagePattern
         name={consult.name}
         header={consult.header}
         details={consult.details}
         buttons={consult.buttons}
         subs={consult.subs}
         />
    
    
    </Fragment>
   
    
)

export default Consultation