import { ProjectBox } from "./components/ProjectBox";

function App() {
  let urlLink =  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bXKbkLkOqPpGM2fmCL_tvgHaFQ%26pid%3DApi&f=1'// 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmystickermania.com%2Fcdn%2Fstickers%2Fnoob-pack%2Fcute-axolotl.png&f=1&nofb=1'
  let projectTitle = 'Titulo del proyecto'
  let projectDescripcion = " Descripcion del proyecto  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <ProjectBox imagen={urlLink} title= {projectTitle} description= {projectDescripcion}/>
      {/* <ProjectBox imagen={urlLink} title= {projectTitle}/> */}
    </div>
  );
}

export default App;
