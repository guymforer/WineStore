import React, { useState, useEffect } from "react";
import Layout from "../../core/Layout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../apiAdmin";

const Updatedelete = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const { user, token } = isAuthenticated();

  const destroy = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadProducts();
      }
    });
  };
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Layout
      title="Manage existing Products"
      description="hey admin what changes would you like to make today?"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-10 ">
          <h2 className="text-center"> Total {products.length} Products</h2>
          <hr />
          <ul className="list-group">
            {products.map((p, i) => (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <strong>{p.name}</strong>
                <Link to={`/admin/product/update/${p._id}`}>
                  <span className="badge badge-warning badge-pill">Update</span>
                </Link>
                <span
                  onClick={() => destroy(p._id)}
                  className="badge badge-danger badge-pill"
                >
                  Delete
                </span>
              </li>
            ))}
          </ul>
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default Updatedelete;
