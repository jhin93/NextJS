import { FieldError, FieldErrors, useForm } from 'react-hook-form';

// Better Errors (set, clear, display)
// Have control over inputs


interface LoginForm {
    username: string;
    password: string;
    email: string;
}

export default function Forms() {
    const {register, handleSubmit} = useForm<LoginForm>();
    const onValid = (data:LoginForm) => {
        console.log("i'm valid")
    }
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors);
    }
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
                validate: { // validate 메소드 사용.
                    // gmail을 사용하지 않는 이메일에(! 발동)를 value를 포함시킨다. 에러타입이 notGmail. 
                    notGmail: (value) => !value.includes("@gmail.com") || "Gmail is not Allowed",  
                }
            })} type="email" placeholder="email"/>
            <input {...register("password", {
                required: "Password is required"
            })} type="password" placeholder="password"/>
            <input type="submit" value="Create Account" />
        </form>
    )
}