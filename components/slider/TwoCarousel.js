

import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel2 from './Carousel2';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 4,
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
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
};

export default function TwoCarousel() {
    return (
        <>
            <Swiper {...swiperOptions} className="two-carousel">
                <SwiperSlide className="slide-item">
                    <div className="box box-dream hv-one">
                        <div className="image-group relative ">
                            <span className="featured fs-12 fw-6">Featured</span>
                            <span className="featured style fs-12 fw-6">For sale</span>
                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                            <div className="swiper-container carousel-2 img-style">
                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                <Carousel2 start={1} end={4} />
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
                                <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-12.jpg" alt="images" /></div>
                                <div className="days">3 years ago</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="box box-dream hv-one">
                        <div className="image-group relative">
                            <span className="featured fs-12 fw-6">Featured</span>
                            <span className="featured style fs-12 fw-6">For sale</span>
                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                            <div className="swiper-container  carousel-2 img-style">
                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                <Carousel2 start={2} end={5} />
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
                                <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-13.jpg" alt="images" /></div>
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
                            <div className="swiper-container  carousel-2 img-style">
                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                <Carousel2 start={3} end={6} />
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
                                <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-14.jpg" alt="images" /></div>
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
                            <div className="swiper-container  carousel-2 img-style">
                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                <Carousel2 start={4} end={7} />
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
                                <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-15.jpg" alt="images" /></div>
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
                            <div className="swiper-container  carousel-2 img-style">
                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                <Carousel2 start={5} end={8} />
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
                <SwiperSlide className="slide-item">
                    <div className="box box-dream hv-one">
                        <div className="image-group relative ">
                            <span className="featured fs-12 fw-6">Featured</span>
                            <span className="featured style fs-12 fw-6">For sale</span>
                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                            <div className="swiper-container  carousel-2 img-style">
                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                <Carousel2 start={6} end={9} />
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
                            <div className="swiper-container  carousel-2 img-style">
                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                <Carousel2 start={7} end={10} />
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
                            <div className="swiper-container  carousel-2 img-style">
                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                <Carousel2 start={8} end={11} />
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
                                <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-12.jpg" alt="images" /></div>
                                <div className="days">3 years ago</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="box box-dream hv-one">
                        <div className="image-group relative">
                            <span className="featured fs-12 fw-6">Featured</span>
                            <span className="featured style fs-12 fw-6">For sale</span>
                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                            <div className="swiper-container  carousel-2 img-style">
                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                <Carousel2 start={9} end={12} />
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
                                <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-13.jpg" alt="images" /></div>
                                <div className="days">3 years ago</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
