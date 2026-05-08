'use client';

import { useState } from 'react';
import ProjectTile from './ProjectTile';
import VideoModal from './VideoModal';
import styles from './ProjectGrid.module.css';

export default function ProjectGrid({ projects }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectTile
            key={project.id}
            project={project}
            index={i}
            onClick={() => setActive(project)}
          />
        ))}
      </div>

      {active && (
        <VideoModal project={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
