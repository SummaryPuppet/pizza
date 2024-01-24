import { Themes } from "@/contexts/Theme";

interface Props {
  label: string;
  value: Themes;
  onChange: (value: Themes) => void;
}

function ThemeControllerItem({ label, value, onChange }: Props) {
  return (
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
        aria-label={label}
        value={value}
        onChange={(_) => onChange(value)}
      />
    </li>
  );
}

export default ThemeControllerItem;
