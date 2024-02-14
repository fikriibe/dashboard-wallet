import { FC } from "react";
import "./styles.css";

type Props = {
  checked: boolean;
  onChange: (status: boolean) => void;
};

const Checkbox: FC<Props> = ({ checked, onChange }) => {
  return (
    <div>
      <label className="container">
        <input
          checked={checked}
          type="checkbox"
          onChange={() => onChange(!checked)}
        />
        <div className="checkmark"></div>
      </label>
    </div>
  );
};

export default Checkbox;
