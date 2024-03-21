import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { LuListTodo, LuTrash2, LuCalendar } from "react-icons/lu";
import { Variants, motion, useAnimate } from "framer-motion";
import { MenuState } from "../../utils/interface";
import MenuToggler from "./MenuToggler";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { useEffect } from "react";

const visibility: Variants = {
  displayed: {
    position: "sticky",
    maxHeight: "100dvh",
    y: "0%",
    x: "0%",
  },
  toggled: {
    position: "sticky",
    maxHeight: ["80dvh", "80dvh", "100dvh"],
    y: ["8dvh", "8dvh", "0"],
    x: ["-100%", "0%", "0%"],
  },

  hidden: {
    position: "absolute",
    y: "8dvh",
    maxHeight: "80%",
    x: ["0%", "0%", "-100%"],
  },
};

export default function Sidenav(props: MenuState) {
  const { collapsed, setCollapsed } = props;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!collapsed) {
      animate(
        scope.current,
        {
          position: "sticky",
          maxHeight: ["80dvh", "80dvh", "100dvh"],
          y: ["8dvh", "8dvh", "0"],
          x: ["-100%", "0%", "0%"],
        },
        { duration: 0.3 }
      );
    } else {
      animate(scope.current, {
        position: "absolute",
        y: "8dvh",
        maxHeight: "80%",
        x: ["0%", "0%", "-100%"],
      });
    }
  }, [collapsed]);

  return (
    <motion.aside
      variants={visibility}
      initial="displayed"
      ref={scope}
      className="bg-tertiary top-0 left-0 w-64 h-dvh flex flex-col gap-4 p-4 "
    >
      <header className="flex justify-between items-center px-3 py-2 bg-primary rounded-md font-extra-bold">
        <h2>Username</h2>
        <MenuToggler
          setCollapsed={setCollapsed}
          Icon={<MdOutlineKeyboardDoubleArrowLeft className="w-full h-full" />}
        />
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
