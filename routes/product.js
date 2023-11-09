const express = require("express");
const router = express.Router();
const { tokenVerification, checkRoles } = require("../middlewares/tokenHelper");
const {
  getAllProducts,
  getSingleProductById,
  createProductDetails,
  updateProductDetails,
  removeProductDetails,
} = require("../controllers/product");
router.get("/", getAllProducts);
router.get("/:id", getSingleProductById);
router.post("/", [tokenVerification, checkRoles], createProductDetails);
router.put("/:id", [tokenVerification, checkRoles], updateProductDetails);
router.delete("/:id", [tokenVerification, checkRoles], removeProductDetails);
module.exports = router;
