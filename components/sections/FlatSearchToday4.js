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
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

    },
};

export default function FlatSearchToday4() {
    return (
        <>
            <section className="flat-search-today">
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="bg-images" />
                        </div>
                        <div className="col-lg-6">
                            <div className="wrap-search-today">
                                <div className="heading-section">
                                    <h2>Search for your dream home or increase your investment opportunity today</h2>
                                    <p className="font-2 text-color-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio</p>
                                </div>
                                <div className="swiper-container2 carousel-9">
                                    <Swiper {...swiperOptions}>
                                        <SwiperSlide>
                                            <div className="box hover-img">
                                                <div className="images img-style">
                                                    <Link href="/agents-detail"><img src="/assets/images/img-box/search-today-1.jpg" alt="images" /></Link>
                                                    <div className="icon-socials">
                                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                                        <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3 className="link-style-1"><Link href="/agents-detail"> Darlene Robertson</Link></h3>
                                                    <p className="text-color-2 fs-12">Realtor</p>
                                                    <div className="meta">
                                                        <Link href="/agents-detail" className="btn-button flex align-center fw-6 text-color-3"><span>Contact seller</span>
                                                            <i className="far fa-long-arrow-alt-right fs-16" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box hover-img">
                                                <div className="images img-style">
                                                    <Link href="/agents-detail"><img src="/assets/images/img-box/search-today-2.jpg" alt="images" /></Link>
                                                    <div className="icon-socials">
                                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                                        <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3 className="link-style-1"><Link href="/agents-detail"> Darlene Robertson</Link></h3>
                                                    <p className="text-color-2 fs-12">Realtor</p>
                                                    <div className="meta">
                                                        <Link href="/agents-detail" className="btn-button flex align-center fw-6 text-color-3"><span>Contact seller</span>
                                                            <i className="far fa-long-arrow-alt-right fs-16" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box hover-img">
                                                <div className="images img-style">
                                                    <Link href="/agents-detail"><img src="/assets/images/img-box/search-today-1.jpg" alt="images" /></Link>
                                                    <div className="icon-socials">
                                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                                        <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3 className="link-style-1"><Link href="/agents-detail"> Darlene Robertson</Link></h3>
                                                    <p className="text-color-2 fs-12">Realtor</p>
                                                    <div className="meta">
                                                        <Link href="/agents-detail" className="btn-button flex align-center fw-6 text-color-3"><span>Contact seller</span>
                                                            <i className="far fa-long-arrow-alt-right fs-16" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box hover-img">
                                                <div className="images img-style">
                                                    <Link href="/agents-detail"><img src="/assets/images/img-box/search-today-2.jpg" alt="images" /></Link>
                                                    <div className="icon-socials">
                                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                                        <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3 className="link-style-1"><Link href="/agents-detail"> Darlene Robertson</Link></h3>
                                                    <p className="text-color-2 fs-12">Realtor</p>
                                                    <div className="meta">
                                                        <Link href="/agents-detail" className="btn-button flex align-center fw-6 text-color-3"><span>Contact seller</span>
                                                            <i className="far fa-long-arrow-alt-right fs-16" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="pagi style"><div className="swiper-pagination1"></div> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
