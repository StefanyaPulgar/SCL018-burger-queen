import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Waiter from "./components/Waiter";
import Kitchen from "./components/Kitchen/Kitchen";
import data from "./components/data.json";

const contentMenu = data;
export const ContextProducts = React.createContext(); 

function App() { 
  const [stateModal, setStateModal] = useState(true); 
  const [name, setName] = useState("");
  const [table, setTable] = useState("");

  const [products, setProducts] = useState({
    dataMenu: contentMenu,
    resumeOrder: [],
  });

  const addCarrito = (dish) => {
    return setProducts({
      ...products, 
      resumeOrder: products.resumeOrder.find((item) => item.id === dish.id)
        ? products.resumeOrder.map((item) => 
            item.id === dish.id ? { ...item, count: item.count + 1 } : item
          )
        : [...products.resumeOrder, { ...dish, count: 1 }],
    });
  };

  const removeFromOrder = (id) => {
    setProducts({
      ...products,
      resumeOrder: products.resumeOrder.filter((item) => item.id !== id),
    });
  };

  const increase = (id) => {
    setProducts({
      ...products,
      resumeOrder: products.resumeOrder.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      ),
    });
  };

  const decrease = (id) => {
    setProducts({
      ...products,
      resumeOrder: products.resumeOrder.map((item) =>
        item.id === id
          ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
          : item
      ),
    });
  };

  const totalOrderAmount = products.resumeOrder
    .reduce((total, dish) => (total = dish.price * dish.count), 0) 
    .toFixed(3); 

  const allProps = {
    stateModal,
    setStateModal,
    name,
    setName,
    table,
    setTable,
    products,
    addCarrito,
    removeFromOrder,
    increase,
    decrease,
    totalOrderAmount,
  };

  return (
    <ContextProducts.Provider value={allProps}>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </ContextProducts.Provider>
  );
}

export default App;