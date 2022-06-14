

export default function Home() {
    return (
        <div>
            <h1 className="active">Hello</h1>
        </div>
    );
}

// nextjs는 react와 달리<div id="root">가 아닌 html을 보여준다. react가 <div id="root">를 풀어헤칠때까지 기다릴 필요가 없다는 것
// 그리고 react가 발동되서 로직들이 작동한다.