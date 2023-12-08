import { ChangeEvent } from "react";
interface Props {
  id: string;
  defaultChecked: boolean;
  onChange: (checked: boolean) => void;
}

export default function Check({ id, defaultChecked, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <input
      type="checkbox"
      id={id}
      checked={defaultChecked}
      onChange={handleChange}
    />
  );
}
