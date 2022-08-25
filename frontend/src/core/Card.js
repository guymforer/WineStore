import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./cartHelpers";
import SideBarCart from "./SidebarCart";
import { getProduct } from "../admin/apiAdmin";

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  const [pro, setPro] = useState("");
  const [error, setError] = useState("");

  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn btn-light mr-2 mb-2">View Product</button>
        </Link>
      )
    );
  };

  const init = (productId) => {
    getProduct(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        // populate the state
        setPro({
          quantity: data.quantity,
        });
        // load categories
      }
    });
  };

  const addToCart = () => {
    addItem(product, () => {
      setRedirect(true);
    });
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <button onClick={addToCart} className="btn btn btn-light mt-2 mb-2">
          Add to cart
        </button>
      )
    );
  };

  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRedirect(true);
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="badge badge-pill">In Stock</span>
    ) : (
      <span className="badge  badge-pill">Out of Stock</span>
    );
  };

  const handleChange = (productId) => (event) => {
    init(productId);

    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1 && event.target.value <= pro.quantity) {
      updateItem(productId, event.target.value);
      setError(false);
    }
    if (event.target.value > pro.quantity) {
      setError(true);
    }
  };

  const showError = () => {
    if (error) {
      return <h3 className="text-danger">over the limit</h3>;
    }
  };

  const showCartUpdateOptions = (carUpdate) => {
    return (
      carUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };

  return (
    <div className="card">
      <div className="card-header name">{product.name}</div>
      <div className="card-body">
        {shouldRedirect(redirect)}
        <ShowImage item={product} url="product" />
        <p className="lead mt-2">{product.description.substring(0, 100)}</p>
        <p className="black-10">${product.price}</p>
        <p className="black-9">
          Category: {product.category && product.category.name}
        </p>
        <p className="black-8">
          Added on {moment(product.createdAt).fromNow()}
        </p>

        {showStock(product.quantity)}
        <br />

        {showViewButton(showViewProductButton)}

        {showAddToCart(showAddToCartButton)}
        {showError(error)}
        {showRemoveButton(showRemoveProductButton)}

        {showCartUpdateOptions(cartUpdate)}
      </div>
    </div>
  );
};

export default Card;
