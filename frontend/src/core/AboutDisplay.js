import React from "react";

const AboutDisplay = () => {
  return (
    <div>
      <div className="header">
        <div className="sides">
          <a href="#" className="logo">
            OUR STORY
          </a>
        </div>
        <div className="sides">
          <a href="#" className="menu">
            {" "}
          </a>
        </div>
        <div className="info">
          <h4>
            <a href="#category">let us tell you</a>
          </h4>
          <h1>KEN BURNS HEADERS ARE THE BEST</h1>
          <div className="meta">
            <p>
              Founded in 2014, Israel Wine Shop strives to bring the quality and
              excellence of the ever-growing Israeli wine industry right to your
              doorstep, and with the widest selection around it couldn't be more
              convenient.
              <br /> Our background is in the tourism industry and over the
              years we've had the pleasure of introducing our guests to new and
              exciting wines without the pleasure of being able to provide a
              proper answer to our most popular question, "where can I buy
              this?" So, we took matters into our own hands.
            </p>
          </div>
        </div>
      </div>
      <section className="content">
        <p align="center">
          <a href="https://twitter.com/nodws" className="btn twtr" target="_b">
            Follow me on Twitter
          </a>
        </p>
      </section>
    </div>
  );
};

export default AboutDisplay;
