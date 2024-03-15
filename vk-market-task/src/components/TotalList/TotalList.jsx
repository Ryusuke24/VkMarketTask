import { useSelector } from "react-redux";
import { ProductInTotal } from "../ProductInTotal/ProductInTotal";
import style from "./TotalList.module.css";

export const TotalList = () => {
  const cart = useSelector((state) => state.products.products).filter(
    (product) => product.quantity
  );

  return (
    <div className={style.total}>
      <h2>
        Total :{" "}
        {0 ||
          cart
            .map((product) => product.quantity * product.price)
            .reduce((acc, val) => acc + val, 0)
            .toFixed(2)}{" "}
        $
      </h2>
      <ul className={style.list}>
        {cart.map((product) => (
          <ProductInTotal
            key={product.id}
            id={product.id}
            title={product.title}
            quantity={product.quantity}
          />
        ))}
      </ul>
    </div>
  );
};
