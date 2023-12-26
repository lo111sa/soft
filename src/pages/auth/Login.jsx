import React, { useState } from "react";
import { useAuthStore } from "../../store/authStore";

import Input from "../../components/UI/Input";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const auth = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    await auth.login(data);
  };

  if (auth.isLoading) return <Loader />;

  return (
    <div
      onSubmit={handleSubmit}
      className="h-screen flex items-center justify-center bg-slate-300"
    >
      <form className="w-full md:w-[420px] md:h-[330px]  flex flex-col justify-center items-center gap-y-5 shadow-xl p-5 mx-3 bg-white rounded-xl">
        <h1 className="text-2xl">ავტორიზაცია</h1>
        <div className="w-full md:w-3/4 flex flex-col gap-y-7">
          <Input
            value={username}
            placeholder="მომხმარებლის სახელი"
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            label="მომხმარებელი"
            className="bg-white w-100"
          />

          <Input
            value={password}
            placeholder="შეიყვანეთ პაროლი"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label="პაროლი"
            className="bg-white w-100"
          />
        </div>
        <span className="text-sm text-center text-red-500">{}</span>
        <button variant="contained" type="submit" className="w-1/2 mt-3">
          შესვლა
        </button>
      </form>
    </div>
  );
};

export default Login;
