const Product = require("../models/product.model");

const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating product",
      error: error,
    });
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting products",
      error: error,
    });
  }
};

const singleProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.status(200).json({
      message: "Product fetched successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting product",
      error: error,
    });
  }
};

const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const filter = { _id: id };
  const update = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    image: req.body.image,
  };
  try {
    const product = await Product.findOneAndUpdate(filter, update, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating product",
      error: error,
    });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.status(200).json({
      message: "Product deleted successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting product",
      error: error,
    });
  }
};

module.exports = {
  createProduct,
  getProducts,
  singleProduct,
  updateProduct,
  deleteProduct,
};
