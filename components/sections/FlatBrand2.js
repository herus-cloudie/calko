

import Carousel5 from '../slider/Carousel5'

export default function FlatBrand2() {
    return (
        <>
            <section className="flat-brand home2 tf-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Trusted by over 150+ major companies</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                            </div>
                            <div className="swiper-container carousel-5">
                                <Carousel5 />
                            </div>
                            <div className="swiper-container carousel-5">
                                <Carousel5 />
                            </div>
                            <div className="swiper-container carousel-5">
                                <Carousel5 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
