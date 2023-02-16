import React from "react";
import { useDispatch } from "react-redux";
import closeCart from "../.././img/closeCart.svg";
import {removeProduct} from '../.././redux/slice/cartSlice'

export const CartItem = ({ id, imageUrl, text, price }) => {
  const dispatch = useDispatch()

  return (
    <div className="cart-item">
      <div className="img-block">
        <img src={imageUrl} alt="product" />
      </div>
      <div className="cart-info">
        <p className="cart-text">{text}</p>
        <b className="cart-price">{price} ₽</b>
      </div>
      <div className="cart-ix">
        <img  onClick={() => dispatch(removeProduct(id))} src={closeCart} alt="close" />
      </div>
    </div>
  );
};
