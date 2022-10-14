import React from "react"


export default function Card (props) {
    return (
        <section className="card">
            <img className="main-img"alt={`view of ${props.card.location}`} src={`${props.card.imageUrl}`}/>
            <div className="info">
                <div className="location">
                    <img className="location-icon" alt="destination icon" src="../images/location-icon.png"/>
                    <p className="location-name">{props.card.location}</p>
                    <a className="location-link" href={props.card.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.card.title}</h1>
                <p className="dates">{`${props.card.startDate} - ${props.card.endDate}`}</p>
                <p className="description">{props.card.description}</p>
            </div>
        </section>
    )
}