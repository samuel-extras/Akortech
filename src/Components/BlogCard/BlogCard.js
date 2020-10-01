import React from "react";

const BlogCard = ({heading,image, date, description}) => (
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="tm-sc tm-sc-blog tm-sc-blog-masonry blog-style1-current-theme mb-lg-30">
      <article className="post type-post status-publish format-standard has-post-thumbnail">
        <div className="entry-header">
          <div className="post-thumb lightgallery-lightbox">
            <div className="post-thumb-inner">
              <div className="thumb">
                <img src={image} alt="bimage"/>
              </div>
            </div>
          </div>
          <a className="link" href="#!">
            <i className="fa fa-link"></i>
          </a>
        </div>
        <div className="entry-content">
          <div className="post-single-meta">
            <i className="fa fa-folder-o"></i>
            <span className="categories-links">
              <a href="#!" rel="category tag">
                By Akortech
              </a>
            </span>
          </div>
          <h5 className="entry-title">
            <a href="#!" rel="bookmark">
             {heading}
            </a>
          </h5>
          <ul className="entry-meta list-inline">
            <li className="list-inline-item posted-date">
              <i className="fa fa-calendar-o"></i>
              <a href="#!" rel="bookmark">
                <time
                  className="entry-date published updated"
                  dateTime="2019-05-14T05:20:51+00:00"
                >
                 {date}
                </time>
              </a>
            </li>
            <li className="list-inline-item categories">
              <i className="fa fa-folder-o"></i>
              <span className="categories-links">
                <a href="#!" rel="category tag">
                  Repair
                </a>
                ,
                <a href="#!" rel="category tag">
                  Computer
                </a>
              </span>
            </li>
          </ul>
          <div className="post-excerpt">
            <div className="mascot-post-excerpt">
              {description}
            </div>
          </div>
          <div className="post-btn-readmore">
            <a href="#!" className="btn btn-plain-text-with-arrow btn-round">
              View Details
            </a>
          </div>
          <div className="clearfix"></div>
        </div>
      </article>
    </div>
  </div>
);
export default BlogCard;
