import React from 'react'

export default function CodeSnapshots(props) {

    const renderImages = () => {
        return props.progression[props.count - 1].images.map(item => {
            return <img key={item} src={item} alt={item}/>
        })
    }    

    return (
        <div>
                { renderImages() }
        </div>
    )
}
