import React, { useState, useEffect } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;

  // Hooks must be called unconditionally at the top of the component
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (product && product.image) {
      setMainImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="productdisplay">
        <p>Product not found.</p>
      </div>
    );
  }

  // thumbnail list (use same image multiple times for now)
  const images = [product.image, product.image, product.image, product.image];

  // static rating for display; replace with real data when available
  const rating = 4;
  const totalRatings = 122;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              className={"product-thumb " + (mainImage === img ? "active" : "")}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={mainImage}
            alt={product.name}
          />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-star">
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src={i < rating ? star_icon : start_dull_icon}
              alt="star"
            />
          ))}
          <p>({totalRatings})</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {"$" + product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            {"$" + product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>

        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
