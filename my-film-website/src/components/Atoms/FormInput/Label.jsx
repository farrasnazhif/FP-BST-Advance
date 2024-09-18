const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor="htmlFor" className="block text-slate-100 text-sm font-sm mb-2">
       {children}
    </label>
  );
};

export default Label;