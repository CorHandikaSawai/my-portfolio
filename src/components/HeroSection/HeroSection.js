import { useEffect, useState } from 'react';
import { ArrowDownIcon } from 'lucide-react';
import styles from './HeroSection.module.css';
import { GithubIcon, LinkedinIcon } from '../CustomSVGs/CustomSVGs';
import profilePic from './profile.webp';

const roles = ['Cybersecurity Enthusiast', 'Full Stack Developer'];

const HeroSection = () => {
    const [text, setText] = useState('Software Engineer');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];
            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );
            setTypingSpeed(isDeleting ? 75 : 150);
            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id='home' className={styles.heroSection}>
            {/* Animated background */}
            <div className={styles.backgroundWrapper}>
                <div className={styles.gradientBackground}></div>
                <div className={`grid-background ${styles.gridOverlay}`}></div>
            </div>

            <div className={styles.container}>
                {/* <div className={styles.content}>
                    <img src={profilePic} alt='ProfilePicture' />
                </div> */}
                <div className={styles.content}>
                    <p className={styles.welcomeText}>
                        WELCOME TO MY PORTFOLIO
                    </p>
                    <h1 className={styles.mainHeading}>Hi, I'm Cor </h1>
                    <div className={styles.typingContainer}>
                        <h2 className={styles.typingText}>
                            {text}
                            <span className='animate-blink'>|</span>
                        </h2>
                    </div>
                    <p className={styles.description}>
                        Passionate about building secure, scalable applications
                        and solving complex problems. Specializing in
                        cybersecurity solutions and modern web development.
                    </p>
                    <div className={styles.buttonGroup}>
                        <a href='#projects' className={styles.primaryButton}>
                            View Projects
                        </a>
                        <a href='#contact' className={styles.secondaryButton}>
                            Get in Touch
                        </a>
                    </div>
                    <div className={styles.socialLinks}>
                        <a
                            href='https://github.com/CorHandikaSawai'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.socialLink}
                        >
                            <GithubIcon size={24} />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/corsawai/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.socialLink}
                        >
                            <LinkedinIcon size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <a href='#projects' className={styles.scrollLink}>
                    <ArrowDownIcon size={24} />
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
