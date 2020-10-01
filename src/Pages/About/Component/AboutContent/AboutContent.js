import React from "react";
import bconsul2 from "../../../../Assets/images/bg/bg-shape-bconsul2.png";
import banner2 from "../../../../Assets/images/include/banner-2.jpg";

const AboutContent = () => (
  <section className="bg-img-no-repeat bg-img-right" data-tm-bg-img={bconsul2}>
    <div  className="container">
      <div className="section-content">
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-md-12" >
            <img
              src={banner2}
              className="attachment-full"
              alt=""
              
            />
          </div>
          <div className="col-xl-6 col-lg-6">
            <h2 className="font-size-54">Akortech Services and Consult</h2>
            <div style={{ fontFamily: "Popins", fontSize: "24px" }}>
              <p>
                Akortech services and Consult deals with supplies of information
                technology (IT) accessories and focus on Providing IT Solutions
                likes:
                </p>
                <ul className="list-unstyled mb-20">
                  <li className="text-theme-colored1">
                    <i className="fa fa-check-circle text-theme-colored1 mr-10"></i>
                    system consultant
                  </li>
                  <li className="text-theme-colored1">
                    <i className="fa fa-check-circle text-theme-colored1 mr-10"></i>
                    Digital Branding
                  </li>
                  <li className="text-theme-colored1">
                    <i className="fa fa-check-circle text-theme-colored1 mr-10"></i>
                    Programming
                  </li>
                  <li className="text-theme-colored1">
                    <i className="fa fa-check-circle text-theme-colored1 mr-10"></i>
                    System Maintenance and lot more..
                  </li>
                </ul>
                <p>
                Akortech service and consult platform focuses on advising
                organizations on various fields of activity on how best to use
                information technology(IT) in achieving their business
                Objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutContent;
