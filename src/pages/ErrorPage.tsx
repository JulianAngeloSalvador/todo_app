import { ErrorResponse, Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  return (
    <section className="min-h-dvh grid place-items-center">
      <article className="w-fluid-200 flex flex-col items-center justify-center gap-2">
        <h1
          className="text-headline w-full text-center relative isolate
       "
        >
          {error.status}
          <span className="absolute bg-secondary w-4/5 h-0.5 left-1/2 -translate-x-1/2 -bottom-2 rounded-full before:absolute before:bg-primary before:left-1/2 before:-translate-x-1/2 before:w-2 before:aspect-square before:outline before:outline-2 before:rotate-45 before:top-1/2 before:-translate-y-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-1 after:aspect-square after:rotate-45" />
        </h1>
        <p className="text-subtitle mt-2">{error.statusText}</p>
        <Link to={"/"} className="bg-cta px-4 py-2 rounded-lg text-sm">
          Back to homepage
        </Link>
      </article>
    </section>
  );
}
