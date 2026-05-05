import { Container } from "../ui/Container/Container";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { PROJECTS } from "./projects.constants";
import styles from "./projects.module.scss";

type ProjectsSectionProps = {
  limit?: number;
  showHeader?: boolean;
};

export const ProjectsSection = ({
  limit,
  showHeader = true,
}: ProjectsSectionProps) => {
  const visibleProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section id="projects" className={styles.section}>
      <Container>
        {showHeader && (
          <SectionTitle
            eyebrow="Selected work"
            title={
              <>
                Real projects, <span>live previews</span>
              </>
            }
            description="A selection of products we've built — interactive, responsive, and shipped to production. Hover, scroll, and open each one in a new tab."
          />
        )}

        <div className={styles.grid}>
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              url={project.url}
              previewBlocked={project.previewBlocked}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
