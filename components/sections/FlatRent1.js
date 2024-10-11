

import Link from 'next/link'
import Carousel2 from '../slider/Carousel2'
import TwoCarousel from '../slider/TwoCarousel'

export default function FlatRent1() {
    return (
        <>
            <section className="flat-rent tf-section wg-dream dots-style">
                <div className="container3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Properties for rent</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                            </div>
                            <div className="swiper-container2">
                                <TwoCarousel/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
