import Product from "../models/product.model.js";
import axios from "axios";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({
      user: req.user.id,
    }).populate("user");
    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener productos de la base de datos." });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, category, image, new_price, old_price } = req.body;
    const newProduct = new Product({
      name,
      category,
      image,
      new_price,
      old_price,
      user: req.user.id,
    });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al crear un nuevo producto en la base de datos." });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("user");
    if (!product)
      return res.status(404).json({ message: "Producto no encontrado" });
    res.json(product);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener el producto de la base de datos." });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
      return res.status(404).json({ message: "Producto no encontrado" });
    res.sendStatus(204);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al eliminar el producto de la base de datos." });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product)
      return res.status(404).json({ message: "Producto no encontrado" });
    res.json(product);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al actualizar el producto en la base de datos." });
  }
};

export const getExternalProduct = async (req, res) => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting external products" });
  }
};
