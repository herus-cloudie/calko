

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    },
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
};

export default function FlatTestimonial5() {
    return (
        <>
            <section className="flat-testimonial4 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>From our happy customers</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio</p>
                            </div>
                            <div className="swiper-container carousel-7 img-style">
                                <Swiper {...swiperOptions}>
                                    <SwiperSlide>
                                        <div className="box center">
                                            <div className="inner">
                                                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M28.0934 11.3076H25.2697V15.9908C25.2697 18.3363 23.3615 20.2445 21.0159 20.2445H14.1609V21.9843C14.1609 23.0355 15.0162 23.8909 16.0675 23.8909H22.1349L25.0277 27.3976C25.201 27.6074 25.4569 27.7249 25.7222 27.7249C25.7881 27.7249 25.8547 27.7175 25.9208 27.7027C26.252 27.6278 26.513 27.3726 26.5954 27.043L27.3836 23.8909H28.0934C29.1446 23.8909 30 23.0358 30 21.9843V13.2142C30 12.1627 29.1446 11.3076 28.0934 11.3076Z" fill="#0D4AA3" />
                                                    <path d="M21.0159 0H2.45361C1.10069 0 0 1.10069 0 2.45361V15.9906C0 17.3435 1.10069 18.444 2.45361 18.444H4.25743L5.56664 23.6799C5.6488 24.0097 5.90973 24.2647 6.24115 24.3398C6.3073 24.3546 6.37367 24.362 6.43982 24.362C6.70509 24.3617 6.96098 24.2443 7.13402 24.0344L11.7462 18.444H21.0159C22.3689 18.444 23.4695 17.3435 23.4695 15.9906V2.45361C23.4695 1.10069 22.3689 0 21.0159 0V0ZM17.021 8.59955L15.0309 10.5396L15.5008 13.2786C15.5587 13.6164 15.4198 13.9577 15.1426 14.1591C14.9858 14.2731 14.8002 14.331 14.6134 14.331C14.4701 14.331 14.3264 14.2969 14.1946 14.2275L11.7348 12.9343L9.27475 14.2275C8.97148 14.3871 8.60413 14.3605 8.32672 14.1591C8.04955 13.9577 7.91084 13.6164 7.96875 13.2786L8.43864 10.5393L6.44829 8.59955C6.20316 8.36037 6.11481 8.00262 6.22055 7.67693C6.32652 7.351 6.60828 7.11342 6.94725 7.06421L9.69749 6.66458L10.9275 4.17229C11.0793 3.86513 11.3921 3.67058 11.7348 3.67058C12.0774 3.67058 12.3903 3.86513 12.5418 4.17229L13.7718 6.66458L16.5221 7.06421C16.8613 7.11342 17.143 7.351 17.2488 7.67693C17.3547 8.00285 17.2664 8.36037 17.021 8.59955Z" fill="#0D4AA3" />
                                                    <path d="M12.367 7.8858L11.7348 6.60498L11.1026 7.8858C10.9715 8.15154 10.7181 8.33556 10.4249 8.37836L9.01111 8.58366L10.034 9.5809C10.2462 9.78758 10.343 10.0856 10.2928 10.3776L10.0514 11.7855L11.3159 11.1208C11.578 10.983 11.8914 10.983 12.1537 11.1208L13.418 11.7855L13.1765 10.3776C13.1264 10.0856 13.2232 9.78758 13.4354 9.5809L14.4583 8.58366L13.0447 8.37836C12.7515 8.33556 12.4981 8.15154 12.367 7.8858Z" fill="#0D4AA3" />
                                                </svg>
                                                <div className="texts fs-16 fw-5 lh-24 font-italic">
                                                    “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tortor justo. Vestibulum vitae vulputate lacus. Aliquam sollicitudin mauris odio. Fusce egestas consectetur semper vulputate ”
                                                </div>
                                            </div>
                                            <div className="author-box">
                                                <div className="images">
                                                    <img src="/assets/images/author/author-testimonial4.jpg" alt="images" />
                                                </div>
                                                <h4>Esther Howard</h4>
                                                <p>Internet Security Assistant</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center">
                                            <div className="inner">
                                                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M28.0934 11.3076H25.2697V15.9908C25.2697 18.3363 23.3615 20.2445 21.0159 20.2445H14.1609V21.9843C14.1609 23.0355 15.0162 23.8909 16.0675 23.8909H22.1349L25.0277 27.3976C25.201 27.6074 25.4569 27.7249 25.7222 27.7249C25.7881 27.7249 25.8547 27.7175 25.9208 27.7027C26.252 27.6278 26.513 27.3726 26.5954 27.043L27.3836 23.8909H28.0934C29.1446 23.8909 30 23.0358 30 21.9843V13.2142C30 12.1627 29.1446 11.3076 28.0934 11.3076Z" fill="#0D4AA3" />
                                                    <path d="M21.0159 0H2.45361C1.10069 0 0 1.10069 0 2.45361V15.9906C0 17.3435 1.10069 18.444 2.45361 18.444H4.25743L5.56664 23.6799C5.6488 24.0097 5.90973 24.2647 6.24115 24.3398C6.3073 24.3546 6.37367 24.362 6.43982 24.362C6.70509 24.3617 6.96098 24.2443 7.13402 24.0344L11.7462 18.444H21.0159C22.3689 18.444 23.4695 17.3435 23.4695 15.9906V2.45361C23.4695 1.10069 22.3689 0 21.0159 0V0ZM17.021 8.59955L15.0309 10.5396L15.5008 13.2786C15.5587 13.6164 15.4198 13.9577 15.1426 14.1591C14.9858 14.2731 14.8002 14.331 14.6134 14.331C14.4701 14.331 14.3264 14.2969 14.1946 14.2275L11.7348 12.9343L9.27475 14.2275C8.97148 14.3871 8.60413 14.3605 8.32672 14.1591C8.04955 13.9577 7.91084 13.6164 7.96875 13.2786L8.43864 10.5393L6.44829 8.59955C6.20316 8.36037 6.11481 8.00262 6.22055 7.67693C6.32652 7.351 6.60828 7.11342 6.94725 7.06421L9.69749 6.66458L10.9275 4.17229C11.0793 3.86513 11.3921 3.67058 11.7348 3.67058C12.0774 3.67058 12.3903 3.86513 12.5418 4.17229L13.7718 6.66458L16.5221 7.06421C16.8613 7.11342 17.143 7.351 17.2488 7.67693C17.3547 8.00285 17.2664 8.36037 17.021 8.59955Z" fill="#0D4AA3" />
                                                    <path d="M12.367 7.8858L11.7348 6.60498L11.1026 7.8858C10.9715 8.15154 10.7181 8.33556 10.4249 8.37836L9.01111 8.58366L10.034 9.5809C10.2462 9.78758 10.343 10.0856 10.2928 10.3776L10.0514 11.7855L11.3159 11.1208C11.578 10.983 11.8914 10.983 12.1537 11.1208L13.418 11.7855L13.1765 10.3776C13.1264 10.0856 13.2232 9.78758 13.4354 9.5809L14.4583 8.58366L13.0447 8.37836C12.7515 8.33556 12.4981 8.15154 12.367 7.8858Z" fill="#0D4AA3" />
                                                </svg>
                                                <div className="texts fs-16 fw-5 lh-24 font-italic">
                                                    “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tortor justo. Vestibulum vitae vulputate lacus. Aliquam sollicitudin mauris odio. Fusce egestas consectetur semper vulputate ”
                                                </div>
                                            </div>
                                            <div className="author-box">
                                                <div className="images">
                                                    <img src="/assets/images/author/author-testimonial4.jpg" alt="images" />
                                                </div>
                                                <h4>Esther Howard</h4>
                                                <p>Internet Security Assistant</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center">
                                            <div className="inner">
                                                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M28.0934 11.3076H25.2697V15.9908C25.2697 18.3363 23.3615 20.2445 21.0159 20.2445H14.1609V21.9843C14.1609 23.0355 15.0162 23.8909 16.0675 23.8909H22.1349L25.0277 27.3976C25.201 27.6074 25.4569 27.7249 25.7222 27.7249C25.7881 27.7249 25.8547 27.7175 25.9208 27.7027C26.252 27.6278 26.513 27.3726 26.5954 27.043L27.3836 23.8909H28.0934C29.1446 23.8909 30 23.0358 30 21.9843V13.2142C30 12.1627 29.1446 11.3076 28.0934 11.3076Z" fill="#0D4AA3" />
                                                    <path d="M21.0159 0H2.45361C1.10069 0 0 1.10069 0 2.45361V15.9906C0 17.3435 1.10069 18.444 2.45361 18.444H4.25743L5.56664 23.6799C5.6488 24.0097 5.90973 24.2647 6.24115 24.3398C6.3073 24.3546 6.37367 24.362 6.43982 24.362C6.70509 24.3617 6.96098 24.2443 7.13402 24.0344L11.7462 18.444H21.0159C22.3689 18.444 23.4695 17.3435 23.4695 15.9906V2.45361C23.4695 1.10069 22.3689 0 21.0159 0V0ZM17.021 8.59955L15.0309 10.5396L15.5008 13.2786C15.5587 13.6164 15.4198 13.9577 15.1426 14.1591C14.9858 14.2731 14.8002 14.331 14.6134 14.331C14.4701 14.331 14.3264 14.2969 14.1946 14.2275L11.7348 12.9343L9.27475 14.2275C8.97148 14.3871 8.60413 14.3605 8.32672 14.1591C8.04955 13.9577 7.91084 13.6164 7.96875 13.2786L8.43864 10.5393L6.44829 8.59955C6.20316 8.36037 6.11481 8.00262 6.22055 7.67693C6.32652 7.351 6.60828 7.11342 6.94725 7.06421L9.69749 6.66458L10.9275 4.17229C11.0793 3.86513 11.3921 3.67058 11.7348 3.67058C12.0774 3.67058 12.3903 3.86513 12.5418 4.17229L13.7718 6.66458L16.5221 7.06421C16.8613 7.11342 17.143 7.351 17.2488 7.67693C17.3547 8.00285 17.2664 8.36037 17.021 8.59955Z" fill="#0D4AA3" />
                                                    <path d="M12.367 7.8858L11.7348 6.60498L11.1026 7.8858C10.9715 8.15154 10.7181 8.33556 10.4249 8.37836L9.01111 8.58366L10.034 9.5809C10.2462 9.78758 10.343 10.0856 10.2928 10.3776L10.0514 11.7855L11.3159 11.1208C11.578 10.983 11.8914 10.983 12.1537 11.1208L13.418 11.7855L13.1765 10.3776C13.1264 10.0856 13.2232 9.78758 13.4354 9.5809L14.4583 8.58366L13.0447 8.37836C12.7515 8.33556 12.4981 8.15154 12.367 7.8858Z" fill="#0D4AA3" />
                                                </svg>
                                                <div className="texts fs-16 fw-5 lh-24 font-italic">
                                                    “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tortor justo. Vestibulum vitae vulputate lacus. Aliquam sollicitudin mauris odio. Fusce egestas consectetur semper vulputate ”
                                                </div>
                                            </div>
                                            <div className="author-box">
                                                <div className="images">
                                                    <img src="/assets/images/author/author-testimonial4.jpg" alt="images" />
                                                </div>
                                                <h4>Esther Howard</h4>
                                                <p>Internet Security Assistant</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="pagi style center"><div className="swiper-pagination1"></div> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
