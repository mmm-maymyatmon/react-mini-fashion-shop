type ButtonProps = {
  children: React.ReactNode;
};
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-[#4bc0dd] to-[#56e5f7] text-white px-6 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition duration-200 transform hover:scale-105 hover:shadow-lg z-20">
      {children}
    </button>
  );
};

export default Button;
