import { Link } from "react-router-dom";
import { LinkBtn } from "../utils/interface";

export default function LinkButton(props: LinkBtn) {
  const { to, text, styled, className } = props;

  return (
    <Link
      to={to}
      className={
        styled
          ? "cta-btn cta-base-pad rounded-lg text-sm"
          : className
          ? className
          : ""
      }
    >
      {text}
    </Link>
  );
}
