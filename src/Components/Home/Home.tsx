import React from "react";
import { Products } from "../Products/Products";
import { Banner } from "../Banner/Banner";
import { Cart } from "./Cart";

type CloseCartProps = {
  isCloseCart: boolean;
  setCloseCart: (i:boolean) => void;
};

export const Home: React.FC<CloseCartProps> = ({isCloseCart,setCloseCart}) => {
  return (
    <>
      <Banner />
      <Products />
      <Cart isCloseCart={isCloseCart} setCloseCart={setCloseCart}/>
    </>
  );
};
