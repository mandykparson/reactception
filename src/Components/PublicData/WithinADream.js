import React from 'react'

export default function WithinADream() {


    return (
        <div>
        </div>
    )
}

const renderDreamCards = () => {
    return props.dreams.map(dream => {
        return <DreamCard key={dream.level} dream={dream} rideTheKick={props.rideTheKick}/>
    })
}