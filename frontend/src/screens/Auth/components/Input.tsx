import { forwardRef } from "react";
import { FieldError, Path, UseFormRegister } from "react-hook-form";

export interface IFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required?:
    | {
        value: boolean;
        message: string;
      }
    | boolean;
  minLength?:
    | {
        value: number;
        message: string;
      }
    | number;
  error: FieldError | undefined;
  validate?: (value: string | undefined) => boolean | string;

  type: "text" | "email" | "password";
};

const Input = forwardRef(function Input(
  { label, register, required, minLength, error, validate, type }: InputProps,
  ref
) {
  return (
    <div className="flex flex-col gap-4">
      <div className="form-control flex flex-col gap-3">
        <label className="label">
          <span className="label-text">
            {label.toUpperCase()[0] + label.substring(1)}
          </span>
        </label>
        <input
          type={type}
          {...register(label, {
            required,
            minLength,
            validate,
          })}
          placeholder={label.toLowerCase()}
          className="input input-bordered"
          required
        />
      </div>
      {error && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error?.message}</span>
        </div>
      )}
    </div>
  );
});

export default Input;
