import Layout from "@/components/layout/Layout"
import FlatBlog3 from "@/components/sections/FlatBlog3"
import FlatBrand3 from "@/components/sections/FlatBrand3"
import FlatContact3 from "@/components/sections/FlatContact3"
import FlatFeatured3 from "@/components/sections/FlatFeatured3"
import FlatSale3 from "@/components/sections/FlatSale3"
import FlatSearchHome3 from "@/components/sections/FlatSearchHome3"
import FlatSliderHome3 from "@/components/sections/FlatSliderHome3"
import FlatTestimonial3 from "@/components/sections/FlatTestimonial3"
import FlatWhyChoose3 from "@/components/sections/FlatWhyChoose3"
import FlatYour3 from "@/components/sections/FlatYour3"
import Slider3 from "@/components/sections/Slider3"
export default function Home3() {

    return (
        <>

            <Layout headerStyle={3} footerStyle={1}>
                <Slider3 />
                <FlatFeatured3 />
                <FlatYour3 />
                <FlatSale3 />
                <FlatSearchHome3 />
                <FlatSliderHome3 />
                <FlatWhyChoose3 />
                <FlatBrand3 />
                <FlatTestimonial3 />
                <FlatBlog3 />
                <FlatContact3 />
            </Layout>
        </>
    )
}