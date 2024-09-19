import { Link } from "react-router-dom";

//layout awal / layout website //
const DetailLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen pb-48">
      <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-cyan-500">{title}</h1>
          <p className="font-medium text-slate-100 mb-8">
            Welcome, Please enter your details
          </p>
          {children}
          <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({type}) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center text-slate-100">
          Don't have an account?
          <Link to="/Register" className="font-bold text-cyan-500"> Register</Link>
      </p>
    );
  }
  else {
    return (
      <p className="text-sm mt-5 text-center text-slate-100">
          Already have an account?
          <Link to="/Login" className="font-bold text-cyan-500"> Login</Link>
      </p>
    );
  };
}

export default DetailLayouts;
