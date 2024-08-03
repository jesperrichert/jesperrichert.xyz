"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  // {
  //   id: 1,
  //   title: "React Portfolio Website",
  //   description: "Project 1 description",
  //   image: "/images/projects/1.png",
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 1,
    title: "nexocrew",
    description:
      "Creator and Poblisher of Solutions for many kind of situations. We are a team of developers, designers, and marketers that can help you to grow your business.",
    image: "/images/projects/2.png",
    previewUrl: "https://nexocrew.com",
    gitUrl: "https://github.com/nexocrew-HQ",
  },
  {
    id: 2,
    title: "Crystopia",
    description:
      "Minecraft Server with gamemodes, minigames, and more! With a lot of features and a great community. Join us now!",
    image: "/images/projects/1.png",
    previewUrl: "https://www.crystopia.net",
  },
  {
    id: 3,
    title: "DisBot",
    description:
      "A Discord bot that can help you to manage your server. With a lot of commands and features. And build in Custom Branding. And everything is for free*!",
    image: "/images/projects/3.png",
    previewUrl: "https://www.disbot.xyz",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6"></div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
