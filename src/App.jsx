import { useEffect, lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import ModalComponent from "./components/ModalComponent";
const Registry = lazy(() => import("./pages/registry/Registry"));
const Login = lazy(() => import("./pages/auth/Login"));

import { useAuthStore } from "./store/authStore";

function App() {
  const auth = useAuthStore();

  useEffect(() => {
    auth.checkAuth();
  }, []);

  const authRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  const authedRoute = createBrowserRouter([
    {
      path: "/",
      element: <Registry />,
    },
  ]);
  return (
    <>
      {auth?.isAuth ? <Header /> : null}
      <RouterProvider router={auth?.isAuth ? authedRoute : authRoute} />
      <ToastContainer position="top-center" autoClose={1500} />
      <ModalComponent />
    </>
  );
}

export default App;
