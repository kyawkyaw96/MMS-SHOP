import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../contex/StateContext";
import CardItem from "./CardItem";

const AddToCard = () => {
  const {
    state: { card },
    dispath,
  } = useStateContext();

  const goShop = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(() => {

    setTotal(card.reduce((initial, current) => initial + current.price , 0));
  }, []);
  const increseTotal = (price)=>{
    setTotal( total + price)
  }
  const decreseTotal = (price)=>{
    setTotal( total - price)
  }
  return (
    <>
      {card.length > 0 ? (
        <div className=" flex gap-24 justify-between m-10">
          <div className=" flex flex-col gap-5">
            {card?.map((item) => (
              <CardItem key={item?.id} item={item} increseTotal={increseTotal} decreseTotal={decreseTotal}/>
            ))}
          </div>
          <div>
            <div className=" rounded h-[200px] p-10 bg-gray-100 shadow-lg my-auto">
              <h1 className=" text-4xl ">Total Price -$ {total.toFixed(2)}</h1>
              <Link to="/success">
                <button
                  onClick={() => dispath({ type: "CARD_EMPTY" })}
                  className=" block mt-10 rounded-lg text-white uppercase bg-info px-5 py-2"
                >
                  checkout
                </button>
              </Link>
            </div>
            <button
              className="rounded-lg text-white uppercase bg-danger w-full px-5 py-2 mt-10"
              onClick={() => dispath({ type: "CARD_EMPTY" })}
            >
              Clear
            </button>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col w-full h-screen items-center justify-center">
          <h1 className=" font-bold text-danger  bg-slate-50 tracking-wider text-4xl">
            Please Choose Item
          </h1>
          <button
            onClick={() => goShop("/")}
            className=" rounded-md my-3 text-2xl px-5 py-3 bg-info text-white "
          >
            Go To Shop
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCard;
