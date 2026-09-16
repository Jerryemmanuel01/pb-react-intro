const Input = ({
  type = "text",
  value,
  onChange,
  placeholder = "Enter Input",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border rounded-xl px-3 py-1 text-sm outline-none"
    />
  );
};

export default Input;
