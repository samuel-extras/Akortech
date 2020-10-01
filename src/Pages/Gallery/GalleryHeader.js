import React from "react";

const GalleryHeader = () => (
  <section
    className="page-title divider layer-overlay overlay-dark-8 section-typo-light bg-img-center"
    data-tm-bg-img="images/bg/as02.jpg"
  >
    <div className="container pt-90 pb-90">
      <div className="section-content">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="title text-white">Photo Gallery</h2>
            <nav role="navigation" className="breadcrumb-trail breadcrumbs">
              <div className="breadcrumbs">
                <span className="trail-item trail-begin">
                  <a href="#!">
                    <span>Home</span>
                  </a>
                </span>
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
                <span className="trail-item">
                  <a href="#!">
                    <span>Pages</span>
                  </a>
                </span>
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
                <span className="trail-item trail-end active">Gallery</span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default GalleryHeader;
