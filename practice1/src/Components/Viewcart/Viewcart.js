import Cart from "../Cart/Cart";
import "./Viewcart.css";
function Viewcart({ cart, productcost, remove }) {
  return (
    <>
      <div className="viewcart-page">
        <Cart cart={cart} productcost={productcost} remove={remove} />
      </div>
    </>
  );
}

export default Viewcart;
