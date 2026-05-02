import { Header } from "../components/Header";
import "./NotFoundPage.css";

export function NotFoundPage() {
  return (
    <>
      <title>404 Page Not Found</title>
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />

      <Header />

      <div>
        <h1 className="not-found-message">404 Error: Page Not Found</h1>
      </div>
    </>
  );
}
