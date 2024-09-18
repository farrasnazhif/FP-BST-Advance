import Button from "../Atoms/Button";
import InputForm from "../Atoms/FormInput";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm 
      label="fullname" 
      type="text" 
      placeholder="Insert your fullname" 
      name="fullname"
      />
      <InputForm 
      label="email" 
      type="email" 
      placeholder="example@mail.come" 
      name="email"
      />
      <InputForm l
      label="password" 
      type="password" 
      placeholder="********" 
      name="password"
      />
      <InputForm l
      label="confirm password" 
      type="password" 
      placeholder="********" 
      name="confirmPassword"
      />
      <Button classname="bg-cyan-500 w-full type=submit">Register</Button>
    </form>

  );
};

export default FormRegister;