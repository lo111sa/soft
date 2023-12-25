import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import ModalComponent from "./components/ModalComponent";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/auth/Login";
import Registry from "./pages/registry/Registry";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";

function App() {
  const auth = useAuthStore();
  useEffect(() => {
    auth.checkAuth();
  }, []);
  console.log(auth.user, auth.isAuth);
  return (
    <>
      {auth.isAuth ? <Header /> : null}

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
