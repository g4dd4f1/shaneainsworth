'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.inner}>
        <div className={styles.wordmark}>
          <Link href="/">
            <span className={styles.name}>Shane Ainsworth</span>
            <span className={styles.title}>Cinematographer</span>
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/" className={path === '/' ? styles.active : styles.link}>
            Work
          </Link>
          <Link href="/about" className={path === '/about' ? styles.active : styles.link}>
            Bio
          </Link>
          <a href="mailto:shane@shaneainsworth.com" className={styles.link}>
            Contact
          </a>
        </nav>
      </div>
    </aside>
  );
}
