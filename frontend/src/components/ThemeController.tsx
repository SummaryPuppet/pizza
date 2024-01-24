import { useTheme } from "@/contexts/Theme";
import ArrowDown from "./icons/ArrowDown";
import Brush from "./icons/Brush";
import ThemeControllerItem from "./ui/ThemeControllerItem";

function ThemeController() {
  const { changeItem } = useTheme();
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        <Brush />
        <ArrowDown />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl"
      >
        <ThemeControllerItem
          label="Default"
          value="default"
          onChange={changeItem}
        />
        <ThemeControllerItem
          label="Retro"
          value="retro"
          onChange={changeItem}
        />
        <ThemeControllerItem
          label="Cyberpunk"
          value="cyberpunk"
          onChange={changeItem}
        />
        <ThemeControllerItem
          label="Valentine"
          value="valentine"
          onChange={changeItem}
        />
        <ThemeControllerItem label="Aqua" value="aqua" onChange={changeItem} />
        <ThemeControllerItem
          label="Natural"
          value="natural"
          onChange={changeItem}
        />
      </ul>
    </div>
  );
}

export default ThemeController;
