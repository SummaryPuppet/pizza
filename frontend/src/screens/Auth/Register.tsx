import Input from "@/components/ui/Input";
import SubmitButton from "@/components/ui/SubmitButton";
import { useAuth } from "@/contexts/Auth";
import FormLayout from "@/layouts/FormLayout";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IFormValues } from "./components/Input";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();
  const { signup } = useAuth();

  const password = watch("password", "");

  const onSubmit = handleSubmit(async (data) => {
    const { username, email, password } = data;
    try {
      await signup({ username, email, password });
      // const response = await fetch("http://localhost:3000/register/", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     username,
      //     email,
      //     password,
      //   }),
      // });
      // console.log(response);

      // if (!response.ok) return new Error("Error from server");

      // const data = await response.json();

      reset();
    } catch (error: any) {
      console.error(error);
    }
  });

  return (
    <FormLayout title="Register" onSubmit={onSubmit}>
      <Input
        label="username"
        type="text"
        register={register}
        error={errors.username}
        {...register("username", {
          required: { value: true, message: "Username is require" },
          minLength: 4,
        })}
      />
      <Input
        label="email"
        type="email"
        register={register}
        error={errors.email}
        {...register("email", {
          required: { value: true, message: "Email is require" },
        })}
      />
      <Input
        label="password"
        type="password"
        register={register}
        error={errors.password}
        {...register("password", {
          required: true,
          minLength: {
            value: 6,
            message: "The password must be greater than 8 characters",
          },
        })}
      />
      <Input
        label="confirmPassword"
        type="password"
        register={register}
        error={errors.confirmPassword}
        {...register("confirmPassword", {
          validate: (value) => value == password || "Passwords don't match",
          required: { value: true, message: "" },
          minLength: {
            value: 6,
            message: "The password must be greater than 8 characters",
          },
        })}
      />

      <SubmitButton>Register</SubmitButton>
      <Link to={"/login"} className="link mt-2">
        Alredy registered?
      </Link>
    </FormLayout>
  );
}

export default Register;
