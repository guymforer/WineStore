import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { getCart, removeItem } from "./cartHelpers";
import Card from "./Card";
import Checkout from "./Checkout";
import { MDBIcon } from "mdb-react-ui-kit";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const showItems = (items) => {
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr />
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty.
      <br />
      <Link to="/shop">Continue Shopping</Link>
    </h2>
  );

  return (
    <div className="row">
      <div className="side-bar-cart">
        {items.length > 0 ? showItems(items) : noItemsMessage()}
      </div>
    </div>
  );
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
const SideBarCart = () =>
  /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(Navigation, null)
  );

class Navigation extends React.Component {
  constructor() {
    super();
    _defineProperty(
      this,
      "handleToggle",

      () => {
        const { isActive } = this.state;
        this.setState({ isActive: !isActive });
      }
    );
    _defineProperty(
      this,
      "handleSelect",

      () => {
        this.setState({ isActive: false });
      }
    );
    this.state = { isActive: false };
  }

  render() {
    const { isActive } = this.state;
    const iconCls = `navigation__icon ${isActive ? "transformed" : ""}`;
    const navCls = isActive ? "navigation--active" : "";
    return (
      <div className="body-lay">
        <div className="navigation">
          <div className="navigation__toggle" onClick={this.handleToggle}>
            <div className={iconCls}>
              <span></span>
            </div>
            <nav className={navCls}>
              <div className="navigation__brand">
                <h3>Your Cart Is Here</h3>
              </div>
              <ul>
                <li className="nav-item">
                  <Cart />
                </li>
                <li>
                  <Link className="nav-link" to="/cart">
                    SUMMARY AND CHECKOUT
                  </Link>
                </li>
                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/user/dashboard">
                      Your Profile
                    </Link>
                  </li>
                )}
                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/dashboard">
                      History Order And Info
                    </Link>
                  </li>
                )}
                <li className="nav-link ">
                  <Link className="nav-item  me-3" to="/chatapp">
                    <MDBIcon icon="far fa-comment-dots" className="me-3" />{" "}
                    Customer Service
                    {/* <sup>
                        <small className="cart-badge">Chat</small>
                      </sup> */}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBarCart;
