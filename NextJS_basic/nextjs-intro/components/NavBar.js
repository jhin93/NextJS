import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            {/* Link는 Nextjs에서 href를 사용할 수 있게 하는 규칙이다. */}
            {/* router에 훅을 걸어서 사용할 수 있다. router.pathname 이런 식으로. router의 속성은 console.log로 확인 가능*/}
            <img src="/vercel.svg" />
            <div>
                <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
                </Link>
                <Link href="/about">
                <a className={router.pathname === "/about" ? "active" : ""}>About</a>
                </Link>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
                {/* styled jsx는 컴포넌트로 범위를 한정시켜 클래스네임중복을 가능하게 해준다.
                아래 active를 index.js의 h1에 사용해도 h1이 노란색으로 변하지 않는다. */}
                .active {
                    color : tomato;
                }
            `}</style>
        </nav>
    )
}