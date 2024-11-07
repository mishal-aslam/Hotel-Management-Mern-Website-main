import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button2 from "../shared/Button2";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault();
    const user = { username, password };
    console.log("Customer logged in successfully:", user);
  }

  return (
    <div className="bg-[#232323] flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-[#333333] shadow-md rounded-md p-6">
          <img
            className="mx-auto h-12 w-auto"
            src="https://www.svgrepo.com/show/499664/user-happy.svg"
            alt="User Icon"
          />
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-white/80">
            Welcome back!
          </h2>

          <form className="space-y-6" onSubmit={login} method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white/80">
                Customer Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">
                  Remember me
                </label>
              </div>

              <Link to="/forgot-password" className="text-sm font-medium text-red-600 hover:text-red-500">
                Forgot password?
              </Link>
            </div>

            <div className="flex w-full justify-center py-2 px-4 text-sm shadow-sm hover:bg-opacity-75">
              <Button2 text="Log in" onClick={login} />
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-white/80">
            Don’t have an account?{" "}
            <Link to="/register" className="font-medium text-red-600 hover:text-red-500">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
