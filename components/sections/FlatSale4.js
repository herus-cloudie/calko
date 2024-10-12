
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { swiperData } from '@/constant';

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
                                        {
                                            swiperData.slice(0,6).map(item  => 
                                                <SwiperSlide className="slide-item">
                                                    <Link href={`/details/${item.href}`}>
                                                        <div className="box box-dream hv-one">
                                                            <div className="image-group relative ">
                                                                {item.featured[0] && <span className="featured fs-12 fw-6">{item.featured[0]}</span>}
                                                                {item.featured[1] && <span className="featured style fs-12 fw-6">{item.featured[1]}</span>}
                                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                                    <div className="swiper-wrapper ">
                                                                        <div className="swiper-slide"><img src={item.image} alt="images" /></div>
                                                                    </div>
                                                                    <div className="pagi2"><div className="swiper-pagination2"></div> </div>
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h3 className="link-style-1"><Link href="/property-detail-v1">{item.title}</Link> </h3>
                                                                <div dir='ltr' className="text-address" style={{display : 'flex' , gap : '5px' , flexDirection : 'row-reverse'}}><p className="p-12 ">{item.address}</p></div>
                                                                
                                                                <div className="icon-box flex" style={{justifyContent : 'space-between'}}>
                                                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">{item.discount}</Link></div>
                                                                    <span>{item.category}</span>
                                                                </div>
                                                                <div className="days-box flex justify-space align-center">
                                                                    <Link className=" flex align-center fw-6" href="#">باز</Link>
                                                                    <div className="days">{item.contact}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>
                                            )
                                        }
                                        
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
