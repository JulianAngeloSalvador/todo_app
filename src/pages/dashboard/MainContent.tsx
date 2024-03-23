// import MenuToggler from "../../components/dashboard/MenuToggler";
// import { useMenuToggler } from "../../routes/Dashboard";
import { MainProps } from "../../utils/interface";

export default function MainContent(props: MainProps) {
  const { title, body } = props;
  // const { collapsed, setCollapsed } = useMenuToggler();

  return (
    <section className="flex-grow flex-shrink-0">
      <header
        // className={`border-b-2 p-4 flex items-center ${collapsed && "gap-x-2"}`}
        className={`border-b-2 p-4 flex items-center `}
      >
        {/* <div className={!collapsed ? "scale-0 hidden" : "scale-100"}>
          <MenuToggler setCollapsed={setCollapsed} />
        </div> */}
        <h2 className="text-title ">{title}</h2>
      </header>
      {body}
    </section>
  );
}
