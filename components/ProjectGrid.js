import Project from "./Project";
import styles from "../styles/components/ProjectGrid.module.css";

export default function ProjectGrid() {
  return (
    <div className={`${styles.grid} text-reset`} id="projects">
      <Project
        link="/"
        title="Metronome App"
        description="project utilizing x and y technologies to implement x and y functionality"
        image="/default.png"
      />
      <Project
        link="/"
        title="Project 2"
        description="project utilizing x and y technologies to implement x and y functionality"
        image="/default.png"
      />
      <Project
        link="/"
        title="Project 3"
        description="project utilizing x and y technologies to implement x and y functionality"
        image="/default.png"
      />
      <Project
        link="/"
        title="Project 4"
        description="project utilizing x and y technologies to implement x and y functionality"
        image="/default.png"
      />
    </div>
  );
}
