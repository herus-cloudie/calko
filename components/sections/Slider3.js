

import Link from 'next/link';
import { useState } from 'react';

export default function Slider3() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    const [isToggled, setToggled] = useState(false);
    const handleToggle = () => setToggled(!isToggled);
    return (
        <>
            <section className="slider home2 home3">
                <div className="slider-item">
                    <div className="img-slider">
                        <img className="img-item" src="/assets/images/slider/bg-slider-3.jpg" alt="" />
                    </div>
                    <div className="container  relative">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="content po-content-two">
                                    <div className="heading center">
                                        <h1 className="text-color-1 fs-60 font-2 fw-8 wow fadeInDown js-letters" data-wow-delay="50ms" data-wow-duration="1000ms">Find Your Dream Place</h1>
                                        <p className="font-2  text-color-1 text-t">Find your dream home easily and quickly here</p>
                                    </div>
                                    <div className="flat-tabs themesflat-tabs">
                                        <div className="box-tab center">
                                            <ul className="menu-tab tab-title flex justify-center">
                                                <li className={activeIndex == 1 ? "item-title active" : "item-title"} onClick={() => handleOnClick(1)}>
                                                    <h4 className="inner">Rent</h4>
                                                </li>
                                                <li className={activeIndex == 2 ? "item-title style active" : "item-title style"} onClick={() => handleOnClick(2)}>
                                                    <h4 className="inner"> Buy </h4>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="content-tab">
                                            <div className="content-inner tab-content">
                                                <div className="form-sl">
                                                    <form method="post">
                                                        <div className="wd-find-select flex">
                                                            <div className="form-group-1 search-form form-style">
                                                                <input type="search" className="search-field" placeholder="Type keyword..." name="s" title="Search for" required />
                                                            </div>
                                                            <div className="form-group-2 form-style">
                                                                <div className="group-select select-wrapper">
                                                                    <select className="nice-select" tabIndex={0}><span className="current">Property type</span>

                                                                        <option value className="option">Property type</option>
                                                                        <option value="bungalow" className="option">Bungalow</option>
                                                                        <option value="apartment" className="option">Apartment</option>
                                                                        <option value="house" className="option">House</option>
                                                                        <option value="smart-home" className="option">Smart Home</option>
                                                                        <option value="Single family home" className="option">Office</option>
                                                                        <option value="Multi family home" className="option">Villa</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group-3 form-style">
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
                                                            <div className="form-group-4 form-style">
                                                                <a className="icon-filter pull-right" onClick={handleToggle}>
                                                                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M3 10.5V0.75M3 10.5C3.39782 10.5 3.77936 10.658 4.06066 10.9393C4.34196 11.2206 4.5 11.6022 4.5 12C4.5 12.3978 4.34196 12.7794 4.06066 13.0607C3.77936 13.342 3.39782 13.5 3 13.5M3 10.5C2.60218 10.5 2.22064 10.658 1.93934 10.9393C1.65804 11.2206 1.5 11.6022 1.5 12C1.5 12.3978 1.65804 12.7794 1.93934 13.0607C2.22064 13.342 2.60218 13.5 3 13.5M3 17.25V13.5M15 10.5V0.75M15 10.5C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5M15 10.5C14.6022 10.5 14.2206 10.658 13.9393 10.9393C13.658 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.658 12.7794 13.9393 13.0607C14.2206 13.342 14.6022 13.5 15 13.5M15 17.25V13.5M9 4.5V0.75M9 4.5C9.39782 4.5 9.77936 4.65804 10.0607 4.93934C10.342 5.22064 10.5 5.60218 10.5 6C10.5 6.39782 10.342 6.77936 10.0607 7.06066C9.77936 7.34196 9.39782 7.5 9 7.5M9 4.5C8.60218 4.5 8.22064 4.65804 7.93934 4.93934C7.65804 5.22064 7.5 5.60218 7.5 6C7.5 6.39782 7.65804 6.77936 7.93934 7.06066C8.22064 7.34196 8.60218 7.5 9 7.5M9 17.25V7.5" stroke="#0D4AA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                            <div className="button-search sc-btn-top">
                                                                <Link className="sc-button" href="#">
                                                                    <span>Search Now</span>
                                                                    <i className="far fa-search text-color-1" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className={`wd-find-select wd-search-form ${isToggled? " show" : " "}`}>
                                                            <div className="box1 flex flex-wrap form-wg">
                                                                <div className="form-group wg-box3">
                                                                    <div className="group-select select-wrapper">
                                                                        <select className="nice-select" tabIndex={0}><span className="current">Baths: Any</span>

                                                                            <option value className="option">Baths: Any</option>
                                                                            <option value={1} className="option">1</option>
                                                                            <option value={2} className="option">2</option>
                                                                            <option value={3} className="option">3</option>
                                                                            <option value={4} className="option">4</option>
                                                                            <option value={5} className="option">5</option>
                                                                            <option value={6} className="option">6</option>
                                                                            <option value={7} className="option">7</option>
                                                                            <option value={8} className="option">8</option>
                                                                            <option value={9} className="option">9</option>
                                                                            <option value={9} className="option">10</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group wg-box3">
                                                                    <div className="group-select select-wrapper">
                                                                        <select className="nice-select" tabIndex={0}><span className="current">Beds: Any</span>

                                                                            <option value className="option">Beds: Any</option>
                                                                            <option value={1} className="option">1</option>
                                                                            <option value={2} className="option">2</option>
                                                                            <option value={3} className="option">3</option>
                                                                            <option value={4} className="option">4</option>
                                                                            <option value={5} className="option">5</option>
                                                                            <option value={6} className="option">6</option>
                                                                            <option value={7} className="option">7</option>
                                                                            <option value={8} className="option">8</option>
                                                                            <option value={9} className="option">9</option>
                                                                            <option value={9} className="option">10</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group wg-box3">
                                                                    <div className="widget widget-price ">
                                                                        <div className="caption flex-two">
                                                                            <div>
                                                                                <span className="fw-6">Form</span>
                                                                                <span id="slider-range-value1" />
                                                                                <span id="slider-range-value2" />
                                                                            </div>
                                                                        </div>
                                                                        <div id="slider-range" />
                                                                        <div className=" slider-labels">
                                                                            <div>
                                                                                <input type="hidden" name="min-value" />
                                                                                <input type="hidden" name="max-value" />
                                                                            </div>
                                                                        </div>
                                                                    </div>{/* /.widget_price */}
                                                                </div>
                                                                <div className="form-group wg-box3">
                                                                    <div className="widget widget-price ">
                                                                        <div className="caption flex-two">
                                                                            <div>
                                                                                <span className="fw-6">Size</span>
                                                                                <span id="slider-range-value01" />
                                                                                <span id="slider-range-value02" />
                                                                            </div>
                                                                        </div>
                                                                        <div id="slider-range2" />
                                                                        <div className="slider-labels">
                                                                            <div>
                                                                                <input type="hidden" name="min-value2" />
                                                                                <input type="hidden" name="max-value2" />
                                                                            </div>
                                                                        </div>
                                                                    </div>{/* /.widget_price */}
                                                                </div>
                                                            </div>
                                                            <div className="boder-wg" />
                                                            <div className="box2 flex flex-wrap form-wg">
                                                                <div className="form-group wg-box3">
                                                                    <div className="tf-amenities bg-white">
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">Swimming pool</span>
                                                                        </label>
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">Garage</span>
                                                                        </label>
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">Alarm system</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group wg-box3">
                                                                    <div className="tf-amenities bg-white">
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">Balcony</span>
                                                                        </label>
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">Outdoor area</span>
                                                                        </label>
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">Broadband</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group wg-box3">
                                                                    <div className="tf-amenities bg-white">
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">Ensuite</span>
                                                                        </label>
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">Built in robes</span>
                                                                        </label>
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13 ">Gym</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group wg-box3">
                                                                    <div className="tf-amenities bg-white">
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">Tennis court</span>
                                                                        </label>
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">Study</span>
                                                                        </label>
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">Outdoor spa</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    {/* End Job  Search Form*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wrap-icon flex align-center justify-center link-style-3">
                                        <div className="icon-box fs-13"><span className="icons-house icon-house-1" /><Link href="#">Houses</Link></div>
                                        <div className="icon-box fs-13"><span className="icons-house icon-house-2" /><Link href="#">Villa</Link></div>
                                        <div className="icon-box fs-13"><span className="icons-house icon-house-3" /><Link href="#">Office</Link></div>
                                        <div className="icon-box fs-13"><span className="icons-house icon-house-4" /><Link href="#">Apartments</Link></div>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </section >
        </>
    )
}
