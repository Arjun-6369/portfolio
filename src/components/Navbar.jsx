
import "../styles/Navbar.css";
import resume from "../assets/Arjun_Resume.pdf";

function Nav({ setActivePage }) {
    return (
        <header className="Navbar">
            <nav aria-label="Main navigation">
                <ul>
                    <li>
                        <button onClick={() => setActivePage("home")}>Home</button>
                    </li>

                    <li>
                        <button onClick={() => setActivePage("about")}>About</button>
                    </li>

                    <li>
                        <button onClick={() => setActivePage("skills")}>Skills</button>
                    </li>

                    <li>
                        <button onClick={() => setActivePage("education")}>Education</button>
                    </li>

                    <li>
                        <button onClick={() => setActivePage("projects")}>Projects</button>
                    </li>

                    <li>
                        <button onClick={() => setActivePage("contact")}>Contact</button>
                    </li>

                    <li>
                        <a href={resume} download="Arjun_Resume.pdf" className="resume-btn">
                            Download Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
