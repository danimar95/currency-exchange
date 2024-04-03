import { InputProps } from "../interfaces";

const Input = ({
  placeholder,
  handleChange,
  value,
  extraClass,
  type,
}: InputProps) => {
  return (
    <input
      id="input"
      className={`border-black rounded-3xl px-4 py-2 w-full ${
        extraClass ? extraClass : ""
      }`}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};

export default Input;
