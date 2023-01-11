import React, { useEffect, useState } from "react";
import {
  AiFillDelete,
  AiFillMinusSquare,
  AiFillPlusSquare,
} from "react-icons/ai";
import { useStateContext } from "../contex/StateContext";

const CardItem = ({item ,increseTotal ,decreseTotal}) => {
  const {
    dispath,
    state: { card },
  } = useStateContext();
  const [qty, setQty] = useState(1);
  const increseQty = () => {
    setQty((prev) => prev + 1);
    increseTotal(item.price)
  };
  const decreseQty = () => {
    if(qty >1){
        setQty((prev) => prev - 1);
        decreseTotal(item.price)
    }
  };
  const handleRemoveItem =()=>{
    decreseTotal(item?.price * qty)
    dispath({ type: "REMOVE_FROM_CARD", payload: item })
  }
  return (
    <div className=" flex gap-3" key={item.id}>
              <img
                src={item?.image}
                alt=""
                className=" h-40 border rounded-sm p-5 shadow-sm"
              />
              <div>
                <h1>{item?.title}</h1>
                <p className=" price">{(item?.price*qty).toFixed(2)}</p>
                <div className="flex mt-2">
                  <AiFillMinusSquare
                    onClick={decreseQty}
                    className=" text-3xl text-danger cursor-pointer"
                  />
                  <h1 className=" text.4xl">{qty}</h1>
                  <AiFillPlusSquare
                    onClick={increseQty}
                    className=" text-3xl text-info cursor-pointer"
                  />
                </div>
                <button
                  onClick={() =>
                    handleRemoveItem()
                  }
                  className=" text-danger font-2xl border rounded border-danger p-2 mt-8"
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
  );
};

export default CardItem;
