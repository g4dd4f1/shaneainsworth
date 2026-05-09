import Image from 'next/image';
import styles from './ProjectTile.module.css';

export default function ProjectTile({ project, index }) {
  return (
    <div
      className={styles.tile}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className={styles.imageWrap}>
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title}${project.subtitle ? ` — ${project.subtitle}` : ''}`}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder} />
        )}

        <div className={styles.overlay}>
          <div className={styles.info}>
            <span className={styles.category}>{project.category}</span>
            <h2 className={styles.title}>{project.title}</h2>
            {project.subtitle && (
              <p className={styles.subtitle}>{project.subtitle}</p>
            )}
          </div>
          <div className={styles.playIcon}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <polygon points="4,2 18,10 4,18" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.meta}>
        <span className={styles.metaTitle}>
          {project.title}{project.subtitle ? ` — ${project.subtitle}` : ''}
        </span>
        <span className={styles.metaYear}>{project.year}</span>
      </div>
    </div>
  );
}
