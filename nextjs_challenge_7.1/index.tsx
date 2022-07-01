import { useForm, FieldErrors } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm<LoginForm>({
    mode: "onChange"
  });
  const onValid = (data: LoginForm) => {
    setError("errors", { message: "Thank you" });
    reset();
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      {/* Name */}
      Name:
      <input
        {...register("username", {
          required: "Please write down your name"
        })}
        type="text"
      />
      {errors.username?.message}
      <br />
      {/* Email */}
      Email:
      <input
        {...register("email", {
          required: "Please write down your Email",
          validate: {
            notGmail: (value) =>
              value.includes("@naver.com") || "Only @naver emails Allowed"
          }
        })}
        type="email"
        placeholder="Only @naver.com"
      />
      {errors.email?.message}
      <br />
      {/* Password */}
      Password:
      <input
        {...register("password", {
          required: "Please write down your Password",
          minLength: {
            message: "Password has to be more than 10 chars",
            value: 10
          }
        })}
        type="password"
        placeholder="Min 10 characters"
      />
      {errors.password?.message}
      <br />
      <input type="submit" value="Create Account" />
      {errors.errors?.message}
    </form>
  );
}
