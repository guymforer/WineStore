import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";
import Checkbox from "./Checkbox";
import { prices } from "./fixedPrices";
import RadioBox from "./RadioBox";
import SimpleMap from "./SimpleMap";

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
      <p className="text-lowercase fw-none mb-4 text-center">
        Founded in 2014, Israel Wine Shop strives to bring the quality and
        excellence of the ever-growing Israeli wine industry right to your
        doorstep, and with the widest selection around it couldn't be more
        convenient.
        Our background is in the tourism industry and over the years
        we've had the pleasure of introducing our guests to new and exciting
        wines without the pleasure of being able to provide a proper answer to
        our most popular question, "where can I buy this?" So, we took matters
        into our own hands.
        Our vision is rooted in the notion that Israeli wine
        and tourism go hand in hand, so look no further. From boutiques to the
        established names in the Israeli wine scene, we are your one stop shop
        with a variety to fit any occasion. Whether it's a friendly toast to
        your health, knife against glass and wedding bells, or even the holy
        grail. Let us fill your glass with the best wine our fine country has to
        offer. The Two Founders of Israel Wine Shop are local Israeli wine
        experts. Denis is a certified winemaker, graduated from Ohalo Winemaking
        School in the Golan Heights. Omri is a certified Sommelier, currently a
        WSET Level 4 Diploma student in London WSET. Both holds many years of
        experience in the fields of wine service, tourism, hospitality and food
        & beverages.
      </p>
      {/* facebook */}

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
