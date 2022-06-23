import { useRouter } from "next/router";
import Link from "next/link"
import Seo from "../components/Seo"

export default function Home({ results }) { // 3. 여기의 results는 아래의 getServerSideProps의 props이다. results가 형태가 객체이기에(props:{results}) 담겨있기에 구조분해해서({ results }) 인자로 사용한다.
    const router = useRouter();
    const onClick = (id, title) => {
      router.push(`/movies/${title}/${id}`);
    };
    return (
        <div className="container">
          <Seo title="Home" />
          {results?.map((movie) => (
              // 이미지 클릭시 라우터에 변수(영화 id) 대입.
              <div
                onClick={() => onClick(movie.id, movie.original_title)}
                className="movie"
                key={movie.id}
              >
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                {/* 제목 클릭시 라우터에 변수(영화 id) 대입 */}
                <h4>
                  <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                    <a>{movie.original_title}</a>
                  </Link>
                </h4>
              </div>
          ))}
          <style jsx>{`
            .container {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              padding: 20px;
              gap: 20px;
            }
            .movie {
              cursor: pointer;
            }
            .movie img {
              max-width: 100%;
              border-radius: 12px;
              transition: transform 0.2s ease-in-out;
              box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie:hover img {
              transform: scale(1.05) translateY(-10px);
            }
            .movie h4 {
              font-size: 18px;
              text-align: center;
            }
          `}</style>
        </div>
      );
}


// nextJS는 컴포넌트의 초기 state를 미리 렌더링(pre-rendering)해서 화면을 먼저 보여준다.실제 html소스코드는 로딩중. React.js의 처리(useEffect, useState, fetch..)후 영화정보를 state에 넣어서 유저가 화면에서 영화정보를 볼 수 있다.
// 만약 API가 느리다면 유저는 로딩중을 오래 보게 될 것.
// 만약 유저가 완전히 준비된 html을 보게 하고 싶다면, 이때 getServerSideProps를 사용.
// 백엔드에서만 일어나기에 API 키를 가져오거나 데이터를 가져오거나 할 수 있다. getServerSideProps라는 이름의 함수를 export 하기만 하면 됨.
// 하고 싶은 것을 하고, props를 리턴해주기만 하면 된다. 다만 api가 느리다면 유저는 아무것도 볼 수 없다.


// 아래의 코드는 page가 유저에게 보여지기 전에 props를 받아오는 function을 만드는 것

// getServerSideProps는 서버에서 실행된다.
// 무엇을 리턴하든지, 그것을 props로써 page에게 준다.
// server side를 통해 props를 page로 보낼 수 있다는 것. 이게 가능한 것은 _app.js에 pageProps가 있기 때문.
// nextJS가 백엔드에서 받아온 props를 리턴해서 페이지에 가져다 주면, reactJS가 props를 가져와서 result array를 뽑아주는 것.

// NextJS는 _app.js의 App에 1번째 인자로 index의 'Home'을 넣고, 이후에 getServerSideProps를 호출한다. 호출의 결과로 props가 리턴되고, 이를 _app.js의 pageProps에 넣는다.
// 이 결과는 function Home({results} 의 results로 나타난다. movies를 results로 대체. 이제 index 페이지는 서버사이드에서 render된다.


export async function getServerSideProps() { // 이름이 중요하다. 여기에 작성하는 코드는 client쪽이 아니라 server쪽에서만 작동한다.
    // api를 여기에 작성하면 client에게 보이지 않는다.
    // object를 리턴하고, object 안에는 props라는 key가 들어있다.
    // props안에는 원하는 데이터를 아무거나 넣을 수 있다.
    const { results } = await ( // 1. json 형태로 받아온 데이터를 구조분해로 results에 담는다.
      await fetch(`http://localhost:3000/api/movies`)
    ).json();
    return {
      props: { // 2. result를 객체로 감싼다. props를 객체로 정의하는 규칙 때문에 어쩔 수 없다.
        results,
      },
    };
}
