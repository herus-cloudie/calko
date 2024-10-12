import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle , breadcrumbCategory}) {
    return (
        <>
            <section className="flat-title ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-inner style">
                                <div className="title-group fs-12"><Link className="home fw-6 text-color-3" href="/">صفحه اصلی</Link><Link className="home fw-6 text-color-3" href="/">{breadcrumbCategory}</Link><span>{breadcrumbTitle}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
