import React, { useState, useEffect } from "react";
import Layout from "../../core/Layout";
import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../apiAdmin";

const ManageProducts = () => {
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
      title="Manage Products"
      description="Managing products, creating new ones and making changes on existing products"
      className="container-fluid"
    >
      <div className="managing-admin">
        <li className="list-group-item">
          <Link className="nav-link" to="/products/create/product">
            Create Product
          </Link>
        </li>
        <li className="list-group-item">
          <Link className="nav-link" to="/admin/products/Updatedelete">
            Update / Delete Products
          </Link>
        </li>
      </div>
      {/* <div className="row">
        <div className="col-12">
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
        </div> */}
      {/* </div> */}
    </Layout>
  );
};

export default ManageProducts;
