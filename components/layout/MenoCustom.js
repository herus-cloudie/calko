import Link from "next/link"
import { useRouter } from "next/router"

export default function MenuCustom() {
    const router = useRouter()

    return (
        <div>
            <ul className="navigation clearfix">
                <li className="dropdown2"><Link href="#">دسته بندی ها</Link>
                    <ul>
                        <li  className={router.pathname == "/" ? "current" : ""}><Link href="/">لوازم خانگی</Link></li>
                        <li className={router.pathname == "/home02" ? "current" : ""}><Link href="/home02">صنعت بیمه</Link></li>
                        <li className={router.pathname == "/home03" ? "current" : ""}><Link href="/home03">تفریحات</Link></li>
                    </ul>
                </li>
                <li><Link href="#">فروشگاه ها</Link></li>
                <li><Link href="#">درباره ی ما</Link> </li>
                <li><Link href="#">همکاری با ما</Link></li>
                <li className={router.pathname == "/contact" ? "current" : ""}><Link href="/contact">جستجوی پیشرفته</Link></li>
                <li className={router.pathname == "/contact" ? "current" : ""}><Link href="/contact">تماس با ما</Link></li>
                <li className={router.pathname == "/contact" ? "current" : ""}><Link href="/contact" style={{marginRight : '20px'}}> پکیج های تخفیفی سازمانی</Link></li>
            </ul>
        </div>
    )
}
