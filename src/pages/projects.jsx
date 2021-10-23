import React from 'react'
import ProjectsContainer from "../components/ProjectsContainer";

const Projects = () => {
    const  projects = [
        {
            id: 1,
            title: "Titulo del proyecto 1",
            imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bXKbkLkOqPpGM2fmCL_tvgHaFQ%26pid%3DApi&f=1',
            description: "Aqui es donde va toda la descripcion del proyecto, por ahora solo pondremos un  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }, {
            id: 2,
            title: "Titulo del proyecto 2",
            imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bXKbkLkOqPpGM2fmCL_tvgHaFQ%26pid%3DApi&f=1',
            description: "Aqui es donde va toda la descripcion del proyecto, por ahora solo pondremos un  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }, {
            id: 3,
            title: "Titulo del proyecto 3",
            imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bXKbkLkOqPpGM2fmCL_tvgHaFQ%26pid%3DApi&f=1',
            description: "Aqui es donde va toda la descripcion del proyecto, por ahora solo pondremos un  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }, {
            id: 4,
            title: "Titulo del proyecto 3",
            imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bXKbkLkOqPpGM2fmCL_tvgHaFQ%26pid%3DApi&f=1',
            description: "Aqui es donde va toda la descripcion del proyecto, por ahora solo pondremos un  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }, {
          id: 5,
          title: "Titulo del proyecto 3",
          imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bXKbkLkOqPpGM2fmCL_tvgHaFQ%26pid%3DApi&f=1',
          description: "Aqui es donde va toda la descripcion del proyecto, por ahora solo pondremos un  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }, {
          id: 6,
          title: "Titulo del proyecto 3",
          imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bXKbkLkOqPpGM2fmCL_tvgHaFQ%26pid%3DApi&f=1',
          description: "Aqui es donde va toda la descripcion del proyecto, por ahora solo pondremos un  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
    


    return (
        <div>
            <ProjectsContainer data={projects}/>
        </div>
    )
}

export default Projects
