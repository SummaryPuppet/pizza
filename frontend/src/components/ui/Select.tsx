import { SelectHTMLAttributes, forwardRef } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import InputError from "./InputError";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
}

type FormValues = {};

const Select = forwardRef<
  Props,
  { label: string } & ReturnType<UseFormRegister<FormValues>>
>(({ label, error, register, children, ...restInputProps }, ref) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="form-control flex flex-col">
        <div className="label">
          <span className="label-text">
            {label.toUpperCase()[0] + label.substring(1)}
          </span>
        </div>
        <select
          className="select select-bordered"
          ref={ref}
          {...restInputProps}
        >
          {children}
        </select>
      </label>
      {error && <InputError text={error?.message!} />}
    </div>
  );
});

export default Select;
