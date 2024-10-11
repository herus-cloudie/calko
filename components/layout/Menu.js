import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}
            <ul className="navigation clearfix">
                <li className="dropdown2"><Link href="#">Home</Link>
                    <ul>
                        <li  className={router.pathname == "/" ? "current" : ""}><Link href="/">Home Page 01</Link></li>
                        <li className={router.pathname == "/home02" ? "current" : ""}><Link href="/home02">Home Page 02</Link></li>
                        <li className={router.pathname == "/home03" ? "current" : ""}><Link href="/home03">Home Page 03</Link></li>
                        <li className={router.pathname == "/home04" ? "current" : ""}><Link href="/home04">Home Page 04</Link></li>
                        <li className={router.pathname == "/home05" ? "current" : ""}><Link href="/home05">Home Page 05</Link></li>
                    </ul>
                </li>
                <li className="dropdown2"><Link href="#">Property</Link>
                    <ul>
                        <li className="dropdown2"><Link href="#">Property List</Link>
                            <ul>
                                <li className={router.pathname == "/properties-list" ? "current" : ""}><Link href="/properties-list">Property List</Link></li>
                                <li className={router.pathname == "/properties-list-sidebar-v1" ? "current" : ""}><Link href="/properties-list-sidebar-v1">Property List Sidebar V1</Link></li>
                                <li className={router.pathname == "/properties-list-sidebar-v2" ? "current" : ""}><Link href="/properties-list-sidebar-v2">Property List Sidebar V2</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown2"><Link href="#">Property Grid</Link>
                            <ul>
                                <li className={router.pathname == "/properties-grid" ? "current" : ""}><Link href="/properties-grid">Property Grid</Link></li>
                                <li className={router.pathname == "/properties-grid-sidebar-v1" ? "current" : ""}><Link href="/properties-grid-sidebar-v1">Property Grid Sidebar V1</Link></li>
                                <li className={router.pathname == "/properties-grid-sidebar-v2" ? "current" : ""}><Link href="/properties-grid-sidebar-v2">Property Grid Sidebar V2</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown2"><Link href="#">Property Detail</Link>
                            <ul>
                                <li className={router.pathname == "/property-detail-v1" ? "current" : ""}><Link href="/property-detail-v1">Property Detail V1</Link></li>
                                <li className={router.pathname == "/property-detail-v2" ? "current" : ""}><Link href="/property-detail-v2">Property Detail V2</Link></li>
                                <li className={router.pathname == "/property-detail-v3" ? "current" : ""}><Link href="/property-detail-v3">Property Detail V3</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown2"><Link href="#">Property Map</Link>
                            <ul>
                                <li className={router.pathname == "/properties-map-v1" ? "current" : ""}><Link href="/properties-map-v1">Property Half Map V1</Link></li>
                                <li className={router.pathname == "/properties-map-v2" ? "current" : ""}><Link href="/properties-map-v2">Property Half Map V2</Link></li>
                                <li className={router.pathname == "/properties-map-v3" ? "current" : ""}><Link href="/properties-map-v3">Property Half Map V3</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown2"><Link href="#">Page</Link>
                    <ul>
                        <li className={router.pathname == "/about" ? "current" : ""}><Link href="/about">About Us</Link></li>
                        <li className={router.pathname == "/faq" ? "current" : ""}><Link href="/faq">Faq's</Link></li>
                        <li className={router.pathname == "/pricing" ? "current" : ""}><Link href="/pricing">Pricing</Link></li>
                        <li className={router.pathname == "/error" ? "current" : ""}><Link href="/error">Error</Link></li>
                        <li className="dropdown2"><Link href="#">Agents</Link>
                            <ul>
                                <li className={router.pathname == "/agents" ? "current" : ""}><Link href="/agents">Agents</Link></li>
                                <li className={router.pathname == "/agents-detail" ? "current" : ""}><Link href="/agents-detail">Agents Details</Link></li>
                                <li className={router.pathname == "/agents-sidebar-v1" ? "current" : ""}><Link href="/agents-sidebar-v1">Agents Sidebar V1</Link></li>
                                <li className={router.pathname == "/agents-sidebar-v2" ? "current" : ""}><Link href="/agents-sidebar-v2">Agents Sidebar V2</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown2"><Link href="#">Agencies</Link>
                            <ul>
                                <li className={router.pathname == "/agencies" ? "current" : ""}><Link href="/agencies">Agencies</Link></li>
                                <li className={router.pathname == "/agencies-detail" ? "current" : ""}><Link href="/agencies-detail">Agencies Detail</Link></li>
                                <li className={router.pathname == "/agencies-sidebar-v1" ? "current" : ""}><Link href="/agencies-sidebar-v1">Agencies Sidebar V1</Link></li>
                                <li className={router.pathname == "/agencies-sidebar-v2" ? "current" : ""}><Link href="/agencies-sidebar-v2">Agencies Sidebar V2</Link></li>
                            </ul>
                        </li>
                        <li className={router.pathname == "/" ? "current" : ""}><Link href="/dashboard">Dashboard</Link></li>
                    </ul>
                </li>
                <li className="dropdown2"><Link href="#">Blog</Link>
                    <ul>
                        <li className={router.pathname == "/blog" ? "current" : ""}><Link href="/blog">Blog List</Link></li>
                        <li className={router.pathname == "/blog-grid" ? "current" : ""}><Link href="/blog-grid">Blog Grid</Link></li>
                        <li className={router.pathname == "/blog-detail" ? "current" : ""}><Link href="/blog-detail">Blog Detail</Link></li>
                    </ul>
                </li>
                <li className={router.pathname == "/contact" ? "current" : ""}><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
