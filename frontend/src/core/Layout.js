import React from "react";
import Menu from "./Menu";
import "../styles.css";
import Footer from "./Footer";


const Layout = ({
  // img = "img",
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <div className="body-lay">
    <div>
      <Menu />
      <div className="jambo">
        <div className="jumbotron">
          {/* <img className="image" src={img}></img> */}
          <h2>{title}</h2>
          <p className="lead">{description}</p>
        </div>
      </div>
      
        <div className={className}>{children}</div>
        </div>
   
    <div>
      <Footer />
    </div>
  </div>
);

export default Layout;
