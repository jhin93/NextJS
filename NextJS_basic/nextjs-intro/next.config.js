/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // 유저가 contact로 간다고 하면, 리다이렉션은 유저를 form이라는 destination으로 보낸다.
        // 이 리다이렉션이 영구적인 지에 따라 브라우저나 검색엔진이 이 정보를 기억하는지 여부가 결정됨.
        // next.config.js가 바뀌면 서버를 다시 구동해야 한다.
        // 시연 결과 : 주소창에 http://localhost:3000/contact 입력 후 엔터 -> http://localhost:3000/form 로 이동

        source:"/old-blog/:path*",
        destination:"/new-sexy-blog/:path*",
        permanent:false
        
        // source:"/old-blog/:path",
        // destination:"/new-sexy-blog/:path",
        // 시연 결과 : http://localhost:3000/old-blog/122112 -> http://localhost:3000/new-sexy-blog/122112

        // source:"/old-blog/:path*",
        // destination:"/new-sexy-blog/:path*",
        // 시연 결과 : http://localhost:3000/old-blog/1212/comments/1212 -> http://localhost:3000/new-sexy-blog/1212/comments/1212
        // 시연 해석 :path*의 * 부분이 1212/comments/1212를 그대로 유지시켜준다.

      },
      // redirects를 하나 더 만드려면 아래와 같이 객체를 추가한다.
      // {
      //   source
      // }
    ]
  },
  async rewrites() {
    // rewrites는 유저를 redirect시키기는 하지만, url은 변하지 않는다.
    return [
      {
        source: "/api/movies", // url은 그대로 유지하면서 api_key를 노출하지 않는다. 그러면서 데이터는 다 받아온다.
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        // 시연 결과 : "/api/movies"를 입력하면 주소창은 변화가 없는데 api 키 데이터를 화면에 다 받아옴. 원래는 url 뒤에 destination 처럼 뭐가 붙었었음
      },
      {
        source: "/api/movies/:id", // source에 :id라고 입력했다면 destination에도 동일하게 적용
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
  }
}

module.exports = nextConfig
