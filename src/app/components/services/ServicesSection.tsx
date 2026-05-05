import { Container } from "../ui/Container/Container";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { ServiceCard } from "./ServiceCard/ServiceCard";
import { SERVICES } from "./services.constants";
import styles from "./services.module.scss";

export const ServicesSection = () => {
  return (
    <section id="services" className={styles.section}>
      <Container>
        <SectionTitle
          eyebrow="What we do"
          title={
            <>
              Services tuned for <span>modern web products</span>
            </>
          }
          description="From a focused landing page to a full interactive platform — we cover the full frontend stack with care and clean architecture."
        />

        <div className={styles.grid}>
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
