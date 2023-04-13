import { useRouter } from "next/router"
                        //소문자쓰면 에러
export default function Detail() { 
    const router = useRouter();

    console.log('router',router.query)


   return"Detail"


}