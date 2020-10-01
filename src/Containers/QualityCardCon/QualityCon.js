import React from "react";

import qualities from "./QualityData"
import { QualityCard } from "../../Components";

const Qualities = () => (
  <section className="">
    <div style={{padding: "20px"}} >
      <div className="section-content">
        <div className="row">
       {
         qualities.map((quality,i)=><QualityCard
         key={i}
           title={quality.title}
           description={quality.description}
           icon={quality.icon}
           />)
       }
        </div>
      </div>
    </div>
  </section>
);
export default Qualities;
