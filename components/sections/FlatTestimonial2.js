

import Link from 'next/link'
import ReactCurvedText from 'react-curved-text';

export default function FlatTestimonial2() {
    return (
        <>
            <section className="flat-testimonial2 tf-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-7">
                            <div className="heading-tesi">
                                <h2 className="font-2 fw-8 lh-56">From our happy customers</h2>
                                <p className="text-1 text-color-4 font-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio</p>
                                <div className="icon-testi"><img src="/assets/images/icon/testimonial.svg" alt="images" /></div>
                                <div className="text-testi fs-20 font-2 fw-5 lh-30 relative">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tortor justo. Vestibulum vitae vulputate lacus. Aliquam sollicitudin mauris odio. Fusce egestas consectetur elit, eu semper ex vulputate id. “</div>
                                <div className="author-box flex align-center">
                                    <div className="img-author"><img src="/assets/images/author/author-testimonial2.jpg" alt="images" /></div>
                                    <div className="content">
                                        <h4 className="font-2 fw-8">Esther Howard</h4>
                                        <p className="font-2">Internet Security Assistant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-5">
                            <div className="wrap-testi flex relative">
                                <div className="box box-1">
                                    <div className="media"><img src="/assets/images/img-box/testimonial-1.jpg" alt="images" /></div>
                                    <div className="media"><img src="/assets/images/img-box/testimonial-2.jpg" alt="images" /></div>
                                </div>
                                <div className="box box-2">
                                    <div className="media"><img src="/assets/images/img-box/testimonial-3.jpg" alt="images" /></div>
                                    <div className="media"><img src="/assets/images/img-box/testimonial-4.jpg" alt="images" /></div>
                                    <div className="button-testi">
                                        <Link className="sc-button" href="/properties-map-v3">
                                            <i className="far fa-search text-color-1" />
                                            <span>Find your wonderful home</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="curved-group">
                                <div className="curved-text animate-rotate">
                                        <ReactCurvedText width='150'
                                            height='150'
                                            cx='90'
                                            cy='90'
                                            rx='40'
                                            ry='40'
                                            startOffset='0'
                                            reversed={false}
                                            text='estate find your dreaMs real'
                                            textProps={{ "style": { "fontSize": "19" } }}
                                            textPathProps={null}
                                            tspanProps={{ "dy": "21" }}
                                            ellipseProps={null}
                                            svgProps={{ "style": { "transform": "rotate(121deg)" } }} />
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
