
import "../styles/Contact.css";

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">

                <div className="contact-intro">
                    <h2>Let's Work Together</h2>
                    <p>
                        I'm currently looking for software development
                        opportunities where I can apply my technical
                        knowledge, learn from experienced developers,
                        and contribute to real-world projects.
                    </p>
                </div>

                <div className="contact-details">
                    <h2>Get In Touch</h2>

                    <div className="contact-buttons">
                        <a href="mailto:iarjunlca@gmail.com"
                           className="contact-btn">
                            Email Me
                        </a>

                        <a href="https://github.com/Arjun-6369"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="contact-btn">
                            GitHub
                        </a>

                        <a href="https://www.linkedin.com/in/arjun-lc6369/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="contact-btn">
                            LinkedIn
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;
