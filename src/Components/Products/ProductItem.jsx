import React, { useState } from "react";
import searchActive from "../.././img/searchRed.svg";
import search from "../.././img/searchWhite.svg";
import plus from "../../img/plus.svg";
import okey from "../../img/okey.svg";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/slice/cartSlice";
import { removeProduct } from "../../redux/slice/cartSlice";
import { Link } from "react-router-dom";

export const ProductItem = ({ id, imageUrl, text, price }) => {
  const [isOk, setOk] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const { product, totalPrice } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch()

  const addProductionFun = () => {
    const product = {
      id,
      imageUrl,
      text,
      price,
    };
    dispatch(addProduct(product));
    setOk(true);
  };

  const cancellation = () => {
    dispatch(removeProduct(id))
    setOk(false);

  }

  return (
    <div className="products-miniBlock">
     <Link to={`/product/${id}`}>
     <div className="prod-img_block">
        <img className="prod-img" src={imageUrl} alt="product" />
        {!isSearch ? (
          <img
            onClick={() => setSearch(true)}
            className="prod-search"
            src={search}
            alt="search"
          />
        ) : (
          <img
            onClick={() => setSearch(false)}
            className="prod-search"
            src={searchActive}
            alt="searchActive"
          />
        )}

        {/* <img className="prod-search" src={searchActive} alt="searchActive" /> */}
      </div></Link>
      <div className="prod-text">{text}</div>
      <div onClick={(e)=> e.stopPropagation()} className="price-block">
        <div className="price-left">
          <p className="prod-price_name">Цена</p>
          <b className="price">{price.toLocaleString()} руб.</b>
        </div>
        <div className="price-right">
          {!isOk ? (
            <img
              onClick={addProductionFun}
              className="prod-plus"
              src={plus}
              alt="plus"
            />
          ) : (
            <img
              onClick={cancellation}
              className="prod-plus"
              src={okey}
              alt="plus"
            />
          )}
        </div>
      </div>
    </div>
  );
};
