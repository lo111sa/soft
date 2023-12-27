import { useEffect, lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import ModalComponent from "./components/ModalComponent";
const Registry = lazy(() => import("./pages/registry/Registry"));
const Login = lazy(() => import("./pages/auth/Login"));

import { useAuthStore } from "./store/authStore";
import Loader from "./components/loader/Loader";
import Doctor from "./pages/doctor/Doctor";

function App() {
  const auth = useAuthStore();

  useEffect(() => {
    auth.checkAuth();
  }, []);

  const registryRoute = createBrowserRouter([
    {
      path: "/",
      element: auth.isAuth ? <Registry /> : <Login />,
    },
  ]);

  const doctorRoute = createBrowserRouter([
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
