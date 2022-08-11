import React from "react";
import Menu from "./Menu";
import "../styles.css";
import Footer from "./Footer";
import SingleStockReport from "./SingleStockReport";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <div>
    <div>
      <Menu />
      <div className="jumbotron">
        <h2>{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>

    

    <div>
      <Footer />
    </div>
  </div>
);

export default Layout;
