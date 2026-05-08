'use client';

import { useEffect } from 'react';
import styles from './VideoModal.module.css';

export default function VideoModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const src = project.vimeoId
    ? `https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&color=f8f7f4&title=0&byline=0&portrait=0`
    : project.youtubeId
    ? `https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`
    : null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <span className={styles.category}>{project.category}</span>
            <h2 className={styles.title}>
              {project.title} <em>{project.subtitle}</em>
            </h2>
            {project.director && (
              <p className={styles.credits}>
                dir. {project.director}
                {project.productionCo && ` — ${project.productionCo}`}
              </p>
            )}
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.player}>
          {src ? (
            <iframe
              src={src}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={`${project.title} ${project.subtitle}`}
            />
          ) : (
            <div className={styles.noVideo}>
              <p>Video link coming soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
