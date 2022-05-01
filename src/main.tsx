import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { TimerProvider } from "context";
import { Router } from "routes";

import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <TimerProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </TimerProvider>
  </StrictMode>
);
