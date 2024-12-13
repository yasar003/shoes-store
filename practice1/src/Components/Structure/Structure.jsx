import "./Structure.css";
import { useNavigate } from "react-router-dom";
function Structure({ img, title, star, prevPrice, addtocart, id, newPrice }) {
  const Navigate = useNavigate("");

  const productpage = (id) => {
    Navigate(`/GENx/Productpage/${id}`);
  };
  return (
    <>
      <div className="card-container">
        <div className="image-con">
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
    </>
  );
}
export default Structure;
