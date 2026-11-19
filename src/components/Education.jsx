
import "../styles/Education.css";

function Edu() {
    return (
        <section id="education" className="education-section">

            <h1 className="section-title">Education</h1>

            <div className="education-container">

                <div className="edu-card">
                    <h3>MCA – Master of Computer Applications</h3>

                    <p className="institution">
                        Kongu Arts & Science College, Erode
                    </p>

                    <p className="duration">2025–2027</p>
                </div>

                <div className="edu-card">
                    <h3>BSc – Computer Science</h3>

                    <p className="institution">
                        VET Institute of Arts & Science College, Erode
                    </p>

                    <p className="duration">2022–2025</p>
                </div>

            </div>

        </section>
    );
}

export default Edu;
