import React, { Fragment } from "react";
import { AccessoriesCard } from "../../Components";


const Accessories = () => (
  <Fragment>
  
  <section className="products">
  <div className="container">
    <div className="row">
      <AccessoriesCard />
      <AccessoriesCard />
      <AccessoriesCard />
    </div>
  </div>
  </section>
  </Fragment>
);
export default Accessories;
