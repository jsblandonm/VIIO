import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/produc.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createProductSchema } from "../schemas/product.schema.js";
import { getExternalProduct } from "../controllers/produc.controller.js";

const router = Router();

router.get("/prducts", authRequired, getProducts);

router.get("/products/:id", authRequired, getProduct);

router.get("/external-products", authRequired, getExternalProduct);

router.post(
  "/products",
  authRequired,
  validateSchema(createProductSchema),
  createProduct
);

router.delete("/products/:id", authRequired, deleteProduct);

router.put("/products/:id", authRequired, updateProduct);

export default router;
