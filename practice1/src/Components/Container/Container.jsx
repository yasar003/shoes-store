import Offer from "../Offer/Offer";
import Productcon from "../Productcon/Productcon";
import Sidebar from "../Sidebar/Sidebar";
import "./Container.css";

function Container({ Data, addtocart, colorinput, sideinput }) {
  return (
    <>
      <Sidebar sideinput={sideinput} colorinput={colorinput} />
      <Productcon Data={Data} addtocart={addtocart} />
      <Offer addtocart={addtocart} />
    </>
  );
}

export default Container;
