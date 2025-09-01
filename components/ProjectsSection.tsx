import React from 'react';
import styles from './ProjectsSection.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, tags, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener" className={styles.projectCard}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={imageUrl} alt="Project Thumbnail" className={styles.projectImage} />
          </div>
          <div className={styles.details}>
            <div className={styles.subHeading}>
              <h4 className={styles.projectTitle}>{title}</h4>
              <p className={styles.projectDescription}>{description}</p>
            </div>
            <div className={styles.tagsRow}>
              {tags.map((tag, index) => (
                <div key={index} className={styles.tagContainer}>
                  <div className={styles.tag}>
                    <p className={styles.tagText}>{tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Hydrox",
      description: "52% increase in customers",
  imageUrl: "https://placehold.co/900x1200/111111/ffffff?text=Hydrox",
      tags: ["90% increase in CTR", "78% decline in bounce rate"],
      href: "https://framer.link/ramishdesign"
    },
    {
      title: "Ganache",
      description: "From 100 too 500 sales per month",
  imageUrl: "https://placehold.co/908x1200/222222/ffffff?text=Ganache",
      tags: ["84% increase in CTR", "50% decrease in CAC"],
      href: "https://framer.link/ramishdesign"
    },
    {
      title: "Glow Terra",
      description: "52% increase in customers",
  imageUrl: "https://placehold.co/904x1200/333333/ffffff?text=Glow+Terra",
      tags: ["90% increase in CTR", "78% decline in bounce rate"],
      href: "https://framer.link/ramishdesign"
    },
    {
      title: "Colish",
      description: "46% increase in online sales",
  imageUrl: "https://placehold.co/1600x600/444444/ffffff?text=Colish",
      tags: ["90% increase in CTR", "78% decline in bounce rate"],
      href: "https://framer.link/ramishdesign"
    }
  ];

  return (
    <section className={styles.section} id="projects">
      <div className={styles.contentContainer}>
        <div className={styles.headline}>
          <div className={styles.header}>
            <div className={styles.projectsTagContainer}>
              <div className={styles.projectsTag}>
                <p className={styles.projectsTagText}>projects</p>
              </div>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.titleContainer}>
                <h2 className={styles.subtitle}>Proven results</h2>
              </div>
              <div className={styles.titleContainer}>
                <h2 className={styles.title}>Global impact</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Helping service-based businesses attract, convert, and grow on autopilot.
          </p>
        </div>
        <div className={styles.projectsRow}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
