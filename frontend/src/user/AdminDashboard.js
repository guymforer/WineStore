import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import ChartDisplay from "../admin/stattistics/ChartDisplay";
// import Statsticsfuncs from "../admin/stattistics/StatisticsFuncs";

const AdminDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/categories">
              Manage categories
            </Link>
          </li>
            {/* <Link className="nav-link" to="/create/category">
              Create Category
            </Link>
          </li> */}
      
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/orders">
              View Orders
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/products">
              Manage Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/create/map">
              Create store address
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/statistics">
              data
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Admin Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : " Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Dashboard"
      description={`G'day ${name}!`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-3">{adminLinks()}</div>
        <div className="col-8">{adminInfo()}
          
          
          <ChartDisplay />
        </div>
        {/* <Statsticsfuncs /> */}
      </div>
    </Layout>
  );
};

export default AdminDashboard;
