import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { TRPCContext } from "./contexts/trpc";
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TRPCContext>
      <UserAuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserAuthContextProvider>
    </TRPCContext>
  </React.StrictMode>
)
