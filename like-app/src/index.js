import React from "react";
import { createRoot } from "react-dom/client";
import Like from "./components/Like";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Like />);
