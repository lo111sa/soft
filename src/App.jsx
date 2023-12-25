import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import ModalComponent from "./components/ModalComponent";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/auth/Login";
import Registry from "./pages/registry/Registry";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Registry />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <ToastContainer position="top-center" autoClose={1500} />
      <ModalComponent />
    </>
  );
}

export default App;
