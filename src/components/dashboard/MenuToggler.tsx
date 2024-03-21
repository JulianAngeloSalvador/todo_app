import { MenuState } from "../../utils/interface";

export default function MenuToggler(props: MenuState) {
  const { setCollapsed } = props;

  const handleMenuState = () => {
    setCollapsed((prevState) => !prevState);
  };
  return (
    <button
      onClick={handleMenuState}
      className="w-8 aspect-square bg-tertiary rounded-md"
    />
  );
}
