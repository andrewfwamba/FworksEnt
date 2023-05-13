import React from "react";
import Header from "../components/Heading";
import Login from "../components/Login";

function LoginPage() {
  return (
    <>
      <div className="w-full h-screen bg-slate-300">
        <nav className="h-14 px-10 py-4 bg-slate-900">
          <h3 className="dark:text-gray-100">Fireworks Entertainment</h3>
        </nav>
        <div className="mt-10">
          <Header
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/signup"
          />
          <Login />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
