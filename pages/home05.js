import Layout from "@/components/layout/Layout"
import FlatBrand5 from "@/components/sections/FlatBrand5"
import FlatContact5 from "@/components/sections/FlatContact5"
import FlatContact52 from "@/components/sections/FlatContact52"
import FlatFeatured5 from "@/components/sections/FlatFeatured5"
import FlatFeatured52 from "@/components/sections/FlatFeatured52"
import FlatFindNeighborhood5 from "@/components/sections/FlatFindNeighborhood5"
import FlatFindNeighborhood52 from "@/components/sections/FlatFindNeighborhood52"
import FlatIcon5 from "@/components/sections/FlatIcon5"
import FlatPricing5 from "@/components/sections/FlatPricing5"
import FlatRent5 from "@/components/sections/FlatRent5"
import FlatSale5 from "@/components/sections/FlatSale5"
import FlatTestimonial5 from "@/components/sections/FlatTestimonial5"
import Slider5 from "@/components/sections/Slider5"
export default function Home5() {

    return (
        <>

            <Layout headerStyle={5} footerStyle={1}>
                <Slider5 />
                <FlatFeatured5 />
                <FlatRent5 />
                <FlatFindNeighborhood5 />
                <FlatSale5 />
                <FlatIcon5 />
                <FlatFindNeighborhood52 />
                <FlatFeatured52 />
                <FlatContact5 />
                <FlatTestimonial5 />
                <FlatBrand5 />
                <FlatPricing5 />
                <FlatContact52 />
            </Layout>
        </>
    )
}