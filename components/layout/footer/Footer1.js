import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer id="footer" className="clearfix home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="group-icon">
                                <div className="box-icons flex">
                                    <div dir="rtl"  className="content">
                                        <div className="title-icon fs-30 lh-45 fw-7 text-color-2">فرم همکاری سازمان</div>
                                        <p  className="text-color-2">اگر سازمانی قصد همکاری با کالکو رو داشته باشه میتونه با تکمیل فرم مخصوص  سازمان با ما ارتباط بگیره</p>
                                    </div>
                                </div>
                                <div className="button-footer center">
                                    <Link className="sc-button" href="/contact">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.0967 21.75 20.669 21.5129 21.091 21.091C21.5129 20.669 21.75 20.0967 21.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C14.05 18.017 13.563 18.183 13.122 18.021C11.4849 17.4191 9.99815 16.4686 8.76478 15.2352C7.53141 14.0018 6.58087 12.5151 5.979 10.878C5.817 10.437 5.983 9.95 6.359 9.668L7.652 8.698C8.015 8.427 8.179 7.964 8.069 7.525L6.963 3.102C6.90214 2.85869 6.76172 2.6427 6.56405 2.48834C6.36638 2.33397 6.1228 2.25008 5.872 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>تکمیل فرم</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div dir="rtl" className="col-lg-6 col-md-12 col-12">
                            <div className="group-icon group-2">
                                <div className="box-icons flex">
                                    <div className="images">
                                        {/* <img src="/assets/images/icon/footer-icon-2.png" alt="images" /> */}
                                    </div>
                                    <div className="content">
                                        <div className="title-icon fs-30 lh-45 fw-7 text-color-2">فرم همکاری کسب و کار</div>
                                        <p className="text-color-2">اگر دوست دارید برای کسب و کارت خودتون با ما همکاری داشته باشید فقط کافیه فرم رو تکمیل کنید تا کارشناسان ما با شما تماس بگیرند</p>
                                    </div>
                                </div>
                                <div dir="ltr" className="button-footer center">
                                   <Link className="sc-button" href="/contact">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.0967 21.75 20.669 21.5129 21.091 21.091C21.5129 20.669 21.75 20.0967 21.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C14.05 18.017 13.563 18.183 13.122 18.021C11.4849 17.4191 9.99815 16.4686 8.76478 15.2352C7.53141 14.0018 6.58087 12.5151 5.979 10.878C5.817 10.437 5.983 9.95 6.359 9.668L7.652 8.698C8.015 8.427 8.179 7.964 8.069 7.525L6.963 3.102C6.90214 2.85869 6.76172 2.6427 6.56405 2.48834C6.36638 2.33397 6.1228 2.25008 5.872 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>تکمیل فرم</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget widget-info">
                                <h3>Office Address</h3>
                                <p className="sub-title">Head office:</p>
                                <h5 className="text-color-1">2118 Thornridge Cir. Syracuse, Connecticut 35624</h5>
                                <p className="sub-title">Branch:</p>
                                <p className="text-1 text-color-8">3891 Ranchview Dr. Richardson, California 62639</p>
                                <p className="text-2 text-color-8">3517 W. Gray St. Utica, Pennsylvania 57867</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget widget-menu style-2">
                                <h3>Contact Seller</h3>
                                <div className="box-icon flex align-center justify-space">
                                    <div className="img-group flex align-center">
                                        <div className="images flex-none">
                                            <img src="/assets/images/author/author-footer.jpg" alt="images" />
                                        </div>
                                        <div className="content">
                                            <p>Darrell Steward</p>
                                            <Link href="/tel:012345678"><h5>(405) 555-0128</h5></Link>
                                        </div>
                                    </div>
                                    <Link href="#" className="button-author"><i className="far fa-chevron-right" /></Link>
                                </div>
                                <div className="box-icon flex align-center">
                                    <div className="icon flex-none">
                                        <svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.26135 17.3176L10.3744 14.2041C10.8085 13.7699 11.3522 13.5664 11.9646 13.6085C12.577 13.6507 13.0877 13.9271 13.4581 14.4166L18.0679 20.5097C18.6893 21.331 18.611 22.4676 17.8827 23.1959L15.7252 25.3537C19.0452 28.1764 21.8211 30.9536 24.6433 34.2735L26.8013 32.1152C27.5296 31.3868 28.666 31.3086 29.4872 31.9301L35.5794 36.5405C36.0689 36.9109 36.3452 37.4216 36.3874 38.0341C36.4296 38.6466 36.226 39.1904 35.7919 39.6245L32.6783 42.7385C25.5089 49.909 0.0917082 24.4882 7.26135 17.3176ZM33.8537 6C39.4572 6 43.9997 10.2467 43.9997 15.4854C43.9997 20.724 39.4572 24.9707 33.8537 24.9707C31.9295 24.9707 30.1305 24.4699 28.5975 23.6002C27.3492 24.1528 26.0098 24.3125 24.728 24.123C25.208 23.2144 25.5656 22.2462 25.7915 21.2437C24.4847 19.647 23.7077 17.6511 23.7077 15.4854C23.7077 10.2467 28.2502 6 33.8537 6Z" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M33.8308 20.0552V14.4344H32.5506M32.4907 20.1123H35.171M33.8308 10.7305V10.7595" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <p>Hotline:</p>
                                        <Link href="/tel:012345678"><h5>(201) 555-0124</h5></Link>
                                    </div>
                                </div>
                                <div className="box-icon flex align-center">
                                    <div className="icon flex-none">
                                        <svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3">
                                                <mask id="mask0_2290_9114" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={6} y={6} width={39} height={38}>
                                                    <path d="M43.5001 43.5V6.49987H6.5V43.5H43.5001Z" fill="white" stroke="white" />
                                                </mask>
                                                <g mask="url(#mask0_2290_9114)">
                                                    <path d="M27.1876 21.5002C27.1876 23.3585 26.0473 24.75 24.6819 24.75C23.3166 24.75 22.1093 23.3778 22.1093 21.5195C22.1093 19.6614 23.3837 18.4233 24.7491 18.4233C26.1143 18.4233 27.1876 19.6421 27.1876 21.5002Z" stroke="white" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M24.868 27.8945C22.1524 27.8194 19.6763 25.9815 18.9411 23.1859C18.0924 19.9591 19.9485 16.5889 23.1278 15.5769C26.4903 14.5065 30.0664 16.3982 31.0824 19.7644C31.4419 21.1114 31.2321 22.2832 30.7557 23.481C30.5668 23.956 29.9439 25.0679 28.5581 25.0679C27.8016 25.0679 27.1708 24.3429 27.175 23.5078L27.2024 17.9739" stroke="white" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M31.0829 19.7649C31.4424 21.1118 31.2326 22.2836 30.7562 23.4814" stroke="white" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M30.366 11.5664L24.9999 7.11327L19.6339 11.5664" stroke="white" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12.3828 17.5839L7.11328 21.957V42.8867H42.8868V21.957L37.6173 17.5839" stroke="white" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M25 33.0898L37.6173 25.2368V11.5663H12.3828V25.2368L25 33.0898Z" stroke="white" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M42.8868 21.957L25.0001 33.0898L7.11328 21.957V42.8867H42.8868V21.957Z" stroke="white" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <p>Email:</p>
                                        <Link href="/mailto:Realestatecp@gmail.com"><h5 className="fw-4 text-color-8">Realestatecp@gmail.com</h5></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget widget-menu style-3 ">
                                <h3>Our Company</h3>
                                <ul className="box-menu">
                                    <li><Link href="/properties-list">Property For Sale</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/agents">Our Agents</Link></li>
                                    <li><Link href="/portfolio">FAQ</Link></li>
                                    <li><Link href="/pricing">Pricing</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget widget-menu widget-form">
                                <h3>Newsletter</h3>
                                <form method="post" className="comment-form form-submit" action="#" acceptCharset="utf-8">
                                    <p className="font-2 text-color-8">Sign up to receive the latest articles</p>
                                    <div className="text-wrap clearfix">
                                        <fieldset className="email-wrap style-text">
                                            <input type="email" className="tb-my-input" name="email" placeholder="Your email address" required />
                                        </fieldset>
                                    </div>
                                    <button name="submit" type="submit" className="button btn-submit-comment btn-1 btn-8">
                                        <span>Sign Up</span>
                                    </button>
                                    <label className="flex">
                                        <input type="checkbox" />
                                        <span className="btn-checkbox flex-two" />
                                        <span className="fs-12 text-color-8 lh-18">I have read and agree to the terms &amp; conditions</span>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
