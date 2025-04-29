import { ChangeEvent, ReactElement } from "react";

export interface InputFieldprops {
  type: "text" | "password" | "number";
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
