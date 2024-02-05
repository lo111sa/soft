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
      className="h-screen flex items-center justify-center bg-gray-50"
    >
      <form className="w-full md:w-[420px] md:h-[330px]  flex flex-col justify-center items-center gap-y-5 shadow-xl p-3 mx-3 bg-white rounded-xl">
        <h1 className="text-2xl text-center pb-3 w-full border-b">
          ავტორიზაცია
        </h1>
        <div className="w-full md:w-3/4 flex flex-col gap-y-5">
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
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label="პაროლი"
            className="bg-white w-100"
          />
        </div>
        <span className="text-sm text-center text-red-500">
          {auth.error ? auth.error : null}
        </span>
        <button
          type="submit"
          className="text-white w-full md:w-3/4 font-bold px-8 py-2 rounded-lg bg-black"
        >
          შესვლა
        </button>
      </form>
    </div>
  );
};

export default Login;
