const { Product, CartItem } = require("../models/product");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.getProducytCount = async (req, res) => {
    try {
        const product = await Product.aggregate([
            {
                $group: {
                    _id: '$category',
                    "count": { "$sum": 1 },
                    "profit": { "$sum": "$total" }
                }
            }
        ]);
        if(product.length == 0){
            res.status(400).send({ error: "error, no products" });
            return;
        }
        let result = product.map((item) => ({
            "category": item["_id"],
            "amountSold": item[count],
            "profit": item["profit"]
        }));
        res.status(200).json(result);
    } catch (e) {
        errorHandler(e);
        res.status(500).send({ message: "server error" });
    }

}