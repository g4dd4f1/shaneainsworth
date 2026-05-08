'use client';

import Image from 'next/image';
import styles from './ProjectTile.module.css';

export default function ProjectTile({ project, index, onClick }) {
  return (
    <button
      className={styles.tile}
      onClick={onClick}
      style={{ animationDelay: `${index * 60}ms` }}
      aria-label={`Open ${project.title} — ${project.subtitle}`}
    >
      <div className={styles.imageWrap}>
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} ${project.subtitle}`}
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
            <p className={styles.subtitle}>{project.subtitle}</p>
          </div>
          <div className={styles.playIcon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <polygon points="4,2 18,10 4,18" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.meta}>
        <span className={styles.metaTitle}>{project.title} — {project.subtitle}</span>
        <span className={styles.metaYear}>{project.year}</span>
      </div>
    </button>
  );
}
