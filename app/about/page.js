import Image from 'next/image';
import Sidebar from '../../components/Sidebar';
import styles from './about.module.css';

export const metadata = {
  title: 'About — Shane Ainsworth',
};

export default function About() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.inner}>

          <div className={styles.portrait}>
            <Image
              src="/shane-portrait.jpg"
              alt="Shane Ainsworth"
              fill
              className={styles.portraitImg}
              sizes="80vw"
              priority
            />
          </div>

          <div className={styles.bio}>
            <p>
              Shane is a cinematographer working in the US, China, and anywhere there is a story to tell.
              His narrative feature film, <em>1 Girl Infinite</em>, directed by Lilly Hu, premiered at the
              Rotterdam International Film Festival and screened at the New York Asian Film Festival,
              Osaka Film Festival, and Wroclaw New Horizons Film Festival.
            </p>
            <p>
              Shane has delivered diverse imagery for a wide range of clients such as Bose, Nissan,
              Chanel, H&amp;M, and talent such as Lykke Li, André 3000, Niki, and Lil Wayne.
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
      </main>
    </div>
  );
}
