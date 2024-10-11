

import Link from 'next/link'

export default function FlatMeet2() {
    return (
        <>
            <section className="flat-meet ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Meet the agents</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="box hover-img">
                                <div className="images relative img-style">
                                    <Link href="/agents-detail"><img src="/assets/images/img-box/meet-1.jpg" alt="images" /></Link>
                                    <div className="icon-socials">
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                                <div className="content flex justify-space">
                                    <div className="inner">
                                        <h3 className="link-style-1"><Link href="/agents-detail">Wade Warren</Link></h3>
                                        <p className="fs-12 text-color-2">Salesperson</p>
                                    </div>
                                    <div className="icon-box flex">
                                        <Link href="#"><i className="fas fa-phone-alt" /></Link>
                                        <Link href="#"><i className="fas fa-envelope" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="box hover-img">
                                <div className="images relative img-style">
                                    <Link href="/agents-detail"><img src="/assets/images/img-box/meet-2.jpg" alt="images" /></Link>
                                    <div className="icon-socials">
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                                <div className="content flex justify-space">
                                    <div className="inner">
                                        <h3 className="link-style-1"><Link href="/agents-detail">Leslie Alexander</Link></h3>
                                        <p className="fs-12 text-color-2">Commercial Broker</p>
                                    </div>
                                    <div className="icon-box flex">
                                        <Link href="#"><i className="fas fa-phone-alt" /></Link>
                                        <Link href="#"><i className="fas fa-envelope" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 ">
                            <div className="box hover-img">
                                <div className="images relative img-style">
                                    <Link href="/agents-detail"><img src="/assets/images/img-box/meet-3.jpg" alt="images" /></Link>
                                    <div className="icon-socials">
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                                <div className="content flex justify-space">
                                    <div className="inner">
                                        <h3 className="link-style-1"><Link href="/agents-detail">Darlene Robertson</Link></h3>
                                        <p className="fs-12 text-color-2">Realtor</p>
                                    </div>
                                    <div className="icon-box flex">
                                        <Link href="#"><i className="fas fa-phone-alt" /></Link>
                                        <Link href="#"><i className="fas fa-envelope" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="box-text flex justify-center">
                                <p>Become an agent and get the commission you deserve. </p> <Link href="/contact" className="text-color-3 font-2 fw-7"> Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
