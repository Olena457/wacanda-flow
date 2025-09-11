const Button = ({ text, icon, className }) => {
  return (
    <button
      className={`flex items-center gap-2 px-5 py-3 rounded-xl text-[18px] transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <span>{text}</span>
      {icon && <img src={icon} alt="Icon" className="neon-button" />}
    </button>
  );
};

export default Button;
