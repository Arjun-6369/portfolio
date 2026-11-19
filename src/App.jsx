
import { useState } from "react";
import "./App.css";

import Nav from "./components/Navbar";
import HeroName from "./components/Hero";
import Intro from "./components/About";
import Skill from "./components/Skills";
import Project from "./components/Projects";
import Edu from "./components/Education";
import Contact from "./components/Contact";
import Foot from "./components/Footer";

function App() {
    const [activePage, setActivePage] = useState("home");

    return (
        <div className="App">

            <Nav setActivePage={setActivePage} />

            <main>
                {activePage === "home" && <HeroName />}
                {activePage === "about" && <Intro />}
                {activePage === "skills" && <Skill />}
                {activePage === "education" && <Edu />}
                {activePage === "projects" && <Project />}
                {activePage === "contact" && <Contact />}
            </main>

            <Foot />

        </div>
    );
}

export default App;
