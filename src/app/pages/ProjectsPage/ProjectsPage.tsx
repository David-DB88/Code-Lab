import { Container } from "../../components/ui/Container/Container";
import { SectionTitle } from "../../components/ui/SectionTitle/SectionTitle";
import { ProjectsSection } from "../../components/projects/ProjectsSection";
import styles from "./projectsPage.module.scss";

export const ProjectsPage = () => {
  return (
    <div className={styles.page}>
      <Container className={styles.intro}>
        <SectionTitle
          align="center"
          eyebrow="Portfolio"
          title={
            <>
              Projects we've <span>shipped</span>
            </>
          }
          description="Live, interactive previews of real Code Lab products. Every preview links straight to the project."
        />
      </Container>

      <ProjectsSection showHeader={false} />
    </div>
  );
};
