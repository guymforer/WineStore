import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts, getFilteredProducts, getAdresses } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
import SimpleMap from "./SimpleMap";
//import Footer from "./Footer";
import About from "./About";
import Carousel from "./Carousle";
// import { getStores, loadMap } from "./map";

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
      title="A la vino"
      description="Welcome to our web wine shop. the best of the best is just one click away.."
      className="container-fluid"
    >
      
      {/* <Search /> */}
      <h2 className="mb-4">New Arrivals</h2>
      <div className="row">
        {productsByArrival.map((product, i) => (
          <div key={i} className="col-4 mb-3">
            <Card product={product} />
          </div>
        ))}
      </div>

      <h2 className="mb-4">Best Sellers</h2>
      <div className="row">
        {productsBySell.map((product, i) => (
          <div key={i} className="col-4 mb-3">
            <Card product={product} />
          </div>
        ))}
      </div>

      {/* <h2 className="map-text">Come visit our store!</h2>
      <div className="map"> */}
        {/* <SimpleMap /> */}
      {/* </div> */}
      {/* <Footer/> */}

     
    </Layout>
  );
};
export default Home;
