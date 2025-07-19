import React from 'react';
import { HeartIcon } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logoWrapper}>
                        <a href='#home' className={styles.logo}>
                            Cor<span className={styles.logoAccent}>.</span>
                        </a>
                    </div>

                    <div className={styles.copyright}>
                        <span>© {currentYear} Cor. All rights reserved.</span>
                        <span className={styles.separator}>•</span>
                        <span className={styles.madeWith}>
                            Made with{' '}
                            <HeartIcon size={14} className={styles.heartIcon} />{' '}
                            and code
                        </span>
                    </div>

                    <div className={styles.navigation}>
                        <ul className={styles.navList}>
                            <li>
                                <a href='#home' className={styles.navLink}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href='#projects' className={styles.navLink}>
                                    Projects
                                </a>
                            </li>
                            {/* <li>
                                <a href='#contact' className={styles.navLink}>
                                    Contact
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
