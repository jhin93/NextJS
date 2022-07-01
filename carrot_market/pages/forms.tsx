import { useForm } from 'react-hook-form';

// 해결 Less code 
// Better validation
// Better Errors (set, clear, display)
// Have control over inputs
// 해결 Don't deal with events
// 해결 Easier Inputs

export default function Forms() {
    // 모든건 useForm으로부터 나온다.
    // input들을 전부 state에 '등록'하기 위해선 register 함수를 사용한다
    // watch : input에 입력한 값을 브라우저에서 확인할 수 있다.
    const {register, watch} = useForm();
    console.log(watch())
    return (
        <form>
            {/* ...register가 input의 이름을 인수로 받고, onChange, eventListner, value.. 등의 속성을 알아서 처리해준다. */}
            <input {...register("username")} type="text" placeholder="Username" required minLength={5}/> 
            <input {...register("email")} type="email" placeholder="email" required/>
            <input {...register("password")} type="password" placeholder="password" required/>
            <input type="submit" value="Create Account" />
        </form>
    )
}