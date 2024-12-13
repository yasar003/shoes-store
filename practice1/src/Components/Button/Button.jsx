import "./Button.css";
import { useNavigate } from "react-router-dom";
function Button({ filter }) {
  const fil_btn = ["All", "Adidas", "Nike", "Vans", "Puma"];
  const Navigate = useNavigate("");
  const routeandfilter = (btn) => {
    Navigate(`/GENx/Company/${btn === "All" ? "" : btn}`);
    filter({ target: { textContent: btn } });
  };

  return (
    <>
      <div className="button-container">
        {fil_btn.map((btn, i) => (
          <button
            key={i}
            onClick={() => routeandfilter(btn)}
            className="fil_btn"
          >
            {btn}
          </button>
        ))}
      </div>
    </>
  );
}
export default Button;
