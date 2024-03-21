import MenuToggler from "../../components/dashboard/MenuToggler";
import { useMenuToggler } from "../../routes/Dashboard";
import { MainProps } from "../../utils/interface";

export default function MainContent(props: MainProps) {
  const { title, body } = props;
  const { setCollapsed } = useMenuToggler();

  return (
    <section className="flex-grow flex-shrink-0">
      <header>
        <h2 className="border-b-2 text-title p-4">{title}</h2>
        <MenuToggler setCollapsed={setCollapsed} />
      </header>
      {body}
    </section>
  );
}
