import React, { Fragment } from "react";
import logoDevData from "./logoDevData"
import { SubPagePattern } from "../../Components";

const LogoDev =()=>(
    <Fragment>
    <SubPagePattern
     name={logoDevData.name}
     logo={logoDevData.image}
     details={logoDevData.details}
     lh={"50px"}
    />
    </Fragment>
)
export default LogoDev