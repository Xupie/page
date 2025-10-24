import Image from "next/image";
import type { FC } from "react";

interface ProjectCardProps {
  project: string;
  description?: string;
  img_src: string;
  img_alt: string;
  source?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  project,
  description,
  img_src,
  img_alt,
  source,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="w-full md:w-2/5">
        <h2 className="text-3xl font-semibold mb-2">{project}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{description}</p>
        {
          source === null ? (<></>) : (
            <a href={source} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          )
        }
      </div>
      <div className="relative w-full md:w-3/5 aspect-[16/9] px-4 rounded-xl border border-[var(--color-surface-dark)] bg-[var(--color-surface)] shadow-md hover:shadow-lg hover:border-[var(--color-primary)] transition-all duration-300 ease-out">
        <Image
          src={img_src}
          alt={img_alt}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
          loading={"lazy"}
          className="object-fill"
        />
      </div>

    </div>
  );
};

export default ProjectCard;
