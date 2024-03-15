import { ButtonDecQuantity } from "../ButtonDecQuantity/ButtonDecQuantity";
import { ButtonIncQuantity } from "../ButtonIncQuantity/ButtonIncQuantity";
import style from "./QuantityStateContainer.module.css";

export const QuantityStateContainer = ({ id, quantity }) => {
  return (
    <div className={style.quantityState}>
      <ButtonDecQuantity id={id} quantity={quantity} />
      <span className={style.quantityCount}> {quantity ? quantity : 0} </span>
      <ButtonIncQuantity id={id} quantity={quantity} />
    </div>
  );
};
