import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { LuListTodo, LuTrash2, LuCalendar, LuSettings } from "react-icons/lu";
import { capitalizeFirstChar } from "../../utils/functions";
import { SidelinkProps } from "../../utils/interface";
import Logo from "../Logo";

const sidelinks: SidelinkProps[] = [
  {
    title: "dashboard",
    path: "/dashboard",
    icon: RxDashboard,
    index: "dashboardIndex",
  },
  {
    title: "todo",
    path: "/todo",
    icon: LuListTodo,
  },
  {
    title: "calendar",
    path: "/calendar",
    icon: LuCalendar,
  },
  {
    title: "trash",
    path: "/trash",
    icon: LuTrash2,
  },
];

const footerlinks: SidelinkProps[] = [
  {
    title: "settings",
    path: "/settings",
    icon: LuSettings,
  },
  {
    title: "Prime List",
    path: "/",
    icon: Logo,
    index: "mainIndex",
  },
];

interface LinkProp {
  collapsed?: boolean;
  role: "main" | "footer";
}

export default function Links(props: LinkProp) {
  const { collapsed, role } = props;
  const links = role === "main" ? sidelinks : footerlinks;

  const LinkItems = links.map((link) => {
    const { title, path, index } = link;

    return (
      <li
        key={crypto.randomUUID()}
        className={`hover:bg-secondary hover:text-primary rounded-md`}
      >
        <NavLink
          to={!index ? `/dashboard${path}` : path}
          className={` block relative py-2 px-3`}
        >
          <link.icon className="text-subtitle" />
          <span
            className={`text-caption absolute top-1/2 -translate-y-1/2 left-11 transition-all duration-75 ease-in-out pt-[4.75px] whitespace-nowrap ${
              collapsed
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }`}
          >
            {title && capitalizeFirstChar(title)}
          </span>
        </NavLink>
      </li>
    );
  });

  return LinkItems;
}
