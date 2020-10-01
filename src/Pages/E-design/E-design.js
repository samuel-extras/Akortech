import React, { Fragment } from "react";
import edesign from "./DesignData"
import { MainPagePattern } from "../../Components";



const Design = ()=>(
    <Fragment>
    
        < MainPagePattern
         name={edesign.name}
         header={edesign.header}
         details={edesign.details}
         buttons={edesign.buttons}
         subs={edesign.subs}
         />
    
    
    </Fragment>
   
    
)

export default Design