import { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            name: 'Home',
            href: '#home',
        },
        // {
        //     name: 'Skills',
        //     href: '#skills',
        // },
        {
            name: 'Projects',
            href: '#projects',
        },
        {
            name: 'Certifications',
            href: '#certifications',
        },
        // {
        //     name: 'Contact',
        //     href: '#contact',
        // },
    ];

    return (
        <header
            className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        >
            <div className={styles.container}>
                <a href='#home' className={styles.logo}>
                    Cor<span className={styles.logoDot}>.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navList}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className={styles.navLink}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className={styles.mobileNav}>
                    <ul className={styles.mobileNavList}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
