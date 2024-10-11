import Layout from "@/components/layout/Layout"
import FlatBlog4 from "@/components/sections/FlatBlog4"
import FlatBrand4 from "@/components/sections/FlatBrand4"
import FlatContact4 from "@/components/sections/FlatContact4"
import FlatContact5 from "@/components/sections/FlatContact5"
import FlatDiscover4 from "@/components/sections/FlatDiscover4"
import FlatExplore4 from "@/components/sections/FlatExplore4"
import FlatIcon5 from "@/components/sections/FlatIcon5"
import FlatMeet4 from "@/components/sections/FlatMeet4"
import FlatSale4 from "@/components/sections/FlatSale4"
import FlatSearchToday4 from "@/components/sections/FlatSearchToday4"
import FlatWhyChoose4 from "@/components/sections/FlatWhyChoose4"
import Slider4 from "@/components/sections/Slider4"
export default function Home() {

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