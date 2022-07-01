import { FieldError, FieldErrors, useForm } from 'react-hook-form';

// Better Errors (set, clear, display)
// Have control over inputs


interface LoginForm {
    username: string;
    password: string;
    email: string;
}

export default function Forms() {
    const {register, handleSubmit, formState : { errors }} = useForm<LoginForm>();
    const onValid = (data:LoginForm) => {
        console.log("i'm valid")
    }
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors);
    }
    // formState의 errors
    console.log(errors) 
    return ( 
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input {...register("username", {
                required: "Username is required",
                minLength: { 
                    message: "The username should be longer than 5 chars",
                    value: 5 
                } 
            })} type="text" placeholder="Username"/> 
            <input {...register("email", {
                required: "Email is required",
                validate: {
                    notGmail: (value) => !value.includes("@gmail.com") || "Gmail is not Allowed",  
                }
            })} type="email" placeholder="email"/>
            {errors.email?.message} {/* formState의 에러 중 email이 있다면 그것의 message를 브라우저에 찍는다. */}
            <input {...register("password", {
                required: "Password is required"
            })} type="password" placeholder="password"/>
            <input type="submit" value="Create Account" />
        </form>
    )
}