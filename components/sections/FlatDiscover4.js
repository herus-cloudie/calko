

import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
};

export default function FlatDiscover4() {
    return (
        <>
            <section className="flat-discover wg-dream home4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Discover the latest real estate</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                            </div>
                            <div className="swiper-container2">
                                <Swiper {...swiperOptions} className="one-carousel">
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream hv-one">
                                            <div className="image-group relative ">
                                                <span className="featured fs-12 fw-6">Featured</span>
                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                    <div className="swiper-wrapper ">
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-21.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-2.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-3.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-4.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-5.jpg" alt="images" /></div>
                                                    </div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                    <div className="swiper-button-next2 "><i className="fal fa-arrow-right" /></div>
                                                    <div className="swiper-button-prev2 "><i className="fal fa-arrow-left" /> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box flex">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="days-box flex justify-space align-center">
                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-1.jpg" alt="images" /></div>
                                                    <div className="days">3 years ago</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream hv-one">
                                            <div className="image-group relative ">
                                                <span className="featured fs-12 fw-6">Featured</span>
                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                    <div className="swiper-wrapper ">
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-22.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-12.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-13.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-14.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-15.jpg" alt="images" /></div>
                                                    </div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                    <div className="swiper-button-next2 "><i className="fal fa-arrow-right" /></div>
                                                    <div className="swiper-button-prev2 "><i className="fal fa-arrow-left" /> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box flex">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="days-box flex justify-space align-center">
                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-2.jpg" alt="images" /></div>
                                                    <div className="days">3 years ago</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream hv-one">
                                            <div className="image-group relative ">
                                                <span className="featured fs-12 fw-6">Featured</span>
                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                    <div className="swiper-wrapper ">
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-23.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-7.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-8.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-9.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-5.jpg" alt="images" /></div>
                                                    </div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                    <div className="swiper-button-next2 "><i className="fal fa-arrow-right" /></div>
                                                    <div className="swiper-button-prev2 "><i className="fal fa-arrow-left" /> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box flex">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="days-box flex justify-space align-center">
                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-3.jpg" alt="images" /></div>
                                                    <div className="days">3 years ago</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item ">
                                        <div className="box box-dream hv-one">
                                            <div className="image-group relative ">
                                                <span className="featured fs-12 fw-6">Featured</span>
                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                    <div className="swiper-wrapper ">
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-21.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-2.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-3.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-4.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-5.jpg" alt="images" /></div>
                                                    </div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                    <div className="swiper-button-next2 "><i className="fal fa-arrow-right" /></div>
                                                    <div className="swiper-button-prev2 "><i className="fal fa-arrow-left" /> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box flex">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="days-box flex justify-space align-center">
                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-4.jpg" alt="images" /></div>
                                                    <div className="days">3 years ago</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item ">
                                        <div className="box box-dream hv-one">
                                            <div className="image-group relative ">
                                                <span className="featured fs-12 fw-6">Featured</span>
                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                    <div className="swiper-wrapper ">
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-22.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-12.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-13.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-14.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-15.jpg" alt="images" /></div>
                                                    </div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                    <div className="swiper-button-next2 "><i className="fal fa-arrow-right" /></div>
                                                    <div className="swiper-button-prev2 "><i className="fal fa-arrow-left" /> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box flex">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="days-box flex justify-space align-center">
                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-5.jpg" alt="images" /></div>
                                                    <div className="days">3 years ago</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item ">
                                        <div className="box box-dream hv-one">
                                            <div className="image-group relative ">
                                                <span className="featured fs-12 fw-6">Featured</span>
                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                    <div className="swiper-wrapper ">
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-23.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-2.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-3.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-4.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-5.jpg" alt="images" /></div>
                                                    </div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                    <div className="swiper-button-next2 "><i className="fal fa-arrow-right" /></div>
                                                    <div className="swiper-button-prev2 "><i className="fal fa-arrow-left" /> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box flex">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="days-box flex justify-space align-center">
                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-6.jpg" alt="images" /></div>
                                                    <div className="days">3 years ago</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item ">
                                        <div className="box box-dream hv-one">
                                            <div className="image-group relative ">
                                                <span className="featured fs-12 fw-6">Featured</span>
                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                    <div className="swiper-wrapper ">
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-21.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-22.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-10.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-14.jpg" alt="images" /></div>
                                                        <div className="swiper-slide"><img src="/assets/images/house/featured-15.jpg" alt="images" /></div>
                                                    </div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                    <div className="swiper-button-next2 "><i className="fal fa-arrow-right" /></div>
                                                    <div className="swiper-button-prev2 "><i className="fal fa-arrow-left" /> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box flex">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="days-box flex justify-space align-center">
                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-7.jpg" alt="images" /></div>
                                                    <div className="days">3 years ago</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
