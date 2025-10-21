"use client";

import Image from "next/image";
import type { FC } from "react";

interface ProjectCardProps {
  project: string;
  img_url: string;
  img_alt: string;
  source: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  project,
  img_url = "",
  img_alt = "",
  source = "",
}) => {
  return (
    <div>
      <h2>{project}</h2>
      <div className="relative h-10">
        <Image 
            src={img_url} 
            alt={img_alt} 
            fill={true} 
            loading={`lazy`} 
        />
      </div>
      <a href="b">Source</a>
    </div>
  );
};

export default ProjectCard;
