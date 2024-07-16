import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

async function deferRender() {
  const { worker } = await import("./mocks/browser.js");
  if (process.env.NODE_ENV === "development") {
    await worker.start();
  }
}
deferRender().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
