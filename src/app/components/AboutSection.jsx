"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>Kotlin/Java</li>
        <li>C#</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>PHP</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <ul className="list-disc pl-2">
        <li>Jet Brains IDE's</li>
        <li>Visual Studio Code</li>
        <li>Postman</li>
        <li>DBBeaver</li>
        <li>Gradle</li>
        <li>Raspberry PI</li>
      </ul>
    ),
  },
  {
    title: "DevOps",
    id: "devops",
    content: (
      <ul className="list-disc pl-2">
        <li>Docker</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Portainer</li>
        <li>NPM</li>
        <li>Mysql</li>
        <li>MongoDB</li>
        <li>Bash</li>
      </ul>
    ),
  },
  {
    title: "LIb's & Frameworks",
    id: "libs",
    content: (
      <ul className="list-disc pl-2">
        <li>Nginx</li>
        <li>Tallwind</li>
        <li>discord.js</li>
        <li>NextJS</li>
        <li>Node.js</li>
        <li>Express</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Training as IT assitent</li>
        <li>MSA - Secondary School Certificate</li>
        <li>ECDL Workforce Base</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={1000} height={1000}  className="rounded-full"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript(Typescript), Kotlin/Java, C#, Py, React,
            Node.js, Express, HTML, CSS, Docker and Git. I am a quick learner
            and I am always looking to expand my knowledge and skill set. I am a
            team player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
            >
              {" "}
              Tools{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("devops")}
              active={tab === "devops"}
            >
              {" "}
              DevOps{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("libs")}
              active={tab === "libs"}
            >
              {" "}
              Lib's & Frameworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
