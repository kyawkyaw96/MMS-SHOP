import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "../api";
import { AiFillStar } from "react-icons/ai";
import { useStateContext } from "../contex/StateContext";
import Spinner from "../components/Spinner/Spinner";

const Details = () => {
  const { id } = useParams();

  const { dispath } = useStateContext();

  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  const getProductDetail = async () => {
    setProduct(await getData(`/products/${id}`));
  };

  const getProductsCat = async () => {
    const data = await getData(`/products/category/${product.category}`);
    const filterItem = data.filter((d) => d.id !== product.id);
    // console.log(filterItem);
    setProducts(filterItem);
  };

  useEffect(() => {
    getProductDetail();
    getProductsCat();
  }, [product, products]);
  //   console.log(product);
  return (
    <div className="">
      {product.image ? (
        <>
          <div className=" flex gap-5 items-start my-20">
            <img
              src={product?.image}
              className=" h-96 border shadow-sm p-10"
              alt=""
            />
            <div className=" flex flex-col gap-5 mt-5">
              <p className=" w-40 text-center text-info bg-gray-300 font-semibold rounded-full px-5 py-2">
                {product?.category}
              </p>
              <h3 className=" text-2xl font-semibold text-header ">
                {product?.title}
              </h3>
              <div className="">
                <p className="text-header font-semibold text-lg">Description</p>
                <p className=" text-secondary tracking-wider leading-6 mt-1">
                  {product?.description}
                </p>
              </div>
              <p className=" flex items-center">
                <AiFillStar className=" text-danger mr-1" />{" "}
                {product?.rating?.rate}
              </p>
              <p className=" text-header text-xl font-semibold ">
                ${product?.price}
              </p>
              <div className="">
                <button
                  onClick={() =>
                    dispath({ type: "ADD_T0_CARD", payload: product })
                  }
                  className=" bg-info text-primary py-2 rounded shadow-lg w-40 transform transition hover:scale-90"
                >
                  Add To Card
                </button>
                <Link to="/success">
                  <button className=" bg-header text-primary py-2 rounded shadow-lg ml-3 w-40 transform transition hover:scale-90">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" my-20">
            <h1 className=" text-2xl font-semibold text-header">
              {" "}
              You May Also Like
            </h1>
            <Link to={"/"}>
              <div className=" flex flex-wrap gap-7 ">
                {products?.map((item) => (
                  <div
                    key={item?.id}
                    className="my-10 hover:scale-105 transform transition"
                  >
                    <img
                      src={item?.image}
                      className=" h-52 border-2 shadow-lg  hover:shadow-xl p-5 rounded"
                      alt=""
                    />
                    <h1 className=" text-secondary font-semibold mt-2">
                      {item?.price}
                    </h1>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Details;
