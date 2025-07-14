import React, { useState } from "react";
import "./javaScriptBuyPage.css";
import { FaHeart, FaStar } from "react-icons/fa";

const JavaScriptBuyPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("green");

  const handleColorChange = (color) => setSelectedColor(color);
  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="buy-page-container my-5 ms-5 me-5">
      <div className="product-image">
        <img src="./qr/React-price.png" alt="JavaScript" />
      </div>

      <div className="product-info">
        <h2 className="product-title">JavaScript</h2>

        <p className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad
          inventore minima dolores ipsa deserunt?
        </p>

        <p className="product-price">Price ₹ 450.55</p>

        <div className="action-buttons">
          <button className="wishlist-btn">
            <FaHeart />
          </button>

          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptBuyPage;
