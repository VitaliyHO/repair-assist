import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
