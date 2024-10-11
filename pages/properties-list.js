import TopFilters from "@/components/elements/TopFilters"
import Layout from "@/components/layout/Layout"
import Link from 'next/link'
export default function PropertyList() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <TopFilters />
                <section className="flat-title-page inner style2"> <div className="overlay2" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-title-heading">
                                    <div className="heading-inner">
                                        <div className="heading"><span>Gorgeous Apartment Building</span> </div>
                                        <div className="wg-dream">
                                            <div className="icon-boxs flex">
                                                <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                <div className="icons icon-4 flex"><span>58 Hullbrook Road, Billesley, B13 0LA</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flat-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-inner">
                                    <div className="title-group fs-12"><a className="home fw-6 text-color-3" href="/">Home</a><span>Property Listing</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" flat-property flat-property-list2 flat-properties-rent tf-section2 wg-dream ">
                    <div className="container">
                        <div className="row flex">
                            <div className="col-lg-12">
                                <div className="posts">
                                    <div className="category-filter flex justify-space">
                                        <div className="box-1 flex align-center">
                                            <div className="heading-listing fs-30 lh-45 fw-7">Property Listing</div><div className>There are currently 164,814 properties.</div>
                                        </div>
                                        <div className="box-2 flex">
                                            <Link href="#" className="btn-view grid active">
                                                <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.04883 6.40508C5.04883 5.6222 5.67272 5 6.41981 5C7.16686 5 7.7908 5.62221 7.7908 6.40508C7.7908 7.18801 7.16722 7.8101 6.41981 7.8101C5.67241 7.8101 5.04883 7.18801 5.04883 6.40508Z" stroke="#8E8E93" />
                                                    <path d="M11.1045 6.40508C11.1045 5.62221 11.7284 5 12.4755 5C13.2229 5 13.8466 5.6222 13.8466 6.40508C13.8466 7.18789 13.2227 7.8101 12.4755 7.8101C11.7284 7.8101 11.1045 7.18794 11.1045 6.40508Z" stroke="#8E8E93" />
                                                    <path d="M19.9998 6.40514C19.9998 7.18797 19.3757 7.81016 18.6288 7.81016C17.8818 7.81016 17.2578 7.18794 17.2578 6.40508C17.2578 5.62211 17.8813 5 18.6288 5C19.3763 5 19.9998 5.62215 19.9998 6.40514Z" stroke="#8E8E93" />
                                                    <path d="M7.74249 12.5097C7.74249 13.2926 7.11849 13.9147 6.37133 13.9147C5.62411 13.9147 5 13.2926 5 12.5097C5 11.7267 5.62419 11.1044 6.37133 11.1044C7.11842 11.1044 7.74249 11.7266 7.74249 12.5097Z" stroke="#8E8E93" />
                                                    <path d="M13.7976 12.5097C13.7976 13.2927 13.1736 13.9147 12.4266 13.9147C11.6795 13.9147 11.0557 13.2927 11.0557 12.5097C11.0557 11.7265 11.6793 11.1044 12.4266 11.1044C13.1741 11.1044 13.7976 11.7265 13.7976 12.5097Z" stroke="#8E8E93" />
                                                    <path d="M19.9516 12.5097C19.9516 13.2927 19.328 13.9147 18.5807 13.9147C17.8329 13.9147 17.209 13.2925 17.209 12.5097C17.209 11.7268 17.8332 11.1044 18.5807 11.1044C19.3279 11.1044 19.9516 11.7265 19.9516 12.5097Z" stroke="#8E8E93" />
                                                    <path d="M5.04297 18.5947C5.04297 17.8118 5.66709 17.1896 6.4143 17.1896C7.16137 17.1896 7.78523 17.8116 7.78523 18.5947C7.78523 19.3778 7.16139 19.9997 6.4143 19.9997C5.66714 19.9997 5.04297 19.3773 5.04297 18.5947Z" stroke="#8E8E93" />
                                                    <path d="M11.0986 18.5947C11.0986 17.8118 11.7227 17.1896 12.47 17.1896C13.2169 17.1896 13.8409 17.8117 13.8409 18.5947C13.8409 19.3778 13.2169 19.9997 12.47 19.9997C11.7225 19.9997 11.0986 19.3774 11.0986 18.5947Z" stroke="#8E8E93" />
                                                    <path d="M17.252 18.5947C17.252 17.8117 17.876 17.1896 18.6229 17.1896C19.3699 17.1896 19.9939 17.8117 19.9939 18.5947C19.9939 19.3778 19.3702 19.9997 18.6229 19.9997C17.876 19.9997 17.252 19.3774 17.252 18.5947Z" stroke="#8E8E93" />
                                                </svg>
                                            </Link>
                                            <Link href="#" className="btn-view list">
                                                <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.7016 18.3317H9.00246C8.5615 18.3317 8.2041 17.9743 8.2041 17.5333C8.2041 17.0923 8.5615 16.7349 9.00246 16.7349H19.7013C20.1423 16.7349 20.4997 17.0923 20.4997 17.5333C20.4997 17.9743 20.1426 18.3317 19.7016 18.3317Z" fill="#8E8E93" />
                                                    <path d="M19.7016 13.3203H9.00246C8.5615 13.3203 8.2041 12.9629 8.2041 12.5219C8.2041 12.081 8.5615 11.7236 9.00246 11.7236H19.7013C20.1423 11.7236 20.4997 12.081 20.4997 12.5219C20.5 12.9629 20.1426 13.3203 19.7016 13.3203Z" fill="#8E8E93" />
                                                    <path d="M19.7016 8.30919H9.00246C8.5615 8.30919 8.2041 7.95179 8.2041 7.51083C8.2041 7.06986 8.5615 6.71246 9.00246 6.71246H19.7013C20.1423 6.71246 20.4997 7.06986 20.4997 7.51083C20.4997 7.95179 20.1426 8.30919 19.7016 8.30919Z" fill="#8E8E93" />
                                                    <path d="M5.5722 8.64465C6.16436 8.64465 6.6444 8.16461 6.6444 7.57245C6.6444 6.98029 6.16436 6.50024 5.5722 6.50024C4.98004 6.50024 4.5 6.98029 4.5 7.57245C4.5 8.16461 4.98004 8.64465 5.5722 8.64465Z" fill="#8E8E93" />
                                                    <path d="M5.5722 13.5942C6.16436 13.5942 6.6444 13.1141 6.6444 12.522C6.6444 11.9298 6.16436 11.4498 5.5722 11.4498C4.98004 11.4498 4.5 11.9298 4.5 12.522C4.5 13.1141 4.98004 13.5942 5.5722 13.5942Z" fill="#8E8E93" />
                                                    <path d="M5.5722 18.5438C6.16436 18.5438 6.6444 18.0637 6.6444 17.4716C6.6444 16.8794 6.16436 16.3994 5.5722 16.3994C4.98004 16.3994 4.5 16.8794 4.5 17.4716C4.5 18.0637 4.98004 18.5438 5.5722 18.5438Z" fill="#8E8E93" />
                                                </svg>
                                            </Link>
                                            <div className="wd-find-select flex">
                                                <div className="group-select select-wrapper style-3">
                                                    <select className="nice-select" tabIndex={0}><span className="current">Show: 50</span>

                                                        <option value={10} className="option">Show: 10</option>
                                                        <option value={30} className="option">Show: 30</option>
                                                        <option value={50} className="option">Show: 50</option>
                                                        <option value={100} className="option">Show: 100</option>
                                                    </select>
                                                </div>
                                                <div className="group-select select-wrapper style-3">
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
                                    <div className="wrap-list ">
                                        <div className="box box-dream flex">
                                            <div className="image-group relative flex">
                                                <div className="img-box img-box1 flex-none relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <img src="/assets/images/house/property-listing-1.jpg" alt="images" />
                                                </div>
                                                <div className="img-box img-box2">
                                                    <img className="img-2" src="/assets/images/house/property-listing-2.jpg" alt="images" />
                                                    <img src="/assets/images/house/property-listing-4.jpg" alt="images" />
                                                </div>
                                                <div className="img-box img-box3">
                                                    <img className="img-3" src="/assets/images/house/property-listing-3.jpg" alt="images" />
                                                    <div className="icon-inner center relative">
                                                        <div className="imgs">
                                                            <img src="/assets/images/house/property-listing-5.jpg" alt="images" />
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
                                            <div className="content">
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
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
                                        <div className="box box-dream flex">
                                            <div className="image-group relative flex">
                                                <div className="img-box img-box1 flex-none relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <img src="/assets/images/house/property-listing-6.jpg" alt="images" />
                                                </div>
                                                <div className="img-box img-box2">
                                                    <img className="img-2" src="/assets/images/house/property-listing-7.jpg" alt="images" />
                                                    <img src="/assets/images/house/property-listing-9.jpg" alt="images" />
                                                </div>
                                                <div className="img-box img-box3">
                                                    <img className="img-3" src="/assets/images/house/property-listing-8.jpg" alt="images" />
                                                    <div className="icon-inner center relative">
                                                        <div className="imgs">
                                                            <img src="/assets/images/house/property-listing-10.jpg" alt="images" />
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
                                            <div className="content">
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13...</p></div>
                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="img-box flex justify-space align-center">
                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-list-2.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                    <a className="icon-repeat">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box box-dream flex">
                                            <div className="image-group relative flex">
                                                <div className="img-box img-box1 flex-none relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <img src="/assets/images/house/property-listing-11.jpg" alt="images" />
                                                </div>
                                                <div className="img-box img-box2">
                                                    <img className="img-2" src="/assets/images/house/property-listing-12.jpg" alt="images" />
                                                    <img src="/assets/images/house/property-listing-14.jpg" alt="images" />
                                                </div>
                                                <div className="img-box img-box3">
                                                    <img className="img-3" src="/assets/images/house/property-listing-13.jpg" alt="images" />
                                                    <div className="icon-inner center relative">
                                                        <div className="imgs">
                                                            <img src="/assets/images/house/property-listing-15.jpg" alt="images" />
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
                                            <div className="content">
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13...</p></div>
                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="img-box flex justify-space align-center">
                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-list-3.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                    <a className="icon-repeat">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box box-dream flex">
                                            <div className="image-group relative flex">
                                                <div className="img-box img-box1 flex-none relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <img src="/assets/images/house/property-listing-16.jpg" alt="images" />
                                                </div>
                                                <div className="img-box img-box2">
                                                    <img className="img-2" src="/assets/images/house/property-listing-17.jpg" alt="images" />
                                                    <img src="/assets/images/house/property-listing-18.jpg" alt="images" />
                                                </div>
                                                <div className="img-box img-box3">
                                                    <img className="img-3" src="/assets/images/house/property-listing-19.jpg" alt="images" />
                                                    <div className="icon-inner center relative">
                                                        <div className="imgs">
                                                            <img src="/assets/images/house/property-listing-20.jpg" alt="images" />
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
                                            <div className="content">
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13...</p></div>
                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="img-box flex justify-space align-center">
                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-list-4.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                    <a className="icon-repeat">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box box-dream flex">
                                            <div className="image-group relative flex">
                                                <div className="img-box img-box1 flex-none relative">
                                                    <span className="featured fs-12 fw-6">Featured</span>
                                                    <span className="featured style fs-12 fw-6">For sale</span>
                                                    <img src="/assets/images/house/property-listing-21.jpg" alt="images" />
                                                </div>
                                                <div className="img-box img-box2">
                                                    <img className="img-2" src="/assets/images/house/property-listing-22.jpg" alt="images" />
                                                    <img src="/assets/images/house/property-listing-23.jpg" alt="images" />
                                                </div>
                                                <div className="img-box img-box3">
                                                    <img className="img-3" src="/assets/images/house/property-listing-24.jpg" alt="images" />
                                                    <div className="icon-inner center relative">
                                                        <div className="imgs">
                                                            <img src="/assets/images/house/property-listing-25.jpg" alt="images" />
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
                                            <div className="content">
                                                <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                                <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13...</p></div>
                                                <div className="money fs-20 fw-8 font-2 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                                <div className="icon-box">
                                                    <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                                    <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                                    <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                                </div>
                                                <div className="img-box flex justify-space align-center">
                                                    <div className="img-author flex align-center"><img src="/assets/images/author/author-list-5.jpg" alt="images" /><div className="fs-13 fw-6 link-style-1"><Link href="#">Kathryn Murphy</Link></div> </div>
                                                    <a className="icon-repeat">
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
                                </div>
                            </div>
                        </div>
                    </div>
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

            </Layout >
        </>
    )
}