

import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel2 from '../slider/Carousel2';

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

export default function TfSection2() {
    return (
        <>
            <section className="tf-section flat-properties-rent wg-dream bg-1 home2 dots-style2">
                <div className="container4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Properties for rent</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                            </div>
                            <div className="swiper-container">
                                <Swiper {...swiperOptions} className="four-carousel ">
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream flex hv-one">
                                            <div className="image-group relative  ">
                                                <span className="featured fs-12 fw-6">Featured</span>
                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100" data-chat="person1">
                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                    <Carousel2 start={2} end={6} />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="img-box flex justify-space align-center">
                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-20.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                    <a className="icon-repeat">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream flex  hv-one">
                                            <div className="image-group relative ">
                                                <span className="featured fs-12 fw-6">Featured</span>
                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100" data-chat="person1">
                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                    <Carousel2 start={3} end={7} />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="img-box flex justify-space align-center">
                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-21.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                    <a className="icon-repeat">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream flex hv-one">
                                            <div className="image-group relative  ">
                                                <span className="featured fs-12 fw-6">Featured</span>
                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                    <Carousel2 start={4} end={8} />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="img-box flex justify-space align-center">
                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-2.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                    <a className="icon-repeat">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream flex hv-one">
                                            <div className="image-group relative  ">
                                                <span className="featured fs-12 fw-6">Featured</span>
                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                    <Carousel2 start={5} end={9} />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="img-box flex justify-space align-center">
                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-20.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                    <a className="icon-repeat">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream flex  hv-one">
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
                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="img-box flex justify-space align-center">
                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-21.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                    <a className="icon-repeat">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream flex hv-one">
                                            <div className="image-group relative  ">
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
                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="img-box flex justify-space align-center">
                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-2.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                    <a className="icon-repeat">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream flex hv-one">
                                            <div className="image-group relative  ">
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
                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="img-box flex justify-space align-center">
                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-20.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                    <a className="icon-repeat">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </a>
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
