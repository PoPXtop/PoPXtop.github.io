import { portfolioData } from '@/data/portfolio';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Обо мне</h2>
        
        <p className={styles.description}>
          {portfolioData.personal.about || 
            'Я начинающий frontend-разработчик, увлечённый созданием современных веб-приложений. ' +
            'Изучаю React, Next.js и TypeScript. Стремлюсь создавать удобные и красивые интерфейсы.'}
        </p>

        {/* Детали */}
        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <div className={styles.detailIcon}>🎯</div>
            <h3 className={styles.detailTitle}>Цель</h3>
            <p className={styles.detailText}>
              Стать профессиональным frontend-разработчиком и создавать качественные веб-приложения
            </p>
          </div>
          
          <div className={styles.detailCard}>
            <div className={styles.detailIcon}>📚</div>
            <h3 className={styles.detailTitle}>Обучение</h3>
            <p className={styles.detailText}>
              Постоянно изучаю новые технологии и лучшие практики разработки
            </p>
          </div>
          
          <div className={styles.detailCard}>
            <div className={styles.detailIcon}>💡</div>
            <h3 className={styles.detailTitle}>Подход</h3>
            <p className={styles.detailText}>
              Внимание к деталям, чистый код и удобство пользователя
            </p>
          </div>
        </div>

        {/* Навыки - подробные */}
        <div className={styles.skillsSection}>
          <h3 className={styles.skillsTitle}>Навыки</h3>
          <p className={styles.skillsSubtitle}>
            Технологии и инструменты, которые я использую в работе
          </p>

          <div className={styles.skillsGrid}>
            {/* Frontend */}
            <div className={styles.skillCategory}>
              <h4 className={styles.skillCategoryTitle}>
                <span>🎨</span> Frontend
              </h4>
              <ul className={styles.skillCategoryList}>
                <li>HTML5 (семантическая вёрстка)</li>
                <li>CSS3 (Flexbox, Grid, анимации)</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript (базовый уровень)</li>
                <li>React (hooks, компоненты)</li>
                <li>Next.js (SSR, SSG)</li>
              </ul>
            </div>

            {/* Стили */}
            <div className={styles.skillCategory}>
              <h4 className={styles.skillCategoryTitle}>
                <span>🎭</span> Стилизация
              </h4>
              <ul className={styles.skillCategoryList}>
                <li>Tailwind CSS</li>
                <li>CSS Modules</li>
                <li>SCSS/SASS</li>
                <li>Styled Components</li>
                <li>Адаптивный дизайн</li>
                <li>Cross-browser совместимость</li>
              </ul>
            </div>

            {/* Инструменты */}
            <div className={styles.skillCategory}>
              <h4 className={styles.skillCategoryTitle}>
                <span>🛠</span> Инструменты
              </h4>
              <ul className={styles.skillCategoryList}>
                <li>Git (GitHub)</li>
                <li>npm/yarn</li>
                <li>VS Code</li>
                <li>Figma (базово)</li>
                <li>Chrome DevTools</li>
                <li>Webpack/Vite</li>
              </ul>
            </div>

            {/* Дополнительно */}
            <div className={styles.skillCategory}>
              <h4 className={styles.skillCategoryTitle}>
                <span>📦</span> Дополнительно
              </h4>
              <ul className={styles.skillCategoryList}>
                <li>REST API</li>
                <li>Работа с API</li>
                <li>JSON</li>
                <li>GitHub Pages</li>
                <li>SEO (базово)</li>
                <li>Веб-доступность</li>
              </ul>
            </div>
          </div>

          {/* Теги всех навыков */}
          <div className={styles.skillsList}>
            {portfolioData.skills.map((skill) => (
              <span key={skill} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>

          {/* Уровень владения */}
          <div className={styles.skillLevel}>
            <h4 className={styles.skillLevelTitle}>Уровень владения технологиями</h4>
            
            <div className={styles.skillBar}>
              <div className={styles.skillBarHeader}>
                <span className={styles.skillBarName}>HTML5 / CSS3</span>
                <span className={styles.skillBarPercent}>99%</span>
              </div>
              <div className={styles.skillBarTrack}>
                <div className={styles.skillBarFill} style={{ width: '99%' }}></div>
              </div>
            </div>

            <div className={styles.skillBar}>
              <div className={styles.skillBarHeader}>
                <span className={styles.skillBarName}>JavaScript</span>
                <span className={styles.skillBarPercent}>95%</span>
              </div>
              <div className={styles.skillBarTrack}>
                <div className={styles.skillBarFill} style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className={styles.skillBar}>
              <div className={styles.skillBarHeader}>
                <span className={styles.skillBarName}>React / Next.js</span>
                <span className={styles.skillBarPercent}>90%</span>
              </div>
              <div className={styles.skillBarTrack}>
                <div className={styles.skillBarFill} style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className={styles.skillBar}>
              <div className={styles.skillBarHeader}>
                <span className={styles.skillBarName}>TypeScript</span>
                <span className={styles.skillBarPercent}>80%</span>
              </div>
              <div className={styles.skillBarTrack}>
                <div className={styles.skillBarFill} style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className={styles.skillBar}>
              <div className={styles.skillBarHeader}>
                <span className={styles.skillBarName}>Tailwind CSS</span>
                <span className={styles.skillBarPercent}>90%</span>
              </div>
              <div className={styles.skillBarTrack}>
                <div className={styles.skillBarFill} style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Контактная информация */}
        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
            <div className={styles.contactCardIcon}>📧</div>
            <div className={styles.contactCardLabel}>Email</div>
            <div className={styles.contactCardValue}>{portfolioData.personal.email}</div>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactCardIcon}>📱</div>
            <div className={styles.contactCardLabel}>Телефон</div>
            <div className={styles.contactCardValue}>{portfolioData.personal.phone}</div>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactCardIcon}>📍</div>
            <div className={styles.contactCardLabel}>Локация</div>
            <div className={styles.contactCardValue}>{portfolioData.personal.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
}