

import { useState } from 'react';
import ThreeCarousel from '../slider/ThreeCarousel';

export default function FlatFeatured2() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <section className="flat-featured wg-dream home2 tf-section">
                <div className="container5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Discover the latest real estate</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                            </div>
                        </div>
                        <div className="col-lg-12 wrap-tabs">
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
                                        <div className="swiper-container2">
                                            <ThreeCarousel />
                                        </div>
                                    </div>
                                    <div className="content-inner tab-content" style={{ display: `${activeIndex == 2 ? "block" : "none"}` }}>
                                        <div className="swiper-container2">
                                            <ThreeCarousel />
                                        </div>
                                    </div>
                                    <div className="content-inner tab-content" style={{ display: `${activeIndex == 3 ? "block" : "none"}` }}>
                                        <div className="swiper-container2">
                                            <ThreeCarousel />
                                        </div>
                                    </div>
                                    <div className="content-inner tab-content" style={{ display: `${activeIndex == 4 ? "block" : "none"}` }}>
                                        <div className="swiper-container2">
                                            <ThreeCarousel />
                                        </div>
                                    </div>
                                    <div className="content-inner tab-content" style={{ display: `${activeIndex == 5 ? "block" : "none"}` }}>
                                        <div className="swiper-container2">
                                            <ThreeCarousel />
                                        </div>
                                    </div>
                                    <div className="content-inner tab-content" style={{ display: `${activeIndex == 6 ? "block" : "none"}` }}>
                                        <div className="swiper-container2">
                                            <ThreeCarousel />
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
