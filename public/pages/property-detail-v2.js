import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import OneCarousel from "@/components/slider/OneCarousel";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  speed: 500,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next5",
    prevEl: ".swiper-button-prev5",
  },
  pagination: {
    el: ".swiper-pagination5",
    clickable: true,
  },
};

export default function PropertyDetails2() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
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
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Property Listing"
      >
        <div>
          <section className="flat-slider01">
            <div className="container-full">
              <div className="row">
                <div className="col-lg-12">
                  <div className="swiper-container mainslider">
                    <Swiper {...swiperOptions}>
                      <SwiperSlide>
                        <div className="image-detail">
                          <img
                            src="/assets/images/slider/slider-detail-1.jpg"
                            alt="images"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="image-detail">
                          <img
                            src="/assets/images/slider/slider-detail-1.jpg"
                            alt="images"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="image-detail">
                          <img
                            src="/assets/images/slider/slider-detail-1.jpg"
                            alt="images"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div className="swiper-pagination5" />
                    <div className="button-custom-slider">
                      <div className="swiper-button-next5">
                        <i className="far fa-chevron-down" />
                      </div>
                      <div className="swiper-button-prev5">
                        <i className="far fa-chevron-up" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flat-property-detail style2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="wrap-house wg-dream flex bg-white">
                    <div className="box-1">
                      <div className="title-heading fs-30 fw-7 lh-45">
                        Villa Belo a large superior luxury villa
                      </div>
                      <div className="inner flex">
                        <div className="sales fs-12 fw-7 font-2 text-color-1">
                          For sale
                        </div>
                        <div className="text-address">
                          <p>58 Hullbrook Road, Billesley, B13 0LA</p>
                        </div>
                        <div className="icon-inner flex">
                          <div className="years-icon flex align-center">
                            <i className="fal fa-calendar" />
                            <p className="text-color-2">2 years ago</p>
                          </div>
                          <div className="view-icon flex align-center">
                            <i className="far fa-eye" />
                            <p className="text-color-2">4.529 Views</p>
                          </div>
                        </div>
                      </div>
                      <div className="icon-box flex">
                        <div className="icons icon-1 flex">
                          <span>Beds: </span>
                          <span className="fw-6">4</span>
                        </div>
                        <div className="icons icon-2 flex">
                          <span>Baths: </span>
                          <span className="fw-6">2</span>
                        </div>
                        <div className="icons icon-3 flex">
                          <span>Sqft: </span>
                          <span className="fw-6">1150</span>
                        </div>
                      </div>
                    </div>
                    <div className="box-2 text-end">
                      <div className="icon-boxs flex">
                        <Link href="#">
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.75 6.1875C15.75 4.32375 14.1758 2.8125 12.234 2.8125C10.7828 2.8125 9.53625 3.657 9 4.86225C8.46375 3.657 7.21725 2.8125 5.76525 2.8125C3.825 2.8125 2.25 4.32375 2.25 6.1875C2.25 11.6025 9 15.1875 9 15.1875C9 15.1875 15.75 11.6025 15.75 6.1875Z"
                              stroke="#8E8E93"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.625 15.75L2.25 12.375M2.25 12.375L5.625 9M2.25 12.375H12.375M12.375 2.25L15.75 5.625M15.75 5.625L12.375 9M15.75 5.625H5.625"
                              stroke="#8E8E93"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.41251 8.18025C5.23091 7.85348 4.94594 7.59627 4.60234 7.44899C4.25874 7.3017 3.87596 7.27268 3.51408 7.36648C3.1522 7.46029 2.83171 7.6716 2.60293 7.96725C2.37414 8.2629 2.25 8.62616 2.25 9C2.25 9.37384 2.37414 9.73709 2.60293 10.0327C2.83171 10.3284 3.1522 10.5397 3.51408 10.6335C3.87596 10.7273 4.25874 10.6983 4.60234 10.551C4.94594 10.4037 5.23091 10.1465 5.41251 9.81975M5.41251 8.18025C5.54751 8.42325 5.62476 8.70225 5.62476 9C5.62476 9.29775 5.54751 9.5775 5.41251 9.81975M5.41251 8.18025L12.587 4.19475M5.41251 9.81975L12.587 13.8052M12.587 4.19475C12.6922 4.39285 12.8358 4.568 13.0095 4.70995C13.1832 4.85189 13.3834 4.95779 13.5985 5.02146C13.8135 5.08512 14.0392 5.10527 14.2621 5.08072C14.4851 5.05617 14.7009 4.98742 14.897 4.87849C15.093 4.76957 15.2654 4.62264 15.404 4.44631C15.5427 4.26998 15.6448 4.06778 15.7043 3.85154C15.7639 3.63529 15.7798 3.40934 15.751 3.18689C15.7222 2.96445 15.6494 2.74997 15.5368 2.556C15.3148 2.17375 14.9518 1.89385 14.5256 1.77646C14.0995 1.65907 13.6443 1.71356 13.2579 1.92821C12.8715 2.14287 12.5848 2.50056 12.4593 2.92439C12.3339 3.34823 12.3797 3.80436 12.587 4.19475ZM12.587 13.8052C12.4794 13.999 12.4109 14.2121 12.3856 14.4323C12.3603 14.6526 12.3787 14.8756 12.4396 15.0888C12.5005 15.3019 12.6028 15.501 12.7406 15.6746C12.8784 15.8482 13.0491 15.993 13.2429 16.1006C13.4367 16.2083 13.6498 16.2767 13.87 16.302C14.0902 16.3273 14.3133 16.309 14.5264 16.2481C14.7396 16.1872 14.9386 16.0849 15.1122 15.947C15.2858 15.8092 15.4306 15.6385 15.5383 15.4447C15.7557 15.0534 15.8087 14.5917 15.6857 14.1612C15.5627 13.7308 15.2737 13.3668 14.8824 13.1494C14.491 12.932 14.0293 12.8789 13.5989 13.0019C13.1684 13.1249 12.8044 13.4139 12.587 13.8052Z"
                              stroke="#8E8E93"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.04 10.3718C4.86 10.3943 4.68 10.4183 4.5 10.4438M5.04 10.3718C7.66969 10.0418 10.3303 10.0418 12.96 10.3718M5.04 10.3718L4.755 13.5M12.96 10.3718C13.14 10.3943 13.32 10.4183 13.5 10.4438M12.96 10.3718L13.245 13.5L13.4167 15.3923C13.4274 15.509 13.4136 15.6267 13.3762 15.7378C13.3388 15.8489 13.2787 15.951 13.1996 16.0376C13.1206 16.1242 13.0244 16.1933 12.9172 16.2407C12.8099 16.288 12.694 16.3125 12.5767 16.3125H5.42325C4.92675 16.3125 4.53825 15.8865 4.58325 15.3923L4.755 13.5M4.755 13.5H3.9375C3.48995 13.5 3.06072 13.3222 2.74426 13.0057C2.42779 12.6893 2.25 12.2601 2.25 11.8125V7.092C2.25 6.28125 2.826 5.58075 3.62775 5.46075C4.10471 5.3894 4.58306 5.32764 5.0625 5.2755M13.2435 13.5H14.0618C14.2834 13.5001 14.5029 13.4565 14.7078 13.3718C14.9126 13.287 15.0987 13.1627 15.2555 13.006C15.4123 12.8493 15.5366 12.6632 15.6215 12.4585C15.7063 12.2537 15.75 12.0342 15.75 11.8125V7.092C15.75 6.28125 15.174 5.58075 14.3723 5.46075C13.8953 5.38941 13.4169 5.32764 12.9375 5.2755M12.9375 5.2755C10.3202 4.99073 7.67978 4.99073 5.0625 5.2755M12.9375 5.2755V2.53125C12.9375 2.0655 12.5595 1.6875 12.0938 1.6875H5.90625C5.4405 1.6875 5.0625 2.0655 5.0625 2.53125V5.2755M13.5 7.875H13.506V7.881H13.5V7.875ZM11.25 7.875H11.256V7.881H11.25V7.875Z"
                              stroke="#8E8E93"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                      <div className="moneys fs-30 fw-7 lh-45 text-color-3">
                        $7,500
                      </div>
                      <div className="text-sq fs-12 lh-16">1964 Sq Ft</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="post">
                    <div className="wrap-overview wrap-style">
                      <h3 className="titles">Overview</h3>
                      <div className="icon-wrap flex">
                        <div className="box-icon">
                          <div className="inner flex">
                            <div className="icon">
                              <svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.691 16.465H15.2848V1.22595C15.2848 1.14998 15.2568 1.07669 15.2062 1.02006C15.1556 0.963431 15.0859 0.927444 15.0104 0.918975L6.88567 0.00194478C6.84244 -0.00292852 6.79866 0.00138197 6.7572 0.0145944C6.71574 0.0278068 6.67754 0.0496235 6.6451 0.0786168C6.61265 0.10761 6.5867 0.143127 6.56892 0.182844C6.55115 0.22256 6.54197 0.265582 6.54197 0.309093V0.916856H3.02433C2.94235 0.916856 2.86373 0.94942 2.80577 1.00739C2.7478 1.06535 2.71524 1.14397 2.71524 1.22595V16.465H0.309091C0.227115 16.465 0.148497 16.4976 0.0905309 16.5556C0.032565 16.6135 0 16.6922 0 16.7741C0 16.8561 0.032565 16.9347 0.0905309 16.9927C0.148497 17.0507 0.227115 17.0832 0.309091 17.0832H6.54197V17.691C6.54197 17.773 6.57453 17.8516 6.6325 17.9095C6.69046 17.9675 6.76908 18.0001 6.85106 18.0001C6.86286 18.0002 6.87466 17.9995 6.88638 17.9981L14.9934 17.0832H17.6915C17.7735 17.0832 17.8521 17.0507 17.9101 16.9927C17.968 16.9347 18.0006 16.8561 18.0006 16.7741C18.0006 16.6922 17.968 16.6135 17.9101 16.5556C17.8521 16.4976 17.7735 16.465 17.6915 16.465H17.691ZM3.33342 1.53504H6.54197V2.32985H4.43714C4.35517 2.32985 4.27655 2.36241 4.21858 2.42038C4.16061 2.47834 4.12805 2.55696 4.12805 2.63894V16.465H3.33324L3.33342 1.53504ZM4.74641 16.465V2.94803H6.54197V16.465H4.74641ZM7.16015 0.654923L14.6667 1.50272V16.4981L7.16015 17.3459V0.654923Z"
                                  fill="black"
                                />
                                <path
                                  d="M8.49017 8.0802C8.30824 8.0802 8.13039 8.13415 7.97912 8.23522C7.82785 8.3363 7.70995 8.47996 7.64033 8.64804C7.57071 8.81612 7.55249 9.00108 7.58799 9.17951C7.62348 9.35795 7.71109 9.52185 7.83973 9.65049C7.96838 9.77914 8.13228 9.86675 8.31071 9.90224C8.48915 9.93773 8.6741 9.91951 8.84218 9.84989C9.01026 9.78027 9.15393 9.66237 9.255 9.5111C9.35608 9.35983 9.41003 9.18199 9.41003 9.00006C9.40974 8.75618 9.31274 8.52238 9.1403 8.34993C8.96785 8.17748 8.73404 8.08048 8.49017 8.0802ZM8.49017 9.30173C8.4305 9.30173 8.37218 9.28404 8.32257 9.25089C8.27296 9.21774 8.23429 9.17063 8.21146 9.1155C8.18863 9.06038 8.18265 8.99972 8.19429 8.9412C8.20593 8.88268 8.23466 8.82893 8.27685 8.78674C8.31904 8.74455 8.3728 8.71582 8.43132 8.70418C8.48983 8.69254 8.55049 8.69851 8.60561 8.72135C8.66074 8.74418 8.70785 8.78285 8.741 8.83246C8.77415 8.88207 8.79184 8.94039 8.79184 9.00006C8.79175 9.08004 8.75994 9.15671 8.70338 9.21327C8.64683 9.26982 8.57015 9.30164 8.49017 9.30173Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                            <div className="content">
                              <div className="font-2">Rooms</div>
                              <div className="font-2 fw-7">8</div>
                            </div>
                          </div>
                          <div className="inner flex">
                            <div className="icon">
                              <svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.125 2.25H14.375V1H13.125V2.25H4.875V1H3.625V2.25H2.875C1.84113 2.25 1 3.09113 1 4.125V15.125C1 16.1589 1.84113 17 2.875 17H15.125C16.1589 17 17 16.1589 17 15.125V4.125C17 3.09113 16.1589 2.25 15.125 2.25ZM15.75 15.125C15.75 15.4696 15.4696 15.75 15.125 15.75H2.875C2.53038 15.75 2.25 15.4696 2.25 15.125V6.875H15.75V15.125ZM15.75 5.625H2.25V4.125C2.25 3.78038 2.53038 3.5 2.875 3.5H3.625V4.75H4.875V3.5H13.125V4.75H14.375V3.5H15.125C15.4696 3.5 15.75 3.78038 15.75 4.125V5.625Z"
                                  fill="#8E8E93"
                                  stroke="white"
                                  strokeWidth="0.2"
                                />
                                <path
                                  d="M3.375 8.1875H4.625V9.4375H3.375V8.1875ZM5.875 8.1875H7.125V9.4375H5.875V8.1875ZM8.375 8.1875H9.625V9.4375H8.375V8.1875ZM10.875 8.1875H12.125V9.4375H10.875V8.1875ZM13.375 8.1875H14.625V9.4375H13.375V8.1875ZM3.375 10.6875H4.625V11.9375H3.375V10.6875ZM5.875 10.6875H7.125V11.9375H5.875V10.6875ZM8.375 10.6875H9.625V11.9375H8.375V10.6875ZM10.875 10.6875H12.125V11.9375H10.875V10.6875ZM3.375 13.1875H4.625V14.4375H3.375V13.1875ZM5.875 13.1875H7.125V14.4375H5.875V13.1875ZM8.375 13.1875H9.625V14.4375H8.375V13.1875ZM10.875 13.1875H12.125V14.4375H10.875V13.1875ZM13.375 10.6875H14.625V11.9375H13.375V10.6875Z"
                                  fill="#8E8E93"
                                  stroke="white"
                                  strokeWidth="0.2"
                                />
                              </svg>
                            </div>
                            <div className="content">
                              <div className="font-2 ">Year built:</div>
                              <div className="font-2 fw-7">2023</div>
                            </div>
                          </div>
                        </div>
                        <div className="box-icon">
                          <div className="inner flex">
                            <div className="icon">
                              <svg
                                width={16}
                                height={17}
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16 7.625C16 7.23078 15.8392 6.85947 15.5471 6.5795C15.2624 6.30659 14.8905 6.15625 14.5 6.15625H2.96875V3.55687C2.96875 3.0915 3.133 2.65594 3.43116 2.33053C3.71894 2.01662 4.09853 1.84375 4.5 1.84375C5.23531 1.84375 5.78959 2.26266 5.96909 2.90625H5.75C5.49113 2.90625 5.28125 3.11613 5.28125 3.375C5.28125 3.63387 5.49113 3.84375 5.75 3.84375H7.25C7.50887 3.84375 7.71875 3.63387 7.71875 3.375C7.71875 3.11613 7.50887 2.90625 7.25 2.90625H6.928C6.83856 2.394 6.60231 1.93581 6.23981 1.58588C5.78581 1.14763 5.16794 0.90625 4.5 0.90625C3.83262 0.90625 3.20762 1.18706 2.74003 1.69712C2.28297 2.19597 2.03125 2.85644 2.03125 3.55687V6.15625H1.5C1.1095 6.15625 0.737625 6.30659 0.452875 6.5795C0.160812 6.85947 0 7.23078 0 7.625C0 8.01922 0.160812 8.39053 0.452875 8.6705C0.620188 8.83084 0.817688 8.9485 1.03125 9.01859V11.7831C1.03125 13.138 1.85678 14.3037 3.03125 14.8038V15.625C3.03125 15.8839 3.24113 16.0938 3.5 16.0938C3.75887 16.0938 3.96875 15.8839 3.96875 15.625V15.0463C4.08175 15.0582 4.19641 15.0643 4.3125 15.0643H11.6875C11.8036 15.0643 11.9183 15.0582 12.0312 15.0463V15.625C12.0312 15.8839 12.2411 16.0938 12.5 16.0938C12.7589 16.0938 12.9688 15.8839 12.9688 15.625V14.8038C14.1432 14.3037 14.9688 13.138 14.9688 11.7831V9.01859C15.1823 8.9485 15.3798 8.83087 15.5471 8.6705C15.8392 8.39053 16 8.01922 16 7.625ZM14.0312 11.7831C14.0312 13.0754 12.9798 14.1268 11.6875 14.1268H4.3125C3.02016 14.1268 1.96875 13.0754 1.96875 11.7831V9.09375H14.0312V11.7831ZM14.5 8.15625H1.5C1.20034 8.15625 0.9375 7.908 0.9375 7.625C0.9375 7.342 1.20034 7.09375 1.5 7.09375H14.5C14.7997 7.09375 15.0625 7.342 15.0625 7.625C15.0625 7.908 14.7997 8.15625 14.5 8.15625Z"
                                  fill="#8E8E93"
                                />
                              </svg>
                            </div>
                            <div className="content">
                              <div className="font-2">Baths:</div>
                              <div className="font-2 fw-7">4</div>
                            </div>
                          </div>
                          <div className="inner flex">
                            <div className="icon">
                              <svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.6369 0.554572C4.60629 0.501193 4.56213 0.456839 4.50889 0.425995C4.45565 0.39515 4.3952 0.378906 4.33367 0.378906C4.27214 0.378906 4.2117 0.39515 4.15845 0.425995C4.10521 0.456839 4.06105 0.501193 4.03045 0.554572L0.1523 7.3706C0.121562 7.42384 0.105408 7.48424 0.105469 7.54572C0.10553 7.60719 0.121802 7.66756 0.152646 7.72074C0.183489 7.77392 0.227812 7.81802 0.281142 7.8486C0.334473 7.87918 0.394925 7.89515 0.4564 7.89491H8.21094C8.27315 7.89673 8.33472 7.8819 8.38929 7.85197C8.44385 7.82203 8.48943 7.77807 8.52132 7.72462C8.55321 7.67117 8.57026 7.61018 8.57069 7.54794C8.57112 7.48571 8.55492 7.42448 8.52378 7.3706L4.6369 0.554572ZM1.05586 7.19583L4.3293 1.42842L7.60973 7.19583H1.05586ZM11.6696 7.89491H15.8641C16.2349 7.89491 16.5906 7.7476 16.8528 7.4854C17.115 7.22319 17.2623 6.86757 17.2623 6.49675V2.30227C17.2623 1.93146 17.115 1.57583 16.8528 1.31362C16.5906 1.05142 16.2349 0.904112 15.8641 0.904112H11.6696C11.2988 0.904112 10.9432 1.05142 10.681 1.31362C10.4188 1.57583 10.2715 1.93146 10.2715 2.30227V6.49675C10.2715 6.86757 10.4188 7.22319 10.681 7.4854C10.9432 7.7476 11.2988 7.89491 11.6696 7.89491ZM10.9706 2.30227C10.9706 2.11686 11.0442 1.93905 11.1753 1.80795C11.3064 1.67684 11.4842 1.60319 11.6696 1.60319H15.8641C16.0495 1.60319 16.2273 1.67684 16.3584 1.80795C16.4895 1.93905 16.5632 2.11686 16.5632 2.30227V6.49675C16.5632 6.68216 16.4895 6.85997 16.3584 6.99107C16.2273 7.12218 16.0495 7.19583 15.8641 7.19583H11.6696C11.4842 7.19583 11.3064 7.12218 11.1753 6.99107C11.0442 6.85997 10.9706 6.68216 10.9706 6.49675V2.30227ZM17.5087 12.542L14.7124 9.74572C14.5882 9.62154 14.4408 9.52303 14.2786 9.45582C14.1164 9.38861 13.9425 9.35402 13.7669 9.35402C13.5913 9.35402 13.4174 9.38861 13.2552 9.45582C13.0929 9.52303 12.9455 9.62154 12.8214 9.74572L10.0251 12.542C9.7751 12.7932 9.63479 13.1332 9.63479 13.4875C9.63479 13.8419 9.7751 14.1819 10.0251 14.4331L12.8214 17.2294C12.9455 17.3536 13.0929 17.4521 13.2552 17.5193C13.4174 17.5865 13.5913 17.6211 13.7669 17.6211C13.9425 17.6211 14.1164 17.5865 14.2786 17.5193C14.4408 17.4521 14.5882 17.3536 14.7124 17.2294L17.5087 14.4331C17.7582 14.1816 17.8983 13.8418 17.8983 13.4875C17.8983 13.1333 17.7582 12.7935 17.5087 12.542ZM17.0141 13.9402L14.2178 16.7365C14.0979 16.8556 13.9358 16.9225 13.7669 16.9225C13.5979 16.9225 13.4358 16.8556 13.316 16.7365L10.5197 13.9402C10.4603 13.8811 10.4131 13.8108 10.381 13.7334C10.3488 13.6561 10.3323 13.5731 10.3323 13.4893C10.3323 13.4055 10.3488 13.3225 10.381 13.2451C10.4131 13.1678 10.4603 13.0975 10.5197 13.0384L13.316 10.2421C13.4371 10.1254 13.5987 10.0603 13.7669 10.0603C13.935 10.0603 14.0966 10.1254 14.2178 10.2421L17.0141 13.0384C17.1336 13.158 17.2008 13.3202 17.2008 13.4893C17.2008 13.6584 17.1336 13.8206 17.0141 13.9402ZM4.3293 9.64261C3.56884 9.64261 2.82546 9.86811 2.19317 10.2906C1.56087 10.7131 1.06806 11.3136 0.777041 12.0162C0.486027 12.7187 0.409884 13.4918 0.558242 14.2377C0.7066 14.9835 1.07279 15.6686 1.61052 16.2063C2.14824 16.7441 2.83335 17.1102 3.57919 17.2586C4.32504 17.407 5.09812 17.3308 5.8007 17.0398C6.50327 16.7488 7.10376 16.256 7.52625 15.6237C7.94874 14.9914 8.17424 14.248 8.17424 13.4875C8.17424 12.9826 8.07479 12.4826 7.88156 12.0162C7.68833 11.5497 7.40512 11.1258 7.04808 10.7688C6.69105 10.4117 6.26719 10.1285 5.8007 9.93529C5.33421 9.74206 4.83423 9.64261 4.3293 9.64261ZM4.3293 16.6334C3.70711 16.6334 3.09889 16.4489 2.58156 16.1032C2.06422 15.7576 1.66101 15.2662 1.42291 14.6914C1.1848 14.1166 1.12251 13.4841 1.24389 12.8738C1.36527 12.2636 1.66489 11.703 2.10484 11.2631C2.5448 10.8231 3.10534 10.5235 3.71557 10.4021C4.32581 10.2808 4.95834 10.3431 5.53317 10.5812C6.108 10.8193 6.59932 11.2225 6.94499 11.7398C7.29066 12.2571 7.47516 12.8654 7.47516 13.4875C7.47516 14.3219 7.14372 15.122 6.55376 15.712C5.9638 16.302 5.16364 16.6334 4.3293 16.6334Z"
                                  fill="#8E8E93"
                                  stroke="#8E8E93"
                                  strokeWidth="0.3"
                                />
                              </svg>
                            </div>
                            <div className="content">
                              <div className="font-2">Property type:</div>
                              <div className="font-2 fw-7">Villa</div>
                            </div>
                          </div>
                        </div>
                        <div className="box-icon">
                          <div className="inner flex">
                            <div className="icon">
                              <svg
                                width={16}
                                height={17}
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.1805 7.67821V3.22946C14.1805 2.32484 13.4445 1.58887 12.5399 1.58887H3.46003C2.55541 1.58887 1.8195 2.32484 1.8195 3.22946V7.67821C0.777125 7.92896 0 8.86855 0 9.98677V13.305C0 13.5682 0.213406 13.7816 0.476656 13.7816H1.81947V14.9345C1.81947 15.1977 2.03288 15.4111 2.29612 15.4111C2.55937 15.4111 2.77278 15.1977 2.77278 14.9345V13.7816H13.2272V14.9345C13.2272 15.1977 13.4406 15.4111 13.7038 15.4111C13.9671 15.4111 14.1805 15.1977 14.1805 14.9345V13.7816H15.5233C15.7865 13.7816 15.9999 13.5682 15.9999 13.305V9.98677C16 8.86855 15.2229 7.92896 14.1805 7.67821ZM2.77281 3.22946C2.77281 2.85052 3.08113 2.54221 3.46003 2.54221H12.5399C12.9189 2.54221 13.2272 2.85052 13.2272 3.22946V7.61202H11.652V6.86002C11.652 5.61409 10.6384 4.60046 9.39247 4.60046H6.60759C5.36166 4.60046 4.34803 5.61412 4.34803 6.86002V7.61199H2.77281V3.22946ZM10.6987 6.86002V7.61199H5.30128V6.86002C5.30128 6.13974 5.88725 5.55377 6.60753 5.55377H9.39244C10.1127 5.55374 10.6987 6.13977 10.6987 6.86002ZM0.953313 12.8283V9.98677C0.953313 9.20299 1.59097 8.56534 2.37475 8.56534H13.6252C14.409 8.56534 15.0466 9.20299 15.0466 9.98677V12.8283H0.953313Z"
                                  fill="#8E8E93"
                                />
                              </svg>
                            </div>
                            <div className="content">
                              <div className="font-2">Bed:</div>
                              <div className="font-2 fw-7">4</div>
                            </div>
                          </div>
                          <div className="inner flex">
                            <div className="icon">
                              <svg
                                width={18}
                                height={16}
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.588634 14.6051H17.4112M16.3933 4.65453V14.6051H1.60654V4.62514M17.4764 4.87532L8.99991 1.3949L0.523438 4.87532M3.72978 8.32286H14.2701M3.72978 10.417H14.2701M3.72978 12.5111H14.2701"
                                  stroke="#8E8E93"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M3.73047 6.22876H14.2707V14.6051H3.73047V6.22876Z"
                                  stroke="#8E8E93"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="content">
                              <div className="font-2">Garage:</div>
                              <div className="font-2 fw-7">1</div>
                            </div>
                          </div>
                        </div>
                        <div className="box-icon">
                          <div className="inner flex">
                            <div className="icon">
                              <svg
                                width={18}
                                height={14}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.47579 3.36707C3.71432 3.36707 2.28125 4.80014 2.28125 6.56161C2.28125 8.32308 3.71432 9.75615 5.47579 9.75615C7.23726 9.75615 8.67034 8.32308 8.67034 6.56161C8.67034 4.80014 7.23726 3.36707 5.47579 3.36707ZM5.47579 8.70146C4.29584 8.70146 3.33594 7.74152 3.33594 6.56161C3.33594 5.38169 4.29588 4.42175 5.47579 4.42175C6.65571 4.42175 7.61565 5.38169 7.61565 6.56161C7.61565 7.74152 6.65571 8.70146 5.47579 8.70146Z"
                                  fill="#8E8E93"
                                />
                                <path
                                  d="M17.4727 10.5696H13.4337V9.48113C13.4337 9.1899 13.1976 8.95379 12.9064 8.95379H10.9495V6.46761C10.9495 6.07186 10.9069 5.68591 10.8268 5.31375L11.5946 4.7401C11.9281 4.49102 12.1445 4.12698 12.2042 3.71509C12.2638 3.30316 12.1595 2.89271 11.9104 2.55925L11.0338 1.38584C10.7847 1.05239 10.4207 0.83593 10.0088 0.776269C9.59681 0.716644 9.1864 0.820953 8.85294 1.07007L8.07536 1.65096C7.30129 1.23137 6.41538 0.992832 5.47478 0.992832C2.45595 0.992867 0 3.44881 0 6.46761V10.6843C0 12.0936 1.14655 13.2401 2.55586 13.2401H12.9064C13.1976 13.2401 13.4337 13.004 13.4337 12.7128V11.6243H16.9453V12.706C16.9453 12.9972 17.1814 13.2334 17.4727 13.2334C17.7639 13.2334 18 12.9972 18 12.706V11.0969C18 10.8057 17.7639 10.5696 17.4727 10.5696ZM9.48414 1.91502C9.59186 1.83454 9.72439 1.80079 9.85764 1.82009C9.99074 1.83936 10.1083 1.90932 10.1888 2.01704L11.0655 3.19048C11.146 3.29824 11.1797 3.43085 11.1604 3.56395C11.1412 3.69705 11.0712 3.81468 10.9634 3.89516L10.4819 4.25487C10.1417 3.48791 9.63028 2.81326 8.99641 2.27941L9.48414 1.91502ZM12.379 12.1855H2.55586C1.72811 12.1855 1.05469 11.512 1.05469 10.6843V6.46761C1.05469 4.03037 3.03754 2.04755 5.47478 2.04755C7.91202 2.04755 9.89487 4.0304 9.89487 6.46764V9.48117C9.89487 9.7724 10.131 10.0085 10.4222 10.0085H12.379V12.1855H12.379Z"
                                  fill="#8E8E93"
                                />
                              </svg>
                            </div>
                            <div className="content">
                              <div className="font-2">Size:</div>
                              <div className="font-2 fw-7">572 Sq Ft</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wrap-text wrap-style">
                      <h3 className="titles">Property description</h3>
                      <p className="text-1 text-color-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam risus leo, blandit vitae diam a, vestibulum
                        viverra nisi. Vestibulum ullamcorper velit eget mattis
                        aliquam. Proin dapibus luctus pulvinar. Integer et
                        libero ut purus bibendum gravida non ac tellus. Proin
                        sed tellus porttitor, varius mauris vitae, tincidunt
                        augue. Sed consectetur magna elit, sit amet faucibus
                        tortor sodales vitae. Maecenas quis arcu est. Nam sit
                        amet neque vestibulum, fringilla elit sit amet, volutpat
                        nunc.
                      </p>
                      <p className="text-2 text-color-2">
                        Aliquam non lorem consequat, luctus dui et, auctor nisi.
                        Aenean placerat sapien at augue lacinia, non semper urna
                        tempor. Mauris sit amet elit orci.
                      </p>
                      <Link href="#" className="fw-6">
                        Show more
                      </Link>
                    </div>
                    <div className="wrap-property wrap-style">
                      <h3 className="titles">Property details</h3>
                      <div className="box flex">
                        <ul>
                          <li className="flex">
                            <span className="one fw-6">ID</span>
                            <span className="two">#1234</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">Price</span>
                            <span className="two">$7,500</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">Size</span>
                            <span className="two">150 sqft</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">Rooms</span>
                            <span className="two">9</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">Baths</span>
                            <span className="two">3</span>
                          </li>
                        </ul>
                        <ul>
                          <li className="flex">
                            <span className="one fw-6">Beds</span>
                            <span className="two">7.328</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">Year buit</span>
                            <span className="two">2022</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">Type</span>
                            <span className="two">Villa</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">Status</span>
                            <span className="two">For sale</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">Garage</span>
                            <span className="two">1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="wrap-featured wrap-style tf-amenities">
                      <h3 className="titles">Featured</h3>
                      <div className="box-featured flex">
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
                            <input
                              name="newsletter"
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="btn-checkbox" />
                            <span className="fs-13">Undercover parking</span>
                          </label>
                        </div>
                        <div className="inner-2">
                          <label className="flex">
                            <input
                              name="newsletter"
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="btn-checkbox" />
                            <span className="fs-13">Tennis court</span>
                          </label>
                          <label className="flex">
                            <input
                              name="newsletter"
                              type="checkbox"
                              defaultChecked
                            />
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
                        </div>
                        <div className="inner-3">
                          <div className="subtitle title-1 fw-6">
                            Indoor features
                          </div>
                          <label className="flex">
                            <input
                              name="newsletter"
                              type="checkbox"
                              defaultChecked
                            />
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
                            <input
                              name="newsletter"
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="btn-checkbox" />
                            <span className="fs-13">Alarm system</span>
                          </label>
                        </div>
                        <div className="inner-4">
                          <label className="flex">
                            <input
                              name="newsletter"
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="btn-checkbox" />
                            <span className="fs-13">Dishwasher</span>
                          </label>
                          <label className="flex">
                            <input
                              name="newsletter"
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="btn-checkbox" />
                            <span className="fs-13">Built in robes</span>
                          </label>
                          <label className="flex">
                            <input
                              name="newsletter"
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="btn-checkbox" />
                            <span className="fs-13">Broadband</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="wrap-map wrap-property wrap-style">
                      <h3 className="titles">Map location</h3>
                      <div className="box flex">
                        <ul>
                          <li className="flex">
                            <span className="one fw-6">Address</span>
                            <span className="two">150 sqft</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">City</span>
                            <span className="two">#1234</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">State/county</span>
                            <span className="two">$7,500</span>
                          </li>
                        </ul>
                        <ul>
                          <li className="flex">
                            <span className="one fw-6">Postal code</span>
                            <span className="two">7.328</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">Area</span>
                            <span className="two">7.328</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">Country</span>
                            <span className="two">2022</span>
                          </li>
                        </ul>
                      </div>
                      <iframe
                        className="map-content"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.453092836291!2d90.47477022812872!3d23.77494577893369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1627293157601!5m2!1svi!2s"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <div className="wrap-floor wrap-property wrap-style">
                      <h3 className="titles">Floor plans</h3>
                      <div className="flat-accordion fl-faq-content">
                        <div
                          className={`flat-toggle ${
                            isActive.key == 1 ? "active" : ""
                          }`}
                          onClick={() => handleClick(1)}
                        >
                          <div
                            className={`toggle-title flex justify-space ${
                              isActive.key == 1 ? "active" : ""
                            }`}
                          >
                            <div className="btn-toggle" />
                            <div className="fw-6">First floor</div>
                            <div className="icon-box flex wg-dream">
                              <div className="icons icon-money flex">
                                <span>
                                  <svg
                                    width={16}
                                    height={17}
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.9735 13.343L14.4762 4.85134C14.3731 4.2665 13.9833 3.78325 13.4335 3.55869L9.86063 2.09923C9.70857 2.03723 9.54834 1.99757 9.38492 1.98148L9.19201 0.887453C9.14707 0.632517 8.90411 0.462331 8.64901 0.507237C8.39405 0.552174 8.22383 0.795297 8.2688 1.05023L8.46173 2.14438C8.31591 2.21445 8.18082 2.30495 8.06055 2.41316L7.65586 2.77763L7.59586 2.72319C7.47418 2.61292 7.33718 2.52084 7.18912 2.44982L7.43589 1.05023C7.48083 0.795297 7.31061 0.552174 7.05568 0.507237C6.80077 0.462143 6.55762 0.632486 6.51268 0.887453L6.26587 2.28713C6.10487 2.3031 5.94696 2.34196 5.79694 2.40254L2.19183 3.85944C1.6388 4.08293 1.24677 4.56706 1.14318 5.15452L0.026282 11.4889C-0.13828 12.4223 0.487154 13.3154 1.42046 13.48L5.98543 14.2849L6.12553 15.0795C6.27237 15.9124 6.9993 16.5 7.8173 16.5C7.91602 16.5 8.01611 16.4914 8.11661 16.4737L14.5794 15.3342C15.5127 15.1696 16.1381 14.2764 15.9735 13.343ZM14.4166 14.4109L7.9538 15.5504C7.74827 15.5866 7.54099 15.5407 7.37002 15.421C7.19908 15.3013 7.08499 15.1222 7.04874 14.9167L6.9679 14.4582L7.88317 14.6196C7.98291 14.6372 8.08399 14.6461 8.18527 14.6461C8.53467 14.6461 8.87526 14.5394 9.16745 14.3348C9.54354 14.0715 9.79454 13.6775 9.87426 13.2254L10.9917 6.88795C11.0948 6.30308 10.8938 5.71567 10.454 5.31665L8.35361 3.41081L8.68783 3.10982C8.83333 2.97882 9.02189 2.90972 9.21239 2.90972C9.3117 2.90972 9.41157 2.92853 9.50607 2.96713L13.079 4.42659C13.3289 4.52868 13.506 4.74831 13.5529 5.01415L15.0503 13.5058C15.1251 13.9301 14.8408 14.3361 14.4166 14.4109ZM0.949495 11.6517L2.06646 5.3173C2.11355 5.05027 2.29174 4.83021 2.54311 4.72862L6.0879 3.29606L5.98631 3.87231C5.94137 4.12725 6.11159 4.37037 6.36653 4.41531C6.39406 4.42018 6.42143 4.4225 6.44846 4.4225C6.67165 4.4225 6.86943 4.26246 6.90952 4.03506L7.01118 3.45859L9.8241 6.01092C10.024 6.1923 10.1153 6.4593 10.0685 6.72514L8.95104 13.0626C8.91479 13.2681 8.8007 13.4472 8.62976 13.5669C8.45883 13.6866 8.25152 13.7325 8.04599 13.6963L1.58321 12.5568C1.15899 12.4819 0.874714 12.0759 0.949495 11.6517Z"
                                      fill="#8E8E93"
                                    />
                                    <path
                                      d="M4.72101 11.4015L4.64617 11.8259C4.6162 11.9959 4.7297 12.158 4.89967 12.1879C4.91801 12.1912 4.93626 12.1927 4.95429 12.1927C5.10307 12.1927 5.23495 12.086 5.26167 11.9344L5.34067 11.4865C5.66182 11.4855 5.96835 11.3962 6.24035 11.2224C6.56413 11.0155 6.81338 10.7018 6.94216 10.339C7.20434 9.60041 6.92256 8.86823 6.22432 8.4737C6.11697 8.41317 6.01041 8.35127 5.90466 8.28801L6.21688 6.51733C6.43635 6.59818 6.56266 6.73133 6.64675 6.82014C6.67069 6.84542 6.69331 6.86933 6.71644 6.89071C6.84319 7.00786 7.04087 7.00008 7.15803 6.87339C7.27518 6.74668 7.26743 6.54896 7.14072 6.4318C7.13287 6.42455 7.11647 6.40724 7.10062 6.39049C6.98731 6.27077 6.75047 6.02068 6.32641 5.89618L6.39094 5.53012C6.42091 5.36015 6.30741 5.19809 6.13744 5.16812C5.96747 5.13818 5.80541 5.25162 5.77544 5.42162L5.70441 5.8244C5.64004 5.82681 5.57344 5.83162 5.50388 5.83987C4.98942 5.9009 4.55051 6.25508 4.35839 6.76424C4.18377 7.22705 4.25486 7.71476 4.54395 8.03704C4.70526 8.21689 4.91595 8.3926 5.2162 8.59307L4.82954 10.7859C4.52517 10.7157 4.33964 10.6175 4.04202 10.3381C3.9162 10.22 3.71842 10.2262 3.6003 10.352C3.48218 10.4778 3.48839 10.6756 3.61424 10.7937C4.01933 11.174 4.31311 11.3106 4.72101 11.4015ZM6.35316 10.13C6.23122 10.4735 5.90947 10.8057 5.45201 10.855L5.78882 8.94485C5.83032 8.96876 5.87297 8.9931 5.91682 9.01788C6.55916 9.38078 6.41322 9.96084 6.35316 10.13ZM5.0092 7.6197C4.87651 7.47176 4.8512 7.22852 4.94314 6.98486C5.02889 6.75758 5.24057 6.50049 5.57748 6.46052C5.58257 6.45993 5.58744 6.45952 5.59251 6.45896L5.33626 7.91223C5.19951 7.80858 5.0927 7.71273 5.0092 7.6197Z"
                                      fill="#8E8E93"
                                    />
                                  </svg>
                                </span>{" "}
                                <span className="fw-6">Price: </span>
                                <span>$7,500</span>
                              </div>
                              <div className="icons icon-3 flex">
                                <span className="fw-6">Size: </span>
                                <span>4</span>
                              </div>
                              <div className="icons icon-1 flex">
                                <span className="fw-6">Beds: </span>
                                <span>150 sqft</span>
                              </div>
                              <div className="icons icon-2 flex">
                                <span className="fw-6">Baths: </span>
                                <span>2</span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="toggle-content section-desc"
                            style={{
                              display: `${
                                isActive.key == 1 ? "block" : "none"
                              }`,
                            }}
                          >
                            <img
                              src="/assets/images/img-box/property-5.jpg"
                              alt=""
                            />
                            <div className="title fw-6">Description:</div>
                            <p className="texts text-color-2">
                              Proin sed tellus porttitor, varius mauris vitae,
                              tincidunt augue. Sed consectetur magna elit, sit
                              amet faucibus tortor sodales vitae. Maecenas quis
                              arcu est. Nam sit amet neque vestibulum, fringilla
                              elit sit amet, volutpat nunc.
                            </p>
                            <p className="text-color-2">
                              Aliquam non lorem consequat, luctus dui et, auctor
                              nisi. Aenean placerat sapien at augue lacinia, non
                              semper urna tempor. Mauris sit amet elit orci.
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flat-toggle ${
                            isActive.key == 2 ? "active" : ""
                          }`}
                          onClick={() => handleClick(2)}
                        >
                          <div
                            className={`toggle-title flex justify-space ${
                              isActive.key == 2 ? "active" : ""
                            }`}
                          >
                            <div className="btn-toggle" />
                            <div className="fw-6">Second floor</div>
                            <div className="icon-box flex wg-dream">
                              <div className="icons icon-money flex">
                                <span>
                                  <svg
                                    width={16}
                                    height={17}
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.9735 13.343L14.4762 4.85134C14.3731 4.2665 13.9833 3.78325 13.4335 3.55869L9.86063 2.09923C9.70857 2.03723 9.54834 1.99757 9.38492 1.98148L9.19201 0.887453C9.14707 0.632517 8.90411 0.462331 8.64901 0.507237C8.39405 0.552174 8.22383 0.795297 8.2688 1.05023L8.46173 2.14438C8.31591 2.21445 8.18082 2.30495 8.06055 2.41316L7.65586 2.77763L7.59586 2.72319C7.47418 2.61292 7.33718 2.52084 7.18912 2.44982L7.43589 1.05023C7.48083 0.795297 7.31061 0.552174 7.05568 0.507237C6.80077 0.462143 6.55762 0.632486 6.51268 0.887453L6.26587 2.28713C6.10487 2.3031 5.94696 2.34196 5.79694 2.40254L2.19183 3.85944C1.6388 4.08293 1.24677 4.56706 1.14318 5.15452L0.026282 11.4889C-0.13828 12.4223 0.487154 13.3154 1.42046 13.48L5.98543 14.2849L6.12553 15.0795C6.27237 15.9124 6.9993 16.5 7.8173 16.5C7.91602 16.5 8.01611 16.4914 8.11661 16.4737L14.5794 15.3342C15.5127 15.1696 16.1381 14.2764 15.9735 13.343ZM14.4166 14.4109L7.9538 15.5504C7.74827 15.5866 7.54099 15.5407 7.37002 15.421C7.19908 15.3013 7.08499 15.1222 7.04874 14.9167L6.9679 14.4582L7.88317 14.6196C7.98291 14.6372 8.08399 14.6461 8.18527 14.6461C8.53467 14.6461 8.87526 14.5394 9.16745 14.3348C9.54354 14.0715 9.79454 13.6775 9.87426 13.2254L10.9917 6.88795C11.0948 6.30308 10.8938 5.71567 10.454 5.31665L8.35361 3.41081L8.68783 3.10982C8.83333 2.97882 9.02189 2.90972 9.21239 2.90972C9.3117 2.90972 9.41157 2.92853 9.50607 2.96713L13.079 4.42659C13.3289 4.52868 13.506 4.74831 13.5529 5.01415L15.0503 13.5058C15.1251 13.9301 14.8408 14.3361 14.4166 14.4109ZM0.949495 11.6517L2.06646 5.3173C2.11355 5.05027 2.29174 4.83021 2.54311 4.72862L6.0879 3.29606L5.98631 3.87231C5.94137 4.12725 6.11159 4.37037 6.36653 4.41531C6.39406 4.42018 6.42143 4.4225 6.44846 4.4225C6.67165 4.4225 6.86943 4.26246 6.90952 4.03506L7.01118 3.45859L9.8241 6.01092C10.024 6.1923 10.1153 6.4593 10.0685 6.72514L8.95104 13.0626C8.91479 13.2681 8.8007 13.4472 8.62976 13.5669C8.45883 13.6866 8.25152 13.7325 8.04599 13.6963L1.58321 12.5568C1.15899 12.4819 0.874714 12.0759 0.949495 11.6517Z"
                                      fill="#8E8E93"
                                    />
                                    <path
                                      d="M4.72101 11.4015L4.64617 11.8259C4.6162 11.9959 4.7297 12.158 4.89967 12.1879C4.91801 12.1912 4.93626 12.1927 4.95429 12.1927C5.10307 12.1927 5.23495 12.086 5.26167 11.9344L5.34067 11.4865C5.66182 11.4855 5.96835 11.3962 6.24035 11.2224C6.56413 11.0155 6.81338 10.7018 6.94216 10.339C7.20434 9.60041 6.92256 8.86823 6.22432 8.4737C6.11697 8.41317 6.01041 8.35127 5.90466 8.28801L6.21688 6.51733C6.43635 6.59818 6.56266 6.73133 6.64675 6.82014C6.67069 6.84542 6.69331 6.86933 6.71644 6.89071C6.84319 7.00786 7.04087 7.00008 7.15803 6.87339C7.27518 6.74668 7.26743 6.54896 7.14072 6.4318C7.13287 6.42455 7.11647 6.40724 7.10062 6.39049C6.98731 6.27077 6.75047 6.02068 6.32641 5.89618L6.39094 5.53012C6.42091 5.36015 6.30741 5.19809 6.13744 5.16812C5.96747 5.13818 5.80541 5.25162 5.77544 5.42162L5.70441 5.8244C5.64004 5.82681 5.57344 5.83162 5.50388 5.83987C4.98942 5.9009 4.55051 6.25508 4.35839 6.76424C4.18377 7.22705 4.25486 7.71476 4.54395 8.03704C4.70526 8.21689 4.91595 8.3926 5.2162 8.59307L4.82954 10.7859C4.52517 10.7157 4.33964 10.6175 4.04202 10.3381C3.9162 10.22 3.71842 10.2262 3.6003 10.352C3.48218 10.4778 3.48839 10.6756 3.61424 10.7937C4.01933 11.174 4.31311 11.3106 4.72101 11.4015ZM6.35316 10.13C6.23122 10.4735 5.90947 10.8057 5.45201 10.855L5.78882 8.94485C5.83032 8.96876 5.87297 8.9931 5.91682 9.01788C6.55916 9.38078 6.41322 9.96084 6.35316 10.13ZM5.0092 7.6197C4.87651 7.47176 4.8512 7.22852 4.94314 6.98486C5.02889 6.75758 5.24057 6.50049 5.57748 6.46052C5.58257 6.45993 5.58744 6.45952 5.59251 6.45896L5.33626 7.91223C5.19951 7.80858 5.0927 7.71273 5.0092 7.6197Z"
                                      fill="#8E8E93"
                                    />
                                  </svg>
                                </span>{" "}
                                <span className="fw-6">Price: </span>
                                <span>$7,500</span>
                              </div>
                              <div className="icons icon-3 flex">
                                <span className="fw-6">Size: </span>
                                <span>4</span>
                              </div>
                              <div className="icons icon-1 flex">
                                <span className="fw-6">Beds: </span>
                                <span>150 sqft</span>
                              </div>
                              <div className="icons icon-2 flex">
                                <span className="fw-6">Baths: </span>
                                <span>2</span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="toggle-content section-desc"
                            style={{
                              display: `${
                                isActive.key == 2 ? "block" : "none"
                              }`,
                            }}
                          >
                            <img
                              src="/assets/images/img-box/property-5.jpg"
                              alt=""
                            />
                            <div className="title fw-6">Description:</div>
                            <p className="texts text-color-2">
                              Proin sed tellus porttitor, varius mauris vitae,
                              tincidunt augue. Sed consectetur magna elit, sit
                              amet faucibus tortor sodales vitae. Maecenas quis
                              arcu est. Nam sit amet neque vestibulum, fringilla
                              elit sit amet, volutpat nunc.
                            </p>
                            <p className="text-color-2">
                              Aliquam non lorem consequat, luctus dui et, auctor
                              nisi. Aenean placerat sapien at augue lacinia, non
                              semper urna tempor. Mauris sit amet elit orci.
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flat-toggle ${
                            isActive.key == 3 ? "active" : ""
                          }`}
                          onClick={() => handleClick(3)}
                        >
                          <div
                            className={`toggle-title flex justify-space ${
                              isActive.key == 3 ? "active" : ""
                            }`}
                          >
                            <div className="btn-toggle" />
                            <div className="fw-6">Third floor</div>
                            <div className="icon-box flex wg-dream">
                              <div className="icons icon-money flex">
                                <span>
                                  <svg
                                    width={16}
                                    height={17}
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.9735 13.343L14.4762 4.85134C14.3731 4.2665 13.9833 3.78325 13.4335 3.55869L9.86063 2.09923C9.70857 2.03723 9.54834 1.99757 9.38492 1.98148L9.19201 0.887453C9.14707 0.632517 8.90411 0.462331 8.64901 0.507237C8.39405 0.552174 8.22383 0.795297 8.2688 1.05023L8.46173 2.14438C8.31591 2.21445 8.18082 2.30495 8.06055 2.41316L7.65586 2.77763L7.59586 2.72319C7.47418 2.61292 7.33718 2.52084 7.18912 2.44982L7.43589 1.05023C7.48083 0.795297 7.31061 0.552174 7.05568 0.507237C6.80077 0.462143 6.55762 0.632486 6.51268 0.887453L6.26587 2.28713C6.10487 2.3031 5.94696 2.34196 5.79694 2.40254L2.19183 3.85944C1.6388 4.08293 1.24677 4.56706 1.14318 5.15452L0.026282 11.4889C-0.13828 12.4223 0.487154 13.3154 1.42046 13.48L5.98543 14.2849L6.12553 15.0795C6.27237 15.9124 6.9993 16.5 7.8173 16.5C7.91602 16.5 8.01611 16.4914 8.11661 16.4737L14.5794 15.3342C15.5127 15.1696 16.1381 14.2764 15.9735 13.343ZM14.4166 14.4109L7.9538 15.5504C7.74827 15.5866 7.54099 15.5407 7.37002 15.421C7.19908 15.3013 7.08499 15.1222 7.04874 14.9167L6.9679 14.4582L7.88317 14.6196C7.98291 14.6372 8.08399 14.6461 8.18527 14.6461C8.53467 14.6461 8.87526 14.5394 9.16745 14.3348C9.54354 14.0715 9.79454 13.6775 9.87426 13.2254L10.9917 6.88795C11.0948 6.30308 10.8938 5.71567 10.454 5.31665L8.35361 3.41081L8.68783 3.10982C8.83333 2.97882 9.02189 2.90972 9.21239 2.90972C9.3117 2.90972 9.41157 2.92853 9.50607 2.96713L13.079 4.42659C13.3289 4.52868 13.506 4.74831 13.5529 5.01415L15.0503 13.5058C15.1251 13.9301 14.8408 14.3361 14.4166 14.4109ZM0.949495 11.6517L2.06646 5.3173C2.11355 5.05027 2.29174 4.83021 2.54311 4.72862L6.0879 3.29606L5.98631 3.87231C5.94137 4.12725 6.11159 4.37037 6.36653 4.41531C6.39406 4.42018 6.42143 4.4225 6.44846 4.4225C6.67165 4.4225 6.86943 4.26246 6.90952 4.03506L7.01118 3.45859L9.8241 6.01092C10.024 6.1923 10.1153 6.4593 10.0685 6.72514L8.95104 13.0626C8.91479 13.2681 8.8007 13.4472 8.62976 13.5669C8.45883 13.6866 8.25152 13.7325 8.04599 13.6963L1.58321 12.5568C1.15899 12.4819 0.874714 12.0759 0.949495 11.6517Z"
                                      fill="#8E8E93"
                                    />
                                    <path
                                      d="M4.72101 11.4015L4.64617 11.8259C4.6162 11.9959 4.7297 12.158 4.89967 12.1879C4.91801 12.1912 4.93626 12.1927 4.95429 12.1927C5.10307 12.1927 5.23495 12.086 5.26167 11.9344L5.34067 11.4865C5.66182 11.4855 5.96835 11.3962 6.24035 11.2224C6.56413 11.0155 6.81338 10.7018 6.94216 10.339C7.20434 9.60041 6.92256 8.86823 6.22432 8.4737C6.11697 8.41317 6.01041 8.35127 5.90466 8.28801L6.21688 6.51733C6.43635 6.59818 6.56266 6.73133 6.64675 6.82014C6.67069 6.84542 6.69331 6.86933 6.71644 6.89071C6.84319 7.00786 7.04087 7.00008 7.15803 6.87339C7.27518 6.74668 7.26743 6.54896 7.14072 6.4318C7.13287 6.42455 7.11647 6.40724 7.10062 6.39049C6.98731 6.27077 6.75047 6.02068 6.32641 5.89618L6.39094 5.53012C6.42091 5.36015 6.30741 5.19809 6.13744 5.16812C5.96747 5.13818 5.80541 5.25162 5.77544 5.42162L5.70441 5.8244C5.64004 5.82681 5.57344 5.83162 5.50388 5.83987C4.98942 5.9009 4.55051 6.25508 4.35839 6.76424C4.18377 7.22705 4.25486 7.71476 4.54395 8.03704C4.70526 8.21689 4.91595 8.3926 5.2162 8.59307L4.82954 10.7859C4.52517 10.7157 4.33964 10.6175 4.04202 10.3381C3.9162 10.22 3.71842 10.2262 3.6003 10.352C3.48218 10.4778 3.48839 10.6756 3.61424 10.7937C4.01933 11.174 4.31311 11.3106 4.72101 11.4015ZM6.35316 10.13C6.23122 10.4735 5.90947 10.8057 5.45201 10.855L5.78882 8.94485C5.83032 8.96876 5.87297 8.9931 5.91682 9.01788C6.55916 9.38078 6.41322 9.96084 6.35316 10.13ZM5.0092 7.6197C4.87651 7.47176 4.8512 7.22852 4.94314 6.98486C5.02889 6.75758 5.24057 6.50049 5.57748 6.46052C5.58257 6.45993 5.58744 6.45952 5.59251 6.45896L5.33626 7.91223C5.19951 7.80858 5.0927 7.71273 5.0092 7.6197Z"
                                      fill="#8E8E93"
                                    />
                                  </svg>
                                </span>{" "}
                                <span className="fw-6">Price: </span>
                                <span>$7,500</span>
                              </div>
                              <div className="icons icon-3 flex">
                                <span className="fw-6">Size: </span>
                                <span>4</span>
                              </div>
                              <div className="icons icon-1 flex">
                                <span className="fw-6">Beds: </span>
                                <span>150 sqft</span>
                              </div>
                              <div className="icons icon-2 flex">
                                <span className="fw-6">Baths: </span>
                                <span>2</span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="toggle-content section-desc"
                            style={{
                              display: `${
                                isActive.key == 3 ? "block" : "none"
                              }`,
                            }}
                          >
                            <img
                              src="/assets/images/img-box/property-5.jpg"
                              alt=""
                            />
                            <div className="title fw-6">Description:</div>
                            <p className="texts text-color-2">
                              Proin sed tellus porttitor, varius mauris vitae,
                              tincidunt augue. Sed consectetur magna elit, sit
                              amet faucibus tortor sodales vitae. Maecenas quis
                              arcu est. Nam sit amet neque vestibulum, fringilla
                              elit sit amet, volutpat nunc.
                            </p>
                            <p className="text-color-2">
                              Aliquam non lorem consequat, luctus dui et, auctor
                              nisi. Aenean placerat sapien at augue lacinia, non
                              semper urna tempor. Mauris sit amet elit orci.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wrap-video wrap-style">
                      <h3 className="titles">Video</h3>
                      <div className="video-box center ">
                        <div className="post-video flex align-center justify-center  relative">
                          <img
                            className="img-2"
                            src="/assets/images/img-box/property-video.jpg"
                            alt="images"
                          />
                          <VideoPopup />
                        </div>
                      </div>
                    </div>
                    <div className="wrap-virtual wrap-style">
                      <h3 className="titles">360 Virtual Tour</h3>
                      <div className="virtual-box relative flex align-center justify-center">
                        <div className="images">
                          <img
                            className="img-2"
                            src="/assets/images/img-box/property-6.jpg"
                            alt="images"
                          />
                        </div>
                        <div className="icon absolute">
                          <svg
                            width={50}
                            height={50}
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M49.9216 23.8206C49.8503 23.286 49.3587 22.9105 48.8245 22.9818C48.2898 23.0531 47.9144 23.5443 47.9856 24.079C48.0263 24.3835 48.0469 24.6934 48.0469 25C48.0469 28.2857 45.7232 31.4176 41.5041 33.8187C37.1115 36.3186 31.2503 37.6953 25 37.6953C21.0505 37.6953 17.2568 37.145 13.8904 36.1096C12.855 32.7432 12.3047 28.9495 12.3047 25C12.3047 18.7498 13.6814 12.8885 16.1812 8.4959C18.5824 4.27666 21.7143 1.95312 25 1.95312C27.7572 1.95312 29.9527 3.54316 31.5336 5.29131H30.5334C29.9941 5.29131 29.5568 5.72852 29.5568 6.26787C29.5568 6.80723 29.9941 7.24443 30.5334 7.24443H33.5632C34.1024 7.24443 34.5397 6.80723 34.5397 6.26787V3.23799C34.5397 2.69863 34.1024 2.26143 33.5632 2.26143C33.0239 2.26143 32.5866 2.69863 32.5866 3.23799V3.56699C30.3218 1.2498 27.6938 0 25 0C20.9818 0 17.2472 2.67412 14.4837 7.52979C11.819 12.2121 10.3516 18.4164 10.3516 25C10.3516 28.6174 10.7955 32.1195 11.6367 35.3183C10.525 34.8758 9.47383 34.3753 8.4959 33.8187C4.27676 31.4176 1.95312 28.2857 1.95312 25C1.95312 22.2265 3.56191 20.021 5.32227 18.438V19.4331C5.32227 19.9725 5.75957 20.4097 6.29883 20.4097C6.83809 20.4097 7.27539 19.9725 7.27539 19.4331V16.4032C7.27539 15.8639 6.83809 15.4267 6.29883 15.4267H3.26904C2.72978 15.4267 2.29248 15.8639 2.29248 16.4032C2.29248 16.9426 2.72978 17.3798 3.26904 17.3798H3.60186C1.2625 19.6523 0 22.2928 0 25C0 29.0181 2.67412 32.7528 7.52979 35.5162C8.996 36.3506 10.6114 37.0676 12.341 37.6589C12.9323 39.3885 13.6493 41.004 14.4837 42.4701C17.2472 47.3259 20.9818 50 25 50C27.3036 50 29.5912 49.0841 31.6153 47.3512C32.025 47.0004 32.0729 46.384 31.7222 45.9742C31.3715 45.5646 30.755 45.5167 30.3452 45.8674C28.656 47.3137 26.8575 48.0469 25 48.0469C21.7143 48.0469 18.5824 45.7233 16.1812 41.5041C15.6247 40.5261 15.1241 39.4749 14.6817 38.3633C17.8805 39.2045 21.3826 39.6484 25 39.6484C31.5836 39.6484 37.7879 38.181 42.4702 35.5162C47.3259 32.7528 50 29.0181 50 25C49.9998 24.6056 49.9737 24.2116 49.9216 23.8206Z"
                              fill="white"
                            />
                            <path
                              d="M48.7213 20.3243L48.7172 20.3169C48.458 19.8488 47.8693 19.6763 47.3979 19.9315C46.9236 20.1884 46.7474 20.7811 47.0043 21.2553L47.0123 21.2697C47.0743 21.382 47.1579 21.481 47.2582 21.5609C47.3584 21.6409 47.4735 21.7003 47.5968 21.7358C47.72 21.7712 47.8491 21.782 47.9765 21.7676C48.104 21.7531 48.2273 21.7137 48.3396 21.6516C48.8114 21.3905 48.9824 20.7963 48.7213 20.3243ZM34.121 42.9507C33.6829 42.6369 33.0694 42.7434 32.755 43.1804L32.75 43.1873C32.4393 43.6271 32.5386 44.2419 32.9777 44.5536C33.1413 44.6699 33.3371 44.7322 33.5378 44.7318C33.8461 44.7318 34.1509 44.5868 34.3427 44.318C34.6554 43.8796 34.5588 43.2644 34.121 42.9507ZM31.8864 22.187C31.8698 20.8137 30.7427 19.6964 29.3738 19.6964H25.9294V17.1206C25.9295 16.975 25.9874 16.8353 26.0904 16.7323C26.1934 16.6293 26.3331 16.5714 26.4787 16.5713H29.3103C29.8495 16.5713 30.2868 16.1341 30.2868 15.5947C30.2868 15.0554 29.8495 14.6182 29.3103 14.6182H26.4787C25.0988 14.6182 23.9763 15.7407 23.9763 17.1206V25.0043C23.9763 26.3842 25.0988 27.5067 26.4787 27.5067H29.3738C30.7427 27.5067 31.8698 26.3895 31.8864 25.0161L31.8865 25.0043V22.1988L31.8864 22.187ZM29.9332 24.9969C29.9271 25.3042 29.6771 25.5535 29.3737 25.5535H26.4786C26.333 25.5534 26.1933 25.4955 26.0903 25.3925C25.9873 25.2895 25.9294 25.1498 25.9293 25.0042V21.6494H29.3737C29.6771 21.6494 29.9272 21.8988 29.9332 22.2062V24.9969ZM38.3684 14.6182H35.4631C34.0832 14.6182 32.9606 15.7407 32.9606 17.1206V25.0043C32.9606 26.3842 34.0832 27.5067 35.4631 27.5067H38.3684C39.7482 27.5067 40.8708 26.3842 40.8708 25.0043V17.1206C40.8708 15.7407 39.7482 14.6182 38.3684 14.6182ZM38.9177 25.0043C38.9175 25.1499 38.8596 25.2896 38.7566 25.3926C38.6537 25.4956 38.514 25.5535 38.3684 25.5536H35.4631C35.3174 25.5535 35.1778 25.4956 35.0748 25.3926C34.9718 25.2896 34.9139 25.1499 34.9138 25.0043V17.1206C34.9139 16.975 34.9718 16.8353 35.0748 16.7323C35.1778 16.6293 35.3174 16.5714 35.4631 16.5713H38.3684C38.514 16.5714 38.6537 16.6293 38.7566 16.7323C38.8596 16.8353 38.9175 16.975 38.9177 17.1206V25.0043ZM20.398 14.6182H17.9048C16.5249 14.6182 15.4023 15.7407 15.4023 17.1206V17.1551C15.4023 17.6944 15.8396 18.1316 16.3789 18.1316C16.9182 18.1316 17.3555 17.6944 17.3555 17.1551V17.1206C17.3556 16.975 17.4135 16.8353 17.5165 16.7323C17.6195 16.6293 17.7591 16.5714 17.9048 16.5713H20.398C20.5437 16.5714 20.6833 16.6293 20.7863 16.7323C20.8893 16.8353 20.9472 16.975 20.9474 17.1206V20.0859H18.4425C17.9032 20.0859 17.4659 20.5231 17.4659 21.0625C17.4659 21.6019 17.9032 22.0391 18.4425 22.0391H20.9474V25.0043C20.9472 25.1499 20.8893 25.2896 20.7863 25.3926C20.6833 25.4956 20.5437 25.5535 20.398 25.5536H17.9048C17.7591 25.5535 17.6195 25.4956 17.5165 25.3926C17.4135 25.2896 17.3556 25.1499 17.3555 25.0043V24.8691C17.3555 24.3298 16.9182 23.8926 16.3789 23.8926C15.8396 23.8926 15.4023 24.3298 15.4023 24.8691V25.0043C15.4023 26.3842 16.5249 27.5067 17.9048 27.5067H20.398C21.7779 27.5067 22.9005 26.3842 22.9005 25.0043V17.1206C22.9005 15.7407 21.7779 14.6182 20.398 14.6182ZM44.8193 13.0044C43.391 13.0044 42.229 14.1664 42.229 15.5947C42.229 17.023 43.391 18.1851 44.8193 18.1851C46.2477 18.1851 47.4097 17.023 47.4097 15.5947C47.4097 14.1664 46.2477 13.0044 44.8193 13.0044ZM44.8193 16.2318C44.6504 16.2316 44.4884 16.1644 44.369 16.045C44.2495 15.9255 44.1823 15.7636 44.1821 15.5946C44.1823 15.4257 44.2495 15.2637 44.369 15.1443C44.4884 15.0248 44.6504 14.9576 44.8193 14.9574C44.9883 14.9576 45.1502 15.0248 45.2697 15.1443C45.3892 15.2637 45.4564 15.4257 45.4565 15.5946C45.4563 15.7636 45.3891 15.9255 45.2697 16.045C45.1502 16.1644 44.9883 16.2316 44.8193 16.2318Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="wrap-walksore wrap-style">
                      <h3 className="titles">Walksore</h3>
                      <div className="icon-p">
                        58 Hullbrook Road, Billesley, B13 0LA
                      </div>
                      <div className="progress-box progress-box1 flex align-center">
                        <div className="progress-walk">
                          <div className="couter relative">
                            <div className="chart" data-percent={40}>
                              <svg
                                width={20}
                                height={30}
                                viewBox="0 0 20 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.38199 28.3012C6.16096 28.6584 5.80753 28.9137 5.39891 29.0112C4.99029 29.1087 4.55969 29.0405 4.20119 28.8215C3.84269 28.6025 3.58543 28.2505 3.48561 27.8425C3.38578 27.4344 3.45152 27.0034 3.66845 26.6437L7.31011 20.7353L8.07441 17.6429C8.11103 17.6856 8.14694 17.7287 8.18257 17.7723L10.6524 20.4288L10.3498 21.6516C10.315 21.8456 10.2443 22.0314 10.1414 22.1995L6.38199 28.3012ZM18.5295 26.8904L16.163 20.6221C16.0799 20.4006 15.9487 20.2003 15.7789 20.0356L12.0809 15.9417V9.225C12.0799 8.71559 11.8771 8.22733 11.5169 7.86712C11.1567 7.50692 10.6684 7.30412 10.159 7.30312C9.64109 7.30312 9.42148 7.44639 9.0006 7.65715L1.00788 12.2718C0.846952 12.365 0.705959 12.489 0.592949 12.6367C0.479939 12.7844 0.397127 12.9529 0.349241 13.1326C0.301355 13.3123 0.289335 13.4997 0.313864 13.684C0.338392 13.8684 0.398991 14.0461 0.492199 14.207C0.585409 14.3679 0.709402 14.5089 0.857101 14.6219C1.0048 14.7349 1.17331 14.8177 1.35302 14.8656C1.53272 14.9135 1.72009 14.9255 1.90444 14.901C2.08879 14.8765 2.26651 14.8159 2.42743 14.7227L8.23724 11.3684V15.8751C8.23724 16.7039 8.34353 16.6724 8.80126 17.2328L13.2621 22.0307L15.5238 28.0221C15.6739 28.4206 15.9761 28.7432 16.3641 28.9189C16.752 29.0946 17.1938 29.1089 17.5924 28.9588C17.9909 28.8088 18.3135 28.5065 18.4892 28.1186C18.6649 27.7306 18.6793 27.2888 18.5292 26.8903L18.5295 26.8904ZM10.9031 0.9375C11.3671 0.9375 11.8207 1.07509 12.2065 1.33286C12.5922 1.59063 12.8929 1.95701 13.0705 2.38567C13.248 2.81433 13.2945 3.28602 13.204 3.74108C13.1135 4.19615 12.89 4.61415 12.562 4.94223C12.2339 5.27032 11.8159 5.49374 11.3608 5.58426C10.9057 5.67478 10.4341 5.62832 10.0054 5.45076C9.57673 5.27321 9.21035 4.97252 8.95258 4.58674C8.6948 4.20096 8.55722 3.7474 8.55722 3.28342C8.55722 2.66124 8.80438 2.06455 9.24432 1.6246C9.68427 1.18466 10.281 0.9375 10.9031 0.9375ZM12.9012 13.3981V9.28811L14.7614 11.1973L18.6499 12.2936C19.0104 12.3936 19.3167 12.6322 19.5018 12.9573C19.687 13.2824 19.7361 13.6675 19.6382 14.0286C19.5404 14.3897 19.3036 14.6975 18.9797 14.8846C18.6557 15.0717 18.2709 15.1231 17.9092 15.0274L13.5008 13.834C13.3512 13.7954 13.2152 13.7163 13.1076 13.6055L12.9012 13.3981Z"
                                  fill="#0D4AA3"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h4>Walk score</h4>
                          <div>60/100</div>
                        </div>
                      </div>
                      <div className="progress-box progress-box2 flex align-center">
                        <div className="progress-walk">
                          <div className="couter">
                            <div className="chart" data-percent={58}>
                              <svg
                                width={30}
                                height={26}
                                viewBox="0 0 30 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19.375 5.18754C20.75 5.18754 21.875 4.06254 21.875 2.68752C21.875 1.3125 20.75 0.1875 19.375 0.1875C18 0.1875 16.875 1.3125 16.875 2.68752C16.875 4.06254 18 5.18754 19.375 5.18754ZM6.25002 13.3125C2.8125 13.3125 0 16.125 0 19.5625C0 23 2.8125 25.8125 6.25002 25.8125C9.68754 25.8125 12.5 23 12.5 19.5625C12.5 16.125 9.68748 13.3125 6.25002 13.3125ZM6.25002 23.9375C3.81252 23.9375 1.875 22 1.875 19.5625C1.875 17.125 3.81252 15.1875 6.25002 15.1875C8.68752 15.1875 10.625 17.125 10.625 19.5625C10.625 22 8.68752 23.9375 6.25002 23.9375Z"
                                  fill="#0D4AA3"
                                />
                                <path
                                  d="M23.6876 12V9.49996C21.8126 9.49996 20.25 8.81248 19.125 7.68748L16.6875 5.3125C16.3125 4.87498 15.6875 4.5625 15 4.5625C14.3126 4.5625 13.6875 4.81252 13.25 5.3125L9.8125 8.75002C9.37498 9.18754 9.0625 9.8125 9.0625 10.5C9.0625 11.1876 9.37498 11.8125 9.8125 12.3125L13.75 15.8125V22.0625H16.25V14.25L13.5 11.5L16.4375 8.5L17.375 9.4375C18.9375 11.0625 21.125 12 23.6876 12Z"
                                  fill="#0D4AA3"
                                />
                                <path
                                  d="M23.75 13.3125C20.3125 13.3125 17.5 16.125 17.5 19.5625C17.5 23 20.3125 25.8125 23.75 25.8125C27.1875 25.8125 30 23 30 19.5625C30 16.125 27.1875 13.3125 23.75 13.3125ZM23.75 23.9375C21.3125 23.9375 19.375 22 19.375 19.5625C19.375 17.125 21.3125 15.1875 23.75 15.1875C26.1875 15.1875 28.125 17.125 28.125 19.5625C28.125 22 26.1875 23.9375 23.75 23.9375Z"
                                  fill="#0D4AA3"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h4>Bike score</h4>
                          <div>42/100</div>
                        </div>
                      </div>
                      <div className="progress-box progress-box3 flex align-center">
                        <div className="progress-walk">
                          <div className="couter">
                            <div className="chart" data-percent={13}>
                              <svg
                                width={22}
                                height={30}
                                viewBox="0 0 22 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.3768 22.7948C18.4644 22.8006 19.5891 22.4925 20.4207 21.7651C21.1947 21.0907 21.5594 20.0453 21.5623 19.0357C21.5642 18.0232 21.5722 17.0091 21.5543 15.9953C21.5143 14.4293 21.5997 12.8565 21.4725 11.293C21.2098 8.18393 20.5747 5.03266 19.0179 2.29432C18.6258 1.6353 18.1921 0.988107 17.6277 0.463322C17.3662 0.227776 17.0514 -0.00968744 16.682 0.00373581C12.9257 0.0014986 9.17007 0.00469461 5.41379 0.0014986C5.1236 -0.0154403 4.85257 0.113039 4.63461 0.294573C4.05837 0.765345 3.60581 1.36652 3.21813 1.99549C1.54694 4.75141 0.875458 7.98226 0.592611 11.1572C0.506319 12.5848 0.574394 14.0163 0.540836 15.4469C0.516547 16.6789 0.538279 17.9139 0.527093 19.1466C0.509515 19.818 0.679543 20.4962 1.04261 21.0639C1.81029 22.2751 3.30219 22.8156 4.68798 22.7948C3.19672 25.0039 1.51242 27.3392 0.00454541 29.5374L0.00390625 29.9948L2.29417 29.9932C2.78539 29.3741 3.18873 28.702 3.65982 28.0695L18.3845 28.0698L19.7546 29.9973L21.9925 29.9999L21.9963 29.5582L17.3768 22.7948ZM17.1224 20.1504C16.3627 20.0523 15.6759 19.3754 15.6989 18.5857C15.6398 17.8333 16.232 17.1407 16.9476 16.9733C17.8712 16.7288 18.9019 17.5121 18.8962 18.4716C18.9879 19.4198 18.0537 20.2696 17.1224 20.1504ZM2.34882 12.4567C2.30248 11.9527 2.33763 11.4474 2.31942 10.9434C2.24207 8.78638 2.63518 6.61117 3.48724 4.62581C3.91678 3.66189 4.46042 2.73313 5.20765 1.98047C5.53716 1.67237 5.93187 1.34127 6.41351 1.37259C9.50277 1.37706 12.5936 1.37578 15.6823 1.37355C16.0453 1.35117 16.3649 1.56435 16.6308 1.78647C17.2176 2.29272 17.6679 2.9364 18.0604 3.60117C19.3749 5.95567 19.8486 8.70967 19.7585 11.3835C19.7508 11.8849 19.8102 12.4138 19.5772 12.8792C19.3299 13.4414 18.745 13.862 18.124 13.8632C13.4073 13.8642 8.68939 13.8623 3.97303 13.8632C3.1833 13.8754 2.46068 13.2295 2.34882 12.4567ZM15.4825 23.8664L6.38698 23.8674L7.07189 22.8204L14.8551 22.8162L15.4825 23.8664ZM4.43134 20.1204C3.79278 19.9842 3.27343 19.448 3.16412 18.8052C3.01806 18.0129 3.57225 17.1868 4.34441 16.9861C5.28755 16.7016 6.35054 17.4878 6.36077 18.4716C6.44483 19.47 5.40197 20.3601 4.43134 20.1204ZM4.62086 26.7361C5.06223 26.0346 5.55921 25.3481 6.01848 24.66L15.9948 24.6533C16.4944 25.3261 16.9562 26.0253 17.4378 26.7106L4.62086 26.7361Z"
                                  fill="#0D4AA3"
                                />
                                <path
                                  d="M14.7915 5.068L13.1315 5.07152L11.1439 7.41739L9.1234 5.06705L7.43814 5.06641L7.4375 11.3344L9.2816 11.3287L9.28096 7.70855L11.0794 9.8323L12.8928 7.72996L12.896 11.3347C13.5285 11.3338 14.1693 11.3357 14.8024 11.3325L14.7915 5.068Z"
                                  fill="#0D4AA3"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h4>Metro score</h4>
                          <div>87/100</div>
                        </div>
                      </div>
                    </div>
                    <div className="wrap-nearby wrap-style">
                      <h3 className="titles">What's nearby?</h3>
                      <div className="box-nearby box-1 flex">
                        <div className="icon flex-none">
                          <svg
                            width={30}
                            height={26}
                            viewBox="0 0 30 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.9255 18.7978C16.3915 19.1253 15.7077 19.3057 15 19.3057C14.2922 19.3057 13.6084 19.1253 13.0745 18.7978L4.35714 13.4514C4.35714 13.4514 3.57031 12.9691 3.57031 14.0617V19.4004C3.57031 22.2128 8.68746 25.2447 14.9997 25.2447C21.312 25.2447 26.4292 22.2129 26.4292 19.4004V13.7607C26.4292 12.8837 25.8698 13.3122 25.8698 13.3122L16.9255 18.7978Z"
                              fill="white"
                            />
                            <path
                              d="M29.4976 9.19854C30.1675 8.78776 30.1675 8.11553 29.4976 7.70467L16.2178 1.06395C15.548 0.653164 14.4519 0.653164 13.7821 1.06395L0.502369 7.70467C-0.167456 8.11545 -0.167456 8.78768 0.502369 9.19854L13.7821 17.3431C14.4519 17.7539 15.548 17.7539 16.2178 17.3431M28.9484 21.2707V12.2757C28.9484 12.2757 28.9547 11.8496 28.7019 11.9903C28.4991 12.1032 28.002 12.3803 27.8268 12.5326C27.6246 12.7084 27.6702 13.1028 27.6702 13.1028V21.2707C27.6702 21.3867 27.5706 21.442 27.523 21.47C27.064 21.7399 26.7553 22.238 26.7553 22.8091C26.7553 23.6674 27.451 24.3631 28.3093 24.3631C29.1676 24.3631 29.8633 23.6674 29.8633 22.8091C29.8633 22.2358 29.5524 21.7361 29.0904 21.4669C29.0444 21.4401 28.9484 21.3866 28.9484 21.2707Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div className="content">
                          <h4>Education</h4>
                          <div className="title-box flex align-center justify-space">
                            <div className="title-item">
                              <span className="fw-7 font-2">8/10 </span>
                              <span>
                                Massachusetts Institute of Technology (MIT)
                              </span>
                              <span className="fw-7 font-2"> 1.5 miles</span>
                            </div>
                            <div className="start-item flex align-center">
                              <div className="star flex">
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                              </div>
                              <p>(7 Reviews)</p>
                            </div>
                          </div>
                          <div className="title-box flex align-center justify-space">
                            <div className="title-item">
                              <span className="fw-7 font-2">6/10 </span>
                              <span>Stanford University</span>
                              <span className="fw-7 font-2"> 2 miles</span>
                            </div>
                            <div className="start-item flex align-center">
                              <div className="star flex">
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                              </div>
                              <p>(2 Reviews)</p>
                            </div>
                          </div>
                          <div className="title-box flex align-center justify-space">
                            <div className="title-item">
                              <span className="fw-7 font-2">5/10 </span>
                              <span>University of Michigan-Ann Arbor</span>
                              <span className="fw-7 font-2"> 3.5 miles</span>
                            </div>
                            <div className="start-item flex align-center">
                              <div className="star flex">
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                              </div>
                              <p>(3 Reviews)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-nearby box-2 flex">
                        <div className="icon flex-none">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="mask0_1532_28657"
                              style={{ maskType: "luminance" }}
                              maskUnits="userSpaceOnUse"
                              x={0}
                              y={0}
                              width={30}
                              height={30}
                            >
                              <path
                                d="M0 8.7738e-05H29.9999V30H0V8.7738e-05Z"
                                fill="white"
                              />
                            </mask>
                            <g mask="url(#mask0_1532_28657)">
                              <path
                                d="M4.10364 11.9102C3.76034 11.5674 3.76034 11.0108 4.10364 10.6674C4.44647 10.3241 5.00311 10.3241 5.34641 10.6674L6.90617 12.2272V7.73771C6.90617 7.25197 7.29992 6.85881 7.78508 6.85881C8.27023 6.85881 8.66398 7.25197 8.66398 7.73771V9.29747L10.2237 7.73771C10.5672 7.39435 11.1238 7.39435 11.4665 7.73771C11.8099 8.08107 11.8099 8.63771 11.4665 8.98054L8.66398 11.7837V19.3423C11.9824 18.9612 14.6194 16.3915 15.3865 13.211C15.8493 11.2938 15.5927 9.30685 14.6235 7.30587C13.8853 5.78127 12.7556 4.2654 11.1701 2.67224C10.1646 1.6615 9.24347 0.848803 8.35461 0.187281C8.03093 -0.05723 7.59318 -0.0673084 7.25539 0.187281C6.36653 0.848803 5.44602 1.6615 4.43997 2.67224C2.85449 4.2654 1.72474 5.78127 0.986463 7.30587C0.0173255 9.30685 -0.239314 11.2938 0.223575 13.211C0.991737 16.3956 3.62177 18.9394 6.90617 19.3388V14.7133L4.10364 11.9102Z"
                                fill="white"
                              />
                              <path
                                d="M26.4843 24.3286H17.4615V22.5708H26.4843V24.3286ZM26.4843 28.2422H17.4615V26.0865H26.4843V28.2422ZM29.121 22.5708C29.6062 22.5708 29.9999 22.1771 29.9999 21.6919V18.1763C29.9999 17.6911 29.6062 17.2974 29.121 17.2974H14.8248C14.3396 17.2974 13.9459 17.6911 13.9459 18.1763V21.6919C13.9459 22.1771 14.3396 22.5708 14.8248 22.5708H15.7037V24.3286H14.8248C14.3394 24.3286 13.9459 24.7221 13.9459 25.2075C13.9459 25.693 14.3394 26.0864 14.8248 26.0864H15.7037V28.2422H8.66482V19.3423C8.08574 19.4091 7.4957 19.411 6.90701 19.3388V28.2422H0.878904C0.393514 28.2422 0 28.6356 0 29.1211C0 29.6065 0.393514 30 0.878904 30H29.121C29.6064 30 29.9999 29.6065 29.9999 29.1211C29.9999 28.6356 29.6064 28.2422 29.121 28.2422H28.2421V26.0864H29.121C29.6064 26.0864 29.9999 25.693 29.9999 25.2075C29.9999 24.7221 29.6064 24.3286 29.121 24.3286H28.2421V22.5708H29.121Z"
                                fill="white"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="content">
                          <h4>Park</h4>
                          <div className="title-box flex align-center justify-space">
                            <div className="title-item">
                              <span className="fw-7 font-2">8/10 </span>
                              <span> The Wizarding World of Harry Potter </span>
                              <span className="fw-7 font-2"> 4.5 miles</span>
                            </div>
                            <div className="start-item flex align-center">
                              <div className="star flex">
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="title-box flex align-center justify-space">
                            <div className="title-item">
                              <span className="fw-7 font-2">7.5/10 </span>
                              <span> Universal's Islands of Adventure </span>
                              <span className="fw-7 font-2"> 6 miles</span>
                            </div>
                            <div className="start-item flex align-center">
                              <div className="star flex">
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wrap-form wrap-style">
                      <h3 className="titles">Loan caculator</h3>
                      <div className="comments">
                        <div className="respond-comment">
                          <form
                            method="post"
                            className="comment-form form-submit"
                            acceptCharset="utf-8"
                            noValidate="novalidate"
                          >
                            <fieldset className>
                              <label className="fw-6">Total price ($)</label>
                              <input
                                type="text"
                                className="my-input"
                                name="text"
                                placeholder="7,500"
                                required
                              />
                            </fieldset>
                            <fieldset className>
                              <label className="fw-6">Down payment (%)</label>
                              <input
                                type="text"
                                className="my-input"
                                name="text"
                                placeholder={0}
                                required
                              />
                            </fieldset>
                            <div className="wg-box">
                              <label className="title-user fw-6">Terms</label>
                              <select className="nice-select" tabIndex={0}>
                                <span className="current">36 months</span>

                                <option value={12} className="option">
                                  12 months
                                </option>
                                <option value={36} className="option selected">
                                  36 months
                                </option>
                                <option value={64} className="option">
                                  64 months
                                </option>
                                <option value={100} className="option">
                                  100 months
                                </option>
                              </select>
                            </div>
                            <div className="inner-1 form-wg flex">
                              <div className="input-item wg-box ">
                                <label className="title-user fw-6">
                                  Interest rate (%)
                                </label>
                                <input
                                  type="text"
                                  className="my-input"
                                  name="text"
                                  placeholder="1.5"
                                  required
                                />
                              </div>
                              <div className="wg-box">
                                <label className="title-user fw-6" />
                                <div className="select-wrapper">
                                  <select className="nice-select " tabIndex={0}>
                                    <span className="current ">Monthly</span>

                                    <option value="weekly" className="option">
                                      Weekly
                                    </option>
                                    <option
                                      value="monthly"
                                      className="option"
                                    >
                                      Monthly
                                    </option>
                                    <option value="annual" className="option">
                                      Annual
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="inner-2 justify-space align-center flex">
                              <div className="title-user fw-6">
                                Monthly payment
                              </div>
                              <h3 className="text-color-3">$125</h3>
                            </div>
                            <button
                              className="sc-button"
                              name="submit"
                              type="submit"
                            >
                              <span>Apply For A Loan</span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="wrap-review wrap-style">
                      <div className="box-title titles flex align-center justify-space">
                        <div className="inner flex align-center ">
                          <div className="star flex">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                {" "}
                                <g>
                                  {" "}
                                  <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                </g>
                              </g>
                              <g />
                              <g />
                              <g />
                              <g />
                              <g />
                              <g />
                              <g />
                              <g />
                              <g />
                              <g />
                              <g />
                              <g />
                              <g />
                              <g />
                              <g />
                            </svg>
                          </div>
                          <h3>Review</h3>
                          <p className="fw-6">(27 review)</p>
                        </div>
                        <div className="sort-inner flex">
                          <span className="text-color-4">Sort by </span>
                          <a className="newest">Newest</a>
                        </div>
                      </div>
                      <div className="comment-list">
                        <ol className>
                          <li className="flex">
                            <div className="images flex-none">
                              <img
                                src="/assets/images/author/author-review-1.jpg"
                                alt="images"
                              />
                            </div>
                            <div className="content">
                              <div className="title-item flex justify-space align-center">
                                <h4>Leslie Alexander</h4>
                                <p className="fs-12 lh-18">April 5, 2023</p>
                              </div>
                              <div className="star flex">
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                              </div>
                              <p className="texts text-color-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque at velit eu libero
                                laoreet mattis ac a ipsum. Vivamus efficitur
                                volutpat ante, sed consequat ligula ultricies
                                in.
                              </p>
                              <div className="img-box">
                                <img
                                  src="/assets/images/img-box/review-1.jpg"
                                  alt="images"
                                />
                                <img
                                  src="/assets/images/img-box/review-2.jpg"
                                  alt="images"
                                />
                                <img
                                  src="/assets/images/img-box/review-3.jpg"
                                  alt="images"
                                />
                              </div>
                              <div className="icon-box flex">
                                <a className="icon flex align-center">
                                  <svg
                                    width={16}
                                    height={15}
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.375 5.75H9.68749M3.66949 13.0625C3.66124 13.025 3.64849 12.9875 3.63049 12.9515C3.18724 12.0515 2.93749 11.039 2.93749 9.96875C2.93587 8.89238 3.19282 7.83136 3.68674 6.875M3.66949 13.0625C3.72649 13.3362 3.53224 13.625 3.23824 13.625H2.55724C1.89049 13.625 1.27249 13.2365 1.07824 12.599C0.82399 11.7665 0.68749 10.8837 0.68749 9.96875C0.68749 8.804 0.90874 7.69175 1.31074 6.67025C1.54024 6.08975 2.12524 5.75 2.74999 5.75H3.53974C3.89374 5.75 4.09849 6.167 3.91474 6.47C3.83434 6.60234 3.7578 6.73742 3.68674 6.875M3.66949 13.0625H4.63999C5.0027 13.0623 5.36307 13.1205 5.70724 13.235L8.04274 14.015C8.38691 14.1295 8.74728 14.1877 9.10999 14.1875H12.122C12.5855 14.1875 13.0347 14.0022 13.3257 13.6407C14.6143 12.0434 15.3156 10.0523 15.3125 8C15.3125 7.6745 15.2952 7.35275 15.2615 7.03625C15.1797 6.2705 14.4905 5.75 13.721 5.75H11.3765C10.913 5.75 10.6332 5.207 10.8327 4.7885C11.191 4.03444 11.3763 3.20985 11.375 2.375C11.375 1.92745 11.1972 1.49823 10.8807 1.18176C10.5643 0.86529 10.135 0.6875 9.68749 0.6875C9.53831 0.6875 9.39523 0.746763 9.28974 0.852252C9.18425 0.957741 9.12499 1.10082 9.12499 1.25V1.72475C9.12499 2.1545 9.04249 2.57975 8.88349 2.97875C8.65549 3.54875 8.18599 3.97625 7.64374 4.265C6.81128 4.7092 6.0807 5.32228 5.49874 6.065C5.12524 6.5405 4.57924 6.875 3.97474 6.875H3.68674"
                                      stroke="#8E8E93"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <p className="fs-12 font-2">Useful</p>
                                </a>
                                <a className="icon flex align-center">
                                  <svg
                                    width={16}
                                    height={15}
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.62501 9.25H6.31251M12.3305 1.9375C12.3388 1.975 12.3515 2.0125 12.3695 2.0485C12.8128 2.9485 13.0625 3.961 13.0625 5.03125C13.0641 6.10762 12.8072 7.16864 12.3133 8.125M12.3305 1.9375C12.2735 1.66375 12.4678 1.375 12.7618 1.375H13.4428C14.1095 1.375 14.7275 1.7635 14.9218 2.401C15.176 3.2335 15.3125 4.11625 15.3125 5.03125C15.3125 6.196 15.0913 7.30825 14.6893 8.32975C14.4598 8.91025 13.8748 9.25 13.25 9.25H12.4603C12.1063 9.25 11.9015 8.833 12.0853 8.53C12.1657 8.39766 12.2422 8.26258 12.3133 8.125M12.3305 1.9375H11.36C10.9973 1.93772 10.6369 1.87948 10.2928 1.765L7.95726 0.985001C7.61309 0.870526 7.25272 0.812279 6.89001 0.812501H3.87801C3.41451 0.812501 2.96526 0.997751 2.67426 1.35925C1.38572 2.95658 0.684409 4.94774 0.68751 7C0.68751 7.3255 0.70476 7.64725 0.73851 7.96375C0.82026 8.7295 1.50951 9.25 2.27901 9.25H4.62351C5.08701 9.25 5.36676 9.793 5.16726 10.2115C4.80897 10.9656 4.6237 11.7902 4.62501 12.625C4.62501 13.0726 4.8028 13.5018 5.11927 13.8182C5.43574 14.1347 5.86496 14.3125 6.31251 14.3125C6.46169 14.3125 6.60477 14.2532 6.71026 14.1477C6.81575 14.0423 6.87501 13.8992 6.87501 13.75V13.2753C6.87501 12.8455 6.95751 12.4203 7.11651 12.0213C7.34451 11.4513 7.81401 11.0238 8.35626 10.735C9.18872 10.2908 9.9193 9.67772 10.5013 8.935C10.8748 8.4595 11.4208 8.125 12.0253 8.125H12.3133"
                                      stroke="#8E8E93"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <p className="fs-12 font-2">Not helpful</p>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="flex">
                            <div className="images flex-none">
                              <img
                                src="/assets/images/author/author-review-2.jpg"
                                alt="images"
                              />
                            </div>
                            <div className="content">
                              <div className="title-item flex justify-space align-center">
                                <h4>Jenny Wilson</h4>
                                <p className="fs-12 lh-18">April 5, 2023</p>
                              </div>
                              <div className="star flex">
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                              </div>
                              <p className="texts text-color-2">
                                Proin sed tellus porttitor, varius mauris vitae,
                                tincidunt augue. Sed consectetur magna elit, sit
                                amet faucibus tortor sodales vitae. Maecenas
                                quis arcu est. Nam sit amet neque vestibulum,
                                fringilla elit sit amet, volutpat nunc.
                              </p>
                              <div className="icon-box flex">
                                <a className="icon flex align-center">
                                  <svg
                                    width={16}
                                    height={15}
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.375 5.75H9.68749M3.66949 13.0625C3.66124 13.025 3.64849 12.9875 3.63049 12.9515C3.18724 12.0515 2.93749 11.039 2.93749 9.96875C2.93587 8.89238 3.19282 7.83136 3.68674 6.875M3.66949 13.0625C3.72649 13.3362 3.53224 13.625 3.23824 13.625H2.55724C1.89049 13.625 1.27249 13.2365 1.07824 12.599C0.82399 11.7665 0.68749 10.8837 0.68749 9.96875C0.68749 8.804 0.90874 7.69175 1.31074 6.67025C1.54024 6.08975 2.12524 5.75 2.74999 5.75H3.53974C3.89374 5.75 4.09849 6.167 3.91474 6.47C3.83434 6.60234 3.7578 6.73742 3.68674 6.875M3.66949 13.0625H4.63999C5.0027 13.0623 5.36307 13.1205 5.70724 13.235L8.04274 14.015C8.38691 14.1295 8.74728 14.1877 9.10999 14.1875H12.122C12.5855 14.1875 13.0347 14.0022 13.3257 13.6407C14.6143 12.0434 15.3156 10.0523 15.3125 8C15.3125 7.6745 15.2952 7.35275 15.2615 7.03625C15.1797 6.2705 14.4905 5.75 13.721 5.75H11.3765C10.913 5.75 10.6332 5.207 10.8327 4.7885C11.191 4.03444 11.3763 3.20985 11.375 2.375C11.375 1.92745 11.1972 1.49823 10.8807 1.18176C10.5643 0.86529 10.135 0.6875 9.68749 0.6875C9.53831 0.6875 9.39523 0.746763 9.28974 0.852252C9.18425 0.957741 9.12499 1.10082 9.12499 1.25V1.72475C9.12499 2.1545 9.04249 2.57975 8.88349 2.97875C8.65549 3.54875 8.18599 3.97625 7.64374 4.265C6.81128 4.7092 6.0807 5.32228 5.49874 6.065C5.12524 6.5405 4.57924 6.875 3.97474 6.875H3.68674"
                                      stroke="#8E8E93"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <p className="fs-12 font-2">Useful</p>
                                </a>
                                <a className="icon flex align-center">
                                  <svg
                                    width={16}
                                    height={15}
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.62501 9.25H6.31251M12.3305 1.9375C12.3388 1.975 12.3515 2.0125 12.3695 2.0485C12.8128 2.9485 13.0625 3.961 13.0625 5.03125C13.0641 6.10762 12.8072 7.16864 12.3133 8.125M12.3305 1.9375C12.2735 1.66375 12.4678 1.375 12.7618 1.375H13.4428C14.1095 1.375 14.7275 1.7635 14.9218 2.401C15.176 3.2335 15.3125 4.11625 15.3125 5.03125C15.3125 6.196 15.0913 7.30825 14.6893 8.32975C14.4598 8.91025 13.8748 9.25 13.25 9.25H12.4603C12.1063 9.25 11.9015 8.833 12.0853 8.53C12.1657 8.39766 12.2422 8.26258 12.3133 8.125M12.3305 1.9375H11.36C10.9973 1.93772 10.6369 1.87948 10.2928 1.765L7.95726 0.985001C7.61309 0.870526 7.25272 0.812279 6.89001 0.812501H3.87801C3.41451 0.812501 2.96526 0.997751 2.67426 1.35925C1.38572 2.95658 0.684409 4.94774 0.68751 7C0.68751 7.3255 0.70476 7.64725 0.73851 7.96375C0.82026 8.7295 1.50951 9.25 2.27901 9.25H4.62351C5.08701 9.25 5.36676 9.793 5.16726 10.2115C4.80897 10.9656 4.6237 11.7902 4.62501 12.625C4.62501 13.0726 4.8028 13.5018 5.11927 13.8182C5.43574 14.1347 5.86496 14.3125 6.31251 14.3125C6.46169 14.3125 6.60477 14.2532 6.71026 14.1477C6.81575 14.0423 6.87501 13.8992 6.87501 13.75V13.2753C6.87501 12.8455 6.95751 12.4203 7.11651 12.0213C7.34451 11.4513 7.81401 11.0238 8.35626 10.735C9.18872 10.2908 9.9193 9.67772 10.5013 8.935C10.8748 8.4595 11.4208 8.125 12.0253 8.125H12.3133"
                                      stroke="#8E8E93"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <p className="fs-12 font-2">Not helpful</p>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="flex">
                            <div className="images flex-none">
                              <img
                                src="/assets/images/author/author-review-3.jpg"
                                alt="images"
                              />
                            </div>
                            <div className="content">
                              <div className="title-item flex justify-space align-center">
                                <h4>Bessie Cooper</h4>
                                <p className="fs-12 lh-18">April 5, 2023</p>
                              </div>
                              <div className="star flex">
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    {" "}
                                    <g>
                                      {" "}
                                      <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                    </g>
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>
                              </div>
                              <p className="texts text-color-2">
                                Donec iaculis id nibh vitae consequat. Curabitur
                                a molestie odio, id varius odio. Suspendisse
                                sollicitudin egestas sodales. Nam semper lorem
                                euismod molestie tempus.
                              </p>
                              <div className="icon-box flex">
                                <a className="icon flex align-center">
                                  <svg
                                    width={16}
                                    height={15}
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.375 5.75H9.68749M3.66949 13.0625C3.66124 13.025 3.64849 12.9875 3.63049 12.9515C3.18724 12.0515 2.93749 11.039 2.93749 9.96875C2.93587 8.89238 3.19282 7.83136 3.68674 6.875M3.66949 13.0625C3.72649 13.3362 3.53224 13.625 3.23824 13.625H2.55724C1.89049 13.625 1.27249 13.2365 1.07824 12.599C0.82399 11.7665 0.68749 10.8837 0.68749 9.96875C0.68749 8.804 0.90874 7.69175 1.31074 6.67025C1.54024 6.08975 2.12524 5.75 2.74999 5.75H3.53974C3.89374 5.75 4.09849 6.167 3.91474 6.47C3.83434 6.60234 3.7578 6.73742 3.68674 6.875M3.66949 13.0625H4.63999C5.0027 13.0623 5.36307 13.1205 5.70724 13.235L8.04274 14.015C8.38691 14.1295 8.74728 14.1877 9.10999 14.1875H12.122C12.5855 14.1875 13.0347 14.0022 13.3257 13.6407C14.6143 12.0434 15.3156 10.0523 15.3125 8C15.3125 7.6745 15.2952 7.35275 15.2615 7.03625C15.1797 6.2705 14.4905 5.75 13.721 5.75H11.3765C10.913 5.75 10.6332 5.207 10.8327 4.7885C11.191 4.03444 11.3763 3.20985 11.375 2.375C11.375 1.92745 11.1972 1.49823 10.8807 1.18176C10.5643 0.86529 10.135 0.6875 9.68749 0.6875C9.53831 0.6875 9.39523 0.746763 9.28974 0.852252C9.18425 0.957741 9.12499 1.10082 9.12499 1.25V1.72475C9.12499 2.1545 9.04249 2.57975 8.88349 2.97875C8.65549 3.54875 8.18599 3.97625 7.64374 4.265C6.81128 4.7092 6.0807 5.32228 5.49874 6.065C5.12524 6.5405 4.57924 6.875 3.97474 6.875H3.68674"
                                      stroke="#8E8E93"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <p className="fs-12 font-2">Useful</p>
                                </a>
                                <a className="icon flex align-center">
                                  <svg
                                    width={16}
                                    height={15}
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.62501 9.25H6.31251M12.3305 1.9375C12.3388 1.975 12.3515 2.0125 12.3695 2.0485C12.8128 2.9485 13.0625 3.961 13.0625 5.03125C13.0641 6.10762 12.8072 7.16864 12.3133 8.125M12.3305 1.9375C12.2735 1.66375 12.4678 1.375 12.7618 1.375H13.4428C14.1095 1.375 14.7275 1.7635 14.9218 2.401C15.176 3.2335 15.3125 4.11625 15.3125 5.03125C15.3125 6.196 15.0913 7.30825 14.6893 8.32975C14.4598 8.91025 13.8748 9.25 13.25 9.25H12.4603C12.1063 9.25 11.9015 8.833 12.0853 8.53C12.1657 8.39766 12.2422 8.26258 12.3133 8.125M12.3305 1.9375H11.36C10.9973 1.93772 10.6369 1.87948 10.2928 1.765L7.95726 0.985001C7.61309 0.870526 7.25272 0.812279 6.89001 0.812501H3.87801C3.41451 0.812501 2.96526 0.997751 2.67426 1.35925C1.38572 2.95658 0.684409 4.94774 0.68751 7C0.68751 7.3255 0.70476 7.64725 0.73851 7.96375C0.82026 8.7295 1.50951 9.25 2.27901 9.25H4.62351C5.08701 9.25 5.36676 9.793 5.16726 10.2115C4.80897 10.9656 4.6237 11.7902 4.62501 12.625C4.62501 13.0726 4.8028 13.5018 5.11927 13.8182C5.43574 14.1347 5.86496 14.3125 6.31251 14.3125C6.46169 14.3125 6.60477 14.2532 6.71026 14.1477C6.81575 14.0423 6.87501 13.8992 6.87501 13.75V13.2753C6.87501 12.8455 6.95751 12.4203 7.11651 12.0213C7.34451 11.4513 7.81401 11.0238 8.35626 10.735C9.18872 10.2908 9.9193 9.67772 10.5013 8.935C10.8748 8.4595 11.4208 8.125 12.0253 8.125H12.3133"
                                      stroke="#8E8E93"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <p className="fs-12 font-2">Not helpful</p>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div className="wrap-contact wrap-form wrap-style">
                      <div className="titles">
                        <h3>Leave a review</h3>
                        <p className="fs-12 lh-18">
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                      </div>
                      <div id="comments" className="comments">
                        <div className="respond-comment">
                          <form
                            method="post"
                            id="contactform"
                            className="comment-form form-submit"
                            action="./contact/contact-process.php"
                            acceptCharset="utf-8"
                            noValidate="novalidate"
                          >
                            <fieldset className>
                              <label className="fw-6">Your name *</label>
                              <input
                                type="text"
                                className="my-input"
                                name="text"
                                placeholder="Your name"
                                required
                              />
                            </fieldset>
                            <div className="inner-1 form-wg flex">
                              <fieldset className="wg-box ">
                                <label className="fw-6">Email address</label>
                                <input
                                  type="email"
                                  className="my-input"
                                  name="email"
                                  placeholder="Your email"
                                  required
                                />
                              </fieldset>
                              <fieldset className="wg-box ">
                                <label className="fw-6">Phone number</label>
                                <input
                                  type="tel"
                                  className="my-input2"
                                  name="tel"
                                  placeholder="Your phone"
                                  required
                                />
                              </fieldset>
                            </div>
                            <fieldset className="message-wrap">
                              <label className="fw-6">Your review</label>
                              <textarea
                                id="comment-message"
                                name="message"
                                rows={4}
                                tabIndex={4}
                                placeholder="Your message"
                                aria-required="true"
                              />
                            </fieldset>
                            <div className="inner-2 align-center flex">
                              <div className="title-rating font-2 fs-16 fw-8">
                                Rating
                              </div>
                              <div className="star flex">
                                <a className="star flex">
                                  <svg
                                    height="20pt"
                                    viewBox="0 -10 511.98685 511"
                                    width="20pt"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0" />
                                  </svg>
                                  <svg
                                    height="20pt"
                                    viewBox="0 -10 511.98685 511"
                                    width="20pt"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0" />
                                  </svg>
                                  <svg
                                    height="20pt"
                                    viewBox="0 -10 511.98685 511"
                                    width="20pt"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0" />
                                  </svg>
                                  <svg
                                    height="20pt"
                                    viewBox="0 -10 511.98685 511"
                                    width="20pt"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0" />
                                  </svg>
                                  <svg
                                    height="20pt"
                                    viewBox="0 -10 511.98685 511"
                                    width="20pt"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0" />
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <button
                              className="sc-button"
                              name="submit"
                              type="submit"
                            >
                              <span>Send review</span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <aside className="side-bar side-bar-1">
                    <div className="inner-side-bar">
                      <div className="widget-tour widget-rent">
                        <h3 className="title-tour">Schedule a Tour</h3>
                        <p className="p-tour text-color-2">
                          Choose the most suitable day
                        </p>
                        <div className="days-wrap flex flex-wrap">
                          <div className="day-box box-1 center">
                            <p>Mon</p>
                            <div className="number fs-18 lh-24 fw-6">17</div>
                            <p>Apr</p>
                          </div>
                          <div className="day-box box-2 center">
                            <p>Mon</p>
                            <div className="number fs-18 lh-24 fw-6">18</div>
                            <p>Apr</p>
                          </div>
                          <div className="day-box box-3 center">
                            <p>Mon</p>
                            <div className="number fs-18 lh-24 fw-6">19</div>
                            <p>Apr</p>
                          </div>
                          <div className="day-box box-4 center">
                            <p>Mon</p>
                            <div className="number fs-18 lh-24 fw-6">20</div>
                            <p>Apr</p>
                          </div>
                        </div>
                        <h5>Tour Type</h5>
                        <div className="flat-tabs style2">
                          <div className="box-tab center">
                            <ul className="menu-tab tab-title flex">
                              <li
                                className={
                                  activeIndex == 1
                                    ? "item-title active flex align-center"
                                    : "item-title flex align-center"
                                }
                                onClick={() => handleOnClick(1)}
                              >
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
                                <h4 className="inner">In person</h4>
                              </li>
                              <li
                                className={
                                  activeIndex == 2
                                    ? "item-title active style btn-1"
                                    : "item-title style btn-1"
                                }
                                onClick={() => handleOnClick(2)}
                              >
                                <h4 className="inner">Video chat </h4>
                              </li>
                            </ul>
                          </div>
                          <div className="content-tab">
                            <div className="content-inner tab-content">
                              <div className="comments">
                                <div className="comment-form">
                                  <form method="post">
                                    <div className="wd-find-select ">
                                      <div className="group-select">
                                        <select
                                          className="nice-select"
                                          tabIndex={0}
                                        >
                                          <span className="current">
                                            Choose time
                                          </span>

                                          <option
                                            value
                                            className="option selected"
                                          >
                                            Choose time
                                          </option>
                                          <option value={6} className="option">
                                            6h
                                          </option>
                                          <option value={8} className="option">
                                            8h
                                          </option>
                                          <option value={10} className="option">
                                            10h
                                          </option>
                                          <option value={14} className="option">
                                            14h
                                          </option>
                                          <option value={16} className="option">
                                            16h
                                          </option>
                                          <option value={18} className="option">
                                            18h
                                          </option>
                                          <option value={20} className="option">
                                            20h
                                          </option>
                                        </select>
                                      </div>
                                      <fieldset className>
                                        <input
                                          type="text"
                                          className
                                          name="text"
                                          placeholder="Your name"
                                          required
                                        />
                                      </fieldset>
                                      <fieldset className>
                                        <input
                                          type="tel"
                                          className
                                          name="tel"
                                          placeholder="Phone number"
                                          required
                                        />
                                      </fieldset>
                                      <fieldset className>
                                        <input
                                          type="email"
                                          className
                                          name="email"
                                          placeholder="Email address"
                                          required
                                        />
                                      </fieldset>
                                      <fieldset className="message-wrap">
                                        <textarea
                                          name="message"
                                          rows={4}
                                          tabIndex={4}
                                          placeholder="Your mesage"
                                        />
                                      </fieldset>
                                      <div className="widget-form flex">
                                        <label className="widget-form ">
                                          <input type="checkbox" />
                                          <span className="btn-checkbox flex-two" />
                                        </label>
                                        <div className="flex fs-13 lh-18">
                                          <span className="sub-title">
                                            I agree to the
                                          </span>
                                          <Link
                                            href="#"
                                            className="font-2 text-color-3 text-line"
                                          >
                                            {" "}
                                            Terms and Conditions.
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="button-box center">
                                        <button className="sc-button btn-icon2 one btn-svg center">
                                          <span className>
                                            Submit a Tour Request
                                          </span>
                                          <svg
                                            width={18}
                                            height={10}
                                            viewBox="0 0 14 7"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M10.5 1L13 3.5M13 3.5L10.5 6M13 3.5H1"
                                              stroke="#fff"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-rent style">
                        <h3 className="widget-title title-contact">
                          Contact seller
                        </h3>
                        <div className="author-box flex align-center">
                          <div className="image-author flex-none">
                            <img
                              src="/assets/images/author/author-footer.jpg"
                              alt="images"
                            />
                          </div>
                          <div className="content">
                            <p className="text-color-2">Cameron Williamson</p>
                            <h5 className="link-style-1">
                              <Link href="/tel:0123456789">
                                (405) 555-000-999
                              </Link>
                            </h5>
                            <Link
                              className="fs-12 lh-18"
                              href="/mailto:cameronwilliamson@gmail.com"
                            >
                              cameronwilliamson@gmail.com
                            </Link>
                          </div>
                        </div>
                        <div className="comments">
                          <div className="comment-form">
                            <form method="post">
                              <div className="wd-find-select ">
                                <fieldset className>
                                  <input
                                    type="text"
                                    className
                                    name="text"
                                    placeholder="Full name *"
                                    required
                                  />
                                </fieldset>
                                <fieldset className>
                                  <input
                                    type="tel"
                                    className
                                    name="tel"
                                    placeholder="Phone number *"
                                    required
                                  />
                                </fieldset>
                                <fieldset className>
                                  <input
                                    type="email"
                                    className
                                    name="email"
                                    placeholder="Email address"
                                    required
                                  />
                                </fieldset>
                                <fieldset className="message-wrap">
                                  <textarea
                                    name="message"
                                    rows={4}
                                    tabIndex={4}
                                    placeholder="Your mesage *"
                                  />
                                </fieldset>
                                <div className="button-box sc-btn-top center flex justify-space">
                                  <button className="sc-button btn-svg">
                                    <span>Send message</span>
                                    <svg
                                      width={18}
                                      height={18}
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.125 6.5025V12.9375C1.125 13.5342 1.36205 14.1065 1.78401 14.5285C2.20597 14.9504 2.77826 15.1875 3.375 15.1875H14.625C15.2217 15.1875 15.794 14.9504 16.216 14.5285C16.6379 14.1065 16.875 13.5342 16.875 12.9375V6.5025L10.179 10.6223C9.82443 10.8404 9.4163 10.9559 9 10.9559C8.5837 10.9559 8.17557 10.8404 7.821 10.6223L1.125 6.5025Z"
                                        fill="white"
                                      />
                                      <path
                                        d="M16.875 5.181V5.0625C16.875 4.46576 16.6379 3.89347 16.216 3.47151C15.794 3.04955 15.2217 2.8125 14.625 2.8125H3.375C2.77826 2.8125 2.20597 3.04955 1.78401 3.47151C1.36205 3.89347 1.125 4.46576 1.125 5.0625V5.181L8.4105 9.6645C8.58778 9.77357 8.79185 9.83132 9 9.83132C9.20815 9.83132 9.41222 9.77357 9.5895 9.6645L16.875 5.181Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </button>
                                  <Link
                                    className="sc-button btn-1 btn-svg"
                                    href="/tel:012345678"
                                  >
                                    <span>Call</span>
                                    <svg
                                      width={19}
                                      height={18}
                                      viewBox="0 0 19 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.125 7.31249C15.125 7.46168 15.0657 7.60475 14.9602 7.71024C14.8548 7.81573 14.7117 7.87499 14.5625 7.87499H11.1875C11.0383 7.87499 10.8952 7.81573 10.7898 7.71024C10.6843 7.60475 10.625 7.46168 10.625 7.31249V3.93749C10.625 3.78831 10.6843 3.64523 10.7898 3.53975C10.8952 3.43426 11.0383 3.37499 11.1875 3.37499C11.3367 3.37499 11.4798 3.43426 11.5852 3.53975C11.6907 3.64523 11.75 3.78831 11.75 3.93749V5.95499L15.29 2.41499C15.3415 2.35973 15.4036 2.3154 15.4726 2.28466C15.5416 2.25391 15.6161 2.23738 15.6916 2.23605C15.7671 2.23472 15.8422 2.24861 15.9122 2.2769C15.9822 2.30519 16.0459 2.3473 16.0993 2.40071C16.1527 2.45413 16.1948 2.51775 16.2231 2.5878C16.2514 2.65784 16.2653 2.73286 16.2639 2.80839C16.2626 2.88391 16.2461 2.9584 16.2153 3.0274C16.1846 3.0964 16.1403 3.1585 16.085 3.20999L12.545 6.74999H14.5625C14.7117 6.74999 14.8548 6.80926 14.9602 6.91475C15.0657 7.02024 15.125 7.16331 15.125 7.31249Z"
                                        fill="#1C1C1E"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.625 3.375C1.625 2.77826 1.86205 2.20597 2.28401 1.78401C2.70597 1.36205 3.27826 1.125 3.875 1.125H4.904C5.549 1.125 6.1115 1.5645 6.26825 2.19L7.097 5.50725C7.16416 5.77575 7.15059 6.05809 7.058 6.31892C6.96542 6.57974 6.79792 6.80744 6.5765 6.9735L5.60675 7.701C5.5055 7.77675 5.48375 7.88775 5.51225 7.965C5.93553 9.11614 6.60395 10.1615 7.47121 11.0288C8.33847 11.8961 9.38386 12.5645 10.535 12.9877C10.6123 13.0162 10.7225 12.9945 10.799 12.8932L11.5265 11.9235C11.6926 11.7021 11.9203 11.5346 12.1811 11.442C12.4419 11.3494 12.7243 11.3358 12.9928 11.403L16.31 12.2318C16.9355 12.3885 17.375 12.951 17.375 13.5968V14.625C17.375 15.2217 17.1379 15.794 16.716 16.216C16.294 16.6379 15.7217 16.875 15.125 16.875H13.4375C6.914 16.875 1.625 11.586 1.625 5.0625V3.375Z"
                                        fill="#1C1C1E"
                                      />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="widget widget-listings style">
                        <h3 className="widget-title title-list">
                          Featured listings
                        </h3>
                        <div className="box-listings flex hover-img3">
                          <div className="img-listings img-style3">
                            <img
                              src="/assets/images/img-box/sidebar-listings-1.jpg"
                              alt="images"
                            />
                          </div>
                          <div className="content link-style-1">
                            <Link
                              className="fs-16 lh-24"
                              href="/property-detail-v1"
                            >
                              Gorgeous Apartment Building
                            </Link>
                            <h4>$7,500</h4>
                          </div>
                        </div>
                        <div className="box-listings flex hover-img3">
                          <div className="img-listings img-style3">
                            <img
                              src="/assets/images/img-box/sidebar-listings-2.jpg"
                              alt="images"
                            />
                          </div>
                          <div className="content link-style-1">
                            <Link
                              className="fs-16 lh-24"
                              href="/property-detail-v1"
                            >
                              Gorgeous Apartment Building
                            </Link>
                            <h4>$7,500</h4>
                          </div>
                        </div>
                        <div className="box-listings flex hover-img3">
                          <div className="img-listings img-style3">
                            <img
                              src="/assets/images/img-box/sidebar-listings-3.jpg"
                              alt="images"
                            />
                          </div>
                          <div className="content link-style-1">
                            <Link
                              className="fs-16 lh-24"
                              href="/property-detail-v1"
                            >
                              Gorgeous Apartment Building
                            </Link>
                            <h4>$7,500</h4>
                          </div>
                        </div>
                      </div>
                      <div className="widget widget-estate">
                        <h3 className="widget-title title-news">
                          Real estate near you
                        </h3>
                        <ul className="group-estate flex">
                          <li className="box-estate hover-img2">
                            <div className="thumb img-style2 ">
                              <img
                                className="img2"
                                src="/assets/images/img-box/sidebar-estate-1.jpg"
                                alt="images"
                              />
                            </div>
                            <div className="content">
                              <div className="title link-style-3 fw-6 lh-18">
                                <Link href="/properties-map-v1">Moncton</Link>{" "}
                              </div>
                              <p className="fs-12 lh-16 text-color-1">
                                1570 listing
                              </p>
                            </div>
                          </li>
                          <li className="box-estate hover-img2">
                            <div className="thumb img-style2 ">
                              <img
                                className="img2"
                                src="/assets/images/img-box/sidebar-estate-2.jpg"
                                alt="images"
                              />
                            </div>
                            <div className="content">
                              <div className="title link-style-3 fw-6 lh-18">
                                <Link href="/properties-map-v1">
                                  Mississauga
                                </Link>{" "}
                              </div>
                              <p className="fs-12 lh-16 text-color-1">
                                1570 listing
                              </p>
                            </div>
                          </li>
                          <li className="box-estate hover-img2">
                            <div className="thumb img-style2 ">
                              <img
                                className="img2"
                                src="/assets/images/img-box/sidebar-estate-3.jpg"
                                alt="images"
                              />
                            </div>
                            <div className="content">
                              <div className="title link-style-3 fw-6 lh-18">
                                <Link href="/properties-map-v1">Halifax</Link>{" "}
                              </div>
                              <p className="fs-12 lh-16 text-color-1">
                                1570 listing
                              </p>
                            </div>
                          </li>
                          <li className="box-estate hover-img2">
                            <div className="thumb img-style2 ">
                              <img
                                className="img2"
                                src="/assets/images/img-box/sidebar-estate-4.jpg"
                                alt="images"
                              />
                            </div>
                            <div className="content">
                              <div className="title link-style-3 fw-6 lh-18">
                                <Link href="/properties-map-v1">Ottawa</Link>{" "}
                              </div>
                              <p className="fs-12 lh-16 text-color-1">
                                1570 listing
                              </p>
                            </div>
                          </li>
                          <li className="box-estate hover-img2">
                            <div className="thumb img-style2 ">
                              <img
                                className="img2"
                                src="/assets/images/img-box/sidebar-estate-5.jpg"
                                alt="images"
                              />
                            </div>
                            <div className="content">
                              <div className="title link-style-3 fw-6 lh-18">
                                <Link href="/properties-map-v1">Iqaluit</Link>{" "}
                              </div>
                              <p className="fs-12 lh-16 text-color-1">
                                1570 listing
                              </p>
                            </div>
                          </li>
                          <li className="box-estate hover-img2">
                            <div className="thumb img-style2 ">
                              <img
                                className="img2"
                                src="/assets/images/img-box/sidebar-estate-6.jpg"
                                alt="images"
                              />
                            </div>
                            <div className="content">
                              <div className="title link-style-3 fw-6 lh-18">
                                <Link href="/properties-map-v1">Toronto</Link>{" "}
                              </div>
                              <p className="fs-12 lh-16 text-color-1">
                                1570 listing
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="widget widget-ads">
                        <div className="box-ads">
                          <div className="content relative z-2">
                            <h3 className="link-style-3">
                              <Link href="/property-detail-v1">
                                Gorgeous Apartment Building
                              </Link>{" "}
                            </h3>
                            <div className="text-addres ">
                              <p className="p-12 text-color-1 icon-p">
                                58 Hullbrook Road, Billesley, B13 0LA
                              </p>
                            </div>
                            <div className="star flex">
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  {" "}
                                  <g>
                                    {" "}
                                    <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                  </g>
                                </g>
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                              </svg>
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  {" "}
                                  <g>
                                    {" "}
                                    <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                  </g>
                                </g>
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                              </svg>
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  {" "}
                                  <g>
                                    {" "}
                                    <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                  </g>
                                </g>
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                              </svg>
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  {" "}
                                  <g>
                                    {" "}
                                    <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                  </g>
                                </g>
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                              </svg>
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  {" "}
                                  <g>
                                    {" "}
                                    <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />{" "}
                                  </g>
                                </g>
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
          <section className="flat-sale-detail flat-sale wg-dream wg-dots tf-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-section ">
                    <div className="title-heading fs-30 lh-45 fw-7">
                      Featured properties
                    </div>
                    <p className="text-color-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer vel lobortis justo
                    </p>
                  </div>
                  <div className="swiper-container2">
                    <OneCarousel />
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
                    <h2>
                      Find for your dream home and increase your investment
                      opportunities
                    </h2>
                    <p className="text-color-2 font-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce sed tristique metus proin id lorem odio
                    </p>
                    <div className="button-footer">
                      <Link
                        className="sc-button center btn-icon"
                        href="/contact"
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.0967 21.75 20.669 21.5129 21.091 21.091C21.5129 20.669 21.75 20.0967 21.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C14.05 18.017 13.563 18.183 13.122 18.021C11.4849 17.4191 9.99815 16.4686 8.76478 15.2352C7.53141 14.0018 6.58087 12.5151 5.979 10.878C5.817 10.437 5.983 9.95 6.359 9.668L7.652 8.698C8.015 8.427 8.179 7.964 8.069 7.525L6.963 3.102C6.90214 2.85869 6.76172 2.6427 6.56405 2.48834C6.36638 2.33397 6.1228 2.25008 5.872 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V6.75Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Contact Seller</span>
                      </Link>
                    </div>
                  </div>
                  <div className="mark-img">
                    <img
                      src="/assets/images/mark/mark-contact2.png"
                      alt="images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
