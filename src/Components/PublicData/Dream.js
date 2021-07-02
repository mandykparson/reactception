import React from 'react'
import WithinADream from "./WithinADream"

export default function Dream(props) {
    return (
        <div className="dream">
            <p>This container has the four dream cards that will ultimately be rendered from the code the right. Walk through the progression step by step to see how it happens</p>
            <WithinADream dreams={props.dreams} rideTheKick={props.rideTheKick}/>
        </div> 
    )
}


