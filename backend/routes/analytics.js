const express = require("express");
const router = express.Router();


const {getProductStats, getProfitByAdd} = require ("../controllers/analytics")


router.get("/groupby", getProductStats);
router.get("/groupbyaddress", getProfitByAdd);


module.exports = router;
