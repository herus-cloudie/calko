import LayoutDashboard from "@/components/layout/LayoutDashboard"
export default function DashboardProfile() {

    return (
        <>

            <LayoutDashboard>
                <section className="flat-title2 ">
                    <div className="container7">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-group fs-30 lh-45 fw-7">Add properties</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flat-profile flat-upload-photo">
                    <div className="container7">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tf-uploads bg-white">
                                    <h3 className="titles">Avatar</h3>
                                    <div className="wrap-upload ">
                                        <div className="box-upload flex">
                                            <div className="img-up relative">
                                                <img className="avatar" id="profileimg" src="assets/images/author/author-dashboard-profile2.jpg" alt />
                                            </div>
                                            <div className="content">
                                                <div className="subtitle">Upload a new avatar”</div>
                                                <div className="button-box relative flex align-center" id="upload-profile">
                                                    <a href="#" className="btn-upload sc-button">
                                                        <span className="fw-14 fw-6">Choose file</span> </a>
                                                    <input id="tf-upload-img" type="file" name="profile" required />
                                                    <div className>No files selected</div>
                                                </div>
                                                <p className="fs-12 lh-18">JPEG 100x100</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tf-infomation bg-white">
                                    <h3 className="titles">Infomation</h3>
                                    <div className="info-box info-wg">
                                        <div className="inner-1">
                                            <fieldset>
                                                <label className="title-user fw-6">Full name</label>
                                                <input type="text" placeholder="Ralph Edwards" className="input-form" required />
                                            </fieldset>
                                        </div>
                                        <div className="inner-2">
                                            <fieldset className="message-wrap">
                                                <label className="fw-6">Description</label>
                                                <textarea id="comment-message" name="message" rows={4} tabIndex={4} aria-required="true" defaultValue={""} />
                                            </fieldset>
                                        </div>
                                        <div className="inner-3 inner form-wg flex ">
                                            <div className="wg-box3 select-group">
                                                <fieldset>
                                                    <label className="title-user fw-6">Your company</label>
                                                    <input type="tel" placeholder="Choose" className="input-form" required />
                                                </fieldset>
                                            </div>
                                            <div className="wg-box3 select-group">
                                                <fieldset>
                                                    <label className="title-user fw-6">Job</label>
                                                    <input type="text" placeholder="Choose" className="input-form" required />
                                                </fieldset>
                                            </div>
                                            <div className="wg-box3 select-group">
                                                <fieldset>
                                                    <label className="title-user fw-6">Email address</label>
                                                    <input type="email" placeholder="Choose" className="input-form" required />
                                                </fieldset>
                                            </div>
                                            <div className="wg-box3 select-group">
                                                <fieldset>
                                                    <label className="title-user fw-6">Your phone</label>
                                                    <input type="tel" placeholder="Choose" className="input-form" required />
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="inner-4 inner">
                                            <fieldset>
                                                <label className="title-user fw-6">Location</label>
                                                <input type="text" placeholder="Ralph Edwards" className="input-form" required />
                                            </fieldset>
                                        </div>
                                        <div className="inner-5 ">
                                            <iframe className="map-content" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.453092836291!2d90.47477022812872!3d23.77494577893369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1627293157601!5m2!1svi!2s" allowFullScreen loading="lazy" />
                                        </div>
                                        <div className="inner-6 inner">
                                            <fieldset>
                                                <label className="title-user fw-6">Socials</label>
                                                <input type="url" placeholder="url" className="input-form" required />
                                            </fieldset>
                                        </div>
                                        <div className="wrap-button tf-save">
                                            <button className="sc-button" name="submit" type="submit">
                                                <span>Save &amp; Update</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tf-bottom">
                                    <div className="title-bottom center text-color-4"> Copyright © 2023 <a href="https://themeforest.net/user/themesflat/portfolio" className="text-color-4 fw-6">Themesflat.</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutDashboard>
        </>
    )
}