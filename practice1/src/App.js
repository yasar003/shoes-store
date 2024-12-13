import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "./Components/Button/Button";
import Container from "./Components/Container/Container";
import Data from "./Components/data";
import Navbar from "./Components/Navbar/Nav";
import Viewcart from "./Components/Viewcart/Viewcart";
import Productpage from "./Components/Productpage/Productpage";

function App() {
  const [filteredData, setFilteredData] = useState(Data);
  const [tempfilterdata, setTempfilterdata] = useState(Data);
  const [colorfilterdata, setColorfilterdata] = useState(Data);
  const [cartcount, setCartcount] = useState(0);
  const [productcost, setProductcost] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setFilteredData(Data);
    setTempfilterdata(Data);
    setColorfilterdata(Data);
  }, []);

  const filter = (e) => {
    const selected = e.target.textContent || e.target.value.toLowerCase();
    console.log(selected);
    if (selected === "All") {
      setFilteredData(Data);
      setTempfilterdata(Data);
      setColorfilterdata(Data);
    } else if (e.target.type === "text") {
      const Datalist = Data.filter((item) => {
        return (
          (item.company && item.company.toLowerCase().includes(selected)) ||
          (item.title && item.title.toLowerCase().includes(selected))
        );
      });
      setTempfilterdata(Datalist);
      setFilteredData(Datalist);
      setColorfilterdata(Datalist);
    } else {
      const Datalist = Data.filter((item) => item.company === selected);
      setFilteredData(Datalist);
      setTempfilterdata(Datalist);
      setColorfilterdata(Datalist);
    }
  };

  const sideinput = (e) => {
    const sidebarmodel = e.target.value.toLowerCase();
    console.log(sidebarmodel);

    const Datalist = tempfilterdata.filter((model) => {
      return (
        (model.color && model.color.toLowerCase().includes(sidebarmodel)) ||
        (model.category && model.category.toLowerCase().includes(sidebarmodel))
      );
    });
    setFilteredData(Datalist);
    setColorfilterdata(Datalist);
  };

  const colorinput = (e) => {
    const selectedcolor = e.target.value.toLowerCase();
    console.log(selectedcolor);
    const Datalist = colorfilterdata.filter((model) => {
      return model.color && model.color.toLowerCase().includes(selectedcolor);
    });
    setFilteredData(Datalist);
  };

  const addtocart = (id) => {
    if (!cart.find((c) => c.id === id)) {
      setCartcount(cartcount + 1);
      const cartdata = Data.find((cartproduct) => cartproduct.id === id);
      setCart([...cart, cartdata]);
      console.log(cart);
      const totalcost = productcost + parseFloat(cartdata.newPrice);
      setProductcost(totalcost);
    }
  };

  const remove = (id) => {
    const newcartlist = cart.filter((cartproduct) => cartproduct.id !== id);

    setCartcount(cartcount - 1);
    const removedproduct = cart.find((cartproduct) => cartproduct.id === id);
    if (removedproduct) {
      const totalcost = productcost - parseFloat(removedproduct.newPrice);
      setProductcost(totalcost);
    }
    setCart(newcartlist);
  };

  return (
    <>
      <Router>
        <Navbar filter={filter} cartcount={cartcount} />
        <Button filter={filter} />

        <Routes>
          <Route
            path="/GENx/Company/cart"
            element={
              <Viewcart cart={cart} productcost={productcost} remove={remove} />
            }
          />
          <Route
            path="/GENx/company"
            element={
              <Container
                Data={filteredData}
                addtocart={addtocart}
                sideinput={sideinput}
                colorinput={colorinput}
              />
            }
          />
          <Route
            path="/GENx/Productpage/:id"
            element={<Productpage Data={Data} addtocart={addtocart} />}
          />
          <Route
            path="/GENx/Company/:company"
            element={
              <Container
                Data={filteredData}
                addtocart={addtocart}
                sideinput={sideinput}
                colorinput={colorinput}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
