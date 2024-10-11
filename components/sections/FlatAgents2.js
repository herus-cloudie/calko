
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'


export default function FlatAgents2() {
    return (
        <>
            <section className="flat-agents">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="heading-section center">
                                <h2>Become Our Agents</h2>
                                <p className="text-1 text-color-4">Become an agent and get the commission you deserve</p>
                                <div className="icon-img">
                                    <img src="/assets/images/icon/agents.svg" alt="images" />
                                </div>
                                <h4 className="text-2 fw-5">With a history of 30 years, we have built strong relationships with more than 5000 real estate business partners, providing profitable opportunities for investors from more than 100 countries. We are proud to work with agents and business partners who are just as passionate about bringing the best homes to everyone as we are.</h4>
                                <div className="title-content">
                                    <h4 className="fs-16">Esther Howard</h4>
                                    <p>CEO and founder at Real estate CP</p>
                                </div>
                                <div className="signature">
                                    <img src="/assets/images/img-box/agents-signature.png" alt="images" />
                                </div>
                                <div className="button-box flex justify-center">
                                    <div className="button-one">
                                        <Link className="sc-button" href="/agents-detail">
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.75 15L15.75 12M15.75 12L12.75 9M15.75 12H8.25M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>Join Us</span>
                                        </Link>
                                    </div>
                                    <div className="button-two">
                                        <Link className="sc-button" href="/contact">
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.0967 21.75 20.669 21.5129 21.091 21.091C21.5129 20.669 21.75 20.0967 21.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C14.05 18.017 13.563 18.183 13.122 18.021C11.4849 17.4191 9.99815 16.4686 8.76478 15.2352C7.53141 14.0018 6.58087 12.5151 5.979 10.878C5.817 10.437 5.983 9.95 6.359 9.668L7.652 8.698C8.015 8.427 8.179 7.964 8.069 7.525L6.963 3.102C6.90214 2.85869 6.76172 2.6427 6.56405 2.48834C6.36638 2.33397 6.1228 2.25008 5.872 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>Contact Us</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="video-box ">
                                <div className="post-video text-end ">
                                    <img className="img-2" src="/assets/images/img-box/video-agents.jpg" alt="images" />
                                    <VideoPopup />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
