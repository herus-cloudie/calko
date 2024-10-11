import LayoutDashboard from "@/components/layout/LayoutDashboard";
export default function DashboardProperties() {
  return (
    <>
      <LayoutDashboard>
        <section className="flat-title2 ">
          <div className="container7">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-group fs-30 lh-45 fw-7">
                  Add properties
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flat-upload-photo">
          <div className="container7">
            <div className="row">
              <div className="col-lg-12">
                <div className="tf-upload">
                  <h3 className="titles">Upload photo</h3>
                  <div className="wrap-upload center">
                    <div className="box-upload">
                      <div className="img-up relative">
                        <img
                          className="avatar"
                          id="profileimg"
                          src="assets/images/icon/icon-upload.png"
                          alt
                        />
                      </div>
                      <div className="button-box relative" id="upload-profile">
                        <a href="#" className="btn-upload sc-button">
                          <span>Select photos</span>{" "}
                        </a>
                        <input
                          id="tf-upload-img"
                          type="file"
                          name="profile"
                          required
                        />
                      </div>
                      <div className="text-up-box">
                        <p className="text-color-2">or drag photos here</p>
                        <p> (Up to 10 photos)</p>
                      </div>
                    </div>
                    <div className="box-photo">
                      <ul className="flex">
                        <li className="file-delete">
                          <img
                            src="assets/images/img-box/dashboard-upload-1.jpg"
                            alt
                          />
                          <a className="icon-clear remove-file">
                            <i className="far fa-trash-alt" />
                          </a>{" "}
                        </li>
                        <li className="file-delete">
                          <img
                            src="assets/images/img-box/dashboard-upload-2.jpg"
                            alt
                          />
                          <a className="icon-clear remove-file">
                            <i className="far fa-trash-alt" />
                          </a>{" "}
                        </li>
                        <li className="file-delete">
                          <img
                            src="assets/images/img-box/dashboard-upload-3.jpg"
                            alt
                          />
                          <a className="icon-clear remove-file">
                            <i className="far fa-trash-alt" />
                          </a>{" "}
                        </li>
                        <li className="file-delete">
                          <img
                            src="assets/images/img-box/dashboard-upload-4.jpg"
                            alt
                          />
                          <a className="icon-clear remove-file">
                            <i className="far fa-trash-alt" />
                          </a>{" "}
                        </li>
                        <li className="file-delete">
                          <img
                            src="assets/images/img-box/dashboard-upload-5.jpg"
                            alt
                          />
                          <a className="icon-clear remove-file">
                            <i className="far fa-trash-alt" />
                          </a>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tf-infomation bg-white">
                  <h3 className="titles">Infomation</h3>
                  <div className="info-box info-wg">
                    <div className="inner-1 select-group">
                      <label className="title-user fw-6">
                        Street address *
                      </label>
                      <div className="select-wrapper">
                        <select className="nice-select" tabIndex={0}>
                          <span className="current">Choose</span>

                          <option data-value className="option">
                            Choose
                          </option>
                          <option data-value className="option">
                            5 London England
                          </option>
                          <option data-value className="option">
                            35 Hawaii - America
                          </option>
                          <option data-value className="option">
                            99 Tokyo - Japan{" "}
                          </option>
                          <option data-value className="option">
                            100 DaNang - VietNam
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="inner-2 form-wg flex ">
                      <div className="wg-box2 select-group">
                        <fieldset>
                          <label className="title-user fw-6">
                            Unit number *
                          </label>
                          <input
                            type="tel"
                            placeholder="Choose"
                            className="input-form"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="wg-box2 select-group">
                        <fieldset>
                          <label className="title-user fw-6">Zip code *</label>
                          <input
                            type="text"
                            placeholder="Choose"
                            className="input-form"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="wg-box2 select-group">
                        <label className="title-user fw-6">State</label>
                        <div className="select-wrapper">
                          <select className="nice-select" tabIndex={0}>
                            <span className="current">Choose</span>

                            <option data-value className="option">
                              Choose{" "}
                            </option>
                            <option data-value="like" className="option">
                              Like
                            </option>
                            <option data-value="love" className="option">
                              Love{" "}
                            </option>
                            <option data-value="care" className="option">
                              Care
                            </option>
                            <option data-value="feel" className="option">
                              Feel
                            </option>
                            <option data-value="hate" className="option">
                              Hate
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-price tf-infomation bg-white">
                  <h3 className="titles">Price &amp; Duration</h3>
                  <div className="info-box info-wg">
                    <div className="inner-1 form-wg flex">
                      <div className="wg-box">
                        <label className="title-user fw-6">
                          Rental costs *
                        </label>
                        <div className="select-wrapper">
                          <select className="nice-select" tabIndex={0}>
                            <span className="current font-2 fw-7">
                              $ 750.00
                            </span>
                            <span className="month">Per-Month</span>

                            <option data-value={500} className="option">
                              $ 500.00
                            </option>
                            <option data-value={750} className="option">
                              $ 750.00
                            </option>
                            <option data-value={1000} className="option">
                              $ 1000.00
                            </option>
                            <option data-value={2000} className="option">
                              $ 2000.00
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="wg-box">
                        <label className="title-user fw-6">
                          Late charge (Optinal)
                        </label>
                        <div className="select-wrapper">
                          <select className="nice-select " tabIndex={0}>
                            <span className="current font-2 fw-7">$ 56.00</span>
                            <span className="month">Per-3Month</span>

                            <option data-value={20} className="option">
                              $ 20.00
                            </option>
                            <option data-value={56} className="option selected">
                              $ 56.00
                            </option>
                            <option data-value={100} className="option">
                              $ 100.00
                            </option>
                            <option data-value={200} className="option">
                              $ 200.00
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="inner-2 form-wg flex">
                      <div className="wg-box">
                        <label className="title-user fw-6">
                          Minimum down payment (Optinal)
                        </label>
                        <div className="select-wrapper">
                          <select className="nice-select" tabIndex={0}>
                            <span className="current font-2 fw-7">$ 56.00</span>
                            <span className="month">Per-3Month</span>

                            <option data-value={20} className="option">
                              $ 20.00
                            </option>
                            <option data-value={56} className="option selected">
                              $ 56.00
                            </option>
                            <option data-value={100} className="option">
                              $ 100.00
                            </option>
                            <option data-value={200} className="option">
                              $ 200.00
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="wg-box">
                        <label className="title-user fw-6">
                          Minimum rental time *
                        </label>
                        <div className="box-quantity flex align-center">
                          <div className="title-sub fs-13">
                            <span className="fw-7">Minimum duration</span>
                            <span> (in months)</span>
                          </div>
                          <div className="quantity flex align-center">
                            <a className="btn-quantity plus-btn">
                              <i className="far fa-plus" />
                            </a>
                            <div className="input-text">
                              <input
                                type="text"
                                name="name"
                                defaultValue={1}
                                className="quantity-number"
                              />
                            </div>
                            <a className="btn-quantity minus-btn">
                              <i className="far fa-minus" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-rent tf-infomation bg-white">
                  <h3 className="titles">Additional information</h3>
                  <div className="info-box info-wg">
                    <div className="inner-1 form-wg flex ">
                      <div className="wg-box2 select-group">
                        <label className="title-user fw-6">
                          Parent property
                        </label>
                        <div className="select-wrapper">
                          <select className="nice-select" tabIndex={0}>
                            <span className="current">Choose</span>

                            <option data-value className="option">
                              Choose
                            </option>
                            <option data-value={100} className="option">
                              100.00$
                            </option>
                            <option data-value={500} className="option">
                              500.00$
                            </option>
                            <option data-value={1000} className="option">
                              1000.00$
                            </option>
                            <option data-value={2000} className="option">
                              2000.00$
                            </option>
                            <option data-value={3000} className="option">
                              3000.00$
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="wg-box2 select-group">
                        <label className="title-user fw-6">Status</label>
                        <div className="select-wrapper">
                          <select className="nice-select" tabIndex={0}>
                            <span className="current">Choose</span>

                            <option data-value className="option">
                              Choose
                            </option>
                            <option data-value="Open" className="option">
                              Open
                            </option>
                            <option data-value="Close" className="option">
                              Close
                            </option>
                            <option data-value="Repair" className="option">
                              Repair
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="wg-box2 select-group">
                        <label className="title-user fw-6">Label</label>
                        <div className="rent-box flex justify-space ">
                          <a className="sc-button center">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 10.75L9.25 13L13 7.75M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>Rent</span>
                          </a>
                          <a className="sc-button center">
                            <span>Buy</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="inner-1 form-wg flex ">
                      <div className="wg-box2 select-group">
                        <fieldset>
                          <label className="title-user fw-6">Material</label>
                          <input
                            type="text"
                            placeholder="Choose"
                            className="input-form"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="wg-box2 select-group">
                        <fieldset>
                          <label className="title-user fw-6">Rooms</label>
                          <input
                            type="text"
                            placeholder="Choose"
                            className="input-form"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="wg-box2 select-group">
                        <label className="title-user fw-6">Beds</label>
                        <div className="select-wrapper">
                          <select className="nice-select" tabIndex={0}>
                            <span className="current">Choose</span>

                            <option data-value className="option">
                              Beds
                            </option>
                            <option data-value="twin" className="option">
                              Twin beds
                            </option>
                            <option data-value="bunk" className="option">
                              Bunk beds
                            </option>
                            <option data-value="kids" className="option">
                              Kids beds
                            </option>
                            <option data-value="single" className="option">
                              Single bed
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="inner-1 form-wg flex ">
                      <div className="wg-box2 select-group">
                        <label className="title-user fw-6">Baths</label>
                        <div className="select-wrapper">
                          <select className="nice-select" tabIndex={0}>
                            <span className="current">Choose</span>

                            <option data-value className="option">
                              Baths
                            </option>
                            <option data-value="floating" className="option">
                              Floating baths
                            </option>
                            <option data-value="massage" className="option">
                              Massage baths
                            </option>
                            <option
                              data-value="floor-standing"
                              className="option"
                            >
                              Floor-standing bath
                            </option>
                            <option data-value="built-in" className="option">
                              Built-in baths
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="wg-box2 select-group">
                        <fieldset>
                          <label className="title-user fw-6">Garages</label>
                          <input
                            type="text"
                            placeholder="Choose"
                            className="input-form"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="wg-box2 select-group">
                        <label className="title-user fw-6">Year built</label>
                        <div className="select-wrapper">
                          <select className="nice-select" tabIndex={0}>
                            <span className="current">Choose</span>

                            <option data-value className="option">
                              Choose
                            </option>
                            <option data-value={2010} className="option">
                              2010
                            </option>
                            <option data-value={2015} className="option">
                              2015
                            </option>
                            <option data-value={2020} className="option">
                              2020
                            </option>
                            <option data-value={2024} className="option">
                              2024
                            </option>
                            <option data-value={2022} className="option">
                              2022
                            </option>
                            <option data-value={2023} className="option">
                              2023
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="inner-4 form-wg flex ">
                      <div className="wg-box2 select-group">
                        <fieldset>
                          <label className="title-user fw-6">
                            Home area (sqft)
                          </label>
                          <input
                            type="text"
                            placeholder="Choose"
                            className="input-form"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="wg-box2 select-group">
                        <fieldset>
                          <label className="title-user fw-6">
                            Lot dimensions
                          </label>
                          <input
                            type="text"
                            placeholder="Choose"
                            className="input-form"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="wg-box2 select-group">
                        <fieldset>
                          <label className="title-user fw-6">
                            Lot area (sqft)
                          </label>
                          <input
                            type="text"
                            placeholder="eg: 20x20, 20x20x20"
                            className="input-form"
                            required
                          />
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-amenities bg-white">
                  <h3 className="titles">Amenities</h3>
                  <div className="wrap-amenities flex">
                    <div className="box box-1 flex">
                      <div className="inner-1">
                        <div className="subtitle title-1 fw-6">
                          Outdoor features
                        </div>
                        <label className="flex">
                          <input
                            name="newsletter"
                            type="checkbox"
                            defaultChecked
                          />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Swimming pool</span>
                        </label>
                        <label className="flex">
                          <input
                            name="newsletter"
                            type="checkbox"
                            defaultChecked
                          />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Balcony</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Undercover parking</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Fully fenced</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Outdoor spa</span>
                        </label>
                      </div>
                      <div className="inner-2">
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Tennis court</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Garage</span>
                        </label>
                        <label className="flex">
                          <input
                            name="newsletter"
                            type="checkbox"
                            defaultChecked
                          />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Outdoor area</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Shed</span>
                        </label>
                      </div>
                    </div>
                    <div className="box box-2 flex">
                      <div className="inner-1">
                        <div className="subtitle title-1 fw-6">
                          Indoor features
                        </div>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Ensuite</span>
                        </label>
                        <label className="flex">
                          <input
                            name="newsletter"
                            type="checkbox"
                            defaultChecked
                          />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Study</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Alarm system</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Floorboards</span>
                        </label>
                        <label className="flex">
                          <input
                            name="newsletter"
                            type="checkbox"
                            defaultChecked
                          />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Rumpus room</span>
                        </label>
                      </div>
                      <div className="inner-2">
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Dishwasher</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Built in robes</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Broadband</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Gym</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Workshop</span>
                        </label>
                      </div>
                    </div>
                    <div className="box box-3 flex">
                      <div className="inner-1">
                        <div className="subtitle title-1 fw-6">
                          Climate control &amp; energy
                        </div>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Air conditioning</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Heating</span>
                        </label>
                        <label className="flex">
                          <input
                            name="newsletter"
                            type="checkbox"
                            defaultChecked
                          />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Water tank</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Solar panels</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Solar hot water</span>
                        </label>
                      </div>
                      <div className="inner-2">
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Electric stove system</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Heating system</span>
                        </label>
                        <label className="flex">
                          <input name="newsletter" type="checkbox" />
                          <span className="btn-checkbox" />
                          <span className="fs-13">Dust filter</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-save">
                  <div className="wrap-button flex justify-center">
                    <button className="sc-button" name="submit" type="submit">
                      <span>List Now</span>
                    </button>
                    <button
                      className="sc-button btn-1"
                      name="submit"
                      type="submit"
                    >
                      <span>Save &amp; Preview</span>
                    </button>
                  </div>
                </div>
                <div className="tf-bottom">
                  <div className="title-bottom center text-color-4">
                    {" "}
                    Copyright © 2023{" "}
                    <a
                      href="https://themeforest.net/user/themesflat/portfolio"
                      className="text-color-2 fw-6"
                    >
                      Themesflat.
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutDashboard>
    </>
  );
}
