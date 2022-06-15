/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source:"/old-blog/:path*",
        destination:"/new-sexy-blog/:path*",
        permanent:false
        // 유저가 contact로 간다고 하면, 리다이렉션은 유저를 form이라는 destination으로 보낸다.
        // 이 리다이렉션이 영구적인 지에 따라 브라우저나 검색엔진이 이 정보를 기억하는지 여부가 결정됨.
        // next.config.js가 바뀌면 서버를 다시 구동해야 한다.
        // 시연 결과 : http://localhost:3000/contact -> http://localhost:3000/form
        
        // source:"/old-blog/:path",
        // destination:"/new-sexy-blog/:path",
        // 시연 결과 : http://localhost:3000/old-blog/122112 -> http://localhost:3000/old-blog/122112

        // source:"/old-blog/:path*",
        // destination:"/new-sexy-blog/:path*",
        // 시연 결과 : http://localhost:3000/old-blog/1212/comments/1212 -> http://localhost:3000/new-sexy-blog/1212/comments/1212

      }
    ]
  }
}

module.exports = nextConfig
