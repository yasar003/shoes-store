import React from "react";
import { useParams } from "react-router-dom";
import Data from "../data";
import "./Productpage.css";
function Productpage({ addtocart }) {
  let { id } = useParams();
  console.log("ID from URL:", id);
  let product = Data.find((item) => Number(item.id) === Number(id));
  console.log("Found product:", product);
  return (
    <div className="product-page">
      <div className="product-img">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="product-detail">
        <h1>{product.title}</h1>
        <p>{product.description || "No description available."}</p>
        <div className="price-container">
          <span>${product.newPrice}</span>
          {product.prevPrice && <del>${product.prevPrice}</del>}
        </div>
        <button onClick={() => addtocart(product.id)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Productpage;
