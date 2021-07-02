import React from 'react'
import DreamCard from "./DreamCard"

export default function WithinADream(props) {

    const renderDreamCards = () => {
    return props.dreams.map(dream => {
        return <DreamCard key={dream.level} dream={dream} rideTheKick={props.rideTheKick}/>
        })
    }

    return (
        <div className="within-a-dream">
            { renderDreamCards() }
        </div>
    )
}

