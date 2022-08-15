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
  ////statistics

  ///video

  /// socketio

  return (
    <Layout
      title=""
      description="Wine lifestyle always wins. "
      className="container-fluid"
    >
      {/* <AboutDisplay /> */}
 
      <CarouselHome  />
      {/* facebook */}
      <section className="content">
        <div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100084310570754&tabs=timeline&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1128816011320310"
            width={1300}
            height={500}
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div>
          <p align="center">
            <a
              href="https://twitter.com/nodws"
              className="btn twtr"
              target="_b"
            >
              Follow me on Twitter
            </a>
          </p>
        </div>
      </section>
 

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