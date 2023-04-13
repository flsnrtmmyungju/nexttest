import NavBar from "../components/NavBar"
//현재 파일이 글로벌 설정파일

//이내부에 글로벌 css파일 불러올수 있음 다른곳에서는 모듈.css만가능

export default function App({Component, pageProps}) {
    return (
        <>
        <NavBar />
        <Component {...pageProps} />   
        <style jsx global>{` 
          a {
            color:white;
            text-decoration: none;
          }
        `}
           
        </style>
       </>
    )
   
    
}