const { Product, CartItem } = require("../models/product");
const { errorHandler } = require("../helpers/dbErrorHandler");
const { Order } = require("../models/order");
const { User } = require("../models/user");


///category as id and value as sum,
//orders as id and total amount as value

exports.getProductStats = async (rep, res) => {
  try {
    const order = await Order.aggregate([
      {
        $group: {
          _id: "$status",
          profit: { $sum: "$amount" },
        },
      },
    ]);
    if (order.length == 0) {
      res.status(400).send({ error: "error, no orders" });
      return;
    }
    let result = order.map((item) => ({
      status: item["_id"],
      amount: item["profit"],
    }));
    console.log("result in back", result);
    res.status(200).json(result);
    // console.log("after res", result);
  } catch (e) {
    errorHandler(e);
    res.status(500).send({ message: "server error" });
  }
};

///category as id and value as sum,
//orders as id and total amount as value

exports.getProfitByAdd = async (rep, res) => {
  try {
    const order = await Order.aggregate([
      {
        $group: {
          _id: "$address",
          profit: { $sum: "$amount" },
        },
      },
    ]);
    if (order.length == 0) {
      res.status(400).send({ error: "error, no orders" });
      return;
    }
    let result = order.map((item) => ({
      address: item["_id"],
      amount: item["profit"],
    }));
    console.log("result in back", result);
    res.status(200).json(result);
    // console.log("after res", result);
  } catch (e) {
    errorHandler(e);
    res.status(500).send({ message: "server error" });
  }
};
