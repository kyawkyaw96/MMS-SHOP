import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useStateContext } from "../contex/StateContext";

const Card = ({ product }) => {
  
  const { dispath } = useStateContext();

  return (
    <div className="w-72 border-2 p-5 rounded-lg transform transition hover:scale-105">
      <img src={product?.image} className="h-[200px] max-auto my-3" alt="" />
      <h3 className=" text-header font-bold tracking-wider my-3">
        {product.title.substring(0, 25)}...
      </h3>
      <div className=" flex items-center gap-1">
        <AiFillStar className=" text-danger" />
        <small className="text-info font-semibold">{product.rating.rate}</small>
      </div>
      <p className=" text-secondary text-xl my-3">${product.price}</p>
      <div>
        <button
          onClick={() => dispath({ type: "ADD_T0_CARD", payload: product })}
          className=" hover:scale-90 transform transition text-primary bg-info px-5 py-2 rounded shadow-lg  "
        >
          Add To Card
        </button>
        <Link to={`/detail/${product.id}`}>
          <button className=" hover:scale-90 transform transition text-primary bg-header px-5 py-2 rounded shadow-lg ml-3">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
