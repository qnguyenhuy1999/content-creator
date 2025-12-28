import React from "react";
import { createRoot } from "react-dom/client";
import DemoApp from "./demo/App";
import "./styles/global.css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <DemoApp />
    </React.StrictMode>
  );
}
