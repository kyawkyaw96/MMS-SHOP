import React from "react";
import { FaSearch, FaShopify, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateContext } from "../contex/StateContext";
import AddToCard from "../pages/AddToCard";
import Card from "./Card";
const Nav = () => {

  const {search, setSearch, state: {card}}= useStateContext();
  // console.log(search);

  return (
    <nav className=" flex justify-between items-center bg-gray-50 px-5 py-2 my-3 shadow-md">
      <Link to="/">
        <div className=" flex justify-center items-center gap-2 cursor-pointer">
          <FaShopify className=" text-4xl text-danger" />
          <h1 className=" uppercase text-danger tracking-wider font-semibold">
            mms-shop
          </h1>
        </div>
      </Link>
      <div className="flex items-center justify-center gap-3">
      <Link to="/addtocard/">
          <div className=" flex items-center rounded-md justify-center gap-2 px-3 py-2 bg-header text-white">
            <FaShoppingCart className=" text-xl" />
            <small>{card.length}</small>
          </div>
      </Link>
        <div className=" flex justify-center items-center border-2 px-3 py-2 rounded-md gap-2">
          <FaSearch className="" />
          <input
          value={search }
          onChange={(e)=> setSearch(e.target.value)}
            type="text"
            className=" outline-none cursor-auto"
            placeholder="Search..."
            name=""
            id=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
