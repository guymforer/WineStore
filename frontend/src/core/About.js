import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";
import Checkbox from "./Checkbox";
import { prices } from "./fixedPrices";
import RadioBox from "./RadioBox";
import SimpleMap from "./SimpleMap";
import AboutDisplay from "./AboutDisplay";
import BarChart from "../admin/stattistics/Charts";
import { Link } from "react-router-dom";

const About = () => {
  ////statistics

  ///video

  /// socketio

  return (
    <Layout
      title="About Page"
      description="Wine lifestyle always wins. "
      className="container-fluid"
    >
      <AboutDisplay />
 
      {/* facebook */}

 

      {/* map */}
      <h2 className="map-text">Come visit our store!</h2>
      <div className="map">
        <SimpleMap />

   
      </div>
      {/* <BarChart /> */}
    </Layout>
  );
};

export default About;