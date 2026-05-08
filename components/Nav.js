'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

export default function Nav() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.wordmark}>
        Shane Ainsworth
      </Link>

      <div className={styles.links}>
        <Link href="/" className={path === '/' ? styles.active : ''}>
          Work
        </Link>
        <Link href="/about" className={path === '/about' ? styles.active : ''}>
          About
        </Link>
        <a href="mailto:shane@shaneainsworth.com">
          Contact
        </a>
      </div>
    </nav>
  );
}
