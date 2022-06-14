import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            {/* Link는 a태그의 대체제이다. href를 쓸때 사용한다. */}
            {/* router에 훅을 걸어서 사용할 수 있다. router.pathname 이런 식으로. router의 속성은 console.log로 확인 가능*/}
            <Link href="/"> 
                <a style={{color: router.pathname === "/" ? "red" : "blue"}}>Home</a> 
            </Link>
            <Link href="/about">
                <a style={{color: router.pathname === "/about" ? "red" : "blue"}}>About</a>
            </Link>
        </nav>
    )
}