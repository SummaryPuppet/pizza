import { IInputProps } from "@/types/inputprops";
import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import InputError from "./InputError";

type FormValues = {};

const Input = forwardRef<
  IInputProps,
  { label: string } & ReturnType<UseFormRegister<FormValues>>
>(({ label, error, register, ...restInputProps }, ref) => {
  return (
    <div className="flex flex-col xl:gap-4">
      <label className="form-control flex flex-col">
        <div className="label">
          <span className="label-text">
            {label.toUpperCase()[0] + label.substring(1)}
          </span>
        </div>
        <input className="input input-bordered" ref={ref} {...restInputProps} />
      </label>
      {error && <InputError text={error?.message!} />}
    </div>
  );
});

export default Input;
