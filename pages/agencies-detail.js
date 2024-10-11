import Layout from "@/components/layout/Layout";
import Carousel2 from "@/components/slider/Carousel2";
import Link from 'next/link';
import { useState } from "react";
export default function AgenciesDetails() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Property Listing">

                <div>
                    <section className="flat-agencies-detail wg-tabs ">
                        <div className="container">
                            <div className="row flex">
                                <div className="col-lg-8">
                                    <div className="post">
                                        <div className="images relative flex-none ">
                                            <img src="/assets/images/img-box/agencies-detail-1.jpg" alt="images" />
                                        </div>
                                        <div className="box-avatar flex">
                                            <div className="avatar flex-none">
                                                <img className="img-border" src="/assets/images/img-box/agencies-detail-avatar.jpg" alt="images" />
                                            </div>
                                            <div className="content ">
                                                <div className="title-avatar fs-30 fw-7 lh-45">Lorem House</div>
                                                <p className="icon-p text-color-4">2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                                            </div>
                                        </div>
                                        <div className="wrap-description">
                                            <h3 className="titles title-1">Contact Infomation</h3>
                                            <ul className="inner flex">
                                                <li className="one fw-6">Listing:</li>
                                                <li className="two">7.328</li>
                                                <li className="one fw-6">Hotline:</li>
                                                <li className="two"><Link href="/tel:0123456789">+7-445-556-8337</Link></li>
                                                <li className="one fw-6">Phone:</li>
                                                <li className="two"><Link href="/tel:0123456789">+7-445-556-8337</Link></li>
                                                <li className="one fw-6">Fax:</li>
                                                <li className="two">+7-445-556-8337</li>
                                                <li className="one fw-6">Email:</li>
                                                <li className="two"><Link href="/mailto:loremhouse@gmail.com">loremhouse@gmail.com</Link></li>
                                            </ul>
                                            <div className="box-text">
                                                <h3 className="titles title-2">About Lorem House</h3>
                                                <p className="text-1 text-color-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus leo, blandit vitae diam a, vestibulum viverra nisi.
                                                    Vestibulum ullamcorper velit eget mattis aliquam. Proin dapibus luctus pulvinar. Integer et libero ut purus bibendum gravida
                                                    non ac tellus. Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus
                                                    tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                                <p className="text-color-2">Aliquam non lorem consequat, luctus dui et, auctor nisi. Aenean placerat sapien at augue lacinia, non semper urna tempor. Mauris sit amet elit orci.</p>
                                            </div>
                                            <div className="box-map">
                                                <h3 className="titles title-2">Location</h3>
                                                <iframe className="map-content" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.453092836291!2d90.47477022812872!3d23.77494577893369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1627293157601!5m2!1svi!2s" allowFullScreen loading="lazy" />
                                            </div>
                                        </div>
                                        <div className="flat-tabs">
                                            <div className="box-tab">
                                                <ul className="menu-tab tab-title flex ">
                                                    <li className={activeIndex == 1 ? "item-title active" : "item-title"} onClick={() => handleOnClick(1)}>
                                                        <h3 className="inner">Rent</h3>
                                                    </li>
                                                    <li className={activeIndex == 2 ? "item-title style active" : "item-title style"} onClick={() => handleOnClick(2)}>
                                                        <h3 className="inner"> Buy </h3>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="content-tab">
                                                <div className="content-inner tab-content wg-dream " style={{ display: `${activeIndex == 1 ? "block" : "none"}` }}>
                                                    <div className="wrap-item form-wg flex flex-wrap">
                                                        {/* col 1 */}
                                                        <div className="box box-dream hv-one wg-box">
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
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box flex">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="days-box flex justify-space align-center">
                                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-1.jpg" alt="images" /></div>
                                                                    <div className="days">3 years ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* col 2 */}
                                                        <div className="box box-dream hv-one wg-box">
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
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box flex">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="days-box flex justify-space align-center">
                                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-2.jpg" alt="images" /></div>
                                                                    <div className="days">3 years ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* col 3 */}
                                                        <div className="box box-dream hv-one wg-box">
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
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box flex">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="days-box flex justify-space align-center">
                                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-3.jpg" alt="images" /></div>
                                                                    <div className="days">3 years ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* col 4 */}
                                                        <div className="box box-dream hv-one wg-box">
                                                            <div className="image-group relative ">
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
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box flex">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="days-box flex justify-space align-center">
                                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-4.jpg" alt="images" /></div>
                                                                    <div className="days">3 years ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* col 5 */}
                                                        <div className="box box-dream hv-one wg-box">
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
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box flex">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="days-box flex justify-space align-center">
                                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-5.jpg" alt="images" /></div>
                                                                    <div className="days">3 years ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* col 6 */}
                                                        <div className="box box-dream hv-one wg-box">
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
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box flex">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="days-box flex justify-space align-center">
                                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-6.jpg" alt="images" /></div>
                                                                    <div className="days">3 years ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-inner tab-content wg-dream " style={{ display: `${activeIndex == 2 ? "block" : "none"}` }}>
                                                    <div className="wrap-item form-wg flex flex-wrap">
                                                        {/* col 1 */}
                                                        <div className="box box-dream hv-one wg-box">
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
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box flex">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="days-box flex justify-space align-center">
                                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-1.jpg" alt="images" /></div>
                                                                    <div className="days">3 years ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* col 2 */}
                                                        <div className="box box-dream hv-one wg-box">
                                                            <div className="image-group relative ">
                                                                <span className="featured fs-12 fw-6">Featured</span>
                                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                    <Carousel2 start={8} end={11} />
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box flex">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="days-box flex justify-space align-center">
                                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-2.jpg" alt="images" /></div>
                                                                    <div className="days">3 years ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* col 3 */}
                                                        <div className="box box-dream hv-one wg-box">
                                                            <div className="image-group relative ">
                                                                <span className="featured fs-12 fw-6">Featured</span>
                                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                    <Carousel2 start={9} end={12} />
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box flex">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="days-box flex justify-space align-center">
                                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-3.jpg" alt="images" /></div>
                                                                    <div className="days">3 years ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* col 4 */}
                                                        <div className="box box-dream hv-one wg-box">
                                                            <div className="image-group relative ">
                                                                <span className="featured fs-12 fw-6">Featured</span>
                                                                <span className="featured style fs-12 fw-6">For sale</span>
                                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                                <div className="swiper-container noo carousel-2 img-style h-100">
                                                                    <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                                    <Carousel2 start={10} end={13} />
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                                <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                                <div className="icon-box flex">
                                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                                </div>
                                                                <div className="days-box flex justify-space align-center">
                                                                    <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                                                    <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-4.jpg" alt="images" /></div>
                                                                    <div className="days">3 years ago</div>
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

                                                                            <option value className="option">All categories</option>
                                                                            <option value="House" className="option">House</option>
                                                                            <option value="Villa" className="option">Villa</option>
                                                                            <option value="smarrt-home" className="option "> Smart home</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group-3 form-style2">
                                                                    <div className="group-select select-wrapper">
                                                                        <select className="nice-select" tabIndex={0}><span className="current">Location</span>

                                                                            <option value className="option">Location</option>
                                                                            <option value="Japan" className="option">Japan</option>
                                                                            <option value="America" className="option d">America</option>
                                                                            <option value="England" className="option ">England</option>
                                                                            <option value="Japan" className="option">Belgium</option>
                                                                            <option value="England" className="option ">France</option>
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
                                            <div className="widget widget-estate">
                                                <h3 className="widget-title title-news">
                                                    Real estate near you
                                                </h3>
                                                <ul className="group-estate flex">
                                                    <li className="box-estate hover-img2">
                                                        <div className="thumb img-style2 ">
                                                            <img className="img2" src="/assets/images/img-box/sidebar-estate-1.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title link-style-3 fw-6 lh-18"><Link href="/properties-map-v1">Moncton</Link> </div>
                                                            <p className="fs-12 lh-16 text-color-1">1570 listing</p>
                                                        </div>
                                                    </li>
                                                    <li className="box-estate hover-img2">
                                                        <div className="thumb img-style2 ">
                                                            <img className="img2" src="/assets/images/img-box/sidebar-estate-2.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title link-style-3 fw-6 lh-18"><Link href="/properties-map-v1">Mississauga</Link> </div>
                                                            <p className="fs-12 lh-16 text-color-1">1570 listing</p>
                                                        </div>
                                                    </li>
                                                    <li className="box-estate hover-img2">
                                                        <div className="thumb img-style2 ">
                                                            <img className="img2" src="/assets/images/img-box/sidebar-estate-3.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title link-style-3 fw-6 lh-18"><Link href="/properties-map-v1">Halifax</Link> </div>
                                                            <p className="fs-12 lh-16 text-color-1">1570 listing</p>
                                                        </div>
                                                    </li>
                                                    <li className="box-estate hover-img2">
                                                        <div className="thumb img-style2 ">
                                                            <img className="img2" src="/assets/images/img-box/sidebar-estate-4.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title link-style-3 fw-6 lh-18"><Link href="/properties-map-v1">Ottawa</Link> </div>
                                                            <p className="fs-12 lh-16 text-color-1">1570 listing</p>
                                                        </div>
                                                    </li>
                                                    <li className="box-estate hover-img2">
                                                        <div className="thumb img-style2 ">
                                                            <img className="img2" src="/assets/images/img-box/sidebar-estate-5.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title link-style-3 fw-6 lh-18"><Link href="/properties-map-v1">Iqaluit</Link> </div>
                                                            <p className="fs-12 lh-16 text-color-1">1570 listing</p>
                                                        </div>
                                                    </li>
                                                    <li className="box-estate hover-img2">
                                                        <div className="thumb img-style2 ">
                                                            <img className="img2" src="/assets/images/img-box/sidebar-estate-6.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title link-style-3 fw-6 lh-18"><Link href="/properties-map-v1">Toronto</Link> </div>
                                                            <p className="fs-12 lh-16 text-color-1">1570 listing</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="widget widget-ads">
                                                <div className="box-ads">
                                                    <div className="content relative z-2">
                                                        <h3 className="link-style-3"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                        <div className="text-addres "><p className="p-12 text-color-1 icon-p">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                        <div className="star flex">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                        </div>
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