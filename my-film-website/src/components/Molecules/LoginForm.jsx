import Button from "../Atoms/Button";
import InputForm from "../Atoms/FormInput";

const handleLogin = (event) => {
  event.preventDefault();
  localStorage.setItem('email', event.target.email.value);
  localStorage.setItem('password', event.target.password.value);
  window.location.href = "/products";
};

const LoginForm = () => {
  return (
    <form onSubmit={handleLogin}>
      <InputForm 
        label="email"
        type="email" 
        placeholder="example@mail.come" 
        name="email"
      />
      
      <InputForm 
        label="password" 
        type="password"
        placeholder="********" 
        name="password"
      />
      
      <Button classname="bg-cyan-500 w-full" type="submit">Login</Button>
    </form>

  );
};

export default LoginForm;