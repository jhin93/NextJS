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
    const {register, handleSubmit} = useForm(); // handleSubmit은 인자로 2개 또는 1개의 함수를 받는다(1개 필수). handleSubmit은 2개의 함수를 받는다.
    // 첫번째 함수는 form이 유효할때만 실행되는 함수. 두번째 함수는 form이 유효하지 않을때 실행되는 함수
    const onValid = () => {
        console.log("i'm valid")
    }
    // 직접 만든 함수를 handleSubmit에 넣어 호출하면 또다른 함수를 리턴. 이 리턴한 함수가 바로 form에 사용할 함수
    return ( // 직접 만든 함수를 handleSubmit에 넣어 호출하면 또다른 함수를 리턴. 이 리턴한 함수가 바로 form에 사용할 함수
        <form onSubmit={handleSubmit(onValid)}>
            {/* ...register가 input의 이름을 인수로 받고, onChange, eventListner, value.. 등의 속성을 알아서 처리해준다. */}
            <input {...register("username", {
                required: true
            })} type="text" placeholder="Username" minLength={5}/> 
            <input {...register("email", {
                required: true
            })} type="email" placeholder="email"/>
            <input {...register("password", {
                required: true
            })} type="password" placeholder="password"/>
            <input type="submit" value="Create Account" />
        </form>
    )
}