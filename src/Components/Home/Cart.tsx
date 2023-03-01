import React, { useState } from "react";
import strel from "../.././img/strel.svg";
import { CartItem } from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { CartEmpty } from "./CartEmpty";
import { Ready } from "./Ready";
import { cartSelect } from "../../redux/slice/cartSlice";
import { isReadyClick } from "../../redux/slice/cartSlice";


type CloseCartProps = {
  isCloseCart: any;
  setCloseCart: (i:boolean) => void;
};

export const Cart: React.FC<CloseCartProps> = ({ isCloseCart, setCloseCart }) => {
  const { product, totalPrice, readyClick } = useSelector(cartSelect);
  const dispatch = useDispatch();

  return (
    isCloseCart && (
      <div className="cart-block">
        <div onClick={() => setCloseCart(!isCloseCart)} className="cart-close">
          <div onClick={(e) => e.stopPropagation()} className="cart-body">
            <div className="cart-title">Корзина</div>
            {readyClick ? (
              <Ready isCloseCart={isCloseCart} setCloseCart={setCloseCart}/>
            ) : totalPrice <= 0 ? (
              <CartEmpty
                isCloseCart={isCloseCart}
                setCloseCart={setCloseCart}
              />
            ) : (
              <div className="cart-blockEmpty">
                {product.map((obj:any) => (
                  <CartItem key={obj.id} {...obj} />
                ))}
                <div className="order-block">
                  <div className="cart-result">
                    <p className="cart-resutl_title">Итого:</p>
                    <div className="cart-line"></div>
                    <b className="cart-total_price">
                      {totalPrice.toLocaleString()} ₽
                    </b>
                  </div>
                  <button
                    onClick={() => dispatch(isReadyClick(true))}
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
