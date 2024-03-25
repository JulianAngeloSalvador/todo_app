import { MenuState } from "../../utils/interface";
import MenuToggler from "./MenuToggler";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

import Links from "./Links";

export default function Sidenav(props: MenuState) {
  const { collapsed, setCollapsed } = props;

  return (
    <aside
      className={`bg-tertiary top-0 left-0 h-dvh flex flex-col gap-4 p-2 flex-grow-0 flex-shrink-0 transition-all duration-100 ease-in-out relative group
      ${collapsed ? "basis-[3.75rem]" : "basis-56"}`}
    >
      <ul className="flex flex-col gap-4">
        <Links collapsed={collapsed} role="main" />
      </ul>

      <ul className="flex flex-col gap-2 mt-auto">
        <Links collapsed={collapsed} role="footer" />
      </ul>
      <div
        className={`bg-tertiary absolute top-1/2 -translate-y-1/2 w-12 aspect-square cursor-pointer opacity-0 scale-0 rotate-45 rounded-tr-3xl left-[calc(100%-1.5rem)] transition-all duration-100 ease-in-out group-hover:opacity-100 group-hover:scale-100`}
      >
        <MenuToggler
          setCollapsed={setCollapsed}
          Icon={
            <MdOutlineKeyboardDoubleArrowLeft
              className={`w-1/2 h-1/2 mx-auto ${
                collapsed ? "rotate-[135deg]" : "-rotate-[45deg]"
              }`}
            />
          }
        />
      </div>
    </aside>
  );
}
