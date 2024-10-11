import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import "react-leaflet-markercluster/dist/styles.min.css";

const customMsrker = L.icon({
    iconUrl: "https://i.ibb.co/sJrMTdz/favicon-32x32.png",
    iconSize: [30, 30]
});

export default function MapCluster() {
    return (
        <>
            <MapContainer
                style={{ height: "100vh" }}
                center={[51.0, 19.0]}
                zoom={4}
                maxZoom={18}
                scrollWheelZoom={false}
            >
                <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />

                {/* <MarkerClusterGroup> */}
                <Marker position={[49.8397, 24.0297]} icon={customMsrker}>
                    <Popup>
                        <div className="map-box">
                            <div className="map-listing-item">
                                <div className="inner-box">
                                    {/* <div className="infoBox-close"><i className="fas fa-times" /></div> */}
                                    <div className="image-box"><figure className="image">
                                        <img src="assets/images/img-box/map-location.jpg" alt /></figure>
                                    </div>
                                    <div className="content"><h4><a href="property-detail-v1.html&quot;">600 Main St, Suite A Edmonds, WA 98020</a></h4><p className="location">58 Hullbrook Road, Billesley, B13 0LA</p><h3><a>$7,500</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Popup>
                </Marker>
                <Marker position={[52.2297, 21.0122]} icon={customMsrker}>
                    <Popup>
                        <div className="map-box">
                            <div className="map-listing-item">
                                <div className="inner-box">
                                    {/* <div className="infoBox-close"><i className="fas fa-times" /></div> */}
                                    <div className="image-box"><figure className="image">
                                        <img src="assets/images/img-box/map-location.jpg" alt /></figure>
                                    </div>
                                    <div className="content"><h4><a href="property-detail-v1.html&quot;">600 Main St, Suite A Edmonds, WA 98020</a></h4><p className="location">58 Hullbrook Road, Billesley, B13 0LA</p><h3><a>$7,500</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Popup>
                </Marker>
                <Marker position={[51.5074, -0.0901]} icon={customMsrker}>
                    <Popup>
                        <div className="map-box">
                            <div className="map-listing-item">
                                <div className="inner-box">
                                    {/* <div className="infoBox-close"><i className="fas fa-times" /></div> */}
                                    <div className="image-box"><figure className="image">
                                        <img src="assets/images/img-box/map-location.jpg" alt /></figure>
                                    </div>
                                    <div className="content"><h4><a href="property-detail-v1.html&quot;">600 Main St, Suite A Edmonds, WA 98020</a></h4><p className="location">58 Hullbrook Road, Billesley, B13 0LA</p><h3><a>$7,500</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Popup>
                </Marker>
                {/* </MarkerClusterGroup> */}
            </MapContainer>
        </>
    )
}
