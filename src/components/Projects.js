import styles from './Projects.module.css';

export default function Projects() {
    return (
        <section className={`${styles.sectionProjects} container`}>
            <h1 className={styles.sectionTitle}>Projects</h1>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <div className={styles.projectDesc}>
                        <h2>MatchMania</h2>
                        <p className={styles.sectionParagraph}>
                            A fun, interactive matching game built using
                            React.js and the Pokédex API.
                        </p>
                        <ul>
                            <li>
                                Designed an engaging UI for a seamless user
                                experience.
                            </li>
                            <li>
                                Implemented state management for efficient game
                                logic.
                            </li>
                            <li>
                                Utilized REST API to dynamically fetch and
                                display Pokémon data.
                            </li>
                            <li>
                                {' '}
                                <a
                                    href='https://matchmania.io/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Live Demo
                                </a>{' '}
                                |{' '}
                                <a
                                    href='https://github.com/CorHandikaSawai/MatchMania'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    GitHub Repo
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.projectImg}>
                        <img
                            src='/images/matchmania-demo.gif'
                            alt='Match Mania Preview'
                            className={styles.projectGif}
                        />
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <img
                            src='/images/tictactoe-demo.gif'
                            alt='Tic-Tac-Toe Preview'
                            className={styles.projectGif}
                        />
                    </div>
                    <div className={styles.projectDesc}>
                        <h2>Tic-Tac-Toe</h2>
                        <p className={styles.sectionParagraph}>
                            A modern take on the classic game, built with
                            React.js for an interactive and dynamic experience.
                        </p>
                        <ul>
                            <li>
                                Designed a clean and responsive UI for a smooth
                                player experience.
                            </li>
                            <li>
                                Implemented state management using React hooks
                                for efficient game logic.
                            </li>
                            <li>
                                Supports two-player mode for local gameplay.
                            </li>
                            <li>
                                {' '}
                                <a
                                    href='https://corhandikasawai.github.io/tic-tac-toe/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Live Demo
                                </a>{' '}
                                |{' '}
                                <a
                                    href='https://github.com/CorHandikaSawai//tic-tac-toe'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    GitHub Repo
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectDesc}>
                        <h2>QCards</h2>
                        <p className={styles.sectionParagraph}>
                            A Quizlet-like flashcard app built with Flutter and
                            Firebase.
                        </p>
                        <ul>
                            <li>
                                Basic flashcard functionality for simple
                                question-answer practice.
                            </li>
                            <li>
                                Uses Firebase for storage to save and retrieve
                                flashcards.
                            </li>
                            <li>
                                Uses Firebase for storage to save and retrieve
                                flashcards.
                            </li>
                            <li>
                                Lightweight and mobile-friendly UI built with
                                Flutter.
                            </li>
                            <li>
                                {' '}
                                <a
                                    href='https://qcards.arcsos.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Live Demo
                                </a>{' '}
                                |{' '}
                                <a
                                    href='https://github.com/CorHandikaSawai/QCards'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    GitHub Repo
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.projectImg}>
                        <img
                            src='/images/qcards-demo.gif'
                            alt='Q Cards Preview'
                            className={styles.projectGif}
                        />
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <img
                            src='/images/agilepoker-demo.webp'
                            alt='Agile Poker Preview'
                            className={styles.projectGif}
                        />
                    </div>
                    <div className={styles.projectDesc}>
                        <h2>AgilePoker</h2>
                        <p className={styles.sectionParagraph}>
                            A collaborative poker planning tool built with
                            React, designed for Agile teams and seamlessly
                            integrated with Atlassian Jira.
                        </p>
                        <ul>
                            <li>
                                Provides an interactive UI for seamless story
                                point estimation.
                            </li>
                            <li>
                                Supports real-time updates using WebSockets.
                            </li>
                            <li>
                                Integrates with Jira APIs to sync estimates with
                                user stories
                            </li>
                            <li>
                                Tracks session history for retrospective
                                analysis.
                            </li>
                            <li>Coming soon...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
