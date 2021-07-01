import React from 'react'

export default function DreamCard() {

    return (
        <div className="dreamcard">
            <h2>{props.dream.dreamer}</h2>
            <h3>{props.dream.level}</h3>
            <h3>{props.dream.architect}</h3>
            <h3>{props.dream.subject}</h3>
            <button id="ride-the-kick-button" onClick={ handleClick }>Ride The Kick</button>
        </div>
    )
}

const handleClick = () => {
    props.rideTheKick(props.dream)
}

<h2>{props.dream.dreamer}</h2>
<h3>{props.dream.level}</h3>
<h3>{props.dream.architect}</h3>
<h3>{props.dream.subject}</h3>
<button id="ride-the-kick-button" onClick={ handleClick }>Ride The Kick</button>
