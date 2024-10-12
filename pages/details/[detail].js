import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import OneCarousel from "@/components/slider/OneCarousel";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/router'
import { swiperData } from "@/constant";

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

export default function detail() {
  const router = useRouter();
  const chosenData = swiperData.find(({href}) => href == router.query.detail)

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
        headerStyle={4}
        footerStyle={4}
        breadcrumbTitle={chosenData.title}
        breadcrumbCategory={chosenData.category}
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
                            src={chosenData.image}
                            alt="images"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="image-detail">
                          <img
                            src={chosenData.image}
                            alt="images"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="image-detail">
                          <img
                            src={chosenData.image}
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
                <div dir="rtl" className="col-lg-12">
                  <div className="wrap-house wg-dream flex bg-white">
                    <div className="box-1">
                      <div className="title-heading fs-30 fw-7 lh-45">
                        {chosenData.title}
                      </div>
                      <div className="inner flex">
                        <div className="sales fs-12 fw-7 text-color-1" style={{marginRight : '0px !important'}}>
                          {chosenData.category}
                        </div>
                        {
                          chosenData.featured[0] && 
                          <div>
                            <p style={{fontWeight : '700' , margin: '0px 15px'}}>{chosenData.featured[0]}</p>
                          </div>
                        }
                        <div className="icon-inner flex">
                        {
                          chosenData.featured[1] && 
                          <div>
                            <p style={{fontWeight : '700' , margin: '0px 15px'}}>{chosenData.featured[1]}</p>
                          </div>
                        }
                        </div>
                      </div>
                    </div>
                    <div  className="box-2 text-end">
                      <div style={{display : 'flex' , flexDirection : 'row-reverse'}}className="icon-boxs flex">
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
                      <div className="responsive-detail">
                        <div className="moneys fs-30 fw-7 lh-45 text-color-3">
                          {chosenData.discount}
                        </div>
                        <div className="">{chosenData.contact}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="post">
                    <div dir="rtl"  className="wrap-text wrap-style">
                      <h3 className="titles">توضیحات در مورد سازمان</h3>
                      <p className="text-1 text-color-2">
                          {chosenData.descriptons}
                      </p>
                      <Link href="#" className="fw-6">
                       برو به سایت {chosenData.title}
                      </Link>
                    </div>
                    <div dir="rtl" className="wrap-property wrap-style">
                      <h3 className="titles">شرایط و موقعیت مکانی</h3>
                      <div className="box flex">
                        <ul style={{width : '100%'}}>
                          <li className="flex">
                            <span className="one fw-6">روش خرید</span>
                            <span className="two">نقدی، اقساط</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6"> خدمات در</span>
                            <span className="two"> تهران، اصفهان، اردبیل</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">موقعیت مکانی</span>
                            <span className="two">تهران، میدان آزادی، پلاک 32 </span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">شماره تماس</span>
                            <span className="two">{chosenData.contact}</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">دسته بندی</span>
                            <span className="two">{chosenData.category}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div dir="rtl" className="wrap-map wrap-property wrap-style">
                      <h3 className="titles">لوکیشن در نقشه</h3>
                      <div className="box flex">
                        <ul>
                          <li className="flex">
                            <span className="one fw-6">شهر</span>
                            <span className="two">تهران</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">منطقه</span>
                            <span className="two">12</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">خیابان اصلی</span>
                            <span className="two">شهید محمدی</span>
                          </li>
                        </ul>
                        <ul>
                          <li className="flex">
                            <span className="one fw-6">خیابان فرعی</span>
                            <span className="two">علیپور</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">پلاک</span>
                            <span className="two">1</span>
                          </li>
                          <li className="flex">
                            <span className="one fw-6">کد پستی</span>
                            <span className="two">192587456</span>
                          </li>
                        </ul>
                      </div>
                      <iframe
                        className="map-content"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.453092836291!2d51.3890!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1627293157601!5m2!1svi!2s"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>

                    <div dir="rtl" className="wrap-walksore wrap-style">
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
                <div dir="rtl" className="col-lg-4">
                  <aside className="side-bar side-bar-1">
                    <div className="inner-side-bar">
                      <div className="widget-tour widget-rent">
                        <h3 className="title-tour">ارسال سریع درخواست همکاری</h3>
                        <p className="p-tour text-color-2" style={{marginTop : '10px'}}>
                          تاریخ تماس کارشناسان ما با شما
                        </p>
                        <div className="days-wrap flex flex-wrap">
                          <div className="day-box box-1 center">
                            <p>شنبه</p>
                            <div className="number fs-18 lh-24 fw-6">17</div>
                            <p>آبان</p>
                          </div>
                          <div className="day-box box-2 center">
                            <p>دوشنبه</p>
                            <div className="number fs-18 lh-24 fw-6">19</div>
                            <p>آبان</p>
                          </div>
                          <div className="day-box box-3 center">
                            <p>چهارشنبه</p>
                            <div className="number fs-18 lh-24 fw-6">20</div>
                            <p>آبان</p>
                          </div>
                          <div className="day-box box-4 center">
                            <p>پنج‌شنبه</p>
                            <div className="number fs-18 lh-24 fw-6">21</div>
                            <p>آبان</p>
                          </div>
                        </div>
                        <h5>روش همکاری</h5>
                        <div className="flat-tabs style2">
                          <div className="box-tab center">
                            <ul className="menu-tab tab-title flex" style={{gap : '5px'}}>
                              <li
                                className={
                                  activeIndex == 1
                                    ? "item-title active flex align-center"
                                    : "item-title flex align-center"
                                }
                                onClick={() => handleOnClick(1)}
                              >
                                <h4 className="inner"> کسب و کار</h4>
                              </li>
                              <li
                                className={
                                  activeIndex == 2
                                    ? "item-title active style btn-1"
                                    : "item-title style btn-1"
                                }
                                onClick={() => handleOnClick(2)}
                              >
                                <h4 className="inner">سازمان</h4>
                              </li>
                            </ul>
                          </div>
                          <div className="content-tab">
                            <div className="content-inner tab-content">
                              <div className="comments">
                                <div className="comment-form">
                                  <form method="post">
                                    <div className="wd-find-select ">
                                      <div dir="rtl" className="group-select">
                                        <select
                                          className="nice-select"
                                          tabIndex={0}
                                        >
                                          <span className="current">
                                           دسته بندی
                                          </span>

                                          <option
                                            value
                                            className="option selected"
                                          >
                                            دسته بندی
                                          </option>
                                          <option value={6} className="option">
                                            صنعت بیمه
                                          </option>
                                          <option value={8} className="option">
                                            تفریحات
                                          </option>
                                          <option value={10} className="option">
                                            لوازم خانگیی
                                          </option>
                                        </select>
                                      </div>
                                      <fieldset className>
                                        <input
                                          type="text"
                                          className
                                          name="text"
                                          placeholder="نام کامل"
                                          required
                                        />
                                      </fieldset>
                                      <fieldset className>
                                        <input
                                          type="text"
                                          className
                                          name="text"
                                          placeholder="شماره تلفن"
                                          required
                                        />
                                      </fieldset>
                                      <fieldset className>
                                        <input
                                          type="email"
                                          className
                                          name="email"
                                          placeholder="ایمیل"
                                          required
                                        />
                                      </fieldset>
                                      <fieldset className="message-wrap">
                                        <textarea
                                          name="message"
                                          rows={4}
                                          tabIndex={4}
                                          placeholder="متن پیام"
                                        />
                                      </fieldset>
                                      <div className="widget-form flex " style={{display : 'flex !important'}}>
                                        <label className="widget-form ">
                                          <input type="checkbox" />
                                          <span className="btn-checkbox flex-two" />
                                        </label>
                                        <div className="flex fs-13 lh-18" >
                                          <span className="sub-title">
                                            با <Link
                                            href="#"
                                            className="text-color-3 text-line"
                                          >
                                            {" "}
                                            قوانین
                                          </Link> موافقم
                                          </span>
                                          
                                        </div>
                                      </div>
                                      <div className="button-box center">
                                        <button className="sc-button btn-icon2 one btn-svg center">
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
                                          <span className>
                                            ارسال درخواست
                                          </span>
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
