import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Toggle from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const logState = (state) => {
  console.log("Toggled:", state);
};

root.render(
  <StrictMode>
    <Toggle label="Toggle me" toggled={true} onClick={logState} />
  </StrictMode>
);
