import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import LoginModal from "./LoginModal"
import PageHead from './PageHead'
import RegisterModal from "./RegisterModal"
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
import Header5 from "./header/Header5"

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)

    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
    };
    // Login
    const [isLogin, setLogin] = useState(false)
    const handleLogin = () => {
        setLogin(!isLogin)
        !isLogin ? document.body.classList.add("modal-open") : document.body.classList.remove("modal-open");
    };
    // Register
    const [isRegister, setRegister] = useState(false)
    const handleRegister = () => {
        setRegister(!isRegister)
        !isRegister ? document.body.classList.add("modal-open") : document.body.classList.remove("modal-open");
    };

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <PageHead headTitle={headTitle} />
            <div id="wrapper">
                <div id="pagee" className="clearfix">

                    {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleLogin={handleLogin} handleRegister={handleRegister} />}
                    {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleLogin={handleLogin} handleRegister={handleRegister} /> : null}
                    {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleLogin={handleLogin} handleRegister={handleRegister} /> : null}
                    {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleLogin={handleLogin} handleRegister={handleRegister} /> : null}
                    {headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleLogin={handleLogin} handleRegister={handleRegister} /> : null}
                    {headerStyle == 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleLogin={handleLogin} handleRegister={handleRegister} /> : null}
                    {/* <MobileMenu /> */}


                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                    {children}

                    {!footerStyle && < Footer1 />}
                    {footerStyle == 1 ? < Footer1 /> : null}
                    {footerStyle == 2 ? < Footer2 /> : null}
                </div>
            </div>
            <LoginModal isLogin={isLogin} handleLogin={handleLogin} />
            <RegisterModal isRegister={isRegister} handleRegister={handleRegister} />
            <BackToTop />

            
        </>
    )
}
