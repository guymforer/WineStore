const express = require("express");
const router = express.Router();


const {getProducytCount} = require ("../controllers/analytics")


router.get("/groupBy", getProducytCount);



module.exports = router;
