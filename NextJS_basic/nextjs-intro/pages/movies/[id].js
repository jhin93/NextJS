
import { useRouter } from "next/router"


// url에 변수를 넣는 방법 (dynamic url)
// path 폴더 내부에 [변수].js 생성
// [] 내부에 쓴 변수의 이름이 router의 query에 그대로 나타난다.
export default function Detail() {
    const router = useRouter();
    console.log(router);
    return "detail"
}