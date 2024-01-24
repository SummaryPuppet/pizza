import { IInputProps } from "@/types/inputprops";
import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import InputError from "./InputError";

type FormValues = {};

const FileInput = forwardRef<
  IInputProps,
  { label: string } & ReturnType<UseFormRegister<FormValues>>
>(({ label, error, ...restInputProps }, ref) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="form-control flex flex-col">
        <div className="label">
          <span className="label-text">
            {label.toUpperCase()[0] + label.substring(1)}
          </span>
        </div>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
          ref={ref}
          {...restInputProps}
        />
      </label>
      {error && <InputError text={error?.message!} />}
    </div>
  );
});

export default FileInput;
