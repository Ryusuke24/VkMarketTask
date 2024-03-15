import { useSelector } from "react-redux";
import { Product } from "../Product/Product";
import style from "./ProductsList.module.css";

export const ProductsList = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <div className={style.products}>
      <h1 className={style.title}>Products</h1>
      <ul className={style.list}>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};
