import Link from "next/link";
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter()
    return <nav >
        {/* 추천하진 않지만 style 사용하는 방법 */}
        {/* <Link href="/" style={{ color: router.pathname === "/" ? 'red' : 'blue' }}>home</Link> */}
        <Link href="/" ><span className={router.pathname === "/" ? "active" : '' }  >home</span></Link>
        <Link href="/about">about</Link>
        <style jsx>{`
            nav{ background-color : tomato;
            }        
            .active{
                text-decoration: none;
                color:yellow;
            }
        
         `}</style>
    </nav>
}