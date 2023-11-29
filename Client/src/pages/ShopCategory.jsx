import React, { useContext } from "react";
import "../styles/ShopCategory.css";

import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Item";
import { ShopContext } from "../context/ShopContext";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span> Pgina 1-12</span> de 36 productos
        </p>
        <div className="shopCategory-sort">
          Sor by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explorar mas</div>
    </div>
  );
};

export default ShopCategory;
