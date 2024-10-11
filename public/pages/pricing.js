import Layout from "@/components/layout/Layout";
import Link from 'next/link';
import { useState } from "react";
export default function Pricing() {
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
                    <section className="flat-pricing page">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="heading-section center">
                                        <h2 className>Pricing plans for every budget</h2>
                                        <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="box box-style">
                                        <div className="sub-title fs-30 fw-7">Basic</div>
                                        <p className="text-sub fw-6 ">Automatically reach potential customers</p>
                                        <div className="title-price flex">
                                            <h2>$19 </h2><div className="mo fw-4 fs-30 fw-7"> / mo</div>
                                        </div>
                                        <p className="texts">Per month, per company or team members</p>
                                        <ul className="check">
                                            <li className="flex-three">Listing free</li>
                                            <li className="flex-three">Support 24/7</li>
                                            <li className="flex-three">Quick access to customers</li>
                                            <li className="flex-three">Auto refresh ads</li>
                                        </ul>
                                        <div className="button-pricing">
                                            <Link className="sc-button btn-1" href="#">
                                                <span>Get started</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="box box-style active">
                                        <div className="sub-title fs-30 fw-7">Business</div>
                                        <p className="text-sub fw-6 ">Automatically reach potential customers</p>
                                        <div className="title-price flex">
                                            <h2>$87</h2><div className="mo fw-4 fs-30 fw-7">/ mo</div>
                                        </div>
                                        <p className="texts">Per month, per company or team members</p>
                                        <ul className="check">
                                            <li className="flex-three">Vip listing</li>
                                            <li className="flex-three">Support 24/7</li>
                                            <li className="flex-three">Quick access to customers</li>
                                            <li className="flex-three">Auto refresh ads</li>
                                        </ul>
                                        <div className="button-pricing">
                                            <Link className="sc-button" href="#">
                                                <span>Get started</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="box box-style">
                                        <div className="sub-title fs-30 fw-7">Enterprise</div>
                                        <p className="text-sub fw-6">Automatically reach potential customers</p>
                                        <div className="title-price flex">
                                            <h2>$120</h2><div className="mo fw-4 fs-30 fw-7">/ mo</div>
                                        </div>
                                        <p className="texts">Per month, per company or team members</p>
                                        <ul className="check">
                                            <li className="flex-three">Listing free</li>
                                            <li className="flex-three">Support 24/7</li>
                                            <li className="flex-three">Quick access to customers</li>
                                            <li className="flex-three">Auto refresh ads</li>
                                        </ul>
                                        <div className="button-pricing">
                                            <Link className="sc-button btn-1" href="#">
                                                <span>Get started</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flat-faq flat-accordion fl-faq-content page">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="heading-section center">
                                        <h2>Frequently asked questions</h2>
                                        <div className="text-box flex justify-center flex-wrap"><span className="text-color-4">Quick answers to questions you may have. Can't find what you're looking for? Check out our </span><a className="fw-7 font-2 text-color-4 text-line"> full documentation</a></div>
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