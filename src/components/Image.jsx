import React from 'react'

function Image (props) {
    return (
        <div className = "divPhoto">
            <img className = "photo" src={props.url} alt={props.alt}/>
        </div>
    )
}

export default Image