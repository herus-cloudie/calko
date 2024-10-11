

import Link from 'next/link';
import { useState } from 'react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
            slidesPerView: 3,
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

export default function FlatDiscover4() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <section className="flat-discover wg-dream home4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>شماری از کسب و کارهای منتخب</h2>
                                <p className="text-color-4">کالکو سعی داره همواره با کسب و کار و سازمان های برجسته با عملکرد برتر، همکاری کند</p>
                            </div>
                            <div className="flat-tab taabs center hide-response">
                                <ul className="menu-tab tab-title flex justify-center">
                                    <li className={activeIndex == 1 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="کسب و کار 8 " onClick={() => handleOnClick(1)}>
                                        <h5 className="inner">دسته بندی ها</h5>
                                    </li>
                                    <li className={activeIndex == 2 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="کسب و کار 6 " onClick={() => handleOnClick(2)}>
                                        <h5 className="inner">پزشکی درمانی</h5>
                                    </li>
                                    <li className={activeIndex == 3 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="کسب و کار 5 " onClick={() => handleOnClick(3)}>
                                        <h5 className="inner ">کالا و سوپرمارکت</h5>
                                    </li>
                                    <li className={activeIndex == 4 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="کسب و کار 7 " onClick={() => handleOnClick(4)}>
                                        <h5 className="inner"> خدمات سفر </h5>
                                    </li>
                                    <li className={activeIndex == 5 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="کسب و کار 6 " onClick={() => handleOnClick(5)}>
                                        <h5 className="inner">رسانه و آموزش</h5>
                                    </li>
                                    <li className={activeIndex == 6 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="کسب و کار 3 " onClick={() => handleOnClick(6)}>
                                        <h5 className="inner"> پوشاک و لوازم منزل </h5>
                                    </li>
                                </ul>
                            </div>
                            <div className="swiper-container2">
                                <Swiper dir='rtl' {...swiperOptions} className="one-carousel">
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream hv-one">
                                            <div className="image-group relative ">
                                                <span className="featured fs-12 fw-6">ویژه</span>
                                                <span className="featured style fs-12 fw-6">منتخب</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                    <div className="swiper-wrapper ">
                                                        <div className="swiper-slide"><img src="/assets/immmg/s1.png" alt="images" /></div>
                                                    </div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">شیلا</Link> </h3>
                                                <div dir='ltr' className="text-address" style={{display : 'flex' , gap : '5px' , flexDirection : 'row-reverse'}}><p className="p-12 ">تهران</p></div>
                                                
                                                <div className="icon-box flex" style={{justifyContent : 'space-between'}}>
                                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">15 درصد تخفیف</Link></div>
                                                    <span>رستوران</span>
                                                </div>
                                                <div className="days-box flex justify-space align-center">
                                                    <Link className=" flex align-center fw-6" href="#">بسته</Link>
                                                    <div className="days">021-44144000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream hv-one">
                                            <div className="image-group relative ">
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                        <div className="swiper-slide"><img src="/assets/immmg/s6.png" alt="images" /></div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">فرش بهشتی</Link> </h3>
                                                <div dir='ltr' className="text-address" style={{display : 'flex' , gap : '5px' , flexDirection : 'row-reverse'}}><p className="p-12 ">تهران</p></div>
                                                
                                                <div className="icon-box flex" style={{justifyContent : 'space-between'}}>
                                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">5 درصد تخفیف</Link></div>
                                                    <span>فرش</span>
                                                </div>
                                                <div className="days-box flex justify-space align-center">
                                                    <Link className=" flex align-center fw-6" href="#">باز</Link>
                                                    <div className="days">021-44144000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream hv-one">
                                            <div className="image-group relative ">

                                                <span className="featured style fs-12 fw-6">منتخب</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                        <div className="swiper-slide"><img src="/assets/immmg/s3.png" alt="images" /></div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">پزشکت</Link> </h3>
                                                <div dir='ltr' className="text-address" style={{display : 'flex' , gap : '5px' , flexDirection : 'row-reverse'}}><p className="p-12 ">تهران</p></div>
                                                
                                                <div className="icon-box flex" style={{justifyContent : 'space-between'}}>
                                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">7 درصد تخفیف</Link></div>
                                                    <span>بیمارستان و پزشکی</span>
                                                </div>
                                                <div className="days-box flex justify-space align-center">
                                                    <Link className=" flex align-center fw-6" href="#">باز</Link>
                                                    <div className="days">021-44144000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream hv-one">
                                            <div className="image-group relative "> 
                                                <span className="featured fs-12 fw-6">ویژه</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                        <div className="swiper-slide"><img src="/assets/immmg/s2.png" alt="images" /></div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">آجیل دستچی</Link> </h3>
                                                <div dir='ltr' className="text-address" style={{display : 'flex' , gap : '5px' , flexDirection : 'row-reverse'}}><p className="p-12 ">البرز</p></div>
                                                
                                                <div className="icon-box flex" style={{justifyContent : 'space-between'}}>
                                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">18 درصد تخفیف</Link></div>
                                                    <span>خوراک</span>
                                                </div>
                                                <div className="days-box flex justify-space align-center">
                                                    <Link className=" flex align-center fw-6" href="#">بسته</Link>
                                                    <div className="days">021-44144000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream hv-one">
                                            <div className="image-group relative ">
                                                <span className="featured fs-12 fw-6">ویژه</span>
                                                <span className="featured style fs-12 fw-6">منتخب</span>
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                        <div className="swiper-slide"><img src="/assets/immmg/s8.png" alt="images" /></div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">مبلمان نیکرادان</Link> </h3>
                                                <div dir='ltr' className="text-address" style={{display : 'flex' , gap : '5px' , flexDirection : 'row-reverse'}}><p className="p-12 ">تهران</p></div>
                                                
                                                <div className="icon-box flex" style={{justifyContent : 'space-between'}}>
                                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">26 درصد تخفیف</Link></div>
                                                    <span>لوازم خانگی</span>
                                                </div>
                                                <div className="days-box flex justify-space align-center">
                                                    <Link className=" flex align-center fw-6" href="#">بسته</Link>
                                                    <div className="days">021-44144000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                        <div className="box box-dream hv-one">
                                            <div className="image-group relative ">
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                        <div className="swiper-slide"><img src="/assets/immmg/s5.png" alt="images" /></div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">بهراد طب بیدار</Link> </h3>
                                                <div dir='ltr' className="text-address" style={{display : 'flex' , gap : '5px' , flexDirection : 'row-reverse'}}><p className="p-12 ">تهران</p></div>
                                                
                                                <div className="icon-box flex" style={{justifyContent : 'space-between'}}>
                                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">15 درصد تخفیف</Link></div>
                                                    <span>رستوران</span>
                                                </div>
                                                <div className="days-box flex justify-space align-center">
                                                    <Link className=" flex align-center fw-6" href="#">بسته</Link>
                                                    <div className="days">021-44144000</div>
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
