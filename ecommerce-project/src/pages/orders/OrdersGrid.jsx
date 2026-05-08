import axios from "axios";
import { OrderHead } from "./OrderHead";
import { Link } from "react-router";
import { useState, useEffect, Fragment } from "react";
import { OrderDetailsGrid } from "./OrderDetailsGrid";

export function OrdersGrid() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    getOrders();
  }, []);

  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHead order={order} />
            <OrderDetailsGrid order={order} />
          </div>
        );
      })}
    </div>
  );
}
