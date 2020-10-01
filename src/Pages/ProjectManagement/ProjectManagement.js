import React, { Fragment } from "react";
import data from "./data"
import { SubPagePattern } from "../../Components";

const ProjectM =()=>(
    <Fragment>
    <SubPagePattern
     name={data.name}
     logo={data.image}
     details={data.details}
     lh={"50px"}
    />
    </Fragment>
)
export default ProjectM