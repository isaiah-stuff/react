import { Header } from "../../components/Header";
import { Link } from "react-router";
import { OrdersGrid } from "./OrdersGrid";
import BuyAgainIcon from "../../assets/images/icons/buy-again.png";
import "./OrdersPage.css";

export function OrdersPage({ cart }) {
  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid />
      </div>
    </>
  );
}
