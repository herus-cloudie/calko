import Layout from "@/components/layout/Layout";
import Carousel2 from "@/components/slider/Carousel2";
import Link from 'next/link';
import { useState } from "react";
export default function AgentDetails() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Property Listing">
                <div>
                    <section className="flat-agent-detail wg-tabs flat-agent flat-agent-sidebar ">
                        <div className="container">
                            <div className="row flex">
                                <div className="col-lg-8">
                                    <div className="post">
                                        <div className="box flex ">
                                            <div className="images relative flex-none ">
                                                <img src="/assets/images/img-box/agents-detail.jpg" alt="images" />
                                            </div>
                                            <div className="content ">
                                                <div className="titles fs-22 fw-7 lh-33">Cameron Williamson</div>
                                                <div className="sub-text flex"><p className>Company Agent at </p><span className="fw-7 font-2 text-color-2"> Themesflat</span></div>
                                                <div className="icon-group">
                                                    <div className="icon-phone link-style-1"><Link href="/tel:0123456789" className=" fw-7 font-2 text-color-3">+7-445-556-8337</Link></div>
                                                    <div className="icon-email"><Link href="/mailto:darlenerobertson@gmail.com" className="font-2 ">cameronwilliamson@gmail.com</Link></div>
                                                    <div className="icon-map">1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
                                                </div>
                                                <div className="icon-social-wg">
                                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                                    <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-text">
                                            <h3 className="title-">About Cameron Williamson</h3>
                                            <p className="text-1 text-color-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus leo, blandit vitae diam a, vestibulum viverra nisi.
                                                Vestibulum ullamcorper velit eget mattis aliquam. Proin dapibus luctus pulvinar. Integer et libero ut purus bibendum gravida
                                                non ac tellus. Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus
                                                tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                            <p className="text-color-2">Aliquam non lorem consequat, luctus dui et, auctor nisi. Aenean placerat sapien at augue lacinia, non semper urna tempor. Mauris sit amet elit orci.</p>
                                        </div>
                                        <div className="flat-tabs">
                                            <div className="box-tab">
                                                <ul className="menu-tab tab-title flex ">
                                                    <li className={activeIndex == 1 ? "item-title active" : "item-title"} onClick={() => handleOnClick(1)}>
                                                        <h3 className="inner">For rent</h3>
                                                    </li>
                                                    <li className={activeIndex == 2 ? "item-title style active" : "item-title style"} onClick={() => handleOnClick(2)}>
                                                        <h3 className="inner">For sale </h3>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-tab">
                                                <div className="content-inner tab-content" style={{ display: `${activeIndex == 1 ? "block" : "none"}` }}>
                                                    <div className="wrap-item wg-dream flat-properties-rent">
                                                        <div className="box box-dream flex hv-one ">
                                                            <div className="image-group relative ">
                                                                <span className="featured fs-12 fw-6">Featured</span>
                                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                    <Carousel2 start={1} end={4} />
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13...</p></div>
                                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="img-box flex justify-space align-center">
                                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-list-1.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                                    <a className="icon-repeat">
                                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="box box-dream flex hv-one ">
                                                            <div className="image-group relative ">
                                                                <span className="featured fs-12 fw-6">Featured</span>
                                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                    <Carousel2 start={2} end={5} />
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13...</p></div>
                                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="img-box flex justify-space align-center">
                                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-list-1.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                                    <a className="icon-repeat">
                                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="box box-dream flex hv-one ">
                                                            <div className="image-group relative ">
                                                                <span className="featured fs-12 fw-6">Featured</span>
                                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                    <Carousel2 start={3} end={6} />
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13...</p></div>
                                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="img-box flex justify-space align-center">
                                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-list-1.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                                    <a className="icon-repeat">
                                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="box box-dream flex hv-one ">
                                                            <div className="image-group relative  ">
                                                                <span className="featured fs-12 fw-6">Featured</span>
                                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                    <Carousel2 start={4} end={7} />
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13...</p></div>
                                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="img-box flex justify-space align-center">
                                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-list-1.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                                    <a className="icon-repeat">
                                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-inner tab-content" style={{ display: `${activeIndex == 2 ? "block" : "none"}` }}>
                                                    <div className="wrap-item wg-dream flat-properties-rent">
                                                        <div className="box box-dream flex hv-one ">
                                                            <div className="image-group relative ">
                                                                <span className="featured fs-12 fw-6">Featured</span>
                                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                    <Carousel2 start={5} end={8} />
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13...</p></div>
                                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="img-box flex justify-space align-center">
                                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-list-1.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                                    <a className="icon-repeat">
                                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="box box-dream flex hv-one ">
                                                            <div className="image-group relative ">
                                                                <span className="featured fs-12 fw-6">Featured</span>
                                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                    <Carousel2 start={6} end={9} />
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13...</p></div>
                                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="img-box flex justify-space align-center">
                                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-list-1.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                                    <a className="icon-repeat">
                                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="box box-dream flex hv-one ">
                                                            <div className="image-group relative ">
                                                                <span className="featured fs-12 fw-6">Featured</span>
                                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                    <Carousel2 start={7} end={10} />
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13...</p></div>
                                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="img-box flex justify-space align-center">
                                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-list-1.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                                    <a className="icon-repeat">
                                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-button-view ">
                                            <Link className="sc-button btn-icon2 btn-1 one btn-svg center" href="/properties-grid">
                                                <span>View all my listing</span>
                                                <svg width={18} height={10} viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5 1L13 3.5M13 3.5L10.5 6M13 3.5H1" stroke="#FFA920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <aside className="side-bar side-bar-1">
                                        <div className="inner-side-bar">
                                            <div className="widget-rent style">
                                                <h3 className="widget-title title-contact">
                                                    Contact Agent
                                                </h3>
                                                <div className="author-box flex align-center">
                                                    <div className="image-author flex-none">
                                                        <img src="/assets/images/author/author-footer.jpg" alt="images" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="text-color-2">Cameron Williamson</p>
                                                        <h5 className="link-style-1"><Link href="/tel:0123456789">(405) 555-000-999</Link></h5>
                                                        <Link className="fs-12 lh-18" href="/mailto:cameronwilliamson@gmail.com">cameronwilliamson@gmail.com</Link>
                                                    </div>
                                                </div>
                                                <div className="comments">
                                                    <div className="comment-form">
                                                        <form method="post">
                                                            <div className="wd-find-select ">
                                                                <fieldset className>
                                                                    <input type="text" className name="text" placeholder="Full name *" required />
                                                                </fieldset>
                                                                <fieldset className>
                                                                    <input type="tel" className name="tel" placeholder="Phone number *" required />
                                                                </fieldset>
                                                                <fieldset className>
                                                                    <input type="email" className name="email" placeholder="Email address" required />
                                                                </fieldset>
                                                                <fieldset className="message-wrap">
                                                                    <textarea name="message" rows={4} tabIndex={4} placeholder="Your mesage *" />
                                                                </fieldset>
                                                                <div className="button-box sc-btn-top center flex justify-space">
                                                                    <button className="sc-button btn-svg">
                                                                        <span>Send message</span>
                                                                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M1.125 6.5025V12.9375C1.125 13.5342 1.36205 14.1065 1.78401 14.5285C2.20597 14.9504 2.77826 15.1875 3.375 15.1875H14.625C15.2217 15.1875 15.794 14.9504 16.216 14.5285C16.6379 14.1065 16.875 13.5342 16.875 12.9375V6.5025L10.179 10.6223C9.82443 10.8404 9.4163 10.9559 9 10.9559C8.5837 10.9559 8.17557 10.8404 7.821 10.6223L1.125 6.5025Z" fill="white" />
                                                                            <path d="M16.875 5.181V5.0625C16.875 4.46576 16.6379 3.89347 16.216 3.47151C15.794 3.04955 15.2217 2.8125 14.625 2.8125H3.375C2.77826 2.8125 2.20597 3.04955 1.78401 3.47151C1.36205 3.89347 1.125 4.46576 1.125 5.0625V5.181L8.4105 9.6645C8.58778 9.77357 8.79185 9.83132 9 9.83132C9.20815 9.83132 9.41222 9.77357 9.5895 9.6645L16.875 5.181Z" fill="white" />
                                                                        </svg>
                                                                    </button>
                                                                    <a className="sc-button btn-1 btn-svg" href="/tel:012345678">
                                                                        <span>Call</span>
                                                                        <svg width={19} height={18} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.125 7.31249C15.125 7.46168 15.0657 7.60475 14.9602 7.71024C14.8548 7.81573 14.7117 7.87499 14.5625 7.87499H11.1875C11.0383 7.87499 10.8952 7.81573 10.7898 7.71024C10.6843 7.60475 10.625 7.46168 10.625 7.31249V3.93749C10.625 3.78831 10.6843 3.64523 10.7898 3.53975C10.8952 3.43426 11.0383 3.37499 11.1875 3.37499C11.3367 3.37499 11.4798 3.43426 11.5852 3.53975C11.6907 3.64523 11.75 3.78831 11.75 3.93749V5.95499L15.29 2.41499C15.3415 2.35973 15.4036 2.3154 15.4726 2.28466C15.5416 2.25391 15.6161 2.23738 15.6916 2.23605C15.7671 2.23472 15.8422 2.24861 15.9122 2.2769C15.9822 2.30519 16.0459 2.3473 16.0993 2.40071C16.1527 2.45413 16.1948 2.51775 16.2231 2.5878C16.2514 2.65784 16.2653 2.73286 16.2639 2.80839C16.2626 2.88391 16.2461 2.9584 16.2153 3.0274C16.1846 3.0964 16.1403 3.1585 16.085 3.20999L12.545 6.74999H14.5625C14.7117 6.74999 14.8548 6.80926 14.9602 6.91475C15.0657 7.02024 15.125 7.16331 15.125 7.31249Z" fill="#1C1C1E" />
                                                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.625 3.375C1.625 2.77826 1.86205 2.20597 2.28401 1.78401C2.70597 1.36205 3.27826 1.125 3.875 1.125H4.904C5.549 1.125 6.1115 1.5645 6.26825 2.19L7.097 5.50725C7.16416 5.77575 7.15059 6.05809 7.058 6.31892C6.96542 6.57974 6.79792 6.80744 6.5765 6.9735L5.60675 7.701C5.5055 7.77675 5.48375 7.88775 5.51225 7.965C5.93553 9.11614 6.60395 10.1615 7.47121 11.0288C8.33847 11.8961 9.38386 12.5645 10.535 12.9877C10.6123 13.0162 10.7225 12.9945 10.799 12.8932L11.5265 11.9235C11.6926 11.7021 11.9203 11.5346 12.1811 11.442C12.4419 11.3494 12.7243 11.3358 12.9928 11.403L16.31 12.2318C16.9355 12.3885 17.375 12.951 17.375 13.5968V14.625C17.375 15.2217 17.1379 15.794 16.716 16.216C16.294 16.6379 15.7217 16.875 15.125 16.875H13.4375C6.914 16.875 1.625 11.586 1.625 5.0625V3.375Z" fill="#1C1C1E" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-rent">
                                                <div className="flat-tabs style2">
                                                    <div className="form-s2">
                                                        <form method="post">
                                                            <div className="wd-find-select ">
                                                                <h3 className="widget-title title-search">
                                                                    Agent Search
                                                                </h3>
                                                                <div className="form-group-1 search-form form-style2 relative">
                                                                    <i className="far fa-search" />
                                                                    <input type="search" className="search-field" placeholder="Agent’s name" name="s" title="Search for" required />
                                                                </div>
                                                                <div className="form-group-2 form-style2">
                                                                    <div className="group-select select-wrapper">
                                                                        <select className="nice-select" tabIndex={0}><span className="current">All categories</span>

                                                                            <option value="Condo" className="option">Condo</option>
                                                                            <option value="Apartment" className="option">Apartment</option>
                                                                            <option value="Single family home" className="option">Single family home</option>
                                                                            <option value="Multi family home" className="option">Multi family home</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group-3 form-style2">
                                                                    <div className="group-select select-wrapper">
                                                                        <select className="nice-select" tabIndex={0}><span className="current">Location</span>

                                                                            <option value="Japan" className="option">Japan</option>
                                                                            <option value="America" className="option">America</option>
                                                                            <option value="England" className="option">England</option>
                                                                            <option value="VietNam" className="option">VietNam</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="button-search sc-btn-top center">
                                                                    <Link className="sc-button" href="#">
                                                                        <span>Search Now</span>
                                                                        <i className="far fa-search text-color-1" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        {/* End Job  Search Form*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget widget-listings style">
                                                <h3 className="widget-title title-list">
                                                    Featured listings
                                                </h3>
                                                <div className="box-listings flex hover-img3">
                                                    <div className="img-listings img-style3">
                                                        <img src="/assets/images/img-box/sidebar-listings-1.jpg" alt="images" />
                                                    </div>
                                                    <div className="content link-style-1">
                                                        <Link className="fs-16 lh-24" href="/property-detail-v1">Gorgeous Apartment Building</Link>
                                                        <h4>$7,500</h4>
                                                    </div>
                                                </div>
                                                <div className="box-listings flex hover-img3">
                                                    <div className="img-listings img-style3">
                                                        <img src="/assets/images/img-box/sidebar-listings-2.jpg" alt="images" />
                                                    </div>
                                                    <div className="content link-style-1">
                                                        <Link className="fs-16 lh-24" href="/property-detail-v1">Gorgeous Apartment Building</Link>
                                                        <h4>$7,500</h4>
                                                    </div>
                                                </div>
                                                <div className="box-listings flex hover-img3">
                                                    <div className="img-listings img-style3">
                                                        <img src="/assets/images/img-box/sidebar-listings-3.jpg" alt="images" />
                                                    </div>
                                                    <div className="content link-style-1">
                                                        <Link className="fs-16 lh-24" href="/property-detail-v1">Gorgeous Apartment Building</Link>
                                                        <h4>$7,500</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div >
                    </section >
                    <section className="flat-contact2 relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="heading-section">
                                        <h2>Find for your dream home and increase your investment opportunities</h2>
                                        <p className="text-color-2 font-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio</p>
                                        <div className="button-footer">
                                            <Link className="sc-button center btn-icon" href="/contact">
                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.0967 21.75 20.669 21.5129 21.091 21.091C21.5129 20.669 21.75 20.0967 21.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C14.05 18.017 13.563 18.183 13.122 18.021C11.4849 17.4191 9.99815 16.4686 8.76478 15.2352C7.53141 14.0018 6.58087 12.5151 5.979 10.878C5.817 10.437 5.983 9.95 6.359 9.668L7.652 8.698C8.015 8.427 8.179 7.964 8.069 7.525L6.963 3.102C6.90214 2.85869 6.76172 2.6427 6.56405 2.48834C6.36638 2.33397 6.1228 2.25008 5.872 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span>Contact Seller</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mark-img">
                                        <img src="/assets/images/mark/mark-contact2.png" alt="images" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >

            </Layout >
        </>
    )
}