import axios from "../../axios";
import React, { useEffect } from "react";
import { useAuthStore } from "../../store/authStore";

const Login = () => {
  const auth = useAuthStore();

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

      <button
        className="border"
        onClick={() => console.log(auth.user, { auth: auth.isAuth })}
      >
        check
      </button>
    </div>
  );
};

export default Login;
