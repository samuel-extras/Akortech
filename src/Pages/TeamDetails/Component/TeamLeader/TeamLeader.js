import React from "react";
import { SocialLink } from "../../../../Components";
import korex from "../../../../Assets/images/team/korex.jpg"

const TeamLeader = () => (
  <section className="container">
    <div className="section-content">
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className="mb-md-30">
            <img src={korex} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <h3 className="name mb-0" >Korede Busuyi</h3>
          <h5 className="text-theme-colored1 mb-30" style={{fontSize: "35px", fontWeight: "bold"}}>System Analyst</h5>
          <p style={{fontSize: "22px", fontWeight: "bold", padding:"15px"}}>
            Korede Busuyi, a system analyst, CEO of akortech service and
            consult, our aims and objectives is to enable Individual, company
            and businesses throughout the world to realize their full potential
            and access information technology solutions. to improve
            organizations goal and design a structure to implement it's. to add
            values and connect business to every person in the world
          </p>

          <SocialLink/>
        </div>
      </div>
    </div>
  </section>
);

export default TeamLeader;
