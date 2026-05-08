import { DeliveryDate } from "./DeliveryDate";
import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails";

export function OrderSummary({ cart, deliveryOptions, setCart }) {
  return (
    <div className="order-summary">
      {cart.map((cartItem) => {
        return (
          <div key={cartItem.productId} className="cart-item-container">
            <DeliveryDate
              cartItem={cartItem}
              deliveryOptions={deliveryOptions}
            />

            <div className="cart-item-details-grid">
              <CartItemDetails cartItem={cartItem} />
              <DeliveryOptions
                cartItem={cartItem}
                cart={cart}
                setCart={setCart}
                deliveryOptions={deliveryOptions}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
