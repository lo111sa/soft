import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Loader from "./components/loader/Loader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense>
    <App />
  </Suspense>
);
