import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createStore } from "./apiAdmin";

const AddStore = () => {
  const [values, setValues] = useState([
    {
      name: "",
      longitude: "",
      latitude: "",
    },
  ]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  //destructure user and token from localstorage in the net
  const { user, token } = isAuthenticated();
  //const { name, longitude, latitude } = values;

  const handleChange = (e) => {
    console.log("handleChange, value: ", e.target.value);
    console.log("handleChange, name: ", e.target.name);
    setError(" ");
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError(" ");
    setSuccess(false);
    // make request to api to create store address

    createStore(user._id, token, values).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError(" ");
        setSuccess(true);
        // setValues({
        //   ...values,
        //   name: " ",
        //   longitude: "",
        //   latitude: "",
        // });
      }
    });
  };

  const newStoreFom = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="texxt-muted">Name</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="name"
          name="name"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">longitude</label>
        <input
          onChange={handleChange}
          type="number"
          step="0.000001"
          className="form-control"
          id="longitude"
          name="longitude"
        />
      </div>
      <div className="form-group">
        <label className="texxt-muted">latitude</label>
        <input
          onChange={handleChange}
          type="number"
          step="0.00001"
          className="form-control"
          id="latitude"
          name="latitude"
        />
      </div>
      <button className="btn btn-outline-primary">Create store</button>
    </form>
  );

  const showError = () => {
    if (error) {
      return <h3 className="text-danger">store is should be unique</h3>;
    }
  };

  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success">new store is created</h3>;
    }
  };

  const goBack = () => (
    <div className="mt-5">
      <Link to="/admin/dashboard" className="text-warning">
        Back to Dashboard
      </Link>
    </div>
  );

  return (
    <Layout
      title="Add a new store address"
      description={`G'day ${user.name}, ready to add a new store?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {newStoreFom()}
          {showSuccess()}
          {showError()}
          {goBack()}
        </div>
      </div>
    </Layout>
  );
};

export default AddStore;
