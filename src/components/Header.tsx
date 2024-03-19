import { useLocation } from "react-router-dom";
import LinkButton from "./LinkButton";

export default function Header() {
  const location = useLocation();
  let { pathname } = location;

  return (
    <header className="flex justify-center items-center p-4 px-8 fixed z-10 top-0 left-0 w-full min-h-20">
      <div className="flex items-center w-fluid-1200 justify-between">
        <h1 className="col-start-2">
          <LinkButton
            to="/"
            text="Prime List"
            styled={false}
            className="font-extra-bold text-cta"
          />
        </h1>
        <section
          className={`col-start-7 flex gap-x-4 items-center min-w-fit ${
            pathname !== "/" && "justify-center"
          }`}
        >
          {pathname === "/" && (
            <>
              <LinkButton
                to="/login"
                text="Sign In"
                styled={false}
                className="text-caption font-light cta-base-pad text-nowrap"
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
              className="text-caption font-light cta-base-pad"
            />
          )}
        </section>
      </div>
    </header>
  );
}
