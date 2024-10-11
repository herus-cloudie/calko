import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 27,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 27,
        },

    },
};

export default function FlatFindNeighborhood52() {
    return (
        <>
            <section className="flat-find-neighborhood wg-search-area tf-section home5-two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Find your neighborhood</h2>
                                <p className="text-color-4">Find your dream apartment with our listing</p>
                            </div>
                            <div className="swiper-container carousel-10 img-style">
                                <Swiper {...swiperOptions}>
                                    <SwiperSlide>
                                        <div className="box">
                                            <div className="images">
                                                <img src="/assets/images/img-box/find-your-10.jpg" alt="images" />
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-3"><Link href="/properties-map-v1">Mississauga</Link></h3>
                                                <p className="text-color-1">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box">
                                            <div className="images">
                                                <img src="/assets/images/img-box/find-your-11.jpg" alt="images" />
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-3"><Link href="/properties-map-v1">California</Link></h3>
                                                <p className="text-color-1">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box">
                                            <div className="images">
                                                <img src="/assets/images/img-box/find-your-12.jpg" alt="images" />
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-3"><Link href="/properties-map-v1">Edmonton</Link></h3>
                                                <p className="text-color-1">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box">
                                            <div className="images">
                                                <img src="/assets/images/img-box/find-your-13.jpg" alt="images" />
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-3"><Link href="/properties-map-v1">Moncton</Link></h3>
                                                <p className="text-color-1">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box">
                                            <div className="images">
                                                <img src="/assets/images/img-box/find-your-10.jpg" alt="images" />
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-3"><Link href="/properties-map-v1">Mississauga</Link></h3>
                                                <p className="text-color-1">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box">
                                            <div className="images">
                                                <img src="/assets/images/img-box/find-your-11.jpg" alt="images" />
                                                <Link href="/properties-map-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-3"><Link href="/properties-map-v1">California</Link></h3>
                                                <p className="text-color-1">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="pagi style center"><div className="swiper-pagination1"></div> </div>
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
