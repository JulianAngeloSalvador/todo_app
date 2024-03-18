import { useLocation } from "react-router-dom";
import LinkButton from "./LinkButton";
import { useEffect } from "react";

export default function Header() {
  const location = useLocation();
  let { pathname } = location;

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <header className="flex justify-between items-center p-4 fixed z-10 top-0 left-0 w-full">
      <h1>
        <LinkButton to="/" text="Prime List" styled={false} />
      </h1>
      <section className="flex gap-x-4 items-center">
        {pathname === "/" && (
          <>
            <LinkButton
              to="/login"
              text="Sign In"
              styled={false}
              className="text-caption font-light"
            />
            <LinkButton to="/register" text="Create Account" styled={true} />
          </>
        )}
        {pathname === "/login" && (
          <LinkButton to="/register" text="Create Account" styled={true} />
        )}
        {pathname === "/register" && (
          <LinkButton
            to="/login"
            text="Sign In"
            styled={false}
            className="text-caption font-light"
          />
        )}
      </section>
    </header>
  );
}
