
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import About from './pages'
import Projects from "./pages/projects";
import AllProjects from "./pages/allProjects";
import Contact from "./pages/contactMe";
function App() {
  return (
    <Router>
      {/* <header className="App-header">
        header
      </header> */}

      <Navbar/>
      <Switch>
        <Route path="/" exact component = {About} />
        <Route path="/projects" component = {Projects} />
        <Route path="/all-projects" component = {AllProjects} />
        <Route path="/contact-me" component = {Contact} />
      </Switch>
    </Router>
  );
}

export default App;
