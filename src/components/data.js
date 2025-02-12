import matchManiaGif from '../assets/images/matchManiaDemo.gif';
import ticTacToeGif from '../assets/images/ticTacToeDemo.gif';
import qCardsGif from '../assets/images/qCardsDemo.gif';
import agilePokerImg from '../assets/images/agilePokerDemo.webp';

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
