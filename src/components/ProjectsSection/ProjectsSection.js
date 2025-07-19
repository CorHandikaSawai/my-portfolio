import React, { useState } from 'react';
import { ExternalLinkIcon, LockIcon } from 'lucide-react';
import { PROJECTS } from '../../data/data';
import styles from './ProjectsSection.module.css';
import { GithubIcon } from '../CustomSVGs/CustomSVGs';

const ProjectsSection = () => {
    const [filter, setFilter] = useState('all');

    // Transform your project data to match the component structure
    const projects = PROJECTS.map((project, index) => ({
        id: index + 1,
        title: project.name,
        description: project.shortDesc,
        image: project.imgSrc,
        tags: getProjectTags(project.name), // Helper function to assign tags
        liveLink: project.demoLink,
        githubLink: project.githubLink,
        category: getProjectCategory(project.name), // Helper function to assign categories
    }));

    // Helper function to assign tags based on project name
    function getProjectTags(name) {
        const tagMap = {
            AgilePoker: ['React', 'WebSocket', 'Jira API', 'Agile'],
            'Leon Casino': ['HTML', 'CSS', 'Alpine.js', 'Responsive'],
            'Tic-Tac-Toe': ['React', 'Hooks', 'Game Logic', 'UI/UX'],
            MatchMania: ['React', 'REST API', 'Pokédex API', 'Game'],
            QCards: ['Flutter', 'Firebase', 'Mobile', 'Flashcards'],
        };
        return tagMap[name] || ['Web Development'];
    }

    // Helper function to assign categories based on project name
    function getProjectCategory(name) {
        const categoryMap = {
            AgilePoker: 'developer-tools',
            'Leon Casino': 'web-app',
            'Tic-Tac-Toe': 'web-app',
            MatchMania: 'web-app',
            QCards: 'mobile-app',
        };
        return categoryMap[name] || 'web-app';
    }

    const filteredProjects =
        filter === 'all'
            ? projects
            : projects.filter((project) => project.category === filter);

    const categories = [
        {
            id: 'all',
            name: 'All Projects',
        },
        {
            id: 'web-app',
            name: 'Web Apps',
        },
        {
            id: 'mobile-app',
            name: 'Mobile Apps',
        },
        {
            id: 'developer-tools',
            name: 'Developer Tools',
        },
    ];

    return (
        <section id='projects' className={styles.projectsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Featured Projects</h2>
                    <p className={styles.description}>
                        A collection of my most significant work, showcasing my
                        skills in cybersecurity, web development, and software
                        engineering.
                    </p>
                </div>

                <div className={styles.filterContainer}>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setFilter(category.id)}
                            className={`${styles.filterButton} ${
                                filter === category.id
                                    ? styles.filterButtonActive
                                    : ''
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className={styles.projectGrid}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <div className={styles.projectImage}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>
                                    {project.title}
                                </h3>
                                <p className={styles.projectDescription}>
                                    {project.description}
                                </p>

                                <div className={styles.tagsContainer}>
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className={styles.tag}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.projectLinks}>
                                    <a
                                        href={project.githubLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={styles.link}
                                    >
                                        <GithubIcon size={18} />
                                        <span>Code</span>
                                    </a>
                                    {project.liveLink ? (
                                        <a
                                            href={project.liveLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className={styles.link}
                                        >
                                            <ExternalLinkIcon size={18} />
                                            <span>Live Demo</span>
                                        </a>
                                    ) : (
                                        <span className={styles.privateProject}>
                                            <LockIcon size={18} />
                                            <span>Private Project</span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
