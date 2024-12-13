import data from "../data";
import "./Offer.css";
import { useNavigate } from "react-router-dom";

function Offer({ addtocart }) {
  const Navigate = useNavigate();

  const productpage = (id) => {
    Navigate(`/GENx/Productpage/${id}`);
  };

  return (
    <>
      <div className="offer-head-con">
        <h2 className="offer-head">Special Offers</h2>
      </div>
      <div className="offer-con">
        {data
          .filter((rate) => Number(rate.newPrice) <= 100)
          .map(({ id, img, title, star, prevPrice, newPrice }) => (
            <div key={id} className="card-container">
              <div key={id} className="image-con">
                <img
                  onClick={() => productpage(id)}
                  className="pro-img"
                  src={img}
                  alt="Image"
                />
              </div>
              <div className="detail-container">
                <h4 className="pro-title">{title}</h4>
                <p className="pro-para">Some text</p>
                <span className="pro-star">
                  {star}
                  {star}
                  {star}
                </span>
                <div className="price-container">
                  <del className="pro-prevPrice">${prevPrice}</del>
                  <span className="pro-newPrice">${newPrice}</span>
                </div>
              </div>
              <div className="atc-container">
                <button className="pro-atc" onClick={() => addtocart(id)}>
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Offer;
