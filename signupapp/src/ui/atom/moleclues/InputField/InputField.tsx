import { InputFieldprops } from "./Input.types";

export const InputField = ({
  type,
  placeholder,
  onChange,
  value,
}: InputFieldprops) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
