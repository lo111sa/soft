import { useEffect, lazy, Suspense } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import ModalComponent from "./components/ModalComponent";
const Registry = lazy(() => import("./pages/registry/Registry"));
const Login = lazy(() => import("./pages/auth/Login"));

import { useAuthStore } from "./store/authStore";
import Loader from "./components/loader/Loader";
import Doctor from "./pages/doctor/Doctor";
import RegisterPatient from "./pages/registerPatient/RegisterPatient";

function App() {
  const auth = useAuthStore();

  useEffect(() => {
    auth.checkAuth();
  }, []);

  const registryRoute = createHashRouter([
    {
      path: "/",
      element: auth.isAuth ? <Registry /> : <Login />,
    },

    {
      path: "/register-patient",
      element: <RegisterPatient />,
    },
  ]);

  const doctorRoute = createHashRouter([
    {
      path: "/",
      element: auth.isAuth ? <Doctor /> : <Login />,
    },
  ]);

  return (
    <>
      {auth?.isAuth ? <Header /> : null}
      <RouterProvider
        router={auth.user?.position === "ექიმი" ? doctorRoute : registryRoute}
      />
      <ToastContainer position="top-center" autoClose={1500} />
      <ModalComponent />
    </>
  );
}

export default App;
