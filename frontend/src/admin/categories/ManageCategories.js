import React, { useState, useEffect } from "react";
import Layout from "../../core/Layout";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../auth";
import { createCategory } from "../apiAdmin";

const ManageCategories = () => {

  
    const { user, token } = isAuthenticated();
  
  
  return (
    <Layout
      title="Manage Categories"
      description="Managing Categories, creating new ones and making changes on existing Categories"
      className="container-fluid"
    >
      <div className="managing-admin">
        <li className="list-group-item">
          <Link className="nav-link" to="/admin/categories/create/category">
            Create category
          </Link>
        </li>
        <li className="list-group-item">
          <Link className="nav-link" to="/admin/categories/updatedelete">
            Update / Delete Categories
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

export default ManageCategories;
