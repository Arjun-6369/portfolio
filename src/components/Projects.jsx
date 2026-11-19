
import "../styles/Project.css";

function Project() {
    return (
        <section id="projects" className="projects-section">

            <h2 className="section-title">My Projects</h2>

            <div className="projects-container">

                <div className="project-card">
                    <h3>01. TAMS – Task Assignment & Management System</h3>

                    <p>
                        A web-based application designed to manage customer
                        complaints, assign tasks to agents, and track task progress.
                    </p>

                    <p className="tech">
                        Java · Spring Boot · JPA · MySQL · HTML · CSS · JavaScript
                    </p>
                </div>

                <div className="project-card">
                    <h3>02. Personal Portfolio Website</h3>

                    <p>
                        A responsive portfolio showcasing my technical skills,
                        projects, education, and developer journey.
                    </p>

                    <p className="tech">
                        React · JavaScript · CSS
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Project;
