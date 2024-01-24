import { TextareaHTMLAttributes, forwardRef } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import InputError from "./InputError";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: FieldError | undefined;
}

type FormValues = {};

const TextArea = forwardRef<
  Props,
  { label: string } & ReturnType<UseFormRegister<FormValues>>
>(({ label, error, ...restTextAreaProps }, ref) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="form-control flex flex-col">
        <div className="label">
          <span className="label-text">
            {label.toUpperCase()[0] + label.substring(1)}
          </span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24 resize-none"
          ref={ref}
          {...restTextAreaProps}
        ></textarea>
      </label>
      {error && <InputError text={error?.message!} />}
    </div>
  );
});

export default TextArea;
