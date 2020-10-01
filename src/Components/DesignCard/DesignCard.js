import React from "react";
import { CustomButton } from "..";

const DesignCard = ({name,image,description, favicon}) => (
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="tm-sc tm-sc-blog tm-sc-blog-masonry blog-style1-current-theme mb-lg-30">
      <article className="post type-post status-publish format-standard has-post-thumbnail">
        <div className="entry-header">
          <div className="post-thumb lightgallery-lightbox">
            <div className="post-thumb-inner">
              <div className="thumb">
                <img src={image} alt={name}/>
              </div>
            </div>
          </div>
          <a className="link" href="#!">
            <i className={favicon}></i>
          </a>
        </div>
        <div className="entry-content">
          <div className="post-single-meta">
            
            <span className="categories-links">
             
                {name}
             
            </span>
          </div>
         
       
           
          <div className="post-excerpt">
            <div className="mascot-post-excerpt">
              {description}
            </div>
          </div>
          <CustomButton>I Need This</CustomButton>
          <div className="clearfix"></div>
        </div>
      </article>
    </div>
  </div>
);
export default DesignCard;
