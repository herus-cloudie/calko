import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AddClassBody() {
    const router = useRouter()

    useEffect(() => {
        document.querySelector("body").classList.add("body")
        router.pathname === "/" ? document.querySelector("body").classList.add("counter-scroll") : null
        router.pathname === "/pricing" ? document.querySelector("body").classList.add("counter-scroll") : null
        router.pathname === "/dashboard" ? document.querySelector("body").classList.add("counter-scroll", "dashboard", "show") : null
        router.pathname === "/dashboard-profile" ? document.querySelector("body").classList.add("dashboard", "show") : null
        router.pathname === "/dashboard-properties" ? document.querySelector("body").classList.add("dashboard", "show") : null
        router.pathname === "/dashboard-review" ? document.querySelector("body").classList.add("dashboard", "show") : null

    })
}
