import { Link } from "react-router";

const Button = ({ to = "/", children, className = "", ...props }) => {
  return (
    <Link to={to}>
      <button
        className={`bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-full transition-all shadow-md ${className}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
