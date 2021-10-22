import React from 'react'
import Image from './Image'
import GitButton from './GitButton';
import ScrollArea from '@xico2k/react-scroll-area';

function ProjectBox2(props) {
    return (
        <div class="animated-box in">
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
                <GitButton/>
            </div>
        </div>
    )
}

export default ProjectBox2
