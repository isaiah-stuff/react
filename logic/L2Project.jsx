const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

function Directory() {
  return (
    <div className="directory">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/products">Mens</a>
          </li>
          <li>
            <a href="/products">Womens</a>
          </li>
          <form method="post">
            <input type="text" placeholder="Search products..." />
            <filter>
              <button type="submit">Search</button>
            </filter>
          </form>
        </ul>
      </nav>
    </div>
  );
}

function ProductDetails({ name, price, discount }) {
  const imageSrc = `/images/${name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")}`;
  return (
    <div class="card">
      <div class="card-content">
        <img src={`${imageSrc}.png`} alt={name} width={200} />
        <div>{name}</div>
        <div>
          {discount ? (
            <>
              <del>Price: ${price}</del>
              <div>Discount Price: ${(price * 0.8).toFixed(2)}</div>
            </>
          ) : (
            <div>Price: ${price}</div>
          )}
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

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

root.render(<App />);
