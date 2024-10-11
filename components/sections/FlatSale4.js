

import OneCarousel from '../slider/OneCarousel'

export default function FlatSale4() {
    return (
        <>
            <section className="flat-sale wg-dream tf-section home4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center style2">
                                <h2>Properties for sale</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                            </div>
                            <div className="swiper-container2">
                                <OneCarousel />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
