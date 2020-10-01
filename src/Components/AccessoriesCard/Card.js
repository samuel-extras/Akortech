import React from "react";

import imagepro from "../../Assets/images/gallery/1.jpg";

const Card = ({ name, image, icon, description, button }) => (
  <div className="col-md-4 col-xs-6">
    <article>
      <div className="info">
        <span className="add-favorite">
          <a
            href="#!"
            data-title="Add to favorites"
            data-title-added="Added to favorites list"
          >
            <i className="fa fa-heart"></i>
          </a>
        </span>
        <span>
          <a href="#productid1" className="mfp-open" data-title="Quick wiew">
            <i className="fa fa-eye"></i>
          </a>
        </span>
      </div>
      <div className="btn btn-add">
        <i className="icon icon-cart"></i>
      </div>
      <div className="figure-grid">
        <div className="image thumble">
          <a href="#productid1" className="mfp-open">
            <img style={{ height: "225px" }} src={imagepro} alt="" />
          </a>
        </div>
        <div className="text">
          <h2 className="title h4">
            <a href="product.html">Green corner</a>
          </h2>
          <sub>$ 1499,-</sub>
          <sup>$ 1099,-</sup>
         
        </div>
      </div>
    </article>
  </div>
);
export default Card;
