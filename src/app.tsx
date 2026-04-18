import { getRouter } from "./router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const router = getRouter();

const App = () => {
  return <router.Router />;
};

export default App;
