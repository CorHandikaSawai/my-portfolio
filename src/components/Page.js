import styles from './Page.module.css';

export default function Page({ children }) {
    return <section className={styles.singlePage}>{children}</section>;
}
