

import Link from 'next/link';
import { useState } from 'react';
import Carousel2 from '../slider/Carousel2';

export default function FlatFeatured5() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <section className="flat-featured wg-dream home5">
                <div className="container3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Featured f</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                            </div>
                            <div className="flat-tabs themesflat-tabs">
                                <div className="box-tab center">
                                    <ul className="menu-tab tab-title flex justify-center">
                                        <li className={activeIndex == 1 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="8 Property" onClick={() => handleOnClick(1)}>
                                            <h5 className="inner">Houses</h5>
                                        </li>
                                        <li className={activeIndex == 2 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="6 Property" onClick={() => handleOnClick(2)}>
                                            <h5 className="inner"> Smart home </h5>
                                        </li>
                                        <li className={activeIndex == 3 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="5 Property" onClick={() => handleOnClick(3)}>
                                            <h5 className="inner ">Apartments</h5>
                                        </li>
                                        <li className={activeIndex == 4 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="7 Property" onClick={() => handleOnClick(4)}>
                                            <h5 className="inner"> Office </h5>
                                        </li>
                                        <li className={activeIndex == 5 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="6 Property" onClick={() => handleOnClick(5)}>
                                            <h5 className="inner">Villa</h5>
                                        </li>
                                        <li className={activeIndex == 6 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip="3 Property" onClick={() => handleOnClick(6)}>
                                            <h5 className="inner"> Bungalow </h5>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content-tab">
                                    <div className="content-inner tab-content" style={{ display: `${activeIndex == 1 ? "block" : "none"}` }}>
                                        <div className="wrap-item flex">
                                            {/* col 1 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={5} end={9}/>
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
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={6} end={10}/>
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
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={7} end={11}/>
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
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={8} end={12}/>
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
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={9} end={13}/>
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
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={10} end={14}/>
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
                                            {/* col 7 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={11} end={15}/>
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
                                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-7.jpg" alt="images" /></div>
                                                        <div className="days">3 years ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* col 8 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={12} end={16}/>
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
                                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-8.jpg" alt="images" /></div>
                                                        <div className="days">3 years ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-inner tab-content" style={{ display: `${activeIndex == 2 ? "block" : "none"}` }}>
                                        <div className="wrap-item flex">
                                            {/* col 5 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={13} end={17}/>
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
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={14} end={18}/>
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
                                            {/* col 7 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={15} end={19}/>
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
                                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-7.jpg" alt="images" /></div>
                                                        <div className="days">3 years ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* col 8 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={16} end={20}/>
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
                                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-8.jpg" alt="images" /></div>
                                                        <div className="days">3 years ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-inner tab-content" style={{ display: `${activeIndex == 3 ? "block" : "none"}` }}>
                                        <div className="wrap-item flex">
                                            {/* col 1 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={17} end={21}/>
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
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={18} end={22}/>
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
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={19} end={23}/>
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
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={20} end={24}/>
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
                                    <div className="content-inner tab-content" style={{ display: `${activeIndex == 4 ? "block" : "none"}` }}>
                                        <div className="wrap-item flex">
                                            {/* col 1 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={21} end={25}/>
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
                                            {/* col 2 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={22} end={26}/>
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
                                            {/* col 3 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={23} end={27}/>
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
                                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-7.jpg" alt="images" /></div>
                                                        <div className="days">3 years ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* col 4 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={24} end={28}/>
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
                                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-8.jpg" alt="images" /></div>
                                                        <div className="days">3 years ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-inner tab-content" style={{ display: `${activeIndex == 5 ? "block" : "none"}` }}>
                                        <div className="wrap-item flex">
                                            {/* col 1 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={25} end={29}/>
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
                                            {/* col 2 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={26} end={30}/>
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
                                            {/* col 3 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={27} end={31}/>
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
                                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-7.jpg" alt="images" /></div>
                                                        <div className="days">3 years ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* col 4 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={28} end={32}/>
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
                                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-8.jpg" alt="images" /></div>
                                                        <div className="days">3 years ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-inner tab-content" style={{ display: `${activeIndex == 6 ? "block" : "none"}` }}>
                                        <div className="wrap-item flex">
                                            {/* col 1 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={29} end={33}/>
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
                                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-8.jpg" alt="images" /></div>
                                                        <div className="days">3 years ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* col 2 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={30} end={34}/>
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
                                            {/* col 3 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative ">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={31} end={35}/>
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
                                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-7.jpg" alt="images" /></div>
                                                        <div className="days">3 years ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* col 4 */}
                                            <div className="box box-dream hv-one">
                                                <div className="image-group relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                    <div className="swiper-container  carousel-2 img-style">
                                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                                        <Carousel2 start={32} end={36}/>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
