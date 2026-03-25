import { portfolioData } from '@/data/portfolio';
import styles from './Contacts.module.css';

export default function Contacts() {
  return (
    <section id="contacts" className={styles.contacts}>
      <h2 className={styles.sectionTitle}>Связаться со мной</h2>
      <div className={styles.container}>
        <div className={styles.socialButtons}>
          <a href={portfolioData.social.email} className={styles.socialButton}>
            📧 Email
          </a>
          <a
            href={portfolioData.social.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialButton}
          >
            ✈ Telegram
          </a>
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialButton}
          >
            🐙 GitHub
          </a>
          <a
            href={portfolioData.social.vk}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialButton}
          >
            📘 VK
          </a>
        </div>
        <p className={styles.contactText}>
          Открыт для предложений и сотрудничества!
        </p>
      </div>
    </section>
  );
}