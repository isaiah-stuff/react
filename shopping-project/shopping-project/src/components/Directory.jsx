export function Directory() {
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
