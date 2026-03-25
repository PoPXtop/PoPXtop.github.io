import { portfolioData } from '@/data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          © 2026 {portfolioData.personal.name}. Все права защищены.
        </p>
        <div className={styles.socialLinks}>
          <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={portfolioData.social.telegram} target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href={portfolioData.social.vk} target="_blank" rel="noopener noreferrer">
            VK
          </a>
        </div>
      </div>
    </footer>
  );
}