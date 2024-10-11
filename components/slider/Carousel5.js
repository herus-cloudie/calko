import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Pagination, Navigation],
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    loop: true,
    spaceBetween: 30,
    speed: 10000,
    observer: true,
    observeParents: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        868: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
};

export default function Carousel5() {

    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g1.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g7.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g3.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g4.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g5.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g7.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g8.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g9.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g10.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g11.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g12.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g13.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g14.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/assets/immmg/g15.png" alt="images" />
                        </Link>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}
