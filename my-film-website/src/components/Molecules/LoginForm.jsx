import React, { useState, useEffect } from "react";
import Button from "../Atoms/Button";
import InputForm from "../Atoms/FormInput";

const handleLogin = (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    window.location.href = "/movies";
  } else {
    alert("Invalid username or password.");
  }
};

const LoginForm = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');

    if (!storedUsername || !storedEmail) {
      setShowWarning(true);
    }
  }, []);

  return (
    <>
      {showWarning && (
        <div className="bg-red-600 text-brandWhite p-2 mb-4 rounded">
          You don't have an account yet, please register first.
        </div>
      )}
      <form onSubmit={handleLogin}>
        <InputForm
          label="username"
          type="text"
          placeholder="your username"
          name="username"
        />
        <InputForm
          label="password"
          type="password"
          placeholder="********"
          name="password"
        />
        <Button classname="bg-cyan-500 w-full" type="submit">Login</Button>
      </form>
    </>
  );
};

export default LoginForm;
