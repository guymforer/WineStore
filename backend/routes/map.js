const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById  } = require("../controllers/user");
const { create, update, addressById, read, list, remove } = require("../controllers/map");


router.param("userId", userById);
router.param("addressId", addressById);

router.get("/map/:addressId", read);
router.get("/map", list);

router.post("/map/create/:userId", requireSignin, isAuth, create, isAdmin);

router.put("/map/update/:userId/:addressId", requireSignin, isAuth, update, isAdmin);

router.delete(
    "/map/:addressId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);




module.exports = router;
