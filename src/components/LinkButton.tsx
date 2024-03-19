import { Link } from "react-router-dom";
import { LinkBtn } from "../utils/interface";

export default function LinkButton(props: LinkBtn) {
  const { to, text, styled, className } = props;
  const defaultStyle = "cta-btn cta-base-pad rounded-lg text-sm";
  return (
    <Link
      to={to}
      className={
        styled && className
          ? `${defaultStyle} ${className}`
          : styled
          ? defaultStyle
          : className
          ? className
          : ""
      }
    >
      {text}
    </Link>
  );
}
