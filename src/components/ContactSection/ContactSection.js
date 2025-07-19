import { MailIcon, PhoneIcon, MapPinIcon, FileTextIcon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../CustomSVGs/CustomSVGs';
import styles from './ContactSection.module.css';

const ContactSection = () => {
    return (
        <section id='contact' className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Get In Touch</h2>
                    <p className={styles.subtitle}>
                        Interested in working together or have a question? Feel
                        free to reach out through any of the channels below.
                    </p>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.sectionTitle}>
                            Contact Information
                        </h3>
                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <MailIcon size={20} />
                                </div>
                                <div className={styles.contactDetails}>
                                    <h4 className={styles.contactLabel}>
                                        Email
                                    </h4>
                                    <a
                                        href='mailto:handikasawai@gmail.com'
                                        className={styles.contactLink}
                                    >
                                        handikasawai@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <PhoneIcon size={20} />
                                </div>
                                <div className={styles.contactDetails}>
                                    <h4 className={styles.contactLabel}>
                                        Phone
                                    </h4>
                                    <a
                                        href='tel:+11234567890'
                                        className={styles.contactLink}
                                    >
                                        +1 (123) 456-7890
                                    </a>
                                </div>
                            </div> */}

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <MapPinIcon size={20} />
                                </div>
                                <div className={styles.contactDetails}>
                                    <h4 className={styles.contactLabel}>
                                        Location
                                    </h4>
                                    <p className={styles.contactText}>
                                        Vermillion, SD
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.socialSection}>
                            <h3 className={styles.socialTitle}>
                                Connect With Me
                            </h3>
                            <div className={styles.socialLinks}>
                                <a
                                    href='https://github.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={styles.socialLink}
                                >
                                    <GithubIcon size={20} />
                                </a>
                                <a
                                    href='https://linkedin.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={styles.socialLink}
                                >
                                    <LinkedinIcon size={20} />
                                </a>
                                {/* <a
                                    href='/resume.pdf'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={styles.socialLink}
                                >
                                    <FileTextIcon size={20} />
                                </a> */}
                            </div>
                        </div>
                    </div>

                    <div className={styles.messageForm}>
                        <h3 className={styles.sectionTitle}>
                            Send Me a Message
                        </h3>
                        <form className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label htmlFor='name' className={styles.label}>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    className={styles.input}
                                    placeholder='Your name'
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor='email' className={styles.label}>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    className={styles.input}
                                    placeholder='Your email address'
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label
                                    htmlFor='message'
                                    className={styles.label}
                                >
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    rows={5}
                                    className={styles.textarea}
                                    placeholder='Your message'
                                ></textarea>
                            </div>

                            <button
                                type='submit'
                                className={styles.submitButton}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
