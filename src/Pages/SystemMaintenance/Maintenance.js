import React, { Fragment } from "react";
import data from "./data"
import { MainPagePattern } from "../../Components";



const Maintenance = ()=>(
    <Fragment>
    
        < MainPagePattern
         name={data.name}
         header={data.header}
         details={data.details}
         buttons={data.buttons}
         subs={data.subs}
         />
    
    
    </Fragment>
   
    
)

export default Maintenance