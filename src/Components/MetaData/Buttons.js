import React from 'react'
import { useState } from 'react';

export default function Buttons(props) {

    const [steps ] = useState(() => props.progression.map(item => {
        return item.name
    }));
    

    return (
        <div>
            <button className="step-button" onClick={ props.increaseCount }>{steps[props.count]}</button>
        </div>
    )
}
