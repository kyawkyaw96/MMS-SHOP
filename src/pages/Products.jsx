import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner/Spinner";
import { useStateContext } from "../contex/StateContext";

const Products = () => {
  const {
    state: { products },
  } = useStateContext();

  return (
    <div className=" flex flex-wrap gap-7 justify-center my-10">
      {products.length <= 0 ? (
        <Spinner />
      ) : (
        products?.map((product) => <Card key={product.id} product={product} />)
      )}
    </div>
  );
};

export default Products;
