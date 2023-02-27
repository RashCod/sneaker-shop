import React from "react";
import empty from "../.././img/empty.png";
import left from "../.././img/left.svg";
import { Link } from "react-router-dom";

type CloseCart = {
  isCloseCart: boolean;
  setCloseCart: any;
};

export const CartEmpty: React.FC<CloseCart> = ({ isCloseCart, setCloseCart }) => {
  return (
    <div className="empty-block">
      <img className="empty-img" src={empty} alt="basket" />
      <h3 className="empty-title">Корзина пустая</h3>
      <p className="empty-text">
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </p>
      <Link onClick={() => setCloseCart(false)} className="empty-btn" to="/">
        {" "}
        <img src={left} alt="left" />
      </Link>
    </div>
  );
};
