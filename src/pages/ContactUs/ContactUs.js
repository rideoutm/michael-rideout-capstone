import "./ContactUs.scss";
import downArrow from "../../assets/angle-down-solid.svg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

function ContactUs({ scrollRef, scrollTo }) {
  return (
    <>
      <div className="contact">
        <h1 className="contact__heading">CONTACT US</h1>
        <div className="hero__scroll-to" onClick={scrollTo}>
          <img
            className="hero__scroll-to-img"
            src={downArrow}
            alt="scroll to"
          />
        </div>
      </div>

      <div ref={scrollRef} className="contact-us">
        <div className="contact-us__left">
          <div className="contact-us__address">
            <h3 className="contact-us__street">123 STREET EAST</h3>
            <h3 className="contact-us__city">TORONTO ON MA3 1A2</h3>
            <h3 className="contact-us__phone">(123) 456-7891</h3>
          </div>
          <div className="contact-us__biz-hrs">
            <h4 className="contact-us__biz-heading">BUSINESS HOURS</h4>
            <p className="contact-us__line1">Monday – CLOSED</p>
            <p className="contact-us__line2">Tuesday - Saturday: 1PM – 10PM</p>
            <p className="contact-us__line3">Sunday: 1PM – 9PM</p>
          </div>
          <div className="contact-us__email">
            <h4 className="contact-us__email-heading">EMAIL</h4>
            <p className="contact-us__email-link">
              <a href="mailto: contact@resannabelle.com">
                contact@resannabelle.com
              </a>
            </p>
          </div>
        </div>
        <div className="contact-us__right">
          <MapContainer
            center={[43.6484942, -79.3719176]}
            zoom={15}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
            <Marker
              position={[43.6484942, -79.3719176]}
              icon={
                new Icon({
                  iconUrl:
                    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png",
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
            >
              <Popup>Restaurant Annabelle</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
