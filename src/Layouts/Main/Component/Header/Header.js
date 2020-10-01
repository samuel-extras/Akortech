import React from "react";

import akortech from "../../../../Assets/images/include/akortech-logo.png";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navdisplay: false,
      history: this.props.history
    };
  }
  OnHover = () => {
    this.setState({...this.state, display: true });
  };
  handleDisplay = () => {
    this.setState({...this.state, display: !this.state.display });
  };
  HandleMouseOut = () => {
    this.setState({...this.state, display: false });
  };
  toggleHide = () => {
    this.setState({ navdisplay: !this.state.navdisplay, display:false });
  };
  

  render() {
    return (
      <div>
        <header
        
          style={{
            position: "fixed",
            width: "100%",
            zIndex: 1000,
            top: "-15px",
            right: "0",
          }}
          id="header"
          className="header header-layout-type-header-2rows"
        >
          <div className="header-nav">
            <div className="header-nav-wrapper navbar-scrolltofixed green">
              <div className="menuzord-container header-nav-container green">
                <div className="container position-relative">
                  <div className="row">
                    <div className="col">
                      <div className="row header-nav-col-row">
                        <div className="col-sm-auto align-self-center">
                          <Link className="menuzord-brand site-brand" to="/">
                            <img
                              className="logo-default logo-1x"
                              src={akortech}
                              alt="Logo"
                            />
                          </Link>
                        </div>
                        <div className="col-sm-auto ml-auto pr-0 align-self-center">
                          <nav
                            id="top-primary-nav"
                            className="menuzord green"
                            data-effect="fade"
                            data-animation="none"
                            data-align="right"
                          >
                            <ul
                              id="main-nav"
                              className="menuzord-menu"
                              style={{
                                fontFamily: "Poppins sans-serif",
                                fontSize: "1rem",
                              }}
                            >
                              <li
                                className={
                                  this.props.match.path === "/" ? "active" : ""
                                }
                              >
                                <Link to="/">
                                  <div>Home</div>
                                </Link>
                              </li>
                              <li
                                className={
                                  this.props.match.path === "/services"
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link to="/services">
                                  <div>Services</div>
                                </Link>
                              </li>

                              <li
                                className={
                                  this.props.match.path === "/blog" ||
                                  this.props.match.path === "/team" ||
                                  this.props.match.path === "/gallery"
                                    ? "active"
                                    : ""
                                }
                                onMouseLeave={() => this.HandleMouseOut()}
                              >
                                <div onMouseOver={() => this.OnHover()}>
                                  Tech Update
                                  <span
                                   className="indicator" 
                                   onClick = {()=> this.handleDisplay()}
                                   >
                                    <i className="fa fa-angle-down"></i>
                                  </span>
                                </div>

                                <ul
                                  className="dropdown"
                                  onClick={() => {
                                    this.HandleMouseOut();
                                  }}
                                  style={{
                                    display: this.state.display
                                      ? "block"
                                      : "none",
                                  }}
                                >
                                  <Link to="blog">
                                    <li>
                                      <div className="techup">Blog</div>
                                    </li>
                                  </Link>
                                  <Link to="team">
                                    <li>
                                      <div className="techup">Team Details</div>
                                    </li>
                                  </Link>
                                  <Link to="gallery">
                                    <li>
                                      <div className="techup">Gallery</div>
                                    </li>
                                  </Link>
                                </ul>
                              </li>

                              <li
                                className={
                                  this.props.match.path === "/accessories"
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link to="/accessories">
                                  <div id="access">Accessories</div>
                                </Link>
                              </li>
                              <li
                                className={
                                  this.props.match.path === "/about"
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link to="/about">
                                  <div>About</div>
                                </Link>
                              </li>
                              <li
                                className={
                                  this.props.match.path === "/contact"
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link to="/contact">
                                  <div>Contact </div>
                                </Link>
                              </li>
                              <li className="">
                                <div>
                                  <i className="fa fa-cart"></i>
                                </div>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <header
          style={{
            position: "fixed",
            width: "100%",
            zIndex: 1000,
            overflow: "hidden",
            top: "-50px",
            left: "0px",
          }}
          id="header"
          className="header header-layout-type-header-2rows"
        >
          <div className="header-nav">
            <div className="header-nav-wrapper navbar-scrolltofixed green">
              <div className="menuzord-container header-nav-container green">
                <div className="container position-relative">
                  <div className="row">
                    <div className="col">
                      <div className="row d-block d-xl-none">
                        <div className="col-12">
                          <nav
                            id="top-primary-nav-clone"
                            className="menuzord d-block d-xl-none default menuzord-color-default menuzord-border-boxed menuzord-responsive"
                            data-effect="slide"
                            data-animation="none"
                            data-align="right"
                          >
                            <div
                              style={{
                                width: "100px",
                                position: "relative",
                                top: "60px",
                                zIndex:1000,
                                paddingBottom:"20px",
                                
                              
                              }}
                            >
                              <img
                                className="logo-default logo-2x retina"
                                src={akortech}
                                alt="Logo"
                          
                              />
                            </div>
                            <div
                              className="navicon showhide dropdown"
                              onClick={() => this.toggleHide()}
                            >
                              <em></em>
                              <em></em>
                              <em></em>
                            </div>

                            <ul
                              id="main-nav"
                              className=" menuzord-menu menuzord-right
                      menuzord-indented 
                      scrollable"
                              style={{
                                maxHeight: "400px",
                                marginTop: "10px",
                                display: this.state.navdisplay
                                  ? "block"
                                  : "none",
                                 paddingTop:"20px" 
                              }}
                            >
                              <li
                                className={
                                  this.props.match.path === "/" ? "active" : ""
                                }
                                onClick={()=>this.toggleHide()}
                              >
                                <Link to="/">
                                  <div>Home</div>
                                </Link>
                              </li>
                              <li
                                className={
                                  this.props.match.path === "/services"
                                    ? "active"
                                    : ""
                                }
                                onClick={()=>this.toggleHide()}
                              >
                              
                                <Link to="/services">
                                <div>
                                Services
                                </div>
                                  </Link>
                                 
                              </li>

                              <li
                                
                                
                                
                                
                              >
                              
                              <div 
                              style={{borderColor:this.props.match.path === "/blog" ||
                              this.props.match.path === "/team" ||
                              this.props.match.path === "/gallery"
                                ? "orange"
                                : "#444"}}
                              >
                              Tech Update
                              <span 
                              className="indicator"
                              onClick = {()=> this.handleDisplay()}
                              >
                              <i className="fa fa-angle-down"></i>
                              </span>
                              </div>
                             

                                <ul
                                  className="dropdown "
                                  onClick={() => {
                                    this.toggleHide();
                                  }}
                                  style={{
                                    display: this.state.display
                                      ? "block"
                                      : "none",
                                  }}
                                >
                                
                                  <li
                                  
                                  >
                                  <div onClick={()=>this.state.history.push(`/blog`)}>
                                      Blog
                                      </div>
                                      </li>
                                      
                                     
                                      <li onClick={()=>this.state.history.push(`/team`)} >
                                      <div>Team Details</div>
                                      </li>
                                     
                                      
                                  <li onClick={()=>this.state.history.push(`/gallery`)}>
                                      <div>Gallery</div>
                                      </li>
                                      
                                </ul>
                              </li>

                              <li
                                className={
                                  this.props.match.path === "/accessories"
                                    ? "active"
                                    : ""
                                }
                                onClick={()=>this.toggleHide()}
                              >
                                <Link to="/accessories">
                                  <div id="access">Accessories</div>
                                </Link>
                              </li>
                              <li
                              onClick={()=>this.toggleHide()}
                                className={
                                  this.props.match.path === "/about"
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link to="/about">
                                  <div>About</div>
                                </Link>
                              </li>
                              <li
                                className={
                                  this.props.match.path === "/contact"
                                    ? "active"
                                    : ""
                                }
                                onClick={()=>this.toggleHide()}
                              >
                                <Link to="/contact">
                                  <div>Contact </div>
                                </Link>
                              </li>
                              <li className="scrollable-fix"/>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default withRouter(Header);
