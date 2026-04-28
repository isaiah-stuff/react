import { Directory } from "./components/Directory";
import { ProductDetails } from "./components/ProductDetails";
import "./App.css";

function App() {
  return (
    <div>
      <Directory />
      <div className="container">
        <ProductDetails name="Cotton Socks" price={10} discount={true} />
        <ProductDetails name="Tennis Balls" price={6} />
        <ProductDetails name="Plain T-Shirt" price={7.99} />
      </div>
    </div>
  );
}

export default App;
