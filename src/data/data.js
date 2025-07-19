import matchManiaGif from '../assets/images/matchManiaDemo.gif';
import ticTacToeGif from '../assets/images/ticTacToeDemo.gif';
import qCardsGif from '../assets/images/qCardsDemo.gif';
import agilePokerImg from '../assets/images/agilePokerDemo.webp';
import leonCasinoGif from '../assets/images/leonCasino.gif';

export const PROJECTS = [
    {
        name: 'AgilePoker',
        shortDesc:
            'A collaborative poker planning tool built with React, designed for Agile teams and seamlessly integrated with Atlassian Jira',
        details: [
            'Provides an interactive UI for seamless story point estimation.',
            'Supports real-time updates using WebSockets.',
            'Track session history for retrospective analysis',
            'Comming soon...',
        ],
        demoLink: null,
        githubLink: null,
        imgSrc: agilePokerImg,
    },
    {
        name: 'Leon Casino',
        shortDesc:
            'A visually engaging online casino landing page featuring interactive elements and dynamic content.',
        details: [
            'Designed and developed a responsive landing page for an online casino.',
            'Implemented an animated hero slider with Alpine.js for smooth transitions.',
            'Optimized performance by preloading assets and lazy-loading images.',
            'Integrated theme switching (dark/light mode) with persistent local storage.',
            'Enhanced UI with floating interactive elements for a dynamic experience.',
        ],
        demoLink:
            'https://corhandikasawai.github.io/neo-group-landing-page-challenge/',
        githubLink:
            'https://github.com/CorHandikaSawai/neo-group-landing-page-challenge',
        imgSrc: leonCasinoGif,
    },
    {
        name: 'Tic-Tac-Toe',
        shortDesc:
            'A modern take on the classic game, built with React.js for an interactive and dynamic experience.',
        details: [
            'Designed a clean and responsive UI for a smooth player experience.',
            'Implemented state management using React hooks for efficient fame logic.',
            'Supports two-player mode for lcoal gameplay.',
        ],
        demoLink: 'https://corhandikasawai.github.io/tic-tac-toe',
        githubLink: 'https://github.com/CorHandikaSawai/tic-tac-toe',
        imgSrc: ticTacToeGif,
    },
    {
        name: 'MatchMania',
        shortDesc:
            'A fun, interactive matching game built using React.js and the Pokédex API.',
        details: [
            'Designed an engaging UI for a seamless user experience.',
            'Implemented state management for efficient game logic.',
            'Utilized REST API to dynamically fetch and display Pokémon data.',
        ],
        demoLink: 'https://matchmania.io/',
        githubLink: 'https://github.com/CorHandikaSawai/MatchMania',
        imgSrc: matchManiaGif,
    },

    {
        name: 'QCards',
        shortDesc:
            'A Quizlet-like flashcard app built with Flutter and Firebase.',
        details: [
            'Basic flashcard functionality for simple question-answer practice.',
            'Uses Firebase for storage to save and retrieve flashcards.',
            'Lightweight and mobile-friendly UI built with Flutter.',
        ],
        demoLink: 'https://qcards.arcsos.com',
        githubLink: 'https://github.com/CorHandikaSawai/QCards',
        imgSrc: qCardsGif,
    },
];
