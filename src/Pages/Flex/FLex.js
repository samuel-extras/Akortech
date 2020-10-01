import React, { Fragment } from "react";
import flexData from "./flexData";
import { SubPagePattern } from "../../Components";

const Flex = () => (
  <Fragment>
    <SubPagePattern
      name={flexData.name}
      logo={flexData.image}
      details={flexData.details}
    />
  </Fragment>
);
export default Flex;
