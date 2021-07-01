import React from 'react'
// import { useState } from 'react'

export default function WhatsUp(props) {

    const renderListItems = () => {
        return props.progression[props.count - 1].list_items.map(item => {
            return <li key={item}>{item}</li>
        })
    }    

    return (
        <div>
            <h2>What's Going On</h2>
            <ul>
                { renderListItems() }
            </ul>
        </div>
    )
    
}



