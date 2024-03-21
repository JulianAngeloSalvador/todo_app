import { Outlet, useOutletContext } from "react-router-dom";
import Sidenav from "../components/dashboard/Sidenav";
import { useState } from "react";
import { MenuState } from "../utils/interface";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section className="bg-primary min-h-dvh flex">
      <Sidenav collapsed={collapsed} setCollapsed={setCollapsed} />
      <Outlet context={{ collapsed, setCollapsed } satisfies MenuState} />
    </section>
  );
}

export function useMenuToggler() {
  return useOutletContext<MenuState>();
}
