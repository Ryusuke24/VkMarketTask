import { QuantityStateContainer } from "../QuantityStateContainer/QuantityStateContainer.jsx";
import { DeleteButton } from "../DeleteButton/DeleteButton.jsx";
import style from "./Product.module.css";

export const Product = ({ id, title, image, price, description, quantity }) => {
  return (
    <div className={style.product}>
      <img className={style.image} src={image} alt="productImage" />
      <h2 className={style.title}>{title}</h2>
      <h3 className={style.price}>{price} $</h3>
      <QuantityStateContainer id={id} quantity={quantity} />
      <div className={style.info}>
        <p className={style.desc}>{description}</p>
      </div>
      <DeleteButton id={id} />
    </div>
  );
};
