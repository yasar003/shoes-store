import { useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav({ filter, cartcount }) {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const goToCart = () => {
    navigate(`/GENx/Company/cart`);
  };

  return (
    <div className="nav-con">
      <h2>YAS</h2>
      <input
        type="text"
        onChange={filter}
        placeholder="Search here..."
        className="search-ip"
      />

      <div className={isMobile ? "nav-button mob-size" : "nav-button"}>
        <button className="btn">Login</button>
        <button className="btn" onClick={goToCart}>
          Cart {cartcount}
        </button>
      </div>
      <button className="menu-btn" onClick={toggleMenu}>
        {isMobile ? "X" : "="}
      </button>
    </div>
  );
}

export default Nav;
