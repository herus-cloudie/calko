import { useState } from "react"

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                    <li className="dropdown2 current"><a href="#">Home</a>
                        <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                            <li className="current"><a href="/">Home Page 01</a></li>
                            <li><a href="/home02">Home Page 02</a></li>
                            <li><a href="/home03">Home Page 03</a></li>
                            <li><a href="/home04">Home Page 04</a></li>
                            <li><a href="/home05">Home Page 05</a></li>
                        </ul>
                        <div className="dropdown2-btn" onClick={() => handleToggle(1)} />
                    </li>
                    <li className="dropdown2"><a href="#">Property</a>
                        <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                            <li className="dropdown2"><a href="#">Property List</a>
                                <ul style={{ display: `${isActive.key == 11 ? "block" : "none"}` }}>
                                    <li><a href="/properties-list">Property List</a></li>
                                    <li><a href="/properties-list-sidebar-v1">Property List Sidebar V1</a></li>
                                    <li><a href="/properties-list-sidebar-v2">Property List Sidebar V2</a></li>
                                </ul>
                                <div className="dropdown2-btn" onClick={() => handleToggle(11)} />
                            </li>
                            <li className="dropdown2"><a href="#">Property Grid</a>
                                <ul style={{ display: `${isActive.key == 12 ? "block" : "none"}` }}>
                                    <li><a href="/properties-grid">Property Grid</a></li>
                                    <li><a href="/properties-grid-sidebar-v1">Property Grid Sidebar V1</a></li>
                                    <li><a href="/properties-grid-sidebar-v2">Property Grid Sidebar V2</a></li>
                                </ul>
                                <div className="dropdown2-btn" onClick={() => handleToggle(12)} />
                            </li>
                            <li className="dropdown2"><a href="#">Property Detail</a>
                                <ul style={{ display: `${isActive.key == 13 ? "block" : "none"}` }}>
                                    <li><a href="/property-detail-v1">Property Detail V1</a></li>
                                    <li><a href="/property-detail-v2">Property Detail V2</a></li>
                                    <li><a href="/property-detail-v3">Property Detail V3</a></li>
                                </ul>
                                <div className="dropdown2-btn" onClick={() => handleToggle(13)} />
                            </li>
                            <li className="dropdown2"><a href="#">Property Map</a>
                                <ul style={{ display: `${isActive.key == 14 ? "block" : "none"}` }}>
                                    <li><a href="/properties-map-v1">Property Half Map V1</a></li>
                                    <li><a href="/properties-map-v2">Property Half Map V2</a></li>
                                    <li><a href="/properties-map-v3">Property Half Map V3</a></li>
                                </ul>
                                <div className="dropdown2-btn" onClick={() => handleToggle(14)} />
                            </li>
                        </ul>
                        <div className="dropdown2-btn" onClick={() => handleToggle(2)} />
                    </li>
                    <li className="dropdown2"><a href="#">Page</a>
                        <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/faq">Faq's</a></li>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/error">Error</a></li>
                            <li className="dropdown2"><a href="#">Agents</a>
                                <ul style={{ display: `${isActive.key == 15 ? "block" : "none"}` }}>
                                    <li><a href="/agents">Agents</a></li>
                                    <li><a href="/agents-detail">Agents Details</a></li>
                                    <li><a href="/agents-sidebar-v1">Agents Sidebar V1</a></li>
                                    <li><a href="/agents-sidebar-v2">Agents Sidebar V2</a></li>
                                </ul>
                                <div className="dropdown2-btn" onClick={() => handleToggle(15)} />
                            </li>
                            <li className="dropdown2"><a href="#">Agencies</a>
                                <ul style={{ display: `${isActive.key == 16 ? "block" : "none"}` }}>
                                    <li><a href="/agencies">Agencies</a></li>
                                    <li><a href="/agencies-detail">Agencies Detail</a></li>
                                    <li><a href="/agencies-sidebar-v1">Agencies Sidebar V1</a></li>
                                    <li><a href="/agencies-sidebar-v2">Agencies Sidebar V2</a></li>
                                </ul>
                                <div className="dropdown2-btn" onClick={() => handleToggle(16)} />
                            </li>
                            <li><a href="/dashboard">Dashboard</a></li>
                        </ul>
                        <div className="dropdown2-btn" onClick={() => handleToggle(3)} />
                    </li>
                    <li className="dropdown2"><a href="#">Blog</a>
                        <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                            <li><a href="/blog">Blog List</a></li>
                            <li><a href="/blog-grid">Blog Grid</a></li>
                            <li><a href="/blog-detail">Blog Detail</a></li>
                        </ul>
                        <div className="dropdown2-btn" onClick={() => handleToggle(4)} />
                    </li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>


        </>
    )
}
