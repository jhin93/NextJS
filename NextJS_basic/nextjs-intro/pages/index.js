import { useEffect, useState } from "react";
import Seo from "../components/Seo"

export default function Home({ results }) {
    
    return (
        <div className="container">
          <Seo title="Home" />
          {results?.map((movie) => (
            <div className="movie" key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <h4>{movie.original_title}</h4>
            </div>
          ))}
          <style jsx>{`
            .container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              padding: 20px;
              gap: 20px;
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

// 아래의 코드는 page가 유저에게 보여지기 전에 props를 받아오는 function을 만드는 것

// getServerSideProps는 서버에서 실행된다.
// 무엇을 리턴하든지, 그것을 props로써 page에게 준다.
// server side를 통해 props를 page로 보낼 수 있다는 것. 이게 가능한 것은 _app.js에 pageProps가 있기 때문.
// nextJS가 백엔드에서 받아온 props를 리턴해서 페이지에 가져다 주면, reactJS가 props를 가져와서 result array를 뽑아주는 것.

// NextJS는 _app.js의 App에 1번째 인자로 index의 'Home'을 넣고, 이후에 getServerSideProps를 호출한다. 호출의 결과로 props가 리턴되고, 이를 _app.js의 pageProps에 넣는다.
// 이 결과는 function Home({results} 의 results로 나타난다. movies를 results로 대체. 이제 index 페이지는 서버사이드에서 render된다.

// 항상 서버 사이드 렌더링을 하려는가? 즉, 데이터가 유효할 때 화면이 보여지게 되는게 좋은가?
// 또는 loading 화면을 보여준 다음에 데이터를 받는게 좋은가?
// 선택의 문제이다.

export async function getServerSideProps() { // 이름이 중요하다. 여기에 작성하는 코드는 client쪽이 아니라 server쪽에서만 작동한다.
    // api를 여기에 작성하면 client에게 보이지 않는다.
    // object를 리턴하고, object 안에는 props라는 key가 들어있다.
    // props안에는 원하는 데이터를 아무거나 넣을 수 있다.
    const { results } = await (
      await fetch(`http://localhost:3000/api/movies`)
    ).json();
    return {
      props: {
        results,
      },
    };
}
