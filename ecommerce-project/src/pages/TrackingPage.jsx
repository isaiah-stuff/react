import "./TrackingPage.css";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { useParams } from "react-router";

export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const getTrackingData = async () => {
      const response = await axios.get(`api/orders/${orderId}?expand=products`);
      setOrder(response.data);
    };
    getTrackingData();
  }, [orderId]);

  if (!order) {
    return null;
  }

  const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });

  return (
    <>
      <Header cart={cart} />
      <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />

      <div className="tracking-page">
        <div className="order-tracking">
          <a className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </a>

          <div className="delivery-date">
            Arriving on{" "}
            {dayjs(orderProduct.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
          </div>

          <div className="product-info">{orderProduct.name}</div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img className="product-image" src={orderProduct.product.image} />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
