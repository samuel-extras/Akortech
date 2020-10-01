import React from "react";
import { GalleryCard } from "../../Components";

const Gallery = () => (
  <section>
    <div className="container pb-70">
      <div className="section-content">
        <div className="row">
          <div className="col-sm-12">
            <div className="tm-sc tm-sc-gallery tm-sc-gallery-masonry gallery-style1-simple">
              <div className="isotope-layout masonry grid-3 gutter lightgallery-lightbox clearfix">
                <div className="isotope-item isotope-item-sizer"></div>
                <GalleryCard/>
                <GalleryCard/>
                <GalleryCard/>
                <GalleryCard/>
                <GalleryCard/>
                <GalleryCard/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;
