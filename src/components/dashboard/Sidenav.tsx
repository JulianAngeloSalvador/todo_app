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
      <div className="bg-tertiary absolute -right-4 top-1/2 -translate-y-1/2 w-8 aspect-square rounded-full grid place-items-center outline-3 outline-secondary hover:outline cursor-pointer opacity-0 group-hover:opacity-100">
        <MenuToggler
          setCollapsed={setCollapsed}
          Icon={
            <MdOutlineKeyboardDoubleArrowLeft
              className={`w-3/4 h-3/4  mx-auto ${
                collapsed ? "rotate-180" : "rotate-360"
              }`}
            />
          }
        />
      </div>
    </aside>
  );
}
