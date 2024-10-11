import data from "@/util/carousel2.json";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



export default function Carousel2({ start, end }) {
    const swiperOptions = {
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        loop: true,

        // Navigation
        navigation: {
            nextEl: `.c2n${start}`,
            prevEl: `.c2p${end}`,
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    };
    return (
        <>

            <Swiper {...swiperOptions} className="h-100">
                {data.slice(start, end).map((item, i) => (
                    <SwiperSlide><img src={`/assets/images/house/featured-${item.img}`} alt="images" className="h-100" /></SwiperSlide>
                ))}
            </Swiper>
            <div className="pagi2"><div className="swiper-pagination2"></div> </div>
            <div className={`swiper-button-next2 c2n${start}`}><i className="fal fa-arrow-right" /></div>
            <div className={`swiper-button-prev2 c2p${end}`}><i className="fal fa-arrow-left" /> </div>
        </>
    )
}
