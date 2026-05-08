import { projects } from './data/projects';
import ProjectGrid from '../components/ProjectGrid';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <ProjectGrid projects={projects} />
    </div>
  );
}
