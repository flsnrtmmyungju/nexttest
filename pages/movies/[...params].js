import Seo from "@/components/components/Seo";
import { useRouter } from "next/router"
                        //소문자쓰면 에러
export default function Detail({ params }) {
    const router = useRouter();
    //이렇게하면 외부에서 url로 들어와도 에러안남
    //const [title,id] = router.query.params || [];위에 params받아오면 밑에처럼 쓰면됨
    const [title, id] = params || [];


    console.log('router',router)


   return <div>
    {/* <h4>{router.query.title || "LODING..."}</h4> */}
    <Seo title={title} />
    <h4>{title}</h4>
   </div>
}
//ssr 구현해서 빨리띄울수있다..소스에도 남는다
export function getServerSideProps({ params: { params } }) {
    return {
      props: {
        params,
      },
    };
  }