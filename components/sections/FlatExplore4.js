

import Link from 'next/link'
import { useState } from 'react';


import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop:false,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
};

export default function FlatExplore4() {

    return (
        <>
            <section className="flat-explore tf-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>تنوع تخفیفی بینهایت</h2>
                                <p className="text-color-4">تنوع تخفیفی را با ما تجریه کنید</p>
                            </div>

                            <div className="swiper-container carousel-8">
                                <Swiper {...swiperOptions}>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="img2" src="/assets/immmg/cat5.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>پوشاک و لوازم منزل</h3></Link>
                                                <p className="text-color-2" style={{cursor : 'pointer'}}>مشاهده</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="img2" src="/assets/immmg/cat4.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1" className="link-style-2"><h3>رسانه و آموزش</h3></Link>
                                                <p className="text-color-2" style={{cursor : 'pointer'}}>مشاهده</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="img2" src="/assets/immmg/cat3.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>پزشکی درمانی</h3></Link>
                                                <p className="text-color-2" style={{cursor : 'pointer'}}>مشاهده</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="img2" src="/assets/immmg/cat2.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>خدمات سفر</h3></Link>
                                                <p className="text-color-2" style={{cursor : 'pointer'}}>مشاهده</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="img2" src="/assets/immmg/cat1.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>کالا و سوپرمارکت</h3></Link>
                                                <p className="text-color-2" style={{cursor : 'pointer'}}>مشاهده</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="img2" src="/assets/immmg/cat0.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>دسته بندی ها</h3></Link>
                                                <p className="text-color-2" style={{cursor : 'pointer'}}>مشاهده</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="swiper-button-next " />
                            <div className="swiper-button-prev "> </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
