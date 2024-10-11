import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <section className="flat-title ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-inner style">
                                <div className="title-group fs-12"><Link className="home fw-6 text-color-3" href="/">Home</Link><span>{breadcrumbTitle}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
