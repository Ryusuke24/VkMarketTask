import { ProductsList } from "./components/ProductsList/ProductsList";
import { TotalList } from "./components/TotalList/TotalList";
import { getProductData } from "./utils/getProductData";
import "./styles.css";

export default function App() {
  getProductData();

  return (
    <div className="App">
      <ProductsList />
      <TotalList />
    </div>
  );
}
