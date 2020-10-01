import React, { Fragment } from "react";
import bannerData from "./bannerData"
import { SubPagePattern } from "../../Components";


const Banner=()=>(
    <Fragment>
    
        <SubPagePattern
         name={bannerData.name}
         logo={bannerData.image}
         details={bannerData.details}
         lh={"70px"}
         />
    
    </Fragment>
)
export default Banner