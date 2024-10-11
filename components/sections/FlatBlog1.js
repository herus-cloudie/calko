

import Link from 'next/link'

export default function FlatBlog1() {
    return (
        <>
            <section className="flat-blog tf-section home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Form our blog</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="box hover-img">
                                <div className="images img-style relative ">
                                    <Link href="/blog-detail"><img src="/assets/images/img-box/blog-1.jpg" alt="images" /></Link>
                                    <div className="sub-box flex align-center fs-13 fw-6">
                                        <div className="title-1">April</div><a className="title-2 text-color-3" href="#">Housing</a>
                                    </div>
                                </div>
                                <div className="content center">
                                    <h3 className="link-style-1"><Link href="/blog-detail">Building gains into housing stocks and how to trade the sector</Link></h3>
                                    <div className="meta">
                                        <Link href="/blog-detail" className="btn-button flex align-center justify-center fs-13 fw-6 text-color-3"><span>Read more </span>
                                            <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#FFA920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="box hover-img">
                                <div className="images img-style relative ">
                                    <Link href="/blog-detail"><img src="/assets/images/img-box/blog-2.jpg" alt="images" /></Link>
                                    <div className="sub-box flex align-center fs-13 fw-6">
                                        <div className="title-1">April</div><a className="title-2 text-color-3" href="#">Housing</a>
                                    </div>
                                </div>
                                <div className="content center">
                                    <h3 className="link-style-1"><Link href="/blog-detail">92% of millennial homebuyers say inflation has impacted their plans</Link></h3>
                                    <div className="meta">
                                        <Link href="/blog-detail" className="btn-button flex align-center justify-center fs-13 fw-6 text-color-3"><span>Read more </span>
                                            <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#FFA920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="box hover-img">
                                <div className="images img-style relative ">
                                    <Link href="/blog-detail"><img src="/assets/images/img-box/blog-3.jpg" alt="images" /></Link>
                                    <div className="sub-box flex align-center fs-13 fw-6">
                                        <div className="title-1">April</div><a className="title-2 text-color-3" href="#">Housing</a>
                                    </div>
                                </div>
                                <div className="content center">
                                    <h3 className="link-style-1"><Link href="/blog-detail">We are hiring ‘moderately,’ says Compass CEO</Link></h3>
                                    <div className="meta">
                                        <Link href="/blog-detail" className="btn-button flex align-center justify-center fs-13 fw-6 text-color-3"><span>Read more </span>
                                            <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#FFA920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
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
