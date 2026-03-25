'use client';
import styles from './Hero.module.css';
import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  // Берём первые 6 навыков для отображения
  const topSkills = portfolioData.skills.slice(0, 6);

  return (
    <section id="home" className={styles.hero}>
      {/* Декоративные элементы на фоне */}
      <div className={`${styles.backgroundShape} ${styles.shape1}`}></div>
      <div className={`${styles.backgroundShape} ${styles.shape2}`}></div>

      <div className={styles.container}>
        {/* Левая часть - анимированный персонаж */}
        <div className={styles.profileSection}>
          <div className={styles.profileWrapper}>
            {/* Анимированный SVG человечек */}
            <div className={styles.characterContainer}>
              <svg
                viewBox="0 0 280 280"
                className={styles.characterSvg}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Дефиниции для градиентов и фильтров */}
                <defs>
                  <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f8fafc" />
                    <stop offset="50%" stopColor="#e2e8f0" />
                    <stop offset="100%" stopColor="#cbd5e1" />
                  </linearGradient>
                  
                  <linearGradient id="skinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fef3c7" />
                    <stop offset="100%" stopColor="#fde68a" />
                  </linearGradient>
                  
                  <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                  
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Тень под персонажем */}
                <ellipse 
                  cx="140" 
                  cy="265" 
                  rx="60" 
                  ry="10" 
                  fill="rgba(0,0,0,0.1)"
                  className={styles.shadow}
                />
                
                {/* Тело (рубашка) */}
                <path
                  d="M 90 160 Q 90 150 100 145 L 140 140 L 180 145 Q 190 150 190 160 L 190 220 Q 190 230 180 235 L 140 240 L 100 235 Q 90 230 90 220 Z"
                  fill="url(#shirtGradient)"
                  className={styles.bodyPart}
                />
                
                {/* Рука левая */}
                <g className={styles.leftArm}>
                  <path
                    d="M 100 150 Q 85 165 80 185 Q 75 200 85 210"
                    fill="none"
                    stroke="url(#skinGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <circle cx="85" cy="210" r="8" fill="url(#skinGradient)" />
                </g>
                
                {/* Рука правая */}
                <g className={styles.rightArm}>
                  <path
                    d="M 180 150 Q 195 165 200 185 Q 205 200 195 210"
                    fill="none"
                    stroke="url(#skinGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <circle cx="195" cy="210" r="8" fill="url(#skinGradient)" />
                </g>
                
                {/* Шея */}
                <rect
                  x="125"
                  y="130"
                  width="30"
                  height="20"
                  fill="url(#skinGradient)"
                />
                
                {/* Голова */}
                <g className={styles.head}>
                  {/* Лицо */}
                  <ellipse
                    cx="140"
                    cy="110"
                    rx="45"
                    ry="50"
                    fill="url(#skinGradient)"
                    filter="url(#glow)"
                  />
                  
                  {/* Волосы - белые с анимацией */}
                  <g className={styles.hair}>
                    <path
                      d="M 90 110 Q 85 70 95 50 Q 110 30 140 25 Q 170 30 185 50 Q 195 70 190 110 Q 188 90 180 80 Q 170 70 140 68 Q 110 70 100 80 Q 92 90 90 110"
                      fill="url(#hairGradient)"
                      className={styles.hairMain}
                    />
                    <path
                      d="M 105 85 Q 110 75 120 72 Q 130 70 140 72 Q 150 70 160 72 Q 170 75 175 85 Q 173 95 165 90 Q 155 85 140 85 Q 125 85 115 90 Q 107 95 105 85"
                      fill="url(#hairGradient)"
                    />
                    <path
                      d="M 95 95 Q 88 100 90 115 Q 92 110 95 105"
                      fill="none"
                      stroke="url(#hairGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 185 95 Q 192 100 190 115 Q 188 110 185 105"
                      fill="none"
                      stroke="url(#hairGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </g>
                  
                  {/* Глаза */}
                  <g className={styles.eyes}>
                    <ellipse cx="122" cy="105" rx="6" ry="8" fill="#1e293b" />
                    <circle cx="124" cy="103" r="3" fill="#ffffff" />
                    <circle cx="125" cy="101" r="1.5" fill="#ffffff" opacity="0.8" />
                    
                    <ellipse cx="158" cy="105" rx="6" ry="8" fill="#1e293b" />
                    <circle cx="160" cy="103" r="3" fill="#ffffff" />
                    <circle cx="161" cy="101" r="1.5" fill="#ffffff" opacity="0.8" />
                  </g>
                  
                  {/* Брови */}
                  <path
                    d="M 112 92 Q 122 88 132 92"
                    fill="none"
                    stroke="#92400e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 148 92 Q 158 88 168 92"
                    fill="none"
                    stroke="#92400e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  
                  {/* Нос */}
                  <path
                    d="M 140 110 Q 138 118 136 122 Q 140 124 144 122 Q 142 118 140 110"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  
                  {/* Рот (улыбка) */}
                  <path
                    d="M 125 135 Q 140 145 155 135"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className={styles.mouth}
                  />
                  
                  {/* Румянец */}
                  <ellipse cx="110" cy="125" rx="8" ry="5" fill="#fca5a5" opacity="0.4" />
                  <ellipse cx="170" cy="125" rx="8" ry="5" fill="#fca5a5" opacity="0.4" />
                </g>
                
                {/* Декоративные элементы - код/технологии вокруг */}
                <g className={styles.codeSymbols}>
                  <text x="50" y="100" fill="#60a5fa" fontSize="20" fontFamily="monospace" className={styles.floatingSymbol}>
                    {'<>'}
                  </text>
                  <text x="210" y="120" fill="#a78bfa" fontSize="20" fontFamily="monospace" className={styles.floatingSymbol}>
                    {'{ }'}
                  </text>
                  <text x="60" y="180" fill="#fbbf24" fontSize="18" fontFamily="monospace" className={styles.floatingSymbol}>
                    JS
                  </text>
                  <text x="200" y="160" fill="#61dafb" fontSize="16" fontFamily="monospace" className={styles.floatingSymbol}>
                    ⚛
                  </text>
                </g>
              </svg>
            </div>
            
            <div className={styles.availabilityBadge}>
              Открыт к предложениям
            </div>
          </div>
        </div>

        {/* Правая часть - контент */}
        <div className={styles.contentSection}>
          <p className={styles.greeting}>👋 Привет, меня зовут</p>
          <h1 className={styles.name}>{portfolioData.personal.name}</h1>
          <p className={styles.title}>{portfolioData.personal.title}</p>
          
          <p className={styles.description}>
            {portfolioData.personal.about || 
              `Создаю современные веб-приложения с использованием React и Next.js. 
              Люблю решать сложные задачи и учиться новому.`}
          </p>

          {/* Навыки */}
          <div className={styles.skillsSection}>
            <span className={styles.skillsLabel}>Основные навыки:</span>
            <div className={styles.skillsList}>
              {topSkills.map((skill) => (
                <span key={skill} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Кнопки */}
          <div className={styles.buttonsSection}>
            <a href="#projects" className={styles.primaryButton}>
              <span>📂</span>
              <span>Смотреть проекты</span>
            </a>
            <a href="#contacts" className={styles.secondaryButton}>
              <span>📬</span>
              <span>Связаться</span>
            </a>
          </div>

          {/* Социальные ссылки */}
          <div className={styles.socialSection}>
            <span className={styles.socialLabel}>Я в соцсетях:</span>
            <div className={styles.socialLinks}>
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                title="GitHub"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href={portfolioData.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                title="Telegram"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href={portfolioData.social.vk}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                title="VK"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.355-3.202C4.624 10.857 4 8.673 4 8.232c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.779.678.863 2.491 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.727c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.15-3.573 2.15-3.573.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.032-2.354 4.032-.186.305-.254.44 0 .779.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.475-.085.72-.576.72z"/>
                </svg>
              </a>
              <a
                href={portfolioData.social.email}
                className={styles.socialLink}
                title="Email"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3v18h24V3H0zm21.518 2L9.087 12.971.944 5.717 21.518 5zM2.482 19l7.468-6.652 6.517 5.805H2.482v.847z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}