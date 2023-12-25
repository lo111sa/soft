import axios from "../../axios";
import React, { useEffect } from "react";
import { useAuthStore } from "../../store/authStore";

const Login = () => {
  const auth = useAuthStore();

  console.log(auth.user, auth.isAuth);
  return (
    <div>
      <button
        className="border"
        onClick={() => auth.login({ username: "admin", password: "admin" })}
      >
        Login
      </button>

      <button className="border" onClick={() => auth.logout()}>
        logout
      </button>
    </div>
  );
};

export default Login;
