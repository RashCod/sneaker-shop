import React from "react";
import logo from "../.././img/logo.svg";
import cart from "../.././img/cart.svg";
// import heard from "../.././img/heard.svg";
import user from "../.././img/user.svg";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelect } from "../../redux/slice/cartSlice";


type CloseCartProps = {
  isCloseCart: boolean;
  setCloseCart: (i:boolean) => void;
};

export const Header: React.FC<CloseCartProps> = ({ isCloseCart, setCloseCart }) => {
  const { product, totalPrice } = useSelector(cartSelect);
  const path = useLocation()
  return (
    <div className="header-block">
      <div className="logoBlock">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="logo-text_block">
          <h1 className="header-h1">REACT STORE</h1>
          <p className="header-text">Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className="cartBlock">
        {
          path.pathname === '/' ? <button onClick={() => setCloseCart(true)} >
          <img className="cart" src={cart} alt="cart" />
          {totalPrice ? (
            <b className="totalPrice">{totalPrice.toLocaleString()} ₽</b>
          ) : (
            ""
          )}
        </button> : ''
        }
       

        <Link to="/user">
          <img className="user" src={user} alt="user" />
        </Link>
      </div>
    </div>
  );
};
