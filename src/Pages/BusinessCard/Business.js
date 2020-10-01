import React, { Fragment } from "react";
import businessData from "./Businessdata"
import { SubPagePattern } from "../../Components";


const BusinessCard=()=>(
    <Fragment>
    
        <SubPagePattern
         name={businessData.name}
         logo={businessData.image}
         details={businessData.details}
         lh={"55px"}
         />
    
    </Fragment>
)
export default BusinessCard