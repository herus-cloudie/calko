import Layout from "@/components/layout/Layout"
import FlatBlog1 from "@/components/sections/FlatBlog1"
import FlatBrand1 from "@/components/sections/FlatBrand1"
import FlatContact1 from "@/components/sections/FlatContact1"
import FlatFeatured1 from "@/components/sections/FlatFeatured1"
import FlatMeet1 from "@/components/sections/FlatMeet1"
import FlatRent1 from "@/components/sections/FlatRent1"
import FlatSale1 from "@/components/sections/FlatSale1"
import FlatSearchArea1 from "@/components/sections/FlatSearchArea1"
import Slider1 from "@/components/sections/Slider1"
import TfSection1 from "@/components/sections/TfSection1"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <Slider1 />
                <FlatBrand1 />
                <FlatFeatured1 />
                <FlatSearchArea1 />
                <FlatSale1 />
                <FlatRent1 />
                <FlatMeet1 />
                <FlatContact1 />
                <FlatBlog1 />
                <TfSection1 />
            </Layout>
        </>
    )
}