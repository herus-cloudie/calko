import TopFilters from "@/components/elements/TopFilters";
import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import Link from 'next/link';
import { useState } from "react";
const MapCluster = dynamic(() => import("@/components/elements/MapCluster"), { ssr: false })
export default function PropertyMap3() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    const [isToggled, setToggled] = useState(false);
    const handleToggle = () => setToggled(!isToggled);
    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <TopFilters />
                    <div className=" wrap-map3 flat-property flat-property-list2  style flex">
                        <div className="content-left wg-dream relative">
                            <div className="category-filter flex justify-space">
                                <div className="box-1 ">
                                    <div className="heading-listing fs-30 lh-45 fw-7">Property Listing</div><div className>There are currently 164,814 properties.</div>
                                </div>
                                <div className="box-2 flex">
                                    <div className="wd-find-select flex">
                                        <div className="group-select select-wrapper">
                                            <select className="nice-select" tabIndex={0}><span className="current">Default order</span>

                                                <option value className="option">Default order</option>
                                                <option value="by-latest" className="option">All </option>
                                                <option value="low-to-high" className="option">Low to high</option>
                                                <option value="high-to-low" className="option">High to low</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wrap-list">
                                <div className="box box-dream ">
                                    <div className="image-group relative flex">
                                        <div className="img-box img-box1 relative">
                                            <span className="featured fs-12 fw-6">Featured</span>
                                            <span className="featured style fs-12 fw-6">For sale</span>
                                            <img src="/assets/images/house/property-listing-map-1.jpg" alt="images" />
                                        </div>
                                        <div className="img-box img-box2">
                                            <img className="img-2" src="/assets/images/house/property-listing-map-2.jpg" alt="images" />
                                            <img src="/assets/images/house/property-listing-map-3.jpg" alt="images" />
                                        </div>
                                        <div className="img-box img-box3">
                                            <img className="img-3" src="/assets/images/house/property-listing-map-4.jpg" alt="images" />
                                            <div className="icon-inner center relative">
                                                <div className="imgs">
                                                    <img src="/assets/images/house/property-listing-map-5.jpg" alt="images" />
                                                </div>
                                                <div className="contents z-2">
                                                    <svg width={21} height={18} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.75 12.75L5.909 7.591C6.11793 7.38206 6.36597 7.21633 6.63896 7.10325C6.91194 6.99018 7.20452 6.93198 7.5 6.93198C7.79548 6.93198 8.08806 6.99018 8.36104 7.10325C8.63403 7.21633 8.88207 7.38206 9.091 7.591L14.25 12.75M12.75 11.25L14.159 9.841C14.3679 9.63206 14.616 9.46633 14.889 9.35325C15.1619 9.24018 15.4545 9.18198 15.75 9.18198C16.0455 9.18198 16.3381 9.24018 16.611 9.35325C16.884 9.46633 17.1321 9.63206 17.341 9.841L20.25 12.75M2.25 16.5H18.75C19.1478 16.5 19.5294 16.342 19.8107 16.0607C20.092 15.7794 20.25 15.3978 20.25 15V3C20.25 2.60218 20.092 2.22064 19.8107 1.93934C19.5294 1.65804 19.1478 1.5 18.75 1.5H2.25C1.85218 1.5 1.47064 1.65804 1.18934 1.93934C0.908035 2.22064 0.75 2.60218 0.75 3V15C0.75 15.3978 0.908035 15.7794 1.18934 16.0607C1.47064 16.342 1.85218 16.5 2.25 16.5ZM12.75 5.25H12.758V5.258H12.75V5.25ZM13.125 5.25C13.125 5.34946 13.0855 5.44484 13.0152 5.51517C12.9448 5.58549 12.8495 5.625 12.75 5.625C12.6505 5.625 12.5552 5.58549 12.4848 5.51517C12.4145 5.44484 12.375 5.34946 12.375 5.25C12.375 5.15054 12.4145 5.05516 12.4848 4.98484C12.5552 4.91451 12.6505 4.875 12.75 4.875C12.8495 4.875 12.9448 4.91451 13.0152 4.98484C13.0855 5.05516 13.125 5.15054 13.125 5.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <div className="fw-6 text-color-1"><Link href="#">12 images</Link> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content relative">
                                        <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                        <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                        <div className="money fs-18 fw-6  text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                        <div className="icon-box flex">
                                            <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                            <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                            <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                        </div>
                                        <a className="icon-d icon-book">
                                            <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.2626 1.93781C10.9042 2.01247 11.375 2.56606 11.375 3.21239V12.25L7 10.0625L2.625 12.25V3.21239C2.625 2.56606 3.09517 2.01247 3.73742 1.93781C5.90519 1.68618 8.09481 1.68618 10.2626 1.93781V1.93781Z" stroke="#FFA920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {/* <i class="far fa-bookmark"></i> */}
                                        </a>
                                        <a className="icon-d icon-repeat">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="box box-dream ">
                                    <div className="image-group relative flex">
                                        <div className="img-box img-box1 relative">
                                            <span className="featured fs-12 fw-6">Featured</span>
                                            <span className="featured style fs-12 fw-6">For sale</span>
                                            <img src="/assets/images/house/property-listing-map-6.jpg" alt="images" />
                                        </div>
                                        <div className="img-box img-box2">
                                            <img className="img-2" src="/assets/images/house/property-listing-map-7.jpg" alt="images" />
                                            <img src="/assets/images/house/property-listing-map-8.jpg" alt="images" />
                                        </div>
                                        <div className="img-box img-box3">
                                            <img className="img-3" src="/assets/images/house/property-listing-map-9.jpg" alt="images" />
                                            <div className="icon-inner center relative">
                                                <div className="imgs">
                                                    <img src="/assets/images/house/property-listing-map-10.jpg" alt="images" />
                                                </div>
                                                <div className="contents z-2">
                                                    <svg width={21} height={18} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.75 12.75L5.909 7.591C6.11793 7.38206 6.36597 7.21633 6.63896 7.10325C6.91194 6.99018 7.20452 6.93198 7.5 6.93198C7.79548 6.93198 8.08806 6.99018 8.36104 7.10325C8.63403 7.21633 8.88207 7.38206 9.091 7.591L14.25 12.75M12.75 11.25L14.159 9.841C14.3679 9.63206 14.616 9.46633 14.889 9.35325C15.1619 9.24018 15.4545 9.18198 15.75 9.18198C16.0455 9.18198 16.3381 9.24018 16.611 9.35325C16.884 9.46633 17.1321 9.63206 17.341 9.841L20.25 12.75M2.25 16.5H18.75C19.1478 16.5 19.5294 16.342 19.8107 16.0607C20.092 15.7794 20.25 15.3978 20.25 15V3C20.25 2.60218 20.092 2.22064 19.8107 1.93934C19.5294 1.65804 19.1478 1.5 18.75 1.5H2.25C1.85218 1.5 1.47064 1.65804 1.18934 1.93934C0.908035 2.22064 0.75 2.60218 0.75 3V15C0.75 15.3978 0.908035 15.7794 1.18934 16.0607C1.47064 16.342 1.85218 16.5 2.25 16.5ZM12.75 5.25H12.758V5.258H12.75V5.25ZM13.125 5.25C13.125 5.34946 13.0855 5.44484 13.0152 5.51517C12.9448 5.58549 12.8495 5.625 12.75 5.625C12.6505 5.625 12.5552 5.58549 12.4848 5.51517C12.4145 5.44484 12.375 5.34946 12.375 5.25C12.375 5.15054 12.4145 5.05516 12.4848 4.98484C12.5552 4.91451 12.6505 4.875 12.75 4.875C12.8495 4.875 12.9448 4.91451 13.0152 4.98484C13.0855 5.05516 13.125 5.15054 13.125 5.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <div className="fw-6 text-color-1"><Link href="#">12 images</Link> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content relative">
                                        <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                        <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                        <div className="money fs-18 fw-6  text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                        <div className="icon-box flex">
                                            <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                            <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                            <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                        </div>
                                        <a className="icon-d icon-book">
                                            <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.2626 1.93781C10.9042 2.01247 11.375 2.56606 11.375 3.21239V12.25L7 10.0625L2.625 12.25V3.21239C2.625 2.56606 3.09517 2.01247 3.73742 1.93781C5.90519 1.68618 8.09481 1.68618 10.2626 1.93781V1.93781Z" stroke="#FFA920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {/* <i class="far fa-bookmark"></i> */}
                                        </a>
                                        <a className="icon-d icon-repeat">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="box box-dream ">
                                    <div className="image-group relative flex">
                                        <div className="img-box img-box1 relative">
                                            <span className="featured fs-12 fw-6">Featured</span>
                                            <span className="featured style fs-12 fw-6">For sale</span>
                                            <img src="/assets/images/house/property-listing-map-11.jpg" alt="images" />
                                        </div>
                                        <div className="img-box img-box2">
                                            <img className="img-2" src="/assets/images/house/property-listing-map-12.jpg" alt="images" />
                                            <img src="/assets/images/house/property-listing-map-13.jpg" alt="images" />
                                        </div>
                                        <div className="img-box img-box3">
                                            <img className="img-3" src="/assets/images/house/property-listing-map-14.jpg" alt="images" />
                                            <div className="icon-inner center relative">
                                                <div className="imgs">
                                                    <img src="/assets/images/house/property-listing-map-15.jpg" alt="images" />
                                                </div>
                                                <div className="contents z-2">
                                                    <svg width={21} height={18} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.75 12.75L5.909 7.591C6.11793 7.38206 6.36597 7.21633 6.63896 7.10325C6.91194 6.99018 7.20452 6.93198 7.5 6.93198C7.79548 6.93198 8.08806 6.99018 8.36104 7.10325C8.63403 7.21633 8.88207 7.38206 9.091 7.591L14.25 12.75M12.75 11.25L14.159 9.841C14.3679 9.63206 14.616 9.46633 14.889 9.35325C15.1619 9.24018 15.4545 9.18198 15.75 9.18198C16.0455 9.18198 16.3381 9.24018 16.611 9.35325C16.884 9.46633 17.1321 9.63206 17.341 9.841L20.25 12.75M2.25 16.5H18.75C19.1478 16.5 19.5294 16.342 19.8107 16.0607C20.092 15.7794 20.25 15.3978 20.25 15V3C20.25 2.60218 20.092 2.22064 19.8107 1.93934C19.5294 1.65804 19.1478 1.5 18.75 1.5H2.25C1.85218 1.5 1.47064 1.65804 1.18934 1.93934C0.908035 2.22064 0.75 2.60218 0.75 3V15C0.75 15.3978 0.908035 15.7794 1.18934 16.0607C1.47064 16.342 1.85218 16.5 2.25 16.5ZM12.75 5.25H12.758V5.258H12.75V5.25ZM13.125 5.25C13.125 5.34946 13.0855 5.44484 13.0152 5.51517C12.9448 5.58549 12.8495 5.625 12.75 5.625C12.6505 5.625 12.5552 5.58549 12.4848 5.51517C12.4145 5.44484 12.375 5.34946 12.375 5.25C12.375 5.15054 12.4145 5.05516 12.4848 4.98484C12.5552 4.91451 12.6505 4.875 12.75 4.875C12.8495 4.875 12.9448 4.91451 13.0152 4.98484C13.0855 5.05516 13.125 5.15054 13.125 5.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <div className="fw-6 text-color-1"><Link href="#">12 images</Link> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content relative">
                                        <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                        <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                        <div className="money fs-18 fw-6  text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                        <div className="icon-box flex">
                                            <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                            <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                            <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                        </div>
                                        <a className="icon-d icon-book">
                                            <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.2626 1.93781C10.9042 2.01247 11.375 2.56606 11.375 3.21239V12.25L7 10.0625L2.625 12.25V3.21239C2.625 2.56606 3.09517 2.01247 3.73742 1.93781C5.90519 1.68618 8.09481 1.68618 10.2626 1.93781V1.93781Z" stroke="#FFA920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {/* <i class="far fa-bookmark"></i> */}
                                        </a>
                                        <a className="icon-d icon-repeat">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="themesflat-pagination clearfix center">
                                <ul>
                                    <li><Link href="#" className="page-numbers style"><i className="far fa-angle-left" /></Link></li>
                                    <li><Link href="#" className="page-numbers">1</Link></li>
                                    <li><Link href="#" className="page-numbers">2</Link></li>
                                    <li><Link href="#" className="page-numbers current">3</Link></li>
                                    <li><Link href="#" className="page-numbers">4</Link></li>
                                    <li><Link href="#" className="page-numbers">...</Link></li>
                                    <li><Link href="#" className="page-numbers style"><i className="far fa-angle-right" /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-right">
                            {/* <div id="map" className="row-height" data-map-zoom={16} data-map-scroll="true" /> */}
                            <MapCluster />
                        </div>
                    </div >
                    <section className="flat-contact2 relative style">
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