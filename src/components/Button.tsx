import { ButtonProps } from "../interfaces";

const Button = ({
  onChange,
  children,
  disabled = false,
  extraClass,
  isSubmit,
}: ButtonProps) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      disabled={disabled}
      className={`text-black py-1.5 px-4 rounded ${
        extraClass && extraClass
      }`}
      onClick={onChange}
    > 

      {children}
    </button>
  );
};

export default Button;
