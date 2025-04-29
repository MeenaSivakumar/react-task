import { ButtonProps } from "./Button.types";

export const Button = ({ label, color, onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick}  style={{ color: color}}>
        {label}
      </button>
    </div>
  );
};
