import React from "react";
import { ServicesCard } from "../../Components";

import services from "./servicesdata";

const Service = () => (
  <section className="">
    <div className="container">
      <div className="section-content">
        <div className="row">
        { services.map((service)=><ServicesCard key={service.id} 
        image={service.image}
        description={service.description}
        name={service.name}
        button={service.button}
        icon={service.icon}
        url={service.url}
        />)}
        </div>
      </div>
    </div>
  </section>
);
export default Service
