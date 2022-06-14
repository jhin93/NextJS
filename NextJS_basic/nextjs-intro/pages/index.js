import {useState} from "react";

export default function Home() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>Hello {counter}</h1>
            <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
        </div>
    );
}

// nextjs는 react와 달리<div id="root">가 아닌 html을 보여준다. react가 <div id="root">를 풀어헤칠때까지 기다릴 필요가 없다는 것
// 그리고 react가 발동되서 로직들이 작동한다.