import React from "react";
import { SocialLink } from "../../../../Components";
import akortech from "../../../../Assets/images/include/akortech-logo.png";
import blog1 from "../../../../Assets/images/blog/1.jpg";
import blog2 from "../../../../Assets/images/blog/2.jpg";
import blog3 from "../../../../Assets/images/blog/3.jpg";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="footer-widget-area">
      <div className="container pt-70 pb-50">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div
              id="tm_widget_contact_info-1"
              className="split-nav-menu clearfix widget widget-contact-info clearfix mb-20"
            >
              <div className="tm-widget tm-widget-contact-info contact-info contact-info-style1 contact-icon-theme-colored1">
                <div className="thumb">
                  <img
                    alt="Logo"
                    style={{ width: "130px", height: "70px" }}
                    src={akortech}
                  />
                </div>
                <div className="description">
                  No. 38, Olatoye street, <br />
                  Ifako Ijaye,
                  <br /> Lagos Nigeria.
                </div>
                <div>
                  <i className="fa fa-phone  sm-display-block"></i>
                  <a href="tel:+2347035599433"> +234 703 5599433</a>
                </div>
              </div>
            </div>
            <div className="">
              <a href="mailto:akortechservicesconsult@gmail.com">
                <i className="fa fa-envelope  sm-display-block"></i>
                <span style={{fontSize:"13px", fontWeight:"bold", paddingLeft:"4px"}}>
                
                akortechservicesconsult@gmail.com
                </span>
              </a>
            </div>

            <SocialLink />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div
              id="tm_widget_blog_list-1"
              className="split-nav-menu clearfix widget widget-blog-list clearfix"
            >
              <h4 className="widget-title widget-title-line-bottom line-bottom-footer-widget line-bottom-theme-colored1">
                Latest News
              </h4>
              <div className="tm-widget tm-widget-blog-list">
                <article className="post media-post clearfix">
                  <Link className="post-thumb" to="/blog">
                    <img
                      width="100"
                      height="70"
                      src={blog3}
                      className=""
                      alt=""
                    />
                  </Link>
                  <div className="post-right">
                    <h6 className="post-title">
                      <Link to="/blog">Customer Focused </Link>
                    </h6>
                    <span className="post-date">
                      <time
                        className="entry-date"
                        dateTime="2019-05-15T06:10:26+00:00"
                      >
                        April 15, 2019
                      </time>
                    </span>
                  </div>
                </article>
                <article className="post media-post clearfix">
                  <Link className="post-thumb" to="/blog">
                    <img
                      width="100"
                      height="70"
                      src={blog2}
                      className=""
                      alt=""
                    />
                  </Link>
                  <div className="post-right">
                    <h6 className="post-title">
                      <Link to="/blog"> School For Poor </Link>
                    </h6>
                    <span className="post-date">
                      <time
                        className="entry-date"
                        dateTime="2019-07-15T06:10:26+00:00"
                      >
                        June 15, 2019
                      </time>
                    </span>
                  </div>
                </article>
                <article className="post media-post clearfix">
                  <Link className="post-thumb" to="/blog">
                    <img
                      width="100"
                      height="70"
                      src={blog1}
                      className=""
                      alt=""
                    />
                  </Link>
                  <div className="post-right">
                    <h6 className="post-title">
                      <Link to="/blog"> Shelter For Homeless </Link>
                    </h6>
                    <span className="post-date">
                      <time
                        className="entry-date"
                        dateTime="2019-09-15T06:10:26+00:00"
                      >
                        November 15, 2019
                      </time>
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div id="nav_menu-1" className="widget widget_nav_menu">
              <h4 className="widget-title widget-title-line-bottom line-bottom-footer-widget line-bottom-theme-colored1">
                Services
              </h4>
              <div className="menu-service-nav-menu-container">
                <ul id="menu-service-nav-menu" className="menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-20545">
                    <Link to="/digital">Digital Branding</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-20546">
                  <Link to="/program">Programming</Link>

                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-20547">
                  <Link to="/maintenance">System Maintenance</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-20548">
                  <Link to="/design"> Design </Link>

                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-20549">
                    <Link to="/consult">Consultation </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-20550">
                    <Link to="/printing">Printing</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-20550">
                    <Link to="/accessories">Accessories</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div
              id="tm_widget_opening_hours_compressed-1"
              className="split-nav-menu clearfix widget widget-opening-hours-compressed clearfix"
            >
              <h4 className="widget-title widget-title-line-bottom line-bottom-footer-widget line-bottom-theme-colored1">
                Opening Hours
              </h4>
              <ul className="tm-widget tm-widget-opening-hours tm-widget-opening-hours-compressed opening-hours border-dark">
                <li className="clearfix">
                  <span>Monday</span>
                  <div className="value">7:00 Am - 6:00 PM</div>
                </li>
                <li className="clearfix">
                  <span>Tuesday</span>
                  <div className="value">7:00 Am - 6:00 PM</div>
                </li>
                <li className="clearfix">
                  <span>Wednesday</span>
                  <div className="value">7:00 Am - 6:00 PM</div>
                </li>
                <li className="clearfix">
                  <span>Thursday</span>
                  <div className="value">7:00 Am - 6:00 PM</div>
                </li>
                <li className="clearfix">
                  <span>Friday</span>
                  <div className="value">8:00 Am - 5:00 PM</div>
                </li>
                <li className="clearfix">
                  <span>Saturday</span>
                  <div className="value">9:00 Am - 4:00 PM</div>
                </li>
                <li className="clearfix">
                  <span>Sunday</span>
                  <div className="value">Closed</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom" data-tm-bg-color="#2A2A2A">
        <div className="container">
          <div className="row pt-10 pb-20">
            <div className="col-sm-6">
              <div className="footer-paragraph">
                © 2020 AkortechServices. All Rights Reserved.
              </div>
            </div>
            <div className="col-sm-6">
              <div className="footer-paragraph text-right">
                Akortech Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
