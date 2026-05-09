import { projects } from './data/projects';
import Sidebar from '../components/Sidebar';
import ProjectGrid from '../components/ProjectGrid';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <ProjectGrid projects={projects} />
      </main>
    </div>
  );
}
