import Input from "@/components/ui/Input";
import SubmitButton from "@/components/ui/SubmitButton";
import { useAuth } from "@/contexts/Auth";
import FormLayout from "@/layouts/FormLayout";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const { signin } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const { username, password } = data;
    try {
      await signin({ username, password });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormLayout title="Login" onSubmit={onSubmit}>
      <Input
        label="Usename"
        type="text"
        register={register}
        {...register("username")}
      />
      <Input
        label="password"
        type="password"
        register={register}
        {...register("password")}
      />

      <SubmitButton>Login</SubmitButton>

      <Link to={"/register"} className="link">
        register?
      </Link>
    </FormLayout>
  );
}

export default Login;
