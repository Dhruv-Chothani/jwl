import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { getRouter } from "./router";

const router = getRouter();

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <router.Router />
  </StrictMode>
);
