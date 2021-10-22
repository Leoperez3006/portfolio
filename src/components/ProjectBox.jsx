import React from 'react'
import Image from './Image'
import ScrollArea from '@xico2k/react-scroll-area';



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
                            <ScrollArea height="200px">
                                {props.description}
                            </ScrollArea>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
