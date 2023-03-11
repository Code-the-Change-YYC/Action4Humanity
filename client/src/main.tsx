import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { TRPCContext } from "./trpc";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TRPCContext>
      <App />
    </TRPCContext>
  </React.StrictMode>
);
