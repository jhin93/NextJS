import { FieldError, FieldErrors, useForm } from 'react-hook-form';

// 해결 Less code 
// Better validation
// Better Errors (set, clear, display)
// Have control over inputs
// 해결 Don't deal with events
// 해결 Easier Inputs

interface LoginForm {
    username: string;
    password: string;
    email: string;
}

export default function Forms() {
    // 모든건 useForm으로부터 나온다.
    // input들을 전부 state에 '등록'하기 위해선 register 함수를 사용한다
    // watch : input에 입력한 값을 브라우저에서 확인할 수 있다.
    const {register, handleSubmit} = useForm<LoginForm>(); // handleSubmit은 인자로 2개 또는 1개의 함수를 받는다(1개 필수). handleSubmit은 2개의 함수를 받는다.
    // 첫번째 함수는 form이 유효할때만 실행되는 함수. 두번째 함수는 form이 유효하지 않을때 실행되는 함수
    const onValid = (data:LoginForm) => {
        console.log("i'm valid")
    }
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors);
    }
    // 직접 만든 함수를 handleSubmit에 넣어 호출하면 또다른 함수를 리턴. 이 리턴한 함수가 바로 form에 사용할 함수
    return ( // 직접 만든 함수를 handleSubmit에 넣어 호출하면 또다른 함수를 리턴. 이 리턴한 함수가 바로 form에 사용할 함수
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            {/* ...register가 input의 이름을 인수로 받고, onChange, eventListner, value.. 등의 속성을 알아서 처리해준다. */}
            <input {...register("username", {
                required: "Username is required",
                minLength: { // minLength : 5 라고 적어서 그냥 오류 메시지 출력 없이 만들 수도 있다.
                    message: "The username should be longer than 5 chars", // minLength 밸리데이션을 벗어날 때 보이는 메시지
                    value: 5 // 5자 이상 작성해야 한다는 밸리데이션.
                } // html에 직접 minLength를 입력하지 않고 register에 규칙으로 입력해놓는다. 그럼 콘솔에서 생성되는 객체로 확인할 수 있다(onInvalid). 만약 5자 이하일 경우, type:minLength라고 출련된다. 에러를 알려주는 것
            })} type="text" placeholder="Username"/> 
            <input {...register("email", {
                required: "Email is required"
            })} type="email" placeholder="email"/>
            <input {...register("password", {
                required: "Password is required"
            })} type="password" placeholder="password"/>
            <input type="submit" value="Create Account" />
        </form>
    )
}