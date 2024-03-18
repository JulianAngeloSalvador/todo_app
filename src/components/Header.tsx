import LinkButton from "./LinkButton";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 fixed z-10 top-0 left-0 w-full">
      <h1>
        <LinkButton to="/" text="Prime List" styled={false} />
      </h1>
      <section className="flex gap-x-4 items-center">
        <LinkButton to="/login" text="Sign In" styled={false} />
        <LinkButton to="/register" text="Create Account" styled={true} />
      </section>
    </header>
  );
}
