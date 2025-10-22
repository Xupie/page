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
    <div className="px-4 border-2 rounded-md shadow-2xl">
      <h2 className="text-lg font-semibold mb-2">{project}</h2>
      <div className="relative w-full h-32 mb-3">
        <Image
          src={img_url}
          alt={img_alt}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading={`lazy`}
        />
      </div>
      <a href={source} target="_blank" rel="noopener noreferrer">
        Source
      </a>
    </div>
  );
};

export default ProjectCard;
