import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/productSlice";
import style from "./DeleteButton.module.css";
import DeleteIcon from "./DeleteIcon.svg";

export const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  const handleDeleteProduct = (id) => dispatch(removeProduct({ id }));

  return (
    <img
      src={DeleteIcon}
      alt="DeleteIcon"
      className={style.removeButton}
      style={{ width: "32px" }}
      onClick={() => handleDeleteProduct(id)}
    />
  );
};
