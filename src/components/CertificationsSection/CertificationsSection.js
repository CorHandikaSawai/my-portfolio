import React from 'react';
import { ExternalLinkIcon, CheckCircleIcon } from 'lucide-react';
import styles from './CertificationsSection.module.css';

const CertificationsSection = () => {
    const certifications = [
        {
            name: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services',
            date: 'August 18, 2027',
            image: 'https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
            link: 'https://www.credly.com/badges/974108f4-d1a8-4132-8209-a33b4051147b/public_url',
        },
        {
            name: 'AWS Certified Solutions Architect – Associate',
            issuer: 'Amazon Web Services',
            date: 'August 18, 2027',
            image: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
            link: 'https://www.credly.com/badges/f0409f80-e40f-47ce-92d3-6ffee4b53f7e/public_url',
        },
    ];

    // const achievements = [
    //     '1st Place in Regional Cybersecurity CTF Competition (2022)',
    //     'Speaker at DevSecCon 2023',
    //     'Contributed to OWASP Top 10 Documentation',
    //     'Published research on zero-day vulnerability detection',
    // ];

    return (
        <section id='certifications' className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Certifications & Achievements
                    </h2>
                    <p className={styles.subtitle}>
                        Professional certifications and recognition
                        demonstrating my expertise and commitment to
                        cybersecurity excellence.
                    </p>
                </div>

                <div className={styles.certificationsWrapper}>
                    <h3 className={styles.sectionTitle}>
                        Professional Certifications
                    </h3>
                    <div className={styles.certificationsGrid}>
                        {certifications.map((cert, idx) => (
                            <div key={idx} className={styles.certificationCard}>
                                <div className={styles.certificationImage}>
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className={styles.image}
                                    />
                                </div>
                                <h4 className={styles.certificationName}>
                                    {cert.name}
                                </h4>
                                <p className={styles.certificationDetails}>
                                    {cert.issuer} • {cert.date}
                                </p>
                                <a
                                    href={cert.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={styles.verifyLink}
                                >
                                    <span>Verify</span>
                                    <ExternalLinkIcon size={14} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <div className={styles.achievementsWrapper}>
                    <h3 className={styles.sectionTitle}>
                        Notable Achievements
                    </h3>
                    <div className={styles.achievementsContainer}>
                        <ul className={styles.achievementsList}>
                            {achievements.map((achievement, index) => (
                                <li
                                    key={index}
                                    className={styles.achievementItem}
                                >
                                    <CheckCircleIcon
                                        size={20}
                                        className={styles.checkIcon}
                                    />
                                    <span className={styles.achievementText}>
                                        {achievement}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default CertificationsSection;
