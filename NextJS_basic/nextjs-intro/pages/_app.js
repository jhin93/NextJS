import Layout from "../components/Layout";
import "../styles/globals.css"

// nextJS는 _app.js를 가장 먼저 확인한 후, index.js나 about.js같은 페이지들을 확인한다.

export default function App({Component, pageProps}) { // Component, pageProps 이 두 인자는 쓰는 것이 nextJS가 정한 규칙이다.
    return (
        <Layout>  
            <Component {...pageProps} />
        </Layout>
    )
}

// 글로벌 앱 컴포넌트는 무조건 _app.js이다.
// 예시
// 1. NextJS는 About 페이지를 렌더링하길 원한다
// 2. NextJS가 작성된 about.js 파일로 가서 컴포넌트를 가져다가 Component인자에 대입한다.
// 3. return에 작성한 로직에 Component인자를 대입한 결과를 리턴한다.
//Aboutus 컴포넌트를 렌더링할 때 위의 Component인자에 Aboutus를 대입해서 리턴한 값을 불러온다.