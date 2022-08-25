import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// core
import Home from "./core/Home";
import Shop from "./core/Shop";
import Product from "./core/Product";
import Cart from "./core/Cart";
import About from "./core/About";
import Facebook from "./core/FacebookLog";

//user
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import Profile from "./user/Profile";

///admin
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";

///admin products
import AddProduct from "./admin/products/AddProduct";
import ManageProducts from "./admin/products/ManageProducts";
import UpdateProduct from "./admin/products/UpdateProduct";
import Updatedelete from "./admin/products/Updatedelete";

//admin categories
import ManageCategories from "./admin/categories/ManageCategories";
import AddCategory from "./admin/categories/AddCategory";
import updelCategories from "./admin/categories/Updatedelete";
import UpdateCategory from "./admin/categories/UpdateCategory";
//admin orders
import Orders from "./admin/Orders";

//admin stores
import addStore from "./admin/AddStore";

//stats
import ChartDisplay from "./admin/stattistics/ChartDisplay";

//Chat
// import Join from "./ChatClient/Join/Join";
// import Chat from "./ChatClient/Chat/Chat";
import ChatApp from "./ChatApp"


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Signin" exact component={Signin} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/about" exact component={About} />
        <Route path="/facebook" exact component={Facebook} />
        <Route path="/" exact component={Home} />
        {/* <Route path="/join" exact component={Join} />
        <Route path="/chat" exact component={Chat} /> */}
        <Route path="/chatapp" exact component={ChatApp} />
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute
          path="/admin/categories/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/products/create/product"
          exact
          component={AddProduct}
        />
        <Route path="/product/:productId" exact component={Product} />
        <Route path="/cart" exact component={Cart} />
        <AdminRoute path="/admin/orders" exact component={Orders} />
        <PrivateRoute path="/profile/:userId" exact component={Profile} />
        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute path="/create/map" exact component={addStore} />
        <AdminRoute
          path="/admin/products/Updatedelete"
          exact
          component={Updatedelete}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute
          path="/admin/categories/Updatedelete"
          exact
          component={updelCategories}
        />
        <AdminRoute
          path="/admin/categories/Update/:userId"
          exact
          component={UpdateCategory}
        />
        <AdminRoute path="/admin/statistics" exact component={ChartDisplay} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
