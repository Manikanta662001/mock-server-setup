import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux';
import store from "./store/store.js";

async function deferRender() {
  const { worker } = await import("./mocks/browser.js");
  if (process.env.NODE_ENV === "development") {
    await worker.start();
  }
}
deferRender().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
});
