import { useState } from "react";

import "./styles.css";

export default function Toggle({ label, toggled, onClick }) {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label>
      <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
      <span></span>
      <strong>{label}</strong>
    </label>
  );
}
