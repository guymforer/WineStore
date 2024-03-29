import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import SideBarCart from "./SidebarCart";


const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color:"#65C18C" };
  } else {
    return { color: "#6D8B74" };
  }
};

const Menu = ({ history }) => (
  <div>
    {/* nav bar */}
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/")} to="/">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/shop")} to="/shop">
          Shop
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/about")} to="/about">
          About Us
        </Link>
      </li>

      {/* <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/facebook")} to="/facebook">
          facebook
        </Link>
      </li> */}
      
      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/cart")} to="/cart">
          Cart <sup><small className="cart-badge">{itemTotal()}</small></sup>
        </Link>
      </li>
      {isAuthenticated() && isAuthenticated().user.role === 0 && (
        <li className="nav-item">
          <Link
            className="nav-link"
            style={isActive(history, "/user/dashboard")}
            to="/user/dashboard"
          >
            Dashboard
          </Link>
        </li>
      )}

      {isAuthenticated() && isAuthenticated().user.role === 1 && (
        <li className="nav-item">
          <Link
            className="nav-link"
            style={isActive(history, "/admin/dashboard")}
            to="/admin/dashboard"
          >
            Dashboard
          </Link>
        </li>
      )}


      {!isAuthenticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/signin")}
              to="/signin"
            >
              Signin
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/signup")}
              to="/signup"
            >
              Signup
            </Link>
          </li>
        </Fragment>
      )}

      {isAuthenticated() && (
        <li className="nav-item" >
          <span
            className="nav-link"
            style={{ cursor: "pointer", color: "#b9c5b7" }}
            onClick={() =>
              signout(() => {
                history.push("/");
              })
            }
          >
            Signout
          </span>
        </li>
      )}
    </ul>
    <div>
      {/* side bar */}

      <SideBarCart />

    </div>
  </div>
);

export default withRouter(Menu);
