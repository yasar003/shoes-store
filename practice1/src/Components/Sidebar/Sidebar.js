import "./Sidebar.css";
function Sidebar({ sideinput, colorinput }) {
  const colors = ["white", "red", "green", "black", "blue"];
  const categories = ["sneakers", "flats", "sandals", "heels"];

  return (
    <>
      <div className="sidebar">
        <div className="input">
          {categories.map((category, i) => (
            <label key={i} className="radio-label">
              <input
                type="radio"
                onClick={sideinput}
                value={category.toLowerCase()}
                className="radio-ip"
              />
              {category}
            </label>
          ))}
        </div>
        <div className="input">
          {colors.map((color, i) => (
            <label key={i} className="radio-label">
              <input
                type="radio"
                onClick={colorinput}
                value={color.toLowerCase()}
                className="radio-ip"
              />
              {color}
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
export default Sidebar;
