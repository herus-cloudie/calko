import Layout from "@/components/layout/Layout";
import Link from 'next/link';
import { useState } from "react";
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Property Listing">

                <div>
                    <section className="flat-faq flat-accordion fl-faq-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="heading-section center">
                                        <h2>Frequently asked questions</h2>
                                        <div className="text-box flex justify-center flex-wrap"><span className="text-color-4">Quick answers to questions you may have. Can't find what you're looking for? Check out our </span><Link className="fw-7 font-2 text-color-4 text-line" href="#"> full documentation</Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={`flat-toggle ${isActive.key == 1 ? "active" : ""}`} onClick={() => handleClick(1)}>
                                        <div className={`toggle-title flex align-center ${isActive.key == 1 ? "active" : ""}`}>
                                            <i className="fal fa-question-circle" />
                                            <div className="fw-6">Vivamus at orci ut neque tincidunt convallis.</div>
                                            <div className="btn-toggle" />
                                        </div>
                                        <div className="toggle-content section-desc" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                            <p className="texts text-color-2">Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={`flat-toggle ${isActive.key == 2 ? "active" : ""}`} onClick={() => handleClick(2)}>
                                        <div className={`toggle-title flex align-center ${isActive.key == 2 ? "active" : ""}`}>
                                            <i className="fal fa-question-circle" />
                                            <div className="fw-6">Nam nec justo congue, gravida velit et, viverra nibh.</div>
                                            <div className="btn-toggle" />
                                        </div>
                                        <div className="toggle-content section-desc" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                            <p className="texts text-color-2">Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={`flat-toggle ${isActive.key == 3 ? "active" : ""}`} onClick={() => handleClick(3)}>
                                        <div className={`toggle-title flex align-center ${isActive.key == 3 ? "active" : ""}`}>
                                            <i className="fal fa-question-circle" />
                                            <div className="fw-6">Cras ac purus sed lectus volutpat feugiat in et nunc.</div>
                                            <div className="btn-toggle" />
                                        </div>
                                        <div className="toggle-content section-desc" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                            <p className="texts text-color-2">Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={`flat-toggle ${isActive.key == 4 ? "active" : ""}`} onClick={() => handleClick(4)}>
                                        <div className={`toggle-title flex align-center ${isActive.key == 4 ? "active" : ""}`}>
                                            <i className="fal fa-question-circle" />
                                            <div className="fw-6">Fusce at arcu dapibus, fermentum diam sed, pretium mi.</div>
                                            <div className="btn-toggle" />
                                        </div>
                                        <div className="toggle-content section-desc" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                            <p className="texts text-color-2">Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={`flat-toggle ${isActive.key == 5 ? "active" : ""}`} onClick={() => handleClick(5)}>
                                        <div className={`toggle-title flex align-center ${isActive.key == 5 ? "active" : ""}`}>
                                            <i className="fal fa-question-circle" />
                                            <div className="fw-6">Nulla facilisis lorem vel turpis hendrerit faucibus.</div>
                                            <div className="btn-toggle" />
                                        </div>
                                        <div className="toggle-content section-desc" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                            <p className="texts text-color-2">Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={`flat-toggle ${isActive.key == 6 ? "active" : ""}`} onClick={() => handleClick(6)}>
                                        <div className={`toggle-title flex align-center ${isActive.key == 6 ? "active" : ""}`}>
                                            <i className="fal fa-question-circle" />
                                            <div className="fw-6">Pellentesque faucibus ante id nunc molestie elementum.</div>
                                            <div className="btn-toggle" />
                                        </div>
                                        <div className="toggle-content section-desc" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                            <p className="texts text-color-2">Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={`flat-toggle ${isActive.key == 7 ? "active" : ""}`} onClick={() => handleClick(7)}>
                                        <div className={`toggle-title flex align-center ${isActive.key == 7 ? "active" : ""}`}>
                                            <i className="fal fa-question-circle" />
                                            <div className="fw-6">Phasellus luctus nibh vitae leo malesuada tempus.</div>
                                            <div className="btn-toggle" />
                                        </div>
                                        <div className="toggle-content section-desc" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                            <p className="texts text-color-2">Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={`flat-toggle ${isActive.key == 8 ? "active" : ""}`} onClick={() => handleClick(8)}>
                                        <div className={`toggle-title flex align-center ${isActive.key == 8 ? "active" : ""}`}>
                                            <i className="fal fa-question-circle" />
                                            <div className="fw-6">Vestibulum malesuada eros et nisi ornare feugiat.</div>
                                            <div className="btn-toggle" />
                                        </div>
                                        <div className="toggle-content section-desc" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                            <p className="texts text-color-2">Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={`flat-toggle ${isActive.key == 9 ? "active" : ""}`} onClick={() => handleClick(9)}>
                                        <div className={`toggle-title flex align-center ${isActive.key == 9 ? "active" : ""}`}>
                                            <i className="fal fa-question-circle" />
                                            <div className="fw-6">Nulla non turpis non diam tincidunt convallis.</div>
                                            <div className="btn-toggle" />
                                        </div>
                                        <div className="toggle-content section-desc" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                            <p className="texts text-color-2">Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={`flat-toggle ${isActive.key == 10 ? "active" : ""}`} onClick={() => handleClick(10)}>
                                        <div className={`toggle-title flex align-center ${isActive.key == 10 ? "active" : ""}`}>
                                            <i className="fal fa-question-circle" />
                                            <div className="fw-6">Curabitur eget risus venenatis risus consectetur tristique.</div>
                                            <div className="btn-toggle" />
                                        </div>
                                        <div className="toggle-content section-desc" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                            <p className="texts text-color-2">Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={`flat-toggle ${isActive.key == 11 ? "active" : ""}`} onClick={() => handleClick(11)}>
                                        <div className={`toggle-title flex align-center ${isActive.key == 11 ? "active" : ""}`}>
                                            <i className="fal fa-question-circle" />
                                            <div className="fw-6">Mauris ultrices nibh ac augue porta iaculis.</div>
                                            <div className="btn-toggle" />
                                        </div>
                                        <div className="toggle-content section-desc" style={{ display: `${isActive.key == 11 ? "block" : "none"}` }}>
                                            <p className="texts text-color-2">Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={`flat-toggle ${isActive.key == 12 ? "active" : ""}`} onClick={() => handleClick(12)}>
                                        <div className={`toggle-title flex align-center ${isActive.key == 12 ? "active" : ""}`}>
                                            <i className="fal fa-question-circle" />
                                            <div className="fw-6">Etiam nec dolor non nunc luctus sodales.</div>
                                            <div className="btn-toggle" />
                                        </div>
                                        <div className="toggle-content section-desc" style={{ display: `${isActive.key == 12 ? "block" : "none"}` }}>
                                            <p className="texts text-color-2">Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="wrap-author center">
                                        <div className="images"><img src="/assets/images/author/author-faq.jpg" alt="images" /></div>
                                        <div className="content">
                                            <h4>Still have question?</h4>
                                            <div><span>Can't find what you're looking for? Please </span> <Link className="text-color-3 font-2 fw-7" href="#"> chat to our friendly team.</Link></div>
                                        </div>
                                        <div className="button-faq">
                                            <Link className="sc-button center" href="#">
                                                <span>Documentation</span>
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.125 3.5H2.9375C2.48995 3.5 2.06072 3.67779 1.74426 3.99426C1.42779 4.31073 1.25 4.73995 1.25 5.1875V13.0625C1.25 13.5101 1.42779 13.9393 1.74426 14.2557C2.06072 14.5722 2.48995 14.75 2.9375 14.75H10.8125C11.2601 14.75 11.6893 14.5722 12.0057 14.2557C12.3222 13.9393 12.5 13.5101 12.5 13.0625V6.875M4.625 11.375L14.75 1.25M14.75 1.25H10.8125M14.75 1.25V5.1875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                            <Link className="sc-button center btn-1" href="#">
                                                <span>Get in touch</span>
                                            </Link>
                                        </div>
                                    </div>
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