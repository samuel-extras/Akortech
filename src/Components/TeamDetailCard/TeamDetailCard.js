import React from "react";

import SocialLink from "../SocialLink";

const TeamCard = ({name, profession,image}) => (
  <div className="col-md-6 col-lg-6 col-xl-3" >
    <div className="staff-block mb-lg-30">
      <div className="inner-box">
        <div className="image">
          <img src={image} alt="team member" />
          <h4 className="name-tag">{name}</h4>
          <div className="overlay-box">
            <div className="overlay-inner">
              <div className="content">
                <h4 className="text-theme-colored1">
                  <a href="#!">{name}</a>
                </h4>
                <p>{profession}</p>
                <SocialLink/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamCard;
