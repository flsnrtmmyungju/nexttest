import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  /*useState : 컴포넌트에서 상태를 관리하기 위해 사용
     호출시 배열이 반환되며, 첫 번째 요소는 현재 상태 값,두 번째 요소는 상태 값을 변경하는 함수
    ex//
       import { useState } from 'react';
      function Counter() {
        const [count, setCount] = useState(0);
        function handleClick() {
          setCount(count + 1);
        }
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
          </div>
        );
      }
    위 예제에서 useState(0)은 count 상태 변수를 생성하고 초기값을 0으로 설정.
    setCount 함수는 count 상태 변수를 변경.
     handleClick 함수가 실행될 때마다 count 값이 1씩 증가, 이에 따라 화면에 표시되는 텍스트도 변경. 
*/ //const [movies, setMovies] = useState();

  // useEffect: 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있음
  // 주로 외부 API 호출, 이벤트 구독/구독 해제, 타이머 설정 등에 사용
 // useEffect(() => { //1전째 인자인 함수 컴포넌트가 렌더링 될 때마다 실행
 //   (async () => {

  //    setMovies(results);
 //   })();
 // }, []); //두 번째 인자로 전달되는 배열은 dependencies라고 하며(현재 []),
         // 이 배열 안에 포함된 값이 변경될 때마다 useEffect 함수가 재실행
         //이부분 생략하면 useEffect 함수는 컴포넌트가 렌더링 될 때마다 실행.
    const router = useRouter();
    const onClick = (id,title) =>{
      //기본사용법
      //router.push(`/movies/${movie.id}`)
      //마스크해서 사용자가 정보못보게하는법 추가
      //router.push({//URL설정,정보 얹어주는 부분
      //    pathname: `/movies/${id}`,
       //   query:{ 
       //     title,
       //   },
       // },`/movies/${id}`); //마스크해서 사용자가 정보못보게  하는부분  
        // 브라우저에서 윗부분안보임  
        router.push(`/movies/${title}/${id}`);
    }

  return (
    <div className="container">
      <Seo title="Home" />

      {/* movies가 존재하는지확인후 없으면 1 있으면 2 실행 */}
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map((movie) => (
        // 기본 이동방식
        //<Link href={`/movies/${movie.id}`} key={movie.id}>
        //라우터 이동방식
        //<Link onClick={()=>onClick(movie.id,movie.original_title)}   href={`/movies/${movie.id}`} key={movie.id}>
        //라우터 이동하는 다른방식
        <Link onClick={()=>onClick(movie.id,movie.original_title)}     
            // href={{
            //   pathname: `/movies/${movie.id}`,
            //   query: {
            //     title: movie.original_title,
            //   },
            // }}
            // as={`/movies/${movie.id}`}   
            href={`/movies/${movie.original_title}/${movie.id}`}

            
            key={movie.id}
            className="movie" 
            >

        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
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
//서버사이드 렌더링하는 방법     //이이름은 고정
export async function getServerSideProps() {
  //data.results 이런식으로 들어오는것중에 결국 results만필요하니까 이런식으로씀
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}