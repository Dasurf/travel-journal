import React from "react";
import "../assets/component_styles/Location.css";


export default function Location(props) {
    return (
        <main className="location">
            <img src={`/Images/${props.img}`} alt="location image" className="image" />
            <section className="section-cont">
                <div className="location-map-cont">
                    <div className="location-country">
                        <img src="/Images/location_icon.png" alt="location icon" className="location-icon" />
                        <h5 className="country">{props.country}</h5>
                    </div>
                    <p>View on Google Maps</p>
                </div>
                <h1 className="location-name">{props.place}</h1>
                <h6>{props.date}</h6>
                <p className="description">{props.description}</p>
            </section>
        </main>
    )
}