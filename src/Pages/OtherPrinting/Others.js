import React, { Fragment } from "react";
import othersData from "./othersData";
import { SubPagePattern } from "../../Components";

const Others = () => (
  <Fragment>
    <SubPagePattern
      name={othersData.name}
      logo={othersData.image}
      details={othersData.details}
      lh={"45px"}
    />
  </Fragment>
);
export default Others;
