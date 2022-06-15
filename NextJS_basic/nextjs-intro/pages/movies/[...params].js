
import { useRouter } from "next/router"
import Seo from "../../components/Seo"

// url에 변수를 넣는 방법 (dynamic url)
// path 폴더 내부에 [변수].js 생성
// [] 내부에 쓴 변수의 이름이 router의 query에 그대로 나타난다.
export default function Detail({params}) {
    const router = useRouter();
    const [title, id] = params || []; // 서버에선 아직 router.query.params 가 배열이 아니기에 incognito 모드에선 에러가 날 수 있다. 그래서 그럴땐 빈배열로 대체한다
    console.log(router);
    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    );
}


export function getServerSideProps({params: { params }}) {
    return {
        props: {
            params
        },
    }
}