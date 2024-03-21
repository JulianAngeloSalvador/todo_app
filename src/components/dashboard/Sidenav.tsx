import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { LuListTodo, LuTrash2, LuCalendar } from "react-icons/lu";
import { Variants, motion } from "framer-motion";
import { MenuState } from "../../utils/interface";
import MenuToggler from "./MenuToggler";

const visibility: Variants = {
  displayed: {
    maxWidth: "16rem",
  },
  hidden: {
    maxWidth: "100px",
  },
};

export default function Sidenav(props: MenuState) {
  const { collapsed, setCollapsed } = props;

  return (
    <motion.aside
      variants={visibility}
      initial="displayed"
      animate={collapsed ? "hidden" : "displayed"}
      style={{ transformOrigin: "left" }}
      className="bg-tertiary sticky top-0 left-0 bottom-0 w-64 h-dvh flex flex-col gap-4 p-4"
    >
      <header className="flex justify-between items-center px-3 py-2 bg-primary rounded-md font-extra-bold">
        <h2>Username</h2>
        <MenuToggler setCollapsed={setCollapsed} />
      </header>
      <ul className="flex flex-col gap-4 py-2 children:px-3 children:py-2 children:rounded-md children:flex children:items-center children:gap-x-2">
        <NavLink className="guide2" to={"/dashboard"}>
          <RxDashboard />
          <span>Dashboard</span>
        </NavLink>
        <NavLink className="guide2" to={"/dashboard/todo"}>
          <LuListTodo />
          Todo
        </NavLink>
        <NavLink className="guide2" to={"/dashboard/calendar"}>
          <LuCalendar />
          Calendar
        </NavLink>
        <NavLink className="guide2" to={"/dashboard/trash"}>
          <LuTrash2 />
          Trash
        </NavLink>
      </ul>
    </motion.aside>
  );
}
