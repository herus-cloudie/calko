import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Property Listing">
                <section className="flat-error center ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="images">
                                    <img src="assets/images/mark/mark-error.png" alt="images" />
                                </div>
                                <div className="heading-sections center">
                                    <h2>Oh no... We lost this page</h2>
                                    <p className="text-color-2">We searched everywhere but couldn’t find what you’re looking for.
                                        Let’s find a better place for you to go.</p>
                                    <div className="button-error center">
                                        <Link className="sc-button" href="/">
                                            <span>Back to home</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}