import Layout from "@/components/layout/Layout"

import FlatAgents2 from "@/components/sections/FlatAgents2"
import FlatBlog2 from "@/components/sections/FlatBlog2"
import FlatBrand2 from "@/components/sections/FlatBrand2"
import FlatEstateNear2 from "@/components/sections/FlatEstateNear2"
import FlatFeatured2 from "@/components/sections/FlatFeatured2"
import FlatFindNeighborhood2 from "@/components/sections/FlatFindNeighborhood2"
import FlatMeet2 from "@/components/sections/FlatMeet2"
import FlatRent2 from "@/components/sections/FlatRent2"
import FlatSale2 from "@/components/sections/FlatSale2"
import FlatTestimonial2 from "@/components/sections/FlatTestimonial2"
import Slider2 from "@/components/sections/Slider2"
import TfSection2 from "@/components/sections/TfSection2"
export default function Home2() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={1}>
                <Slider2 />
                <FlatFeatured2 />
                <FlatFindNeighborhood2 />
                <FlatEstateNear2 />
                <TfSection2 />
                <FlatSale2 />
                <FlatMeet2 />
                <FlatTestimonial2 />
                <FlatRent2 />
                <FlatBrand2 />
                <FlatAgents2 />
                <FlatBlog2 />
            </Layout>
        </>
    )
}