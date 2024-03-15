import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

export const getProductData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
};
