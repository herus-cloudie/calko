

import Link from 'next/link';
import { useState } from 'react';

export default function Slider4() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    const [isToggled, setToggled] = useState(false);
    const handleToggle = () => setToggled(!isToggled);
    return (
        <>
            <section className="slider home4">
                <div className="slider-item">
                    <div className="container  relative">
                        <div className="row">
                            <div className="col-lg-7" dir='rtl'>
                                <div className="heading">
                                    <h1 style={{marginRight : '0px !important' , paddingRight : '0px !important'}} className="text-color-1 wow fadeInUp js-letters" data-wow-delay="0ms" data-wow-duration="1000ms">یک تجربه هیجان انگیز</h1>
                                    <p className="fs-16 lh-24 fw-6 text-color-1">از بین برند های مختلف خرید مورد نظرت رو انتخاب کن</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="content po-content-two">
                                    <div className="flat-tabs ">
                                        <div className="box-tab center">
                                            <ul className="menu-tab tab-title flex ">
                                                <li className={activeIndex == 1 ? "item-title active" : "item-title"} onClick={() => handleOnClick(1)}>
                                                    <h4 className="inner">همکاران</h4>
                                                </li>
                                                <li className={activeIndex == 2 ? "item-title style active" : "item-title style"} onClick={() => handleOnClick(2)}>
                                                    <h4 className="inner"> برندها </h4>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="content-tab">
                                            <div className="content-inner tab-content">
                                                <div className="form-sl">
                                                    <form method="post">
                                                        <div className="wd-find-select">
                                                            <div className="form-group form-group-1 search-form ">
                                                                <input type="search" className="search-field ali" placeholder="دنبال کدوم کسب و کاری؟" name="s" title="Search for" required />
                                                            </div>
                                                            <div className="form-group form-group-2 ">
                                                                <div className="group-select select-wrapper">
                                                                    <select className="nice-select" tabIndex={0}><span className="current">دسته بندی</span>
                                                                     <option value className="option">دسته بندی</option>
                                                                        <option value className="option">لوازم خانگی</option>
                                                                        <option value="bungalow" className="option">صنعت بیمه</option>
                                                                        <option value="apartment" className="option">تفریحات</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-group-3">
                                                                <div className="group-select select-wrapper">
                                                                    <select className="nice-select" tabIndex={0}><span className="current">موقعیت</span>

                                                                        <option value className="option">موقعیت</option>
                                                                        <option value="Japan" className="option">تهران</option>
                                                                        <option value="America" className="option d">البرز</option>
                                                                        <option value="England" className="option ">قم</option>
                                                                        <option value="Japan" className="option">اصفهان</option>
                                                                        <option value="England" className="option ">شیراز</option>
                                                                        <option value="VietNam" className="option">تبریز</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group flex">
                                                                <a className="sc-button icon-filter2 btn-1 btn-2 form-style center pull-right" onClick={handleToggle}>
                                                                    <span>فیلتر</span>
                                                                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M3 10.5V0.75M3 10.5C3.39782 10.5 3.77936 10.658 4.06066 10.9393C4.34196 11.2206 4.5 11.6022 4.5 12C4.5 12.3978 4.34196 12.7794 4.06066 13.0607C3.77936 13.342 3.39782 13.5 3 13.5M3 10.5C2.60218 10.5 2.22064 10.658 1.93934 10.9393C1.65804 11.2206 1.5 11.6022 1.5 12C1.5 12.3978 1.65804 12.7794 1.93934 13.0607C2.22064 13.342 2.60218 13.5 3 13.5M3 17.25V13.5M15 10.5V0.75M15 10.5C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5M15 10.5C14.6022 10.5 14.2206 10.658 13.9393 10.9393C13.658 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.658 12.7794 13.9393 13.0607C14.2206 13.342 14.6022 13.5 15 13.5M15 17.25V13.5M9 4.5V0.75M9 4.5C9.39782 4.5 9.77936 4.65804 10.0607 4.93934C10.342 5.22064 10.5 5.60218 10.5 6C10.5 6.39782 10.342 6.77936 10.0607 7.06066C9.77936 7.34196 9.39782 7.5 9 7.5M9 4.5C8.60218 4.5 8.22064 4.65804 7.93934 4.93934C7.65804 5.22064 7.5 5.60218 7.5 6C7.5 6.39782 7.65804 6.77936 7.93934 7.06066C8.22064 7.34196 8.60218 7.5 9 7.5M9 17.25V7.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </a>
                                                                <div className="button-search sc-btn-top center">
                                                                    <Link className="sc-button " href="#">
                                                                        <span>جستجو</span>
                                                                        <i className="far fa-search text-color-1" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={`wd-find-select wd-search-form ${isToggled? " show" : " "}`}>
                                                            <div className="box2 flex flex-wrap form-wg">
                                                                <div className="form-group wg-box3">
                                                                    <div className="tf-amenities bg-white">
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">15\20%</span>
                                                                        </label>
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">‌یک‌ بار مصرف</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group wg-box3">
                                                                    <div className="tf-amenities bg-white">
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">20\25%</span>
                                                                        </label>
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">چند بار مصرف</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group wg-box3">
                                                                    <div className="tf-amenities bg-white">
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">25\30%</span>
                                                                        </label>
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">اقساطی</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group wg-box3">
                                                                    <div className="tf-amenities bg-white">
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">30\35%</span>
                                                                        </label>
                                                                        <label className="flex"><input name="newsletter" type="checkbox" />
                                                                            <span className="btn-checkbox" /><span className="fs-13">اعتباری</span>
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
                                        <div className="icon-box fs-13"><Link href="#">تخفیف#</Link></div>
                                        <div className="icon-box fs-13"><Link href="#">همکاری#</Link></div>
                                        <div className="icon-box fs-13"><Link href="#">فروش#</Link></div>
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
