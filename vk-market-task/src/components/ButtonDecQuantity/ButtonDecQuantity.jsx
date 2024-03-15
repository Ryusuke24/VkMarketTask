import { useDispatch } from "react-redux";
import { decQuantityProduct } from "../../redux/productSlice";
import style from "./ButtonDecQuantity.module.css";

export const ButtonDecQuantity = ({ id, quantity }) => {
  const dispatch = useDispatch();

  const handleClickDec = (id) => dispatch(decQuantityProduct({ id }));

  return (
    <button
      className={style.decrementQuantityButton}
      onClick={() => {
        handleClickDec(id);
      }}
      disabled={quantity === 0}
    >
      -
    </button>
  );
};
