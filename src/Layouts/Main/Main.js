import React, { Fragment } from "react"
import { Header, Footer } from "./Component";


const MainWrapper = ({ children, ...rest }) => <main {...rest}>{children}</main>;

const Main = ({children}) => (
  
  <Fragment>
  
  <div className="main-content-area" style={{marginTop:"80px", }}>
  <Header/>
  <div id="wrapper" className="clearfix">
     <MainWrapper>{children}</MainWrapper>
      <Footer />
      <div  className="scrollToTop" onClick={()=> window.scrollTo({top: 0,left: 0, behavior:"smooth"}) }  >
        <i className="fa fa-angle-up"></i>
      </div>
    </div>
 </div>
  </Fragment>
);

export default Main;
