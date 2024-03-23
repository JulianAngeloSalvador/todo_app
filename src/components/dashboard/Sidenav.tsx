import { MenuState } from "../../utils/interface";
import MenuToggler from "./MenuToggler";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

import Links from "./Links";
import LinkButton from "../LinkButton";

export default function Sidenav(props: MenuState) {
  const { collapsed, setCollapsed } = props;

  return (
    <aside
      className={`bg-tertiary top-0 left-0 h-dvh flex flex-col gap-4 p-4 flex-grow-0 flex-shrink-0 transition-all duration-100 ease-in-out
      ${collapsed ? "basis-20" : "basis-72"}`}
    >
      <header className="flex justify-between items-center px-3 py-2 bg-primary rounded-md font-extra-bold">
        {!collapsed && <h2 id="username">Username</h2>}
        <MenuToggler
          setCollapsed={setCollapsed}
          Icon={
            <MdOutlineKeyboardDoubleArrowLeft
              className={`w-full h-full ${
                collapsed ? "rotate-180" : "rotate-360"
              }`}
            />
          }
        />
      </header>
      <ul className="flex flex-col gap-4  children:gap-x-2 ">
        <Links collapsed={collapsed} />
      </ul>
      {/* <LinkButton
        to="/"
        styled
        text={!collapsed ? `Prime List` : ""}
        className="font-extra-bold text-primary mt-auto"
      /> */}
    </aside>
  );
}
