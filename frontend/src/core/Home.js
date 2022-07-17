import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts, getFilteredProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
import SimpleMap from "./SimpleMap";
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
      title="Home Page"
      description="Node React E-commerce App"
      className="container-fluid"
    >
      <Search />
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

      <SimpleMap />
    </Layout>
  );
};
export default Home;
