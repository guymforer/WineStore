import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";
import Checkbox from "./Checkbox";
import { prices } from "./fixedPrices";
import RadioBox from "./RadioBox";
import SimpleMap from "./SimpleMap";
import AboutDisplay from "./AboutDisplay";
import { Link } from "react-router-dom";
import CarouselHome from "./CarouselHome";


const About = () => {
 
  return (
    <Layout
      title=""
      description="Wine lifestyle always wins. "
      className="container-fluid"
    >
  
 
      <CarouselHome  />
      <div className="map">
        <h2 className="map-text">Come meet us in stores!</h2>
        <div className="map">
          <SimpleMap />
        </div>
      </div>
    </Layout>
  );
};

export default About;