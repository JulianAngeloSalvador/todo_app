import { MenuState } from "../../utils/interface";

export default function MenuToggler(props: MenuState) {
  const { setCollapsed, Icon } = props;

  const handleMenuState = () => {
    setCollapsed((prevState) => !prevState);
  };

  const DefaultIcon = () => (
    <>
      <div className="w-full h-0.5" />
      <div className="w-full h-0.5" />
      <div className="w-full h-0.5" />
    </>
  );
  return (
    <button
      onClick={handleMenuState}
      className={`rounded-md w-6 aspect-square bg-tertiary items-center ${
        !Icon && "justify-around children:bg-secondary flex flex-col p-1"
      }`}
    >
      {Icon || DefaultIcon()}
    </button>
  );
}
