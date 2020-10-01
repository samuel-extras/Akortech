import React from "react";
import bgas02 from "../../../../Assets/images/bg/as02.jpg"

const Header = () => (
  <section
    className="page-title divider layer-overlay overlay-dark-8 section-typo-light bg-img-center"
   
    style={{backgroundImage: `url(${bgas02})`}}
  >
    <div className="container pt-90 pb-90">
      <div className="section-content">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="title text-white">Blog</h2>
            <nav role="navigation" className="breadcrumb-trail breadcrumbs">
              <div className="breadcrumbs">
                <span className="trail-item trail-begin">
                  <a href="#!">
                    <span>Home </span>
                  </a>
                </span>
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
                <span className="trail-item">
                  <a href="#!">
                    <span> Tech Update </span>
                  </a>
                </span>
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
                <span
                  itemScope
                  itemType="http://schema.org/ListItem"
                  className="trail-item trail-end active"
                >
                  <span> Blog</span>
                </span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Header;
