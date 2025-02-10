import styles from './Projects.module.css';

import Project from './Project';
import { PROJECTS } from './data';

export default function Projects() {
    return (
        <section className={`${styles.sectionProjects} container`}>
            <h1 className={styles.sectionTitle}>Projects</h1>
            <div className={styles.projects}>
                {PROJECTS.map((project, index) => (
                    <Project
                        {...project}
                        isReversed={index % 2 !== 0}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
}
