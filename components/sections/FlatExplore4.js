

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
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <section className="flat-explore tf-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Explore our listings</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                            </div>
                            <div className="flat-tab taabs center hide-response">
                                    <ul className="menu-tab tab-title flex justify-center">
                                        <li className={activeIndex == 1 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="8 Property" onClick={() => handleOnClick(1)}>
                                            <h5 className="inner">Houses</h5>
                                        </li>
                                        <li className={activeIndex == 2 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="6 Property" onClick={() => handleOnClick(2)}>
                                            <h5 className="inner"> Smart home </h5>
                                        </li>
                                        <li className={activeIndex == 3 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="5 Property" onClick={() => handleOnClick(3)}>
                                            <h5 className="inner ">Apartments</h5>
                                        </li>
                                        <li className={activeIndex == 4 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="7 Property" onClick={() => handleOnClick(4)}>
                                            <h5 className="inner"> Office </h5>
                                        </li>
                                        <li className={activeIndex == 5 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="6 Property" onClick={() => handleOnClick(5)}>
                                            <h5 className="inner">Villa</h5>
                                        </li>
                                        <li className={activeIndex == 6 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="3 Property" onClick={() => handleOnClick(6)}>
                                            <h5 className="inner"> Bungalow </h5>
                                        </li>
                                    </ul>
                                </div>
                            <div className="swiper-container carousel-8">
                                <Swiper {...swiperOptions}>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="img2" src="/assets/images/img-box/explore-1.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>Chile</h3></Link>
                                                <p className="text-color-2">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="img2" src="/assets/images/img-box/explore-2.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1" className="link-style-2"><h3>Banglore</h3></Link>
                                                <p className="text-color-2">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="img2" src="/assets/images/img-box/explore-3.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>New Delhi</h3></Link>
                                                <p className="text-color-2">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="img2" src="/assets/images/img-box/explore-4.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>Berlin</h3></Link>
                                                <p className="text-color-2">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="img2" src="/assets/images/img-box/explore-5.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>California</h3></Link>
                                                <p className="text-color-2">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="img2" src="/assets/images/img-box/explore-6.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>Brazil</h3></Link>
                                                <p className="text-color-2">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="img2" src="/assets/images/img-box/explore-1.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>Chile</h3></Link>
                                                <p className="text-color-2">1570 listing</p>
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
