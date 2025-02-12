import profileImg from './profile.png';
import styles from './About.module.css';

export default function About() {
    return (
        <section className={`${styles.sectionAbout} container`}>
            <h1 className={styles.sectionTitle}>About</h1>
            <div className={styles.sectionContent}>
                <div className={styles.sectionContentTexts}>
                    <div>
                        <h2 className={styles.sectionSubtitle}>Who Am I?</h2>
                        <p className={styles.sectionParagraph}>
                            Hey there! I'm Cor, a Software Engineer with a
                            passion for building things that work, scale, and
                            make life easier. I love turning ideas into clean,
                            functional, and secure applications—whether it's a
                            sleek web app, a cloud-based system, or a
                            security-focused solution.
                        </p>
                        <p className={styles.sectionParagraph}>
                            I’m fluent in Java, Python, JavaScript, and Dart,
                            and I work with frameworks like React, Flutter,
                            Flask, and Node.js. You’ll often find me exploring
                            AWS, Google Cloud, and Firestore, always looking for
                            ways to optimize and automate.
                        </p>
                        <p className={styles.sectionParagraph}>
                            Beyond coding, I have a strong cybersecurity
                            background—my Bachelor’s is in Cybersecurity, and
                            I’m currently diving even deeper with a Master’s in
                            Cybersecurity Engineering. I enjoy blending security
                            best practices into development because, let’s face
                            it, no one wants to be the reason a system gets
                            hacked! 😅
                        </p>
                    </div>
                    <div>
                        <h2 className={styles.sectionSubtitle}>
                            What I’m Looking For
                        </h2>
                        <p className={styles.sectionParagraph}>
                            I thrive in roles where I can build, solve, and
                            grow—whether that’s in:
                        </p>
                        <ul className={styles.sectionList}>
                            <li>Software Engineering</li>
                            <li>Network Engineering</li>
                            <li>Cloud Development & DevOps</li>
                            <li>Cybersecurity & Secure Software Development</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src={profileImg} alt='profile' />
                </div>
            </div>
        </section>
    );
}
