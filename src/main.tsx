import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Header from "./pages/Home.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <Header />
    </div>
  </StrictMode>
);
