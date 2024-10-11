

import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    slidesPerView: 1,
    loop: false,
    spaceBetween: 30,
    // grabCursor: true,
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 29,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 29,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 29,
        },
        1550: {
            slidesPerView: 7,
            spaceBetween: 29,
        },
    },
};
export default function FlatYour3() {
    return (
        <>
            <section className="flat-your">
                <div className="container-full">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Find your neighborhood</h2>
                                <p className="text-color-4">Find your dream apartment with our listing</p>
                            </div>
                            <div className="swiper-container carousel-4  ">
                                <Swiper {...swiperOptions}>
                                    <SwiperSlide>
                                        <div className="box hv-one2 ">
                                            <div className="images img-style2">
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                <img className="img br-10" src="/assets/images/img-box/find-your-1.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-3">
                                                <Link href="/properties-map-v1" className><h3>Moncton</h3></Link>
                                                <p className="text-color-1">1570 listing</p>
                                                <div className="meta style">
                                                    <Link href="/properties-map-v1" className="btn-button flex align-center fs-14 fw-6 text-color-1"><span>View all listing</span>
                                                        <svg width={14} height={7} viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.5 1L13 3.5M13 3.5L10.5 6M13 3.5H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box hv-one2 ">
                                            <div className="images img-style2">
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                <img className="img br-10" src="/assets/images/img-box/find-your-2.jpg" alt="images" />
                                                <div className="content link-style-3">
                                                    <Link href="/properties-map-v1" className><h3>Mississauga</h3></Link>
                                                    <p className="text-color-1">1570 listing</p>
                                                    <div className="meta style">
                                                        <Link href="/properties-map-v1" className="btn-button flex align-center fs-14 fw-6 text-color-1"><span>View all listing</span>
                                                            <svg width={14} height={7} viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.5 1L13 3.5M13 3.5L10.5 6M13 3.5H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box hv-one2">
                                            <div className="images img-style2">
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                <img className="img br-10" src="/assets/images/img-box/find-your-3.jpg" alt="images" />
                                                <div className="content link-style-3">
                                                    <Link href="/properties-map-v1" className><h3 className="link-style-3">Halifax</h3></Link>
                                                    <p className="text-color-1">1570 listing</p>
                                                    <div className="meta style">
                                                        <Link href="/properties-map-v1" className="btn-button flex align-center fs-14 fw-6 text-color-1"><span>View all listing</span>
                                                            <svg width={14} height={7} viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.5 1L13 3.5M13 3.5L10.5 6M13 3.5H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box hv-one2">
                                            <div className="images img-style2">
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                <img className="img br-10" src="/assets/images/img-box/find-your-4.jpg" alt="images" />
                                                <div className="content link-style-3">
                                                    <Link href="/properties-map-v1" className><h3>Ottawa</h3></Link>
                                                    <p className="text-color-1">1570 listing</p>
                                                    <div className="meta style">
                                                        <Link href="/properties-map-v1" className="btn-button flex align-center fs-14 fw-6 text-color-1"><span>View all listing</span>
                                                            <svg width={14} height={7} viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.5 1L13 3.5M13 3.5L10.5 6M13 3.5H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box hv-one2">
                                            <div className="images img-style2">
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                <img className="img br-10" src="/assets/images/img-box/find-your-5.jpg" alt="images" />
                                                <div className="content link-style-3">
                                                    <Link href="/properties-map-v1" className><h3> Iqaluit</h3></Link>
                                                    <p className="text-color-1">1570 listing</p>
                                                    <div className="meta style">
                                                        <Link href="/properties-map-v1" className="btn-button flex align-center fs-14 fw-6 text-color-1"><span>View all listing</span>
                                                            <svg width={14} height={7} viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.5 1L13 3.5M13 3.5L10.5 6M13 3.5H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box hv-one2">
                                            <div className="images img-style2">
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                <img className="img br-10" src="/assets/images/img-box/find-your-6.jpg" alt="images" />
                                                <div className="content link-style-3">
                                                    <Link href="/properties-map-v1" className><h3>Toronto</h3></Link>
                                                    <p className="text-color-1">1570 listing</p>
                                                    <div className="meta style">
                                                        <Link href="/properties-map-v1" className="btn-button flex align-center fs-14 fw-6 text-color-1"><span>View all listing</span>
                                                            <svg width={14} height={7} viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.5 1L13 3.5M13 3.5L10.5 6M13 3.5H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box hv-one2">
                                            <div className="images img-style2">
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                <img className="img br-10" src="/assets/images/img-box/find-your-7.jpg" alt="images" />
                                                <div className="content link-style-3">
                                                    <Link href="/properties-map-v1" className><h3>Edmonton</h3></Link>
                                                    <p className="text-color-1">1570 listing</p>
                                                    <div className="meta style">
                                                        <Link href="/properties-map-v1" className="btn-button flex align-center fs-14 fw-6 text-color-1"><span>View all listing</span>
                                                            <svg width={14} height={7} viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.5 1L13 3.5M13 3.5L10.5 6M13 3.5H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box hv-one2 ">
                                            <div className="images img-style2">
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                <img className="img br-10" src="/assets/images/img-box/find-your-1.jpg" alt="images" />
                                                <div className="content link-style-3">
                                                    <Link href="/properties-map-v1" className><h3>Moncton</h3></Link>
                                                    <p className="text-color-1">1570 listing</p>
                                                    <div className="meta style">
                                                        <Link href="/properties-map-v1" className="btn-button flex align-center fs-14 fw-6 text-color-1"><span>View all listing</span>
                                                            <svg width={14} height={7} viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.5 1L13 3.5M13 3.5L10.5 6M13 3.5H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box hv-one2 ">
                                            <div className="images img-style2">
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                <img className="img br-10" src="/assets/images/img-box/find-your-2.jpg" alt="images" />
                                                <div className="content link-style-3">
                                                    <Link href="/properties-map-v1" className><h3>Mississauga</h3></Link>
                                                    <p className="text-color-1">1570 listing</p>
                                                    <div className="meta style">
                                                        <Link href="/properties-map-v1" className="btn-button flex align-center fs-14 fw-6 text-color-1"><span>View all listing</span>
                                                            <svg width={14} height={7} viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.5 1L13 3.5M13 3.5L10.5 6M13 3.5H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="pagi center"><div className="swiper-pagination1"></div> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
