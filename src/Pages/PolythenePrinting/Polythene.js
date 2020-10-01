import React, { Fragment } from "react";
import data from "./data"
import { SubPagePattern } from "../../Components";

const Polythene =()=>(
    <Fragment>
    <SubPagePattern
     name={data.name}
     logo={data.image}
     details={data.details}
     lh={"70px"}
     
    />
    </Fragment>
)
export default Polythene