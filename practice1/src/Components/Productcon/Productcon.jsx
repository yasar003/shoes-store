import Nomatch from "../Nomatch/Nomatch";
import Structure from "../Structure/Structure";

function Productcon({ Data, addtocart }) {
  if (Data.length === 0) {
    return <Nomatch />;
  }

  return (
    <>
      <div className="product-container">
        {Data.map((item, index) => (
          <div key={index} className="product-item">
            <Structure {...item} addtocart={addtocart} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Productcon;
