

import Link from 'next/link';
import { useState } from 'react';
import Carousel2 from '../slider/Carousel2';

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
    },

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
            slidesPerView: 2,
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

export default function FlatFeatured52() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <section className="flat-featured wg-dream home2 home4 home5-two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Our most potential real estate</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                            </div>
                            <div className="flat-tabs themesflat-tabs">
                                <div className="box-tab center">
                                    <ul className="menu-tab tab-title flex justify-center">
                                        <li className={activeIndex == 1 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="7 Property" onClick={() => handleOnClick(1)}>
                                            <h5 className="inner ">For Sale</h5>
                                        </li>
                                        <li className={activeIndex == 2 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="4 Property" onClick={() => handleOnClick(2)}>
                                            <h5 className="inner "> For Rent </h5>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content-tab">
                                    <div className="content-inner tab-content" style={{ display: `${activeIndex == 1 ? "block" : "none"}` }}>
                                        <div className="swiper-container2 ">
                                            <Swiper {...swiperOptions} className="sponsors-carousel">
                                                <SwiperSlide className="slide-item">
                                                    <div className="box box-dream hv-one">
                                                        <div className="image-group relative ">
                                                            <span className="featured fs-12 fw-6">Featured</span>
                                                            <span className="featured style fs-12 fw-6">For sale</span>
                                                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                            <div className="swiper-container noo carousel-2 img-style h-100">
                                                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                <Carousel2 start={6} end={10} />
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
                                                {/* col 2 */}
                                                <SwiperSlide className="slide-item">
                                                    <div className="box box-dream hv-one">
                                                        <div className="image-group relative ">
                                                            <span className="featured fs-12 fw-6">Featured</span>
                                                            <span className="featured style fs-12 fw-6">For sale</span>
                                                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                            <div className="swiper-container noo carousel-2 img-style h-100">
                                                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                <Carousel2 start={7} end={11} />
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
                                                {/* col 3 */}
                                                <SwiperSlide className="slide-item">
                                                    <div className="box box-dream hv-one">
                                                        <div className="image-group relative ">
                                                            <span className="featured fs-12 fw-6">Featured</span>
                                                            <span className="featured style fs-12 fw-6">For sale</span>
                                                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                            <div className="swiper-container noo carousel-2 img-style h-100">
                                                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                <Carousel2 start={8} end={12} />
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
                                                {/* col 4 */}
                                                <SwiperSlide className="slide-item">
                                                    <div className="box box-dream hv-one">
                                                        <div className="image-group relative ">
                                                            <span className="featured fs-12 fw-6">Featured</span>
                                                            <span className="featured style fs-12 fw-6">For sale</span>
                                                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                            <div className="swiper-container noo carousel-2 img-style h-100">
                                                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                <Carousel2 start={9} end={13} />
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
                                                {/* col 5 */}
                                                <SwiperSlide className="slide-item">
                                                    <div className="box box-dream hv-one">
                                                        <div className="image-group relative ">
                                                            <span className="featured fs-12 fw-6">Featured</span>
                                                            <span className="featured style fs-12 fw-6">For sale</span>
                                                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                            <div className="swiper-container noo carousel-2 img-style h-100">
                                                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                <Carousel2 start={10} end={14} />
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
                                                {/* col 6 */}
                                                <SwiperSlide className="slide-item">
                                                    <div className="box box-dream hv-one">
                                                        <div className="image-group relative ">
                                                            <span className="featured fs-12 fw-6">Featured</span>
                                                            <span className="featured style fs-12 fw-6">For sale</span>
                                                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                            <div className="swiper-container noo carousel-2 img-style h-100">
                                                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                <Carousel2 start={11} end={15} />
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
                                                {/* col 7 */}
                                                <SwiperSlide className="slide-item">
                                                    <div className="box box-dream hv-one">
                                                        <div className="image-group relative ">
                                                            <span className="featured fs-12 fw-6">Featured</span>
                                                            <span className="featured style fs-12 fw-6">For sale</span>
                                                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                            <div className="swiper-container noo carousel-2 img-style h-100">
                                                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                <Carousel2 start={12} end={16} />
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
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className="content-inner tab-content" style={{ display: `${activeIndex == 2 ? "block" : "none"}` }}>
                                        <div className="swiper-container ">
                                            <Swiper {...swiperOptions} className="sponsors-carousel">
                                                <SwiperSlide className="slide-item">
                                                    <div className="box box-dream hv-one">
                                                        <div className="image-group relative ">
                                                            <span className="featured fs-12 fw-6">Featured</span>
                                                            <span className="featured style fs-12 fw-6">For sale</span>
                                                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                            <div className="swiper-container noo carousel-2 img-style h-100">
                                                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                <Carousel2 start={13} end={17} />
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
                                                {/* col 2 */}
                                                <SwiperSlide className="slide-item">
                                                    <div className="box box-dream hv-one">
                                                        <div className="image-group relative ">
                                                            <span className="featured fs-12 fw-6">Featured</span>
                                                            <span className="featured style fs-12 fw-6">For sale</span>
                                                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                            <div className="swiper-container noo carousel-2 img-style h-100">
                                                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                <Carousel2 start={14} end={18} />
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
                                                {/* col 3 */}
                                                <SwiperSlide className="slide-item">
                                                    <div className="box box-dream hv-one">
                                                        <div className="image-group relative ">
                                                            <span className="featured fs-12 fw-6">Featured</span>
                                                            <span className="featured style fs-12 fw-6">For sale</span>
                                                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                            <div className="swiper-container noo carousel-2 img-style h-100">
                                                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                <Carousel2 start={15} end={19} />
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
                                                {/* col 4 */}
                                                <SwiperSlide className="slide-item">
                                                    <div className="box box-dream hv-one">
                                                        <div className="image-group relative ">
                                                            <span className="featured fs-12 fw-6">Featured</span>
                                                            <span className="featured style fs-12 fw-6">For sale</span>
                                                            <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                            <div className="swiper-container noo carousel-2 img-style h-100">
                                                                <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                <Carousel2 start={16} end={20} />
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
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
