import { FieldError, FieldErrors, useForm } from 'react-hook-form';

// Better Errors (set, clear, display)
// Have control over inputs


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
        watch, // 하나의 필드를 관찰 가능
        formState : { errors }, // 에러를 객체로 만드는 메소드. 이게 있어야 setError 등 에러 관련 메소드를 쓸 수 있다.
        setError, // 에러를 의도한대로 설정 가능. 특정한 필드에만 설정할 수도 있다.
        setValue, // 값을 직접 수정하고 싶을 때 쓰는 메소드
        reset // form을 초기화하는 메소드
    } = useForm<LoginForm>({
        mode: "onChange"
    });
    const onValid = (data:LoginForm) => {
        console.log("i'm valid")
        setError("username", {message: "Taken username"}) // setError로 username에만 에러를 설정한 모습
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
            {errors.username?.message}
            <input {...register("email", {
                required: "Email is required",
                validate: {
                    notGmail: (value) => !value.includes("@gmail.com") || "Gmail is not Allowed",  
                }
            })} type="email" placeholder="email" className={`${Boolean(errors.email) ? "border-red-500" : ""}`}/>

            {errors.email?.message} {/* formState의 에러 중 email이 있다면 그것의 message를 브라우저에 찍는다. */}
            
            <input {...register("password", {
                required: "Password is required"
            })} type="password" placeholder="password"/>
            <input type="submit" value="Create Account" />
            {errors.errors?.message} {/* formState의 에러 중 errors가 있다면 그것의 message를 브라우저에 찍는다<div className=""></div> */}
        </form>
    )
}