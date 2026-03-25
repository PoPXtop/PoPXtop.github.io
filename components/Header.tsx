'use client';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Главная' },
    { href: '#about', label: 'Обо мне' },
    { href: '#projects', label: 'Проекты' },
    { href: '#contacts', label: 'Контакты' },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.logo}>
          Кузьминых А.
        </a>

        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={styles.mobileButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {isOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}