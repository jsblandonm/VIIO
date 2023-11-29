import React, { useContext } from "react";
import "../styles/ShopCategory.css";
import dropdownIcon from "../assets/dropdown_icon.png";

import Item from "../components/Item";
import { ShopContext } from "../context/ShopContext";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Filtrar productos por categoría
  const categoryProducts = all_product.filter(
    (item) => item.category === props.category
  );

  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt="Category Banner"
      />
      <div className="shopcategory-indexSort">
        <p>
          <span> Page 1-12</span> of {categoryProducts.length} products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdownIcon} alt="Sort Dropdown Icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {categoryProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
