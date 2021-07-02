import React from 'react'

export default function DreamCard(props) {

    const handleClick = () => {
        props.rideTheKick(props.dream)
    }

    return (
        <div className="dreamcard">
            <div id="image-container">
                <img src={props.dream.image} alt={props.dream.name} />
            </div>
            <div id="text-container">
                <h2>{props.dream.name}</h2>
                <h4>Level: {props.dream.level}</h4>
                <h4>Dreamer: {props.dream.dreamer}</h4>
                <h4>Architect: {props.dream.architect}</h4>
                <h4>Subject: {props.dream.subject}</h4>
                <button id="ride-the-kick-button" onClick={ handleClick }>Ride The Kick</button>
            </div>
        </div>
    )
}




