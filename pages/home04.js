import Layout from "@/components/layout/Layout"
import FlatBlog4 from "@/components/sections/FlatBlog4"
import FlatBrand4 from "@/components/sections/FlatBrand4"
import FlatContact4 from "@/components/sections/FlatContact4"
import FlatDiscover4 from "@/components/sections/FlatDiscover4"
import FlatExplore4 from "@/components/sections/FlatExplore4"
import FlatMeet4 from "@/components/sections/FlatMeet4"
import FlatSale4 from "@/components/sections/FlatSale4"
import FlatSearchToday4 from "@/components/sections/FlatSearchToday4"
import FlatWhyChoose4 from "@/components/sections/FlatWhyChoose4"
import Slider4 from "@/components/sections/Slider4"
export default function Home4() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Slider4 />
                <FlatExplore4 />
                <FlatDiscover4 />
                <FlatSale4 />
                <FlatWhyChoose4 />
                <FlatContact4 />
                <FlatBrand4 />
                <FlatBlog4 />
            </Layout>
        </>
    )
}