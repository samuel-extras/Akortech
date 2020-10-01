import React from "react";
import mage from "../../Assets/images/include/akortech-logo.png";
import { withRouter } from "react-router-dom";

import { CustomButton } from "../../Components";

const Header = ({ buttons, name, header, details, subs, match, history }) => (
  <section>
    <div className="section-content">
      <div className="row">
        <div className="col-md-12 text-center">
          <div
            style={{
              backgroundImage: `url(${mage})`,
              backgroundSize: "cover",
              opacity: 0.1,
              height: "800px",
              position: "absolute",
              width: "100%",
            }}
          />
          <h2 className="title" style={{ color: "orange" }}>
            {name}
          </h2>
          <div style={{ padding: `10px 20px` }}>
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {header}
            </span>

            <p
              style={{
                fontSize: "1.2em",
                padding: ` 20px 0px`,
                fontWeight: "4px",
                lineHeight: "50px",
              }}
            >
              {details}
            </p>
            

            <div className="row logobtn">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12  bottonheader">
                <h3>{buttons}</h3>
              </div>

              {subs.map((sub,i) => (
                <div key={i} className="">
                
                  <CustomButton
                  className="cusbutton"
                    HandleClick={() => history.push(`${match.url}${sub.url}`)}
                  >
                    {sub.name}
                  </CustomButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default withRouter(Header);
