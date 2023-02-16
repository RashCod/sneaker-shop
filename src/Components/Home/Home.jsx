import React from "react";
import { Skeleton } from "../Pages/Skeleton";
import { Products } from "../Products/Products";
import { Banner } from "./../Banner/Banner";
import { Cart } from "./Cart";

export const Home = ({isCloseCart,setCloseCart}) => {
  return (
    <>
      <Banner />
      <Products />
      <Cart isCloseCart={isCloseCart} setCloseCart={setCloseCart}/>
    </>
  );
};
