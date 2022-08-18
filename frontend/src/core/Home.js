import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts, getFilteredProducts, getAdresses } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
import SimpleMap from "./SimpleMap";
import { Link } from "react-router-dom";
//import Footer from "./Footer";
// import { getStores, loadMap } from "./map";

const cards = [
  {
    title: "hey",
    content:"hey",
  }
]
const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(3);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);

  const loadProductsBySell = () => {
    getFilteredProducts(skip, limit, "sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadProductsByArrival = () => {
    getFilteredProducts(skip, limit, "createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout
      // img="https://www.petoskeyfarms.com/v/vspfiles/photos/homepage/1651263751914.jpg"
      title="A La Vino Official Website"
      description="Welcome to our web wine shop. the best of the best is just one click away.."
      className="container-fluid"
    >
      <div className="container-img">
        <img
          className="image"
          src="https://www.petoskeyfarms.com/v/vspfiles/photos/homepage/1651263751914.jpg"
          alt="Image Text"
        />
        <div className="middle">
          <div className="text-img">
            {/* A La Vino <br /> Come  */}
            Click to 
            <Link className="text-img" to="/shop">
          shop
            </Link>
            with us
          </div>
        </div>
        {/* <Search /> */}
      </div>
  
      <h2 className="mb-4-home">New In Stock</h2>
      <div className="row">
        {productsByArrival.map((product, i) => (
          <div key={i} className="col-4 mb-3">
            <Card product={product} />
          </div>
        ))}
      </div>

      <h2 className="mb-4-home">Best Sellers</h2>
      <div className="row">
        {productsBySell.map((product, i) => (
          <div key={i} className="col-4 mb-3">
            <Card product={product} />
          </div>
        ))}
      </div>

      <div className="map">
        <h2 className="map-text">Come meet us in stores!</h2>
        <div className="map">
          <SimpleMap />
        </div>
      </div>
      {/* <Footer/> */}
    </Layout>
  );
};
export default Home;
