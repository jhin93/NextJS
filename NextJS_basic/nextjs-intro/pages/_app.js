import NavBar from "../components/NavBar";
import "../styles/globals.css"

export default function App({Component, pageProps}) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
        </>
    )
}

// 글로벌 앱 컴포넌트는 무조건 _app.js이다.
// NextJS는 Aboutus 컴포넌트를 렌더링할 때 위의 Component인자에 Aboutus를 대입해서 리턴한 값을 불러온다.