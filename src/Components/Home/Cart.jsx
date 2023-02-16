import React, { useState } from "react";
import strel from "../.././img/strel.svg";
import { CartItem } from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { CartEmpty } from "./CartEmpty";
import { Ready } from "./Ready";

export const Cart = ({ isCloseCart, setCloseCart }) => {
  const { product, totalPrice } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const [readyClick, isReadyClick] = React.useState(false);

  return (
    isCloseCart && (
      <div className="cart-block">
        <div onClick={() => setCloseCart(!isCloseCart)} className="cart-close">
          <div onClick={(e) => e.stopPropagation()} className="cart-body">
            <div className="cart-title">Корзина</div>
            {readyClick ? (
              <Ready />
            ) : totalPrice <= 0 ? (
              <CartEmpty
                isCloseCart={isCloseCart}
                setCloseCart={setCloseCart}
              />
            ) : (
              <div className="cart-blockEmpty">
                {product.map((obj) => (
                  <CartItem key={obj.id} {...obj} />
                ))}
                <div className="order-block">
                  <div className="cart-result">
                    <p className="cart-resutl_title">Итого:</p>
                    <div className="cart-line"></div>
                    <b className="cart-total_price">{totalPrice} ₽</b>
                  </div>
                  <button
                    onClick={() => isReadyClick(true)}
                    className="cart-button"
                  >
                    <p className="cart-btn-text">
                      Оформить заказ <img src={strel} alt="strel" />
                    </p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};
