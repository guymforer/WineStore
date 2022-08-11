import React, { useState, useEffect } from "react";
import Layout from "../../core/Layout";
import { isAuthenticated } from "../../auth";
import { Link, Redirect } from "react-router-dom";
import { getCategories, updateCategory, getCategory } from "../apiAdmin";

const UpdateCategory = ({ match }) => {
  const [category, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user, token } = isAuthenticated();

  const init = (categoryId) => {
    getCategory(categoryId).then((data) => {
      if (data.error) {
        setError(data);
      } else {
        // populate the state
          updateCategory(data)
        //   console.log("data in it: ", data);
          
        // load categories
      }
    });
  };

  useEffect(() => {
    init(match.params.userId);
  }, []);
  const handleChange = (e) => {
      setName(e.target.value);
      console.log("handle change target: " ,e.target.value)
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // make request to api to create category
      updateCategory(user._id, token, match.params.userId, category ).then((data) => {
    //   console.log("data update: ", match.params.userId);
      if (data.error) {
          setError(data.error);
        //   console.log("error", data.error);
      } else {
          setName(category);
        setSuccess(true);
      }
    });
  };

  const newCategoryFom = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="texxt-muted">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={category.name}
          autoFocus
          required
        />
      </div>
      <button className="btn btn-outline-primary">Update Category</button>
    </form>
  );

  const showError = () => {
    if (error) {
      return <h3 className="text-danger">Category is should be unique</h3>;
    }
  };

  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success">{category} is changed</h3>;
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
      title="Update category"
      description={`G'day ${user.name}, ready to renew a category?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showSuccess()}
          {showError()}
          {newCategoryFom()}
          {goBack()}
        </div>
      </div>
    </Layout>
  );
};

export default UpdateCategory;
