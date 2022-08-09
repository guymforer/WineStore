import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";
import Checkbox from "./Checkbox";
import { prices } from "./fixedPrices";
import RadioBox from "./RadioBox";
import SimpleMap from "./SimpleMap";

const About = () => {
  /// facebaook

  ////statistics

  ///video

  /// socketio

  return (
    <Layout
      title="About Page"
      description="Wine lifestyle always wins. "
      className="container-fluid"
    >
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100084310570754&tabs=timeline&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1128816011320310"
        width={500}
        height={250}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder={0}
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>

      {/* map */}
      <h2 className="map-text">Come visit our store!</h2>
      <div className="map">
        <SimpleMap />
      </div>
    </Layout>
  );
};

export default About;
