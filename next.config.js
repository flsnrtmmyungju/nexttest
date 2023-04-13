/** @type {import('next').NextConfig} */
//여기수정하면 서버 껏다가다시켜야함-> 이제자동 서버재실행됨
const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*", //여기로들어오면 
        destination: "/new-sexy-blog/:path*", //여기로 보낸다
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",//이렇게 들어오면
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,//이렇게 보내지만 표시는 안되게
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
