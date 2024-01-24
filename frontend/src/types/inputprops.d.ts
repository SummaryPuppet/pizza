import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegister<IFormValues>;
  error?: FieldError | undefined;
}
