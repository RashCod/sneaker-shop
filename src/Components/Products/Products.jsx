import React, { useEffect, useState } from "react";
import { Skeleton } from "../Pages/Skeleton";
import { ProductItem } from "./ProductItem";
import { useSelector,useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slice/searchSlice";


export const Products = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const searchValue = useSelector((state) => state.searchSlice.searchValue);
  const dispatch = useDispatch();

  const search = searchValue ? `search=${searchValue}` : "";

 

  useEffect(() => {
    fetch(`https://6383e2be4ce192ac604c6e5a.mockapi.io/iphone?${search}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
    setTimeout(()=>{
      setLoading(false);
    },2000)
  }, [search]);

  return (
    <div className="products-block">
      <div className="products-title_block">
        <div className="products-name">
          <h2 className="products-title">Все кроссовки</h2>
        </div>
        <div className="products-input_block">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
              stroke="#E4E4E4"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <input value={searchValue}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
            placeholder="Поиск..."
            type="text"
            className="products-input"
          />
        </div>
      </div>
      <div className="products-grid">
        {isLoading
          ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
          : item.map((obj, index) => <ProductItem key={index} {...obj} />)}
      </div>
    </div>
  );
};
