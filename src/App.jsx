import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import AddToCard from "./pages/AddToCard";
import Details from "./pages/Details";
import Products from "./pages/Products";
import Success from "./pages/Success";
import 'animate.css'

const App = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/success" element={<Success />} />
        <Route path="/addtocard/" element={<AddToCard />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
