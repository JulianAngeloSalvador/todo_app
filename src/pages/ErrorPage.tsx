import { ErrorResponse, Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  return (
    <section>
      <h1 className="text-headline">{error.status}</h1>
      <p className="text-subtitle">{error.statusText}</p>
      <Link to={"/"}>Back to homepage</Link>
    </section>
  );
}
