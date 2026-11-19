
import "../styles/Footer.css";

function Foot() {
    return (
        <footer className="footer">
            <div className="foot">

                <h3>Designed & Developed by Arjun</h3>

                <p className="footer-tagline">
                    Building, Learning & Growing Every Day.
                </p>

                <div className="footer-links">
                    
                <a
                    href="https://github.com/Arjun-6369"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                    <a
                    href="https://www.linkedin.com/in/arjun-lc6369/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                    <a href="mailto:iarjunlca@gmail.com">Email</a>
                </div>

                <p className="copyright">
                    © 2026 Arjun. All Rights Reserved.
                </p>

            </div>
        </footer>
    );
}

export default Foot;
