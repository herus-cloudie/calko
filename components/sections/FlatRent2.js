

import TwoCarousel from '../slider/TwoCarousel'

export default function FlatRent2() {
    return (
        <>
            <section className="flat-rent flat-are-interested wg-dream tf-section dots-style2">
                <div className="container3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Maybe you are interested</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                            </div>
                            <div className="swiper-container">
                                <TwoCarousel />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
