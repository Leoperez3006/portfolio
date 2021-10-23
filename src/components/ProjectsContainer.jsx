import React from 'react'
import ProjectBox2 from './ProjectBox2'
import Grid from "@mui/material/Grid";

function ProjectsContainer(props) {
    return (
        <Grid container spacing = {1}>
        <>
            {props.data.map((project) => (
                <Grid key={project.id} item xs={3}>
                    <ProjectBox2 imagen={project.imagen} title= {project.title} description= {project.description} />
                </Grid>
                    
            
            ) )}
        </>
        </Grid>
    )
}

export default ProjectsContainer
