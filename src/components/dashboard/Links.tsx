import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { LuListTodo, LuTrash2, LuCalendar } from "react-icons/lu";
import { capitalizeFirstChar } from "../../utils/functions";

const sidelinks = [
  {
    title: "dashboard",
    path: "/dashboard",
    icon: RxDashboard,
    index: true,
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

interface LinkProp {
  collapsed?: boolean;
}

export default function Links(props: LinkProp) {
  const { collapsed } = props;

  const Links = sidelinks.map((link) => {
    const { title, path, index } = link;

    return (
      <li key={crypto.randomUUID()} className="">
        <NavLink
          to={!index ? `/dashboard${path}` : path}
          className={`text-caption block relative p-4`}
        >
          <link.icon className="" />
          <span
            className={`absolute top-1/2 -translate-y-1/2 left-10 transition-all duration-75 ease-in-out pt-1 ${
              collapsed ? "opacity-0" : "opacity-100"
            }`}
          >
            {capitalizeFirstChar(title)}
          </span>
        </NavLink>
      </li>
    );
  });

  return Links;
}
