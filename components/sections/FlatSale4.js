
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
export default function FlatSale4() {
    return (
        <>
            <section className="flat-sale wg-dream tf-section home4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center style2">
                                <h2>تعدادی از کسب و کار های پرفروش</h2>
                                <p className="text-color-4">لیست پرفروش ها بر اساس فروش هفتگی اپدیت میشه</p>
                            </div>
                            <div className="swiper-container2">
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
                                                        <div className="swiper-slide"><img src="/assets/immmg/s7.png" alt="images" /></div>
                                                    </div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">بلانتون</Link> </h3>
                                                <div dir='ltr' className="text-address" style={{display : 'flex' , gap : '5px' , flexDirection : 'row-reverse'}}><p className="p-12 ">تبریز</p></div>
                                                
                                                <div className="icon-box flex" style={{justifyContent : 'space-between'}}>
                                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">8 درصد تخفیف</Link></div>
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
                                                    
                                                    <div className="swiper-slide"><img src="/assets/immmg/s13.png" alt="images" /></div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">الانزا</Link> </h3>
                                                <div dir='ltr' className="text-address" style={{display : 'flex' , gap : '5px' , flexDirection : 'row-reverse'}}><p className="p-12 ">تهران</p></div>
                                                
                                                <div className="icon-box flex" style={{justifyContent : 'space-between'}}>
                                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">11 درصد تخفیف</Link></div>
                                                    <span>آرایشی و بهداشتی</span>
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
                                                
                                                    <div className="swiper-slide"><img src="/assets/immmg/s9.png" alt="images" /></div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">بیمه دات کام</Link> </h3>
                                                <div dir='ltr' className="text-address" style={{display : 'flex' , gap : '5px' , flexDirection : 'row-reverse'}}><p className="p-12 ">تهران</p></div>
                                                
                                                <div className="icon-box flex" style={{justifyContent : 'space-between'}}>
                                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">16 درصد تخفیف</Link></div>
                                                    <span>بیمه</span>
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
                                                    <div className="swiper-slide"><img src="/assets/immmg/s14.png" alt="images" /></div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">استیل البرز</Link> </h3>
                                                <div dir='ltr' className="text-address" style={{display : 'flex' , gap : '5px' , flexDirection : 'row-reverse'}}><p className="p-12 ">تهران</p></div>
                                                
                                                <div className="icon-box flex" style={{justifyContent : 'space-between'}}>
                                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">3 درصد تخفیف</Link></div>
                                                    <span>شیرآلات</span>
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
                                                    <div className="swiper-slide"><img src="/assets/immmg/s11.png" alt="images" /></div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">سینما تیکت</Link> </h3>
                                                <div dir='ltr' className="text-address" style={{display : 'flex' , gap : '5px' , flexDirection : 'row-reverse'}}><p className="p-12 ">البرز</p></div>
                                                
                                                <div className="icon-box flex" style={{justifyContent : 'space-between'}}>
                                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">18 درصد تخفیف</Link></div>
                                                    <span>تیاتر و سینما</span>
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
                                                    <div className="swiper-slide"><img src="/assets/immmg/s4.png" alt="images" /></div>
                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">چشم پزشکی نور</Link> </h3>
                                                <div dir='ltr' className="text-address" style={{display : 'flex' , gap : '5px' , flexDirection : 'row-reverse'}}><p className="p-12 ">تهران</p></div>
                                                
                                                <div className="icon-box flex" style={{justifyContent : 'space-between'}}>
                                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">15 درصد تخفیف</Link></div>
                                                    <span>خدمات درمانی</span>
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
                </div>
            </section>
        </>
    )
}
