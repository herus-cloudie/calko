import Layout from "@/components/layout/Layout"
import Link from 'next/link'
export default function Blog() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Property Listing">
                <div>
                    <section className="tf-section2 flat-blog-grid flat-blog-list flat-property style4">
                        <div className="container">
                            <div className="row flex">
                                <div className="col-lg-8">
                                    <div className="post">
                                        <div className="category-filter flex  justify-space">
                                            <div className="box-1 ">
                                                <div className="heading-listing fs-30 lh-45 fw-7">Blog List</div>
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
                                            </div>
                                        </div>
                                        <div className="flat-blog">
                                            <div className="box-heading ">
                                                <div className="image relative ">
                                                    <img src="/assets/images/img-box/blog-list.jpg" alt="images" />
                                                    <div className="sub-box flex align-center fs-13 fw-6">
                                                        <div className="title-1">April</div><a className="title-2 text-color-3">Housing</a>
                                                    </div>
                                                </div>
                                                <div className="contents center">
                                                    <div className="title-heading fs-30 fw-7 lh-45">Real estate shifts: Prices and sales trending down in two different spheres</div>
                                                    <h4 className="fw-4">Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money, culture and policy. Tune in Monday through Friday at 7 p.m. ET on...</h4>
                                                </div>
                                            </div>
                                            <div className="wrap-blog ">
                                                <div className="box hover-img flex">
                                                    <div className="images img-style relative flex-none">
                                                        <img src="/assets/images/img-box/blog-list-1.jpg" alt="images" />
                                                        <div className="sub-box flex align-center justify-space fs-13 fw-6">
                                                            <div className="title-1">January 30</div><a className="title-2 text-color-3">Housing</a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3><Link href="/blog-detail">We are hiring ‘moderately,’ says Compass CEO</Link></h3>
                                                        <p className="text-color-2">Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money...</p>
                                                        <div className="meta">
                                                            <Link href="/blog-detail" className="btn-button flex align-center fs-13 fw-6 text-color-3"><span>Read more </span>
                                                                <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#0D4AA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box hover-img flex">
                                                    <div className="images img-style relative flex-none">
                                                        <img src="/assets/images/img-box/blog-list-2.jpg" alt="images" />
                                                        <div className="sub-box flex align-center justify-space fs-13 fw-6">
                                                            <div className="title-1">January 30</div><a className="title-2 text-color-3">Housing</a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3><Link href="/blog-detail">We are hiring ‘moderately,’ says Compass CEO</Link></h3>
                                                        <p className="text-color-2">Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money...</p>
                                                        <div className="meta">
                                                            <Link href="/blog-detail" className="btn-button flex align-center fs-13 fw-6 text-color-3"><span>Read more </span>
                                                                <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#0D4AA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box hover-img flex">
                                                    <div className="images img-style relative flex-none">
                                                        <img src="/assets/images/img-box/blog-list-3.jpg" alt="images" />
                                                        <div className="sub-box flex align-center justify-space fs-13 fw-6">
                                                            <div className="title-1">January 30</div><a className="title-2 text-color-3">Housing</a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3><Link href="/blog-detail">We are hiring ‘moderately,’ says Compass CEO</Link></h3>
                                                        <p className="text-color-2">Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money...</p>
                                                        <div className="meta">
                                                            <Link href="/blog-detail" className="btn-button flex align-center fs-13 fw-6 text-color-3"><span>Read more </span>
                                                                <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#0D4AA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box hover-img flex">
                                                    <div className="images img-style relative flex-none">
                                                        <img src="/assets/images/img-box/blog-list-4.jpg" alt="images" />
                                                        <div className="sub-box flex align-center justify-space fs-13 fw-6">
                                                            <div className="title-1">January 30</div><a className="title-2 text-color-3">Housing</a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3><Link href="/blog-detail">We are hiring ‘moderately,’ says Compass CEO</Link></h3>
                                                        <p className="text-color-2">Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money...</p>
                                                        <div className="meta">
                                                            <Link href="/blog-detail" className="btn-button flex align-center fs-13 fw-6 text-color-3"><span>Read more </span>
                                                                <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#0D4AA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box hover-img flex">
                                                    <div className="images img-style relative flex-none">
                                                        <img src="/assets/images/img-box/blog-list-5.jpg" alt="images" />
                                                        <div className="sub-box flex align-center justify-space fs-13 fw-6">
                                                            <div className="title-1">January 30</div><a className="title-2 text-color-3">Housing</a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3><Link href="/blog-detail">We are hiring ‘moderately,’ says Compass CEO</Link></h3>
                                                        <p className="text-color-2">Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money...</p>
                                                        <div className="meta">
                                                            <Link href="/blog-detail" className="btn-button flex align-center fs-13 fw-6 text-color-3"><span>Read more </span>
                                                                <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#0D4AA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box hover-img flex">
                                                    <div className="images img-style relative flex-none">
                                                        <img src="/assets/images/img-box/blog-list-6.jpg" alt="images" />
                                                        <div className="sub-box flex align-center justify-space fs-13 fw-6">
                                                            <div className="title-1">January 30</div><a className="title-2 text-color-3">Housing</a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3><Link href="/blog-detail">We are hiring ‘moderately,’ says Compass CEO</Link></h3>
                                                        <p className="text-color-2">Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money...</p>
                                                        <div className="meta">
                                                            <Link href="/blog-detail" className="btn-button flex align-center fs-13 fw-6 text-color-3"><span>Read more </span>
                                                                <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#0D4AA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box hover-img flex">
                                                    <div className="images img-style relative flex-none">
                                                        <img src="/assets/images/img-box/blog-list-7.jpg" alt="images" />
                                                        <div className="sub-box flex align-center justify-space fs-13 fw-6">
                                                            <div className="title-1">January 30</div><a className="title-2 text-color-3">Housing</a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3><Link href="/blog-detail">We are hiring ‘moderately,’ says Compass CEO</Link></h3>
                                                        <p className="text-color-2">Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money...</p>
                                                        <div className="meta">
                                                            <Link href="/blog-detail" className="btn-button flex align-center fs-13 fw-6 text-color-3"><span>Read more </span>
                                                                <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#0D4AA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                    </div>
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
                                <div className="col-lg-4">
                                    <aside className="side-bar side-bar-1 side-blog">
                                        <div className="inner-side-bar">
                                            <div className="widget-rent ">
                                                <div className="flat-tabs style2">
                                                    <div className="form-s2">
                                                        <form method="post">
                                                            <div className="wd-find-select ">
                                                                <h3 className="widget-title title-search">
                                                                    Search
                                                                </h3>
                                                                <div className="form-group-1 search-form form-style2 relative">
                                                                    <i className="far fa-search" />
                                                                    <input type="search" className="search-field" placeholder="Search..." name="s" title="Search for" required />
                                                                </div>
                                                            </div>
                                                        </form>
                                                        {/* End Job  Search Form*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget widget-categories style">
                                                <h3 className="widget-titles title-categories">
                                                    Categories
                                                </h3>
                                                <ul>
                                                    <li>
                                                        <Link href="#" className="font-2 fw-7">Office</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" className="font-2 fw-7">Business</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" className="font-2 fw-7">Luxury villa</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" className="font-2 fw-7">Apartments</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" className="font-2 fw-7">Duplex House</Link>
                                                    </li>
                                                </ul>
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
                                            <div className="widget widget-tags">
                                                <h3 className="widget-title title-tags">
                                                    Popular tags
                                                </h3>
                                                <div className="tags_cloud_inner">
                                                    <Link href="#">For sale</Link>
                                                    <Link href="#">Office</Link>
                                                    <Link href="#">Business</Link>
                                                    <Link href="#">Luxury villa</Link>
                                                    <Link href="#">Apartments</Link>
                                                    <Link href="#">Duplex House</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
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
                </div>

            </Layout>
        </>
    )
}