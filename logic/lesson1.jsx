const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

const priceOfSocks = 10;
const priceOfShirt = 8;

const productCost = (quantitySocks, quantityShirts) =>
  quantitySocks * priceOfSocks + quantityShirts * priceOfShirt;

const Price = <p>Product Cost: ${productCost(1, 2)}</p>;
//ternary operator to determine if shipping cost is $5 or $0 based on product cost
const Shipping = <p>Shipping Cost: ${productCost(1, 2) > 20 ? 5 : 0}</p>;
const totalCost = (
  <p>Total Cost: ${productCost(1, 2) + (productCost(1, 2) > 20 ? 5 : 0)}</p>
);
const submitOrder = <button>Submit Order</button>;

const currentDate = <p>Today is {dayjs().format("MMMM D, YYYY")}.</p>;

setInterval(() => {
  const currentTime = <p>The current time is {dayjs().format("HH:mm:ss")}.</p>;
  const updatedDiv = (
    <div>
      {Price}
      {Shipping}
      {totalCost}
      {submitOrder}
      {currentDate}
      {currentTime}
    </div>
  );
  root.render(updatedDiv);
}, 1000);
