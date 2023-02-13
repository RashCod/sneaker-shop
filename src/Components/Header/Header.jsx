import React from "react";
import logo from "../.././img/logo.svg";
import cart from "../.././img/cart.svg";
import heard from "../.././img/heard.svg";
import user from "../.././img/user.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
 
     
        <div className="header-block">
          <div className="logoBlock">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className="logo-text_block">
              <h1 className="header-h1">REACT SNEAKERS</h1>
              <p className="header-text">Магазин лучших кроссовок</p>
            </div>
          </div>
          <div className="cartBlock">
            <Link to="/cart">
              <img className="cart" src={cart} alt="cart" />
            </Link>
            <span className="totalPrice">1205 руб.</span>
            <Link to="/heard">
              <img className="heard" src={heard} alt="heard" />
            </Link>
            <Link to="/user">
              <img className="user" src={user} alt="user" />
            </Link>
          </div>
        </div>
  
  
  );
};
