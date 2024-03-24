import { Link } from "react-router-dom";
import { AuthInterface } from "../utils/interface";
import GoogleAuthenticator from "./GoogleAuthenticator";

export default function Authenticator(props: AuthInterface) {
  const { title, subtitle } = props.header;
  const { googleAction, newUser } = props;

  return (
    <section className="min-h-dvh fixed inset-0 grid place-items-center px-6">
      <div className="outline outline-1 outline-secondary/55 rounded-xl px-2 py-8 w-fluid-400 aspect-square flex flex-col justify-center items-center gap-4">
        <header className="text-center py-2">
          <h3 className="text-title">{title}</h3>
          <p className="text-caption">{subtitle}</p>
        </header>
        <main className="flex flex-col gap-4 w-4/5">
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Username or Email"
              className="cta-base-pad rounded-md leading-3 bg-transparent outline outline-1 -outline-offset-1 outline-secondary/55 focus-within:caret-secondary focus-within:outline-secondary hocus:outline-secondary"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              className=" cta-base-pad rounded-md leading-3 bg-transparent outline outline-1 -outline-offset-1 outline-secondary/55 focus-within:caret-secondary focus-within:outline-secondary hocus:outline-secondary"
            />
            {!newUser && (
              <small className="self-end px-2">Forgot Password?</small>
            )}
            <button
              onClick={(e) => e.preventDefault()}
              className="cta-btn cta-base-pad rounded-md"
            >
              {!newUser ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <small
            className="text-center relative
          after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-secondary after:w-full after:h-[1px] after:-z-10 my-4"
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 inline bg-primary px-2 ">
              OR
            </span>
          </small>
          <GoogleAuthenticator action={googleAction} />
        </main>
        <footer>
          <p className="text-caption px-2 self-center font-light flex gap-x-2">
            {!newUser ? "Not a member yet?" : "Already have an account?"}
            <Link
              to={`${!newUser ? "/register" : "/login"}`}
              className="cta-text"
            >
              {!newUser ? "Create account" : "Log In"}
            </Link>
          </p>
        </footer>
      </div>
    </section>
  );
}
