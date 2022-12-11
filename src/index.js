import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from 'redux-persist/integration/react';
// import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
