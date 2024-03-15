import { useDispatch } from "react-redux";
import { removeQuantity } from "../../redux/productSlice";
import style from "./ProductInTotal.module.css";
import DeleteIcon from "./DeleteIcon.svg";

export const ProductInTotal = ({ id, title, quantity }) => {
  const dispatch = useDispatch();
  const handleDeleteProduct = (id) => dispatch(removeQuantity({ id }));

  return (
    <div className={style.product}>
      <span>
        {title} <br />
        Count in cart: {quantity}
      </span>
      <img
        src={DeleteIcon}
        alt="DeleteIcon"
        className={style.removeButton}
        style={{ width: "32px" }}
        onClick={() => handleDeleteProduct(id)}
      />
    </div>
  );
};
