import { SelectProps } from "../interfaces";

const Select = ({
  htmlFor,
  name,
  disabled = false,
  required,
  placeholder,
  options,
  label,
  onChange,
  extraClass,
}: SelectProps) => {
  return (
    <label
      className="flex text-black rounded-3xl py-0.5 w-full flex-col"
      htmlFor={htmlFor}
      data-testid="select-label"
    >
      {label && (
        <span className="text-left p-2 font-semibold" data-testid="select-caption">
          {label}
        </span>
      )}
      <span className="w-full" data-testid="select-wrapper">
        <select
          className={`text-black p-2 rounded-3xl ${
            extraClass ? extraClass : ""
          }`}
          name={name}
          id={htmlFor}
          disabled={disabled}
          required={required}
          onChange={onChange}
          value={name}
        >
          <option value={placeholder} disabled className="text-black" selected>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option
              key={`${option.currencyCode}-${index}`}
              value={option.currencyCode}
            >
              {option.currencyCode}
            </option>
          ))}
        </select>
      </span>
    </label>
  );
};

export default Select;
