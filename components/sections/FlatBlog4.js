

import Link from 'next/link'

export default function FlatBlog4() {
    return (
        <>
            <section className="flat-blog tf-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                            <h2>مقالات و اخبار کالکو</h2>
                            <p className="text-color-4">اخبار روزانه کالکو رو از این بخش دنبال کتید</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="box hover-img">
                                <div className="images img-style relative ">
                                    <Link href="/blog-detail"><img src="/assets/immmg/s1.png" alt="images" /></Link>
                                    <div className="sub-box flex align-center fs-13 fw-6">
                                        <div className="title-1">آبان</div><a className="title-2 text-color-3">تفریحات</a>
                                    </div>
                                </div>
                                <div className="content center">
                                    <h3 className="link-style-1"><Link href="/blog-detail">افزایش فروش 60 درصدی شیلا</Link></h3>
                                    <div className="meta">
                                        <Link href="/blog-detail" className="btn-button flex align-center justify-center fs-13 fw-6 text-color-3"><span>خواندن خبر </span>
                                            <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#0D4AA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="box hover-img">
                                <div className="images img-style relative ">
                                    <Link href="/blog-detail"><img src="/assets/immmg/s9.png" alt="images" /></Link>
                                    <div className="sub-box flex align-center fs-13 fw-6">
                                        <div className="title-1">آبان</div><a className="title-2 text-color-3">بیمه</a>
                                    </div>
                                </div>
                                <div className="content center">
                                    <h3 className="link-style-1"><Link href="/blog-detail">بیمه دات کام، رتبه نخست در تخفیف دهی </Link></h3>
                                    <div className="meta">
                                        <Link href="/blog-detail" className="btn-button flex align-center justify-center fs-13 fw-6 text-color-3"><span>خواندن خبر </span>
                                            <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#0D4AA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="box hover-img">
                                <div className="images img-style relative ">
                                    <Link href="/blog-detail"><img src="/assets/immmg/s12.png" alt="images" /></Link>
                                    <div className="sub-box flex align-center fs-13 fw-6">
                                        <div className="title-1">آبان</div><a className="title-2 text-color-3">لوازم‌خانگی</a>
                                    </div>
                                </div>
                                <div className="content center">
                                    <h3 className="link-style-1"><Link href="/blog-detail">برکناری سرپرست گلدیران</Link></h3>
                                    <div className="meta">
                                        <Link href="/blog-detail" className="btn-button flex align-center justify-center fs-13 fw-6 text-color-3"><span>خواندن خبر </span>
                                            <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#0D4AA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
