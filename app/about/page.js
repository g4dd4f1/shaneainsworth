import Sidebar from '../../components/Sidebar';
import styles from './about.module.css';

export const metadata = {
  title: 'Bio — Shane Ainsworth',
};

export default function About() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.inner}>

          <div className={styles.imageCol}>
            <div className={styles.portrait} />
          </div>

          <div className={styles.textCol}>
            <span className={styles.eyebrow}>Cinematographer</span>
            <h1 className={styles.name}>Shane<br />Ainsworth</h1>

            <div className={styles.bio}>
              <p>
                Shane Ainsworth is a Los Angeles-based cinematographer working across
                commercial, music video, and narrative film. His work is defined by
                a restrained visual intelligence — an instinct for light that is at
                once precise and alive.
              </p>
              <p>
                He has shot campaigns for Nissan and collaborated with artists
                including Lykke Li, bringing the same considered eye to both
                the commercial and the deeply personal.
              </p>
            </div>

            <div className={styles.contact}>
              <a href="mailto:shane@shaneainsworth.com" className={styles.emailLink}>
                shane@shaneainsworth.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagramLink}
              >
                Instagram ↗
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
