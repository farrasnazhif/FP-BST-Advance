import React from "react";
import Button from "../Atoms/Button";
import InputForm from "../Atoms/FormInput";

const handleRegister = (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const confirmPassword = event.target.confirmPassword.value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  window.location.href = "/";
};

const FormRegister = () => {
  return (
    <form onSubmit={handleRegister}>
      <InputForm
        label="username"
        type="text"
        placeholder="Insert your username"
        name="username"
      />
      <InputForm
        label="email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="password"
        type="password"
        placeholder="********"
        name="password"
      />
      <InputForm
        label="confirm password"
        type="password"
        placeholder="********"
        name="confirmPassword"
      />
      <Button classname="bg-cyan-500 w-full" type="submit">Register</Button>
    </form>
  );
};

export default FormRegister;
