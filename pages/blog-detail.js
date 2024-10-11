import Layout from "@/components/layout/Layout"
import Link from 'next/link'
export default function BlogDetails() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Property Listing">
                <div>
                    <section className="flat-blog-detail flat-property-detail">
                        <div className="container">
                            <div className="row flex">
                                <div className="col-lg-8">
                                    <div className="post">
                                        <div className="title-heading fs-30 fw-7 lh-45">Lack of home listings is taking a toll on mortgage demand</div>
                                        <div className="icon-boxs flex">
                                            <div className="icon flex align-center">
                                                <svg width={11} height={14} viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.99933 3C7.99933 3.66304 7.73594 4.29893 7.2671 4.76777C6.79826 5.23661 6.16237 5.5 5.49933 5.5C4.83629 5.5 4.20041 5.23661 3.73157 4.76777C3.26273 4.29893 2.99933 3.66304 2.99933 3C2.99933 2.33696 3.26273 1.70107 3.73157 1.23223C4.20041 0.763392 4.83629 0.5 5.49933 0.5C6.16237 0.5 6.79826 0.763392 7.2671 1.23223C7.73594 1.70107 7.99933 2.33696 7.99933 3ZM0.5 12.412C0.521423 11.1002 1.05756 9.84944 1.99278 8.92936C2.92801 8.00929 4.18739 7.49365 5.49933 7.49365C6.81127 7.49365 8.07066 8.00929 9.00588 8.92936C9.94111 9.84944 10.4772 11.1002 10.4987 12.412C8.93026 13.1312 7.22477 13.5023 5.49933 13.5C3.71533 13.5 2.022 13.1107 0.5 12.412Z" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="fw-6 text-color-3 fs-13">Kathryn Murphy</span>
                                            </div>
                                            <div className="icon flex align-center">
                                                <svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 6.5V6C1 5.60218 1.15804 5.22064 1.43934 4.93934C1.72064 4.65804 2.10218 4.5 2.5 4.5H12.5C12.8978 4.5 13.2794 4.65804 13.5607 4.93934C13.842 5.22064 14 5.60218 14 6V6.5M8.20667 2.20667L6.79333 0.793333C6.70048 0.700368 6.59022 0.626612 6.46886 0.57628C6.34749 0.525949 6.21739 0.500028 6.086 0.5H2.5C2.10218 0.5 1.72064 0.658035 1.43934 0.93934C1.15804 1.22064 1 1.60218 1 2V10C1 10.3978 1.15804 10.7794 1.43934 11.0607C1.72064 11.342 2.10218 11.5 2.5 11.5H12.5C12.8978 11.5 13.2794 11.342 13.5607 11.0607C13.842 10.7794 14 10.3978 14 10V4C14 3.60218 13.842 3.22064 13.5607 2.93934C13.2794 2.65804 12.8978 2.5 12.5 2.5H8.914C8.64887 2.49977 8.39402 2.39426 8.20667 2.20667Z" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="fw-6 text-color-3 fs-13">Housing</span>
                                            </div>
                                            <div className="icon flex align-center">
                                                <svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.25 5.5C5.25 5.56631 5.22366 5.62989 5.17678 5.67678C5.12989 5.72366 5.0663 5.75 5 5.75C4.9337 5.75 4.87011 5.72366 4.82322 5.67678C4.77634 5.62989 4.75 5.56631 4.75 5.5C4.75 5.4337 4.77634 5.37011 4.82322 5.32322C4.87011 5.27634 4.9337 5.25 5 5.25C5.0663 5.25 5.12989 5.27634 5.17678 5.32322C5.22366 5.37011 5.25 5.4337 5.25 5.5ZM5.25 5.5H5M7.75 5.5C7.75 5.56631 7.72366 5.62989 7.67678 5.67678C7.62989 5.72366 7.5663 5.75 7.5 5.75C7.4337 5.75 7.37011 5.72366 7.32322 5.67678C7.27634 5.62989 7.25 5.56631 7.25 5.5C7.25 5.4337 7.27634 5.37011 7.32322 5.32322C7.37011 5.27634 7.4337 5.25 7.5 5.25C7.5663 5.25 7.62989 5.27634 7.67678 5.32322C7.72366 5.37011 7.75 5.4337 7.75 5.5ZM7.75 5.5H7.5M10.25 5.5C10.25 5.56631 10.2237 5.62989 10.1768 5.67678C10.1299 5.72366 10.0663 5.75 10 5.75C9.9337 5.75 9.87011 5.72366 9.82322 5.67678C9.77634 5.62989 9.75 5.56631 9.75 5.5C9.75 5.4337 9.77634 5.37011 9.82322 5.32322C9.87011 5.27634 9.9337 5.25 10 5.25C10.0663 5.25 10.1299 5.27634 10.1768 5.32322C10.2237 5.37011 10.25 5.4337 10.25 5.5ZM10.25 5.5H10M1 7.50667C1 8.57333 1.74867 9.50267 2.80467 9.658C3.52933 9.76467 4.26133 9.84667 5 9.904V13L7.78933 10.2113C7.92744 10.0738 8.11312 9.99453 8.308 9.99C9.60908 9.95799 10.907 9.84712 12.1947 9.658C13.2513 9.50267 14 8.574 14 7.506V3.494C14 2.426 13.2513 1.49733 12.1953 1.342C10.6406 1.11381 9.07135 0.999507 7.5 1C5.90533 1 4.33733 1.11667 2.80467 1.342C1.74867 1.49733 1 2.42667 1 3.494V7.506V7.50667Z" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className=" fs-13">0 comment</span>
                                            </div>
                                            <div className="icon flex align-center">
                                                <svg width={13} height={14} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 1V2.5M10 1V2.5M0.5 11.5V4C0.5 3.60218 0.658035 3.22064 0.93934 2.93934C1.22064 2.65804 1.60218 2.5 2 2.5H11C11.3978 2.5 11.7794 2.65804 12.0607 2.93934C12.342 3.22064 12.5 3.60218 12.5 4V11.5M0.5 11.5C0.5 11.8978 0.658035 12.2794 0.93934 12.5607C1.22064 12.842 1.60218 13 2 13H11C11.3978 13 11.7794 12.842 12.0607 12.5607C12.342 12.2794 12.5 11.8978 12.5 11.5M0.5 11.5V6.5C0.5 6.10218 0.658035 5.72064 0.93934 5.43934C1.22064 5.15804 1.60218 5 2 5H11C11.3978 5 11.7794 5.15804 12.0607 5.43934C12.342 5.72064 12.5 6.10218 12.5 6.5V11.5" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className=" fs-13">April 6, 2023</span>
                                            </div>
                                        </div>
                                        <div className="texts-1 fs-16 fw-8 font-2 lh-29">Mortgage rates fell last week, but demand for home loans didn’t move higher as a result. Other aspects of today’s housing market are outweighing the benefit of lower mortgage rates right now, namely a lack of supply.</div>
                                        <div className="image"><img src="/assets/images/img-box/blog-detail.jpg" alt="images" /></div>
                                        <div className="content-img">
                                            <div className="sub-title fs-12 fw-6">A “For Sale” sign outside a house in Albany, California, on Tuesday, May 31, 2022.</div>
                                            <div className="fs-12 fw-4">David Paul Morris | Bloomberg | Getty Images</div>
                                        </div>
                                        <p className="texts-2 fs-16 font-2 lh-29 text-color-2">The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances ($726,200 or less) decreased to 6.40% from 6.45%, with points falling to 0.59 from 0.62 (including the origination fee) for loans with a 20% down payment. It had been over 7% just a month ago.</p>
                                        <p className="texts-2 fs-16 font-2 lh-29 text-color-2">Mortgage applications to purchase a home, however, dropped 4% last week compared with the previous week, according to the Mortgage Bankers Association’s seasonally adjusted index. Demand was 35% lower than the same week one year ago.</p>
                                        <div className="text-box">
                                            <p className="texts fs-16 font-2 lh-29 text-color-2">“Spring has arrived, but the housing market is missing the customary burst in listings and purchase activity that typically mark the season. After four weeks of increasing purchase application activity, volume declined a bit this week even with another small drop in mortgage rates,” said Mike Fratantoni, MBA’s chief economist.</p>
                                        </div>
                                        <p className="texts-2 fs-16 font-2 lh-29 text-color-2">New listings were down 20% year over year in March, according to Realtor.com, and total inventory was about half of what it was in March 2019, pre-Covid pandemic.</p>
                                        <div className="text-box">
                                            <p className="texts fs-16 font-2 lh-29 text-color-2 fw-6">“Although the mortgage rate for conforming balance loans declined by five basis points over the week to 6.40%, the mortgage rate for jumbo loans increased by nine basis points to 6.36%,” added Fratantoni. “While we have seen relative weakness at the high end of the housing market in recent months, the divergence in rates suggests that banks may be tightening credit in response to recent challenges, preserving balance sheet capacity as deposit balances have declined.”</p>
                                        </div>
                                        <p className="texts-2 fs-16 font-2 lh-29 text-color-2">Most jumbo loans are held on bank balance sheets.</p>
                                        <p className="texts-2 fs-16 font-2 lh-29 text-color-2">Demand for Federal Housing Administration and Department of Veterans Affairs loans, which are favored by lower-income borrowers due to low down payment requirements, declined more than those for conventional loans. While there is strong demand from first-time homebuyers, with millennials hitting their peak buying age, affordability is still a challenge right now.</p>
                                        <p className="texts-3 fs-16 font-2 lh-29 text-color-2">Applications to refinance a home loan also dropped, down 5% for the week and 59% lower than the same week a year ago. The refinance share of mortgage activity decreased to 28.6% of total applications from 29.1% the previous week. Rates are 150 basis points higher than they were at the same time last year, so there are precious few borrowers who can now benefit from a refinance.</p>
                                        <div className="tag-wrap flex justify-space align-center">
                                            <div className="tags-box">
                                                <div className="tags flex-three ">
                                                    <p>Tags:</p>
                                                    <div className="flex fs-13 fw-6 link-style-1">
                                                        <Link href="#">Personal</Link>
                                                        <Link href="#">Business</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="share-box flex-three">
                                                <p>Share this post:</p>
                                                <div className="icon-social">
                                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                                    <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                    <Link href="#"><i className="fab fa-instagram" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wrap-review ">
                                            <div className="box-title titles">
                                                <h3>Comment (4)</h3>
                                            </div>
                                            <div className="comment-list">
                                                <ol className>
                                                    <li className="flex">
                                                        <div className="images flex-none">
                                                            <img src="/assets/images/author/author-review-1.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title-item flex justify-space align-center">
                                                                <h4>Leslie Alexander</h4>
                                                                <p className="fs-12 lh-18">April 5, 2023</p>
                                                            </div>
                                                            <div className="star flex">
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                            </div>
                                                            <p className="texts text-color-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at velit eu libero laoreet mattis ac a ipsum. Vivamus efficitur volutpat ante, sed consequat ligula ultricies in.</p>
                                                            <div className="img-box">
                                                                <img src="/assets/images/img-box/review-1.jpg" alt="images" />
                                                                <img src="/assets/images/img-box/review-2.jpg" alt="images" />
                                                                <img src="/assets/images/img-box/review-3.jpg" alt="images" />
                                                            </div>
                                                            <div className="icon-box flex">
                                                                <a className="icon flex align-center">
                                                                    <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11.375 5.75H9.68749M3.66949 13.0625C3.66124 13.025 3.64849 12.9875 3.63049 12.9515C3.18724 12.0515 2.93749 11.039 2.93749 9.96875C2.93587 8.89238 3.19282 7.83136 3.68674 6.875M3.66949 13.0625C3.72649 13.3362 3.53224 13.625 3.23824 13.625H2.55724C1.89049 13.625 1.27249 13.2365 1.07824 12.599C0.82399 11.7665 0.68749 10.8837 0.68749 9.96875C0.68749 8.804 0.90874 7.69175 1.31074 6.67025C1.54024 6.08975 2.12524 5.75 2.74999 5.75H3.53974C3.89374 5.75 4.09849 6.167 3.91474 6.47C3.83434 6.60234 3.7578 6.73742 3.68674 6.875M3.66949 13.0625H4.63999C5.0027 13.0623 5.36307 13.1205 5.70724 13.235L8.04274 14.015C8.38691 14.1295 8.74728 14.1877 9.10999 14.1875H12.122C12.5855 14.1875 13.0347 14.0022 13.3257 13.6407C14.6143 12.0434 15.3156 10.0523 15.3125 8C15.3125 7.6745 15.2952 7.35275 15.2615 7.03625C15.1797 6.2705 14.4905 5.75 13.721 5.75H11.3765C10.913 5.75 10.6332 5.207 10.8327 4.7885C11.191 4.03444 11.3763 3.20985 11.375 2.375C11.375 1.92745 11.1972 1.49823 10.8807 1.18176C10.5643 0.86529 10.135 0.6875 9.68749 0.6875C9.53831 0.6875 9.39523 0.746763 9.28974 0.852252C9.18425 0.957741 9.12499 1.10082 9.12499 1.25V1.72475C9.12499 2.1545 9.04249 2.57975 8.88349 2.97875C8.65549 3.54875 8.18599 3.97625 7.64374 4.265C6.81128 4.7092 6.0807 5.32228 5.49874 6.065C5.12524 6.5405 4.57924 6.875 3.97474 6.875H3.68674" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                    <p className="fs-12 font-2">Useful</p>
                                                                </a>
                                                                <a className="icon flex align-center">
                                                                    <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M4.62501 9.25H6.31251M12.3305 1.9375C12.3388 1.975 12.3515 2.0125 12.3695 2.0485C12.8128 2.9485 13.0625 3.961 13.0625 5.03125C13.0641 6.10762 12.8072 7.16864 12.3133 8.125M12.3305 1.9375C12.2735 1.66375 12.4678 1.375 12.7618 1.375H13.4428C14.1095 1.375 14.7275 1.7635 14.9218 2.401C15.176 3.2335 15.3125 4.11625 15.3125 5.03125C15.3125 6.196 15.0913 7.30825 14.6893 8.32975C14.4598 8.91025 13.8748 9.25 13.25 9.25H12.4603C12.1063 9.25 11.9015 8.833 12.0853 8.53C12.1657 8.39766 12.2422 8.26258 12.3133 8.125M12.3305 1.9375H11.36C10.9973 1.93772 10.6369 1.87948 10.2928 1.765L7.95726 0.985001C7.61309 0.870526 7.25272 0.812279 6.89001 0.812501H3.87801C3.41451 0.812501 2.96526 0.997751 2.67426 1.35925C1.38572 2.95658 0.684409 4.94774 0.68751 7C0.68751 7.3255 0.70476 7.64725 0.73851 7.96375C0.82026 8.7295 1.50951 9.25 2.27901 9.25H4.62351C5.08701 9.25 5.36676 9.793 5.16726 10.2115C4.80897 10.9656 4.6237 11.7902 4.62501 12.625C4.62501 13.0726 4.8028 13.5018 5.11927 13.8182C5.43574 14.1347 5.86496 14.3125 6.31251 14.3125C6.46169 14.3125 6.60477 14.2532 6.71026 14.1477C6.81575 14.0423 6.87501 13.8992 6.87501 13.75V13.2753C6.87501 12.8455 6.95751 12.4203 7.11651 12.0213C7.34451 11.4513 7.81401 11.0238 8.35626 10.735C9.18872 10.2908 9.9193 9.67772 10.5013 8.935C10.8748 8.4595 11.4208 8.125 12.0253 8.125H12.3133" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                    <p className="fs-12 font-2">Not helpful</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="flex">
                                                        <div className="images flex-none">
                                                            <img src="/assets/images/author/author-review-2.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title-item flex justify-space align-center">
                                                                <h4>Jenny Wilson</h4>
                                                                <p className="fs-12 lh-18">April 5, 2023</p>
                                                            </div>
                                                            <div className="star flex">
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                            </div>
                                                            <p className="texts text-color-2">Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.</p>
                                                            <div className="icon-box flex">
                                                                <a className="icon flex align-center">
                                                                    <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11.375 5.75H9.68749M3.66949 13.0625C3.66124 13.025 3.64849 12.9875 3.63049 12.9515C3.18724 12.0515 2.93749 11.039 2.93749 9.96875C2.93587 8.89238 3.19282 7.83136 3.68674 6.875M3.66949 13.0625C3.72649 13.3362 3.53224 13.625 3.23824 13.625H2.55724C1.89049 13.625 1.27249 13.2365 1.07824 12.599C0.82399 11.7665 0.68749 10.8837 0.68749 9.96875C0.68749 8.804 0.90874 7.69175 1.31074 6.67025C1.54024 6.08975 2.12524 5.75 2.74999 5.75H3.53974C3.89374 5.75 4.09849 6.167 3.91474 6.47C3.83434 6.60234 3.7578 6.73742 3.68674 6.875M3.66949 13.0625H4.63999C5.0027 13.0623 5.36307 13.1205 5.70724 13.235L8.04274 14.015C8.38691 14.1295 8.74728 14.1877 9.10999 14.1875H12.122C12.5855 14.1875 13.0347 14.0022 13.3257 13.6407C14.6143 12.0434 15.3156 10.0523 15.3125 8C15.3125 7.6745 15.2952 7.35275 15.2615 7.03625C15.1797 6.2705 14.4905 5.75 13.721 5.75H11.3765C10.913 5.75 10.6332 5.207 10.8327 4.7885C11.191 4.03444 11.3763 3.20985 11.375 2.375C11.375 1.92745 11.1972 1.49823 10.8807 1.18176C10.5643 0.86529 10.135 0.6875 9.68749 0.6875C9.53831 0.6875 9.39523 0.746763 9.28974 0.852252C9.18425 0.957741 9.12499 1.10082 9.12499 1.25V1.72475C9.12499 2.1545 9.04249 2.57975 8.88349 2.97875C8.65549 3.54875 8.18599 3.97625 7.64374 4.265C6.81128 4.7092 6.0807 5.32228 5.49874 6.065C5.12524 6.5405 4.57924 6.875 3.97474 6.875H3.68674" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                    <p className="fs-12 font-2">Useful</p>
                                                                </a>
                                                                <a className="icon flex align-center">
                                                                    <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M4.62501 9.25H6.31251M12.3305 1.9375C12.3388 1.975 12.3515 2.0125 12.3695 2.0485C12.8128 2.9485 13.0625 3.961 13.0625 5.03125C13.0641 6.10762 12.8072 7.16864 12.3133 8.125M12.3305 1.9375C12.2735 1.66375 12.4678 1.375 12.7618 1.375H13.4428C14.1095 1.375 14.7275 1.7635 14.9218 2.401C15.176 3.2335 15.3125 4.11625 15.3125 5.03125C15.3125 6.196 15.0913 7.30825 14.6893 8.32975C14.4598 8.91025 13.8748 9.25 13.25 9.25H12.4603C12.1063 9.25 11.9015 8.833 12.0853 8.53C12.1657 8.39766 12.2422 8.26258 12.3133 8.125M12.3305 1.9375H11.36C10.9973 1.93772 10.6369 1.87948 10.2928 1.765L7.95726 0.985001C7.61309 0.870526 7.25272 0.812279 6.89001 0.812501H3.87801C3.41451 0.812501 2.96526 0.997751 2.67426 1.35925C1.38572 2.95658 0.684409 4.94774 0.68751 7C0.68751 7.3255 0.70476 7.64725 0.73851 7.96375C0.82026 8.7295 1.50951 9.25 2.27901 9.25H4.62351C5.08701 9.25 5.36676 9.793 5.16726 10.2115C4.80897 10.9656 4.6237 11.7902 4.62501 12.625C4.62501 13.0726 4.8028 13.5018 5.11927 13.8182C5.43574 14.1347 5.86496 14.3125 6.31251 14.3125C6.46169 14.3125 6.60477 14.2532 6.71026 14.1477C6.81575 14.0423 6.87501 13.8992 6.87501 13.75V13.2753C6.87501 12.8455 6.95751 12.4203 7.11651 12.0213C7.34451 11.4513 7.81401 11.0238 8.35626 10.735C9.18872 10.2908 9.9193 9.67772 10.5013 8.935C10.8748 8.4595 11.4208 8.125 12.0253 8.125H12.3133" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                    <p className="fs-12 font-2">Not helpful</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="flex">
                                                        <div className="images flex-none">
                                                            <img src="/assets/images/author/author-review-3.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title-item flex justify-space align-center">
                                                                <h4>Bessie Cooper</h4>
                                                                <p className="fs-12 lh-18">April 5, 2023</p>
                                                            </div>
                                                            <div className="star flex">
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                            </div>
                                                            <p className="texts text-color-2">Donec iaculis id nibh vitae consequat. Curabitur a molestie odio, id varius odio. Suspendisse sollicitudin egestas sodales. Nam semper lorem euismod molestie tempus.</p>
                                                            <div className="icon-box flex">
                                                                <a className="icon flex align-center">
                                                                    <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11.375 5.75H9.68749M3.66949 13.0625C3.66124 13.025 3.64849 12.9875 3.63049 12.9515C3.18724 12.0515 2.93749 11.039 2.93749 9.96875C2.93587 8.89238 3.19282 7.83136 3.68674 6.875M3.66949 13.0625C3.72649 13.3362 3.53224 13.625 3.23824 13.625H2.55724C1.89049 13.625 1.27249 13.2365 1.07824 12.599C0.82399 11.7665 0.68749 10.8837 0.68749 9.96875C0.68749 8.804 0.90874 7.69175 1.31074 6.67025C1.54024 6.08975 2.12524 5.75 2.74999 5.75H3.53974C3.89374 5.75 4.09849 6.167 3.91474 6.47C3.83434 6.60234 3.7578 6.73742 3.68674 6.875M3.66949 13.0625H4.63999C5.0027 13.0623 5.36307 13.1205 5.70724 13.235L8.04274 14.015C8.38691 14.1295 8.74728 14.1877 9.10999 14.1875H12.122C12.5855 14.1875 13.0347 14.0022 13.3257 13.6407C14.6143 12.0434 15.3156 10.0523 15.3125 8C15.3125 7.6745 15.2952 7.35275 15.2615 7.03625C15.1797 6.2705 14.4905 5.75 13.721 5.75H11.3765C10.913 5.75 10.6332 5.207 10.8327 4.7885C11.191 4.03444 11.3763 3.20985 11.375 2.375C11.375 1.92745 11.1972 1.49823 10.8807 1.18176C10.5643 0.86529 10.135 0.6875 9.68749 0.6875C9.53831 0.6875 9.39523 0.746763 9.28974 0.852252C9.18425 0.957741 9.12499 1.10082 9.12499 1.25V1.72475C9.12499 2.1545 9.04249 2.57975 8.88349 2.97875C8.65549 3.54875 8.18599 3.97625 7.64374 4.265C6.81128 4.7092 6.0807 5.32228 5.49874 6.065C5.12524 6.5405 4.57924 6.875 3.97474 6.875H3.68674" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                    <p className="fs-12 font-2">Useful</p>
                                                                </a>
                                                                <a className="icon flex align-center">
                                                                    <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M4.62501 9.25H6.31251M12.3305 1.9375C12.3388 1.975 12.3515 2.0125 12.3695 2.0485C12.8128 2.9485 13.0625 3.961 13.0625 5.03125C13.0641 6.10762 12.8072 7.16864 12.3133 8.125M12.3305 1.9375C12.2735 1.66375 12.4678 1.375 12.7618 1.375H13.4428C14.1095 1.375 14.7275 1.7635 14.9218 2.401C15.176 3.2335 15.3125 4.11625 15.3125 5.03125C15.3125 6.196 15.0913 7.30825 14.6893 8.32975C14.4598 8.91025 13.8748 9.25 13.25 9.25H12.4603C12.1063 9.25 11.9015 8.833 12.0853 8.53C12.1657 8.39766 12.2422 8.26258 12.3133 8.125M12.3305 1.9375H11.36C10.9973 1.93772 10.6369 1.87948 10.2928 1.765L7.95726 0.985001C7.61309 0.870526 7.25272 0.812279 6.89001 0.812501H3.87801C3.41451 0.812501 2.96526 0.997751 2.67426 1.35925C1.38572 2.95658 0.684409 4.94774 0.68751 7C0.68751 7.3255 0.70476 7.64725 0.73851 7.96375C0.82026 8.7295 1.50951 9.25 2.27901 9.25H4.62351C5.08701 9.25 5.36676 9.793 5.16726 10.2115C4.80897 10.9656 4.6237 11.7902 4.62501 12.625C4.62501 13.0726 4.8028 13.5018 5.11927 13.8182C5.43574 14.1347 5.86496 14.3125 6.31251 14.3125C6.46169 14.3125 6.60477 14.2532 6.71026 14.1477C6.81575 14.0423 6.87501 13.8992 6.87501 13.75V13.2753C6.87501 12.8455 6.95751 12.4203 7.11651 12.0213C7.34451 11.4513 7.81401 11.0238 8.35626 10.735C9.18872 10.2908 9.9193 9.67772 10.5013 8.935C10.8748 8.4595 11.4208 8.125 12.0253 8.125H12.3133" stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                    <p className="fs-12 font-2">Not helpful</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="wrap-contact wrap-form ">
                                            <div className="titles">
                                                <h3>Leave a comment</h3>
                                                <p className="fs-12 lh-18">Your email address will not be published. Required fields are marked *</p>
                                            </div>
                                            <div id="comments" className="comments">
                                                <div className="respond-comment">
                                                    <form method="post" id="contactform" className="comment-form form-submit" action="./contact/contact-process.php" acceptCharset="utf-8" noValidate="novalidate">
                                                        <fieldset className>
                                                            <label className="fw-6">Your name *</label>
                                                            <input type="text" className="my-input" name="text" placeholder="Your name" required />
                                                        </fieldset>
                                                        <div className="inner-1 form-wg flex">
                                                            <fieldset className="wg-box ">
                                                                <label className="fw-6">Email address</label>
                                                                <input type="email" className="my-input" name="email" placeholder="Your email" required />
                                                            </fieldset>
                                                            <fieldset className="wg-box ">
                                                                <label className="fw-6">Phone number</label>
                                                                <input type="tel" className="my-input2" name="tel" placeholder="Your phone" required />
                                                            </fieldset>
                                                        </div>
                                                        <fieldset className="message-wrap">
                                                            <label className="fw-6">Your Comment</label>
                                                            <textarea id="comment-message" name="message" rows={4} tabIndex={4} placeholder="Your message" aria-required="true" />
                                                        </fieldset>
                                                        <button className="sc-button" name="submit" type="submit">
                                                            <span>Send comment</span>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <aside className="side-bar side-bar-1 side-blog">
                                        <div className="inner-side-bar">
                                            <div className="widget-rent ">
                                                <div className="flat-tabs style2">
                                                    <div className="form-s2">
                                                        <form method="post">
                                                            <div className="wd-find-select ">
                                                                <h3 className="widget-title title-search">
                                                                    Search
                                                                </h3>
                                                                <div className="form-group-1 search-form form-style2 relative">
                                                                    <i className="far fa-search" />
                                                                    <input type="search" className="search-field" placeholder="Search..." name="s" title="Search for" required />
                                                                </div>
                                                            </div>
                                                        </form>
                                                        {/* End Job  Search Form*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget widget-categories style">
                                                <h3 className="widget-titles title-categories">
                                                    Categories
                                                </h3>
                                                <ul>
                                                    <li>
                                                        <Link href="#" className="font-2 fw-7">Office</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" className="font-2 fw-7">Business</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" className="font-2 fw-7">Luxury villa</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" className="font-2 fw-7">Apartments</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" className="font-2 fw-7">Duplex House</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="widget widget-listings style">
                                                <h3 className="widget-title title-list">
                                                    Featured listings
                                                </h3>
                                                <div className="box-listings flex hover-img3">
                                                    <div className="img-listings img-style3">
                                                        <img src="/assets/images/img-box/sidebar-listings-1.jpg" alt="images" />
                                                    </div>
                                                    <div className="content link-style-1">
                                                        <Link className="fs-16 lh-24" href="/property-detail-v1">Gorgeous Apartment Building</Link>
                                                        <h4>$7,500</h4>
                                                    </div>
                                                </div>
                                                <div className="box-listings flex hover-img3">
                                                    <div className="img-listings img-style3">
                                                        <img src="/assets/images/img-box/sidebar-listings-2.jpg" alt="images" />
                                                    </div>
                                                    <div className="content link-style-1">
                                                        <Link className="fs-16 lh-24" href="/property-detail-v1">Gorgeous Apartment Building</Link>
                                                        <h4>$7,500</h4>
                                                    </div>
                                                </div>
                                                <div className="box-listings flex hover-img3">
                                                    <div className="img-listings img-style3">
                                                        <img src="/assets/images/img-box/sidebar-listings-3.jpg" alt="images" />
                                                    </div>
                                                    <div className="content link-style-1">
                                                        <Link className="fs-16 lh-24" href="/property-detail-v1">Gorgeous Apartment Building</Link>
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
                                                            <img className="img2" src="/assets/images/img-box/sidebar-estate-1.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title link-style-3 fw-6 lh-18"><Link href="/properties-map-v1">Moncton</Link> </div>
                                                            <p className="fs-12 lh-16 text-color-1">1570 listing</p>
                                                        </div>
                                                    </li>
                                                    <li className="box-estate hover-img2">
                                                        <div className="thumb img-style2 ">
                                                            <img className="img2" src="/assets/images/img-box/sidebar-estate-2.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title link-style-3 fw-6 lh-18"><Link href="/properties-map-v1">Mississauga</Link> </div>
                                                            <p className="fs-12 lh-16 text-color-1">1570 listing</p>
                                                        </div>
                                                    </li>
                                                    <li className="box-estate hover-img2">
                                                        <div className="thumb img-style2 ">
                                                            <img className="img2" src="/assets/images/img-box/sidebar-estate-3.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title link-style-3 fw-6 lh-18"><Link href="/properties-map-v1">Halifax</Link> </div>
                                                            <p className="fs-12 lh-16 text-color-1">1570 listing</p>
                                                        </div>
                                                    </li>
                                                    <li className="box-estate hover-img2">
                                                        <div className="thumb img-style2 ">
                                                            <img className="img2" src="/assets/images/img-box/sidebar-estate-4.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title link-style-3 fw-6 lh-18"><Link href="/properties-map-v1">Ottawa</Link> </div>
                                                            <p className="fs-12 lh-16 text-color-1">1570 listing</p>
                                                        </div>
                                                    </li>
                                                    <li className="box-estate hover-img2">
                                                        <div className="thumb img-style2 ">
                                                            <img className="img2" src="/assets/images/img-box/sidebar-estate-5.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title link-style-3 fw-6 lh-18"><Link href="/properties-map-v1">Iqaluit</Link> </div>
                                                            <p className="fs-12 lh-16 text-color-1">1570 listing</p>
                                                        </div>
                                                    </li>
                                                    <li className="box-estate hover-img2">
                                                        <div className="thumb img-style2 ">
                                                            <img className="img2" src="/assets/images/img-box/sidebar-estate-6.jpg" alt="images" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="title link-style-3 fw-6 lh-18"><Link href="/properties-map-v1">Toronto</Link> </div>
                                                            <p className="fs-12 lh-16 text-color-1">1570 listing</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="widget widget-ads">
                                                <div className="box-ads">
                                                    <div className="content relative z-2">
                                                        <h3 className="link-style-3"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                                        <div className="text-addres "><p className="p-12 text-color-1 icon-p">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                                        <div className="star flex">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>	<g>		<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 			255.898,401.21 416.035,502.431 369.263,318.842 		" />	</g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget widget-tags">
                                                <h3 className="widget-title title-tags">
                                                    Popular tags
                                                </h3>
                                                <div className="tags_cloud_inner">
                                                    <Link href="#">For sale</Link>
                                                    <Link href="#">Office</Link>
                                                    <Link href="#">Business</Link>
                                                    <Link href="#">Luxury villa</Link>
                                                    <Link href="#">Apartments</Link>
                                                    <Link href="#">Duplex House</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flat-blog page-detail">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="heading-sections ">
                                        <div className="title-heading fs-30 lh-45 fw-7">Related posts</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="box hover-img">
                                        <div className="images img-style relative ">
                                            <img src="/assets/images/img-box/blog-4.jpg" alt="images" />
                                            <div className="sub-box flex align-center fs-13 fw-6">
                                                <div className="title-1">April</div><a className="title-2 text-color-3">Housing</a>
                                            </div>
                                        </div>
                                        <div className="content center">
                                            <h3 className="link-style-1"><Link href="/blog-detail">We are hiring ‘moderately,’ says Compass CEO</Link></h3>
                                            <div className="meta">
                                                <Link href="/blog-detail" className="btn-button flex align-center justify-center fs-13 fw-6 text-color-3"><span>Read more </span>
                                                    <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#FFA920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="box hover-img">
                                        <div className="images img-style relative ">
                                            <img src="/assets/images/img-box/blog-5.jpg" alt="images" />
                                            <div className="sub-box flex align-center fs-13 fw-6">
                                                <div className="title-1">April</div><a className="title-2 text-color-3">Housing</a>
                                            </div>
                                        </div>
                                        <div className="content center">
                                            <h3 className="link-style-1"><Link href="/blog-detail">We are hiring ‘moderately,’ says Compass CEO</Link></h3>
                                            <div className="meta">
                                                <Link href="/blog-detail" className="btn-button flex align-center justify-center fs-13 fw-6 text-color-3"><span>Read more </span>
                                                    <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#FFA920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="box hover-img">
                                        <div className="images img-style relative ">
                                            <img src="/assets/images/img-box/blog-6.jpg" alt="images" />
                                            <div className="sub-box flex align-center fs-13 fw-6">
                                                <div className="title-1">April</div><a className="title-2 text-color-3">Housing</a>
                                            </div>
                                        </div>
                                        <div className="content center">
                                            <h3 className="link-style-1"><Link href="/blog-detail">We are hiring ‘moderately,’ says Compass CEO</Link></h3>
                                            <div className="meta">
                                                <Link href="/blog-detail" className="btn-button flex align-center justify-center fs-13 fw-6 text-color-3"><span>Read more </span>
                                                    <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#FFA920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </Link>
                                            </div>
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