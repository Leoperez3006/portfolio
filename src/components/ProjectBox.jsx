import React from 'react'
import Image from './Image'
import ScrollText from './ScrollText'


export const ProjectBox = (props) => {
    return (

        <div className="wrapper">
            <div className="border"></div>
            <div className="main-element">
                <div className="center-elements">
                    <div class = "col">
                        <div   class = "row">
                            <h2 >{props.title}</h2>    
                        </div>
                        <div class = "row">
                            <Image className = "photo" url= {props.imagen}/>
                        </div>
                        <div class = "row">
                            <ScrollText text = {props.description}></ScrollText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
