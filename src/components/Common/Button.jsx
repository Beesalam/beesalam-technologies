function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-gradient-to-r from-orange-500 to-yellow-400 text-white hover:scale-105",
    secondary:
      "border border-orange-500 text-white hover:bg-orange-500 hover:text-white",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;