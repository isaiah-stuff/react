import CottonSocksImg from "../assets/cotton-socks.png";
import PlainTShirtImg from "../assets/plain-t-shirt.png";
import TennisBallsImg from "../assets/tennis-balls.png";

export function ProductDetails({ name, price, discount }) {
  const imageSrc = `${name
    .replace(/[^a-z0-9\s]/gi, "") // remove everything except letters, numbers, spaces
    .replace(/[\s-]+/g, "") // remove spaces and hyphens
    .trim()}Img`;

  console.log(imageSrc);
  return (
    <div class="card">
      <div class="card-content">
        <img src={imageSrc} alt={name} width={200} />
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
