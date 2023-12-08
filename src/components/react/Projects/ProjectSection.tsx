import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";
import type { ProjectDataType } from "@/types";
import type { MarkdownInstance } from "astro";

const ProjectsSection = ({
  projects,
}: {
  projects: MarkdownInstance<ProjectDataType>[];
}) => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  console.log(tag);

  const handleTagChange = (newTag: string) => {
    console.log(newTag);
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.frontmatter.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="h-[1250px]">
      <h2 className="text-center text-4xl font-bold text-white ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.frontmatter.id}
              title={project.frontmatter.title}
              description={project.frontmatter.description}
              imgUrl={project.frontmatter.image}
              gitUrl={project.frontmatter.gitUrl}
              previewUrl={project.frontmatter.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
