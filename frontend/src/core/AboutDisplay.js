import React from "react";

const AboutDisplay = () => {
  return (
    <div>
      <div className="header">
        <div className="info">
          <h4>
            <a href="#category">Let Us Tell You About Us</a>
          </h4>
          <h1>A La Vino Wine Shop</h1>
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
        <div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100084310570754&tabs=timeline&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1128816011320310"
            width={900}
            height={500}
            style={{ border: "none", overflow: "hidden", margin: "0" }}
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
    </div>
  );
};

export default AboutDisplay;