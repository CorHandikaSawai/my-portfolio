import profileImg from './profile.png';
import styles from './About.module.css';

export default function About() {
    return (
        <section className={`${styles.sectionAbout} container`}>
            <h1 className={styles.sectionTitle}>About</h1>
            <div className={styles.sectionContent}>
                <div>
                    <h2 className={styles.sectionSubtitle}>Who Am I?</h2>
                    <p className={styles.sectionParagraph}>
                        I'm a Software Engineer with a background in software
                        development, cloud computing, and cybersecurity. I have
                        experience designing, developing, and maintaining
                        software applications while collaborating with
                        cross-functional teams.
                    </p>
                    <p className={styles.sectionParagraph}>
                        Proficient in Java, Python, JavaScript, and Dart, I work
                        with frameworks like React, Flutter, Flask, and Node.js,
                        and have hands-on experience with AWS, Google Cloud, and
                        Firestore. My AWS and Salesforce certifications
                        highlight my ability to build cloud-native applications
                        and enterprise solutions.
                    </p>
                    <p className={styles.sectionParagraph}>
                        I also have background in cybersecurity, with a
                        Bachelor's in Cybersecurity and am currently pursuing a
                        Master's in Cybersecurity Engineering. I am familiar
                        with networking concepts and always looking to integrate
                        security best practices into development.
                    </p>
                    <p className={styles.sectionParagraph}>
                        I'm looking for opportunities in:
                    </p>
                    <ul>
                        <li>Software Engineering</li>
                        <li>Cloud Development & DevOps</li>
                        <li>Cybersecurity & Secure Software Development</li>
                    </ul>
                </div>
                <div>
                    <img src={profileImg} alt='profile' />
                </div>
            </div>
        </section>
    );
}
