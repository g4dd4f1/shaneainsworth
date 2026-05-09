import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '../../data/projects';
import styles from './project.module.css';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) return {};
  return {
    title: `${project.title}${project.subtitle ? ` — ${project.subtitle}` : ''} — Shane Ainsworth`,
  };
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) notFound();

  const vimeoSrc = `https://player.vimeo.com/video/${project.vimeoId}?color=0e0e0d&title=0&byline=0&portrait=0`;

  // Previous / next navigation
  const currentIndex = projects.findIndex((p) => p.id === params.slug);
  const prev = projects[currentIndex - 1] || null;
  const next = projects[currentIndex + 1] || null;

  return (
    <div className={styles.page}>

      {/* Video player */}
      <div className={styles.playerWrap}>
        <div className={styles.player}>
          <iframe
            src={vimeoSrc}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={`${project.title}${project.subtitle ? ` — ${project.subtitle}` : ''}`}
          />
        </div>
      </div>

      {/* Project info */}
      <div className={styles.info}>
        <div className={styles.infoInner}>

          <div className={styles.titleBlock}>
            <span className={styles.category}>{project.category}</span>
            <h1 className={styles.title}>{project.title}</h1>
            {project.subtitle && (
              <p className={styles.subtitle}>{project.subtitle}</p>
            )}
          </div>

          <div className={styles.credits}>
            <div className={styles.credit}>
              <span className={styles.creditLabel}>Director</span>
              <span className={styles.creditValue}>{project.director}</span>
            </div>
            {project.productionCo && (
              <div className={styles.credit}>
                <span className={styles.creditLabel}>Production</span>
                <span className={styles.creditValue}>{project.productionCo}</span>
              </div>
            )}
            <div className={styles.credit}>
              <span className={styles.creditLabel}>Cinematographer</span>
              <span className={styles.creditValue}>Shane Ainsworth</span>
            </div>
            <div className={styles.credit}>
              <span className={styles.creditLabel}>Year</span>
              <span className={styles.creditValue}>{project.year}</span>
            </div>
          </div>

          {project.awards && project.awards.length > 0 && (
            <div className={styles.awards}>
              {project.awards.map((award) => (
                <span key={award} className={styles.award}>{award}</span>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Prev / Next navigation */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          {prev ? (
            <Link href={`/work/${prev.id}`} className={styles.navLink}>
              <span className={styles.navDir}>← Previous</span>
              <span className={styles.navTitle}>
                {prev.title}{prev.subtitle ? ` — ${prev.subtitle}` : ''}
              </span>
            </Link>
          ) : <div />}

          <Link href="/" className={styles.allWork}>All Work</Link>

          {next ? (
            <Link href={`/work/${next.id}`} className={`${styles.navLink} ${styles.navRight}`}>
              <span className={styles.navDir}>Next →</span>
              <span className={styles.navTitle}>
                {next.title}{next.subtitle ? ` — ${next.subtitle}` : ''}
              </span>
            </Link>
          ) : <div />}
        </div>
      </nav>

    </div>
  );
}
