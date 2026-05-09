import Link from 'next/link';
import ProjectTile from './ProjectTile';
import styles from './ProjectGrid.module.css';

export default function ProjectGrid({ projects }) {
  return (
    <div className={styles.grid}>
      {projects.map((project, i) => (
        <Link
          key={project.id}
          href={`/work/${project.id}`}
          className={styles.link}
        >
          <ProjectTile project={project} index={i} />
        </Link>
      ))}
    </div>
  );
}
