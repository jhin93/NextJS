import Layout from "../components/Layout";
import "../styles/globals.css"

// nextJS는 _app.js를 가장 먼저 확인한 후, index.js나 about.js같은 페이지들을 확인한다.

export default function App({Component, pageProps}) {
    return (
        <Layout>  
            <Component {...pageProps} />
        </Layout>
    )
}

// 글로벌 앱 컴포넌트는 무조건 _app.js이다.
// NextJS는 Aboutus 컴포넌트를 렌더링할 때 위의 Component인자에 Aboutus를 대입해서 리턴한 값을 불러온다.