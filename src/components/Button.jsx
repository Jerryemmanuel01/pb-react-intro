const Button = ({ children, type, action, variant}) => {
  const styles = {
    blue: "bg-blue-500 text-red-500",
    red: "bg-red-500",
    green: "bg-green-500",
    outline: "border"
  };
  return (
    <button
      type={type}
      onClick={action ? action : ""}
      className={`${styles[variant]}  px-6 h-10 rounded-lg `}
    >
      {children}
    </button>
  );
};

export default Button;
