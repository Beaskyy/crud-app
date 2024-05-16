const express = require("express");
const {
  createProduct,
  getProducts,
  singleProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product");
const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", singleProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
