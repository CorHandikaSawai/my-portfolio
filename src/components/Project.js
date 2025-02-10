import styles from './project.module.css';

export default function Project({
    name,
    shortDesc,
    details,
    demoLink,
    githubLink,
    imgSrc,
    isReversed,
}) {
    console.log(details);
    return (
        <div
            className={`${styles.project} ${isReversed ? styles.reversed : ''}`}
        >
            <div className={styles.projectDesc}>
                <h2>{name}</h2>
                <p className={styles.sectionParagraph}>{shortDesc}</p>
                <ul>
                    {details.map((detail, key) => (
                        <li key={key}>{detail}</li>
                    ))}
                    {demoLink != null && (
                        <li>
                            {' '}
                            <a
                                href={demoLink}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Live Demo
                            </a>{' '}
                            |{' '}
                            <a
                                href={githubLink}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                GitHub Repo
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.projectImg}>
                <img
                    src={imgSrc}
                    alt='Match Mania Preview'
                    className={styles.projectGif}
                />
            </div>
        </div>
    );
}
