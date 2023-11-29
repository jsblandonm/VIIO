import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrums from "../components/Breadcrums";
import ProductDisplay from "../components/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { id } = useParams();
  const product = all_product.find((e) => e.id === Number(id));
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
