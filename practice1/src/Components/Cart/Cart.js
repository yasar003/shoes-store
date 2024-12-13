import "./Cart.css";

function Cart({ cart, productcost, remove }) {
  if (cart.length === 0) {
    return <h2>Cart is empty</h2>;
  }

  return (
    <>
      <div className="cart-page">
        {cart.map((item, i) => (
          <div key={i} className="cart-box">
            <div className="cart-img-con">
              <img className="cart-img" src={item.img} alt={item.title} />
            </div>
            <div className="cart-details">
              <div className="title">
                <h4>{item.title}</h4>
              </div>
              <div className="price-box">
                <div className="price">
                  Old Price:<del>{item.prevPrice}</del>
                </div>
                <div className="price">New Price:${item.newPrice}</div>
              </div>
              <div className="quantity">
                <button className="quantity-btn">+</button>
                <input className="quantity-ip" type="number" value="1" />
                <button className="quantity-btn">-</button>
                <div className="cart-trash">
                  <button onClick={() => remove(item.id)} className="trash">
                    trash
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="totals-container">
          <h2 className="subtotal">Subtotal:{productcost}</h2>
        </div>
      </div>
    </>
  );
}

export default Cart;
