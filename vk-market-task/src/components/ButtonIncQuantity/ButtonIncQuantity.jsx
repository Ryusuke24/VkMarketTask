import { useDispatch } from "react-redux";
import { incQuantityProduct } from "../../redux/productSlice";
import style from "./ButtonIncQuantity.module.css";

export const ButtonIncQuantity = ({ id, quantity }) => {
  const dispatch = useDispatch();

  const handleClickInc = (id) => dispatch(incQuantityProduct({ id }));

  return (
    <button
      className={style.incrementQuantityButton}
      onClick={() => {
        handleClickInc(id);
      }}
      disabled={quantity === 10}
    >
      +
    </button>
  );
};
