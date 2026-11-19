
import "../styles/Skills.css";

function Skill() {
    return (
        <section id="skills" className="skills-section">

            <h2 className="section-title">Technical Skills</h2>

            <div className="skills-container">

                <div className="skill-card">
                    <h3>Frontend Development</h3>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React.js</p>
                    <p>Bootstrap</p>
                </div>

                <div className="skill-card">
                    <h3>Backend Development</h3>
                    <p>Java</p>
                    <p>Spring Boot</p>
                    <p>Spring JPA</p>
                    <p>Spring Security</p>
                    <p>REST APIs</p>
                </div>

                <div className="skill-card">
                    <h3>Database</h3>
                    <p>MySQL</p>
                    <p>SQL</p>
                    <p>Database Design</p>
                </div>

                <div className="skill-card">
                    <h3>Programming & Tools</h3>
                    <p>Python</p>
                    <p>Data Structures & Algorithms</p>
                    <p>Git</p>
                    <p>GitHub</p>
                </div>

            </div>
        </section>
    );
}

export default Skill;
