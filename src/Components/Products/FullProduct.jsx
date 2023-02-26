import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FullProductSkeleton from "../Pages/FullProductSekeleton";

export const FullProduct = () => {
  const [product, setProduct] = React.useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          'https://6383e2be4ce192ac604c6e5a.mockapi.io/iphone/' + id
        );
        setProduct(data);
      } catch (error) {
        alert('ERROR');
      }
    }
    fetchProduct();
  }, []);

  if(!product){
    return <FullProductSkeleton/>
  }

  return (
    <div className="fullProdBlock">
      <img src={product.imageUrl} alt="product" />
    <div className="fullProdInfo">
    <h2>{product.text}</h2>
      <p>ЦЕНА:</p>
      <b>{product.price} руб.</b>
    </div>
    </div>
  );
};
