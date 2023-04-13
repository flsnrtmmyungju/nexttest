import Link from "next/link";
import { useRouter } from "next/router"
import styles from "./NavBar.module.css"

export default function NavBar() {
    const router = useRouter()
    return <nav className={styles.nav}>
        {/* 추천하진 않지만 style 사용하는 방법 */}
        {/* <Link href="/" style={{ color: router.pathname === "/" ? 'red' : 'blue' }}>home</Link> */}
        <Link href="/" style={{ color: router.pathname === "/" ? 'red' : 'blue' }}>home</Link>
        <Link href="/about" style={{ color: router.pathname === "/" ? 'blue' : 'red' }}>about</Link>
    </nav>
}