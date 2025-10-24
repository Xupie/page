import ProjectCard from "../projectcard";


const projects = [
    {project: "This website", description: "Made with next.js, TailwindCSS", img_src: "/next.svg", img_alt: "next js logo", source: "https://github.com/Xupie/xupie.github.io"},

]

export default function Projects() {
    return (
        <section>
            <h1 id="projects" className="text-center text-4xl font-sans font-semibold my-4">Projects</h1>
            {projects.map(({ img_alt, img_src, project, source, description }) => (
                <ProjectCard key={project} img_alt={img_alt} description={description} img_src={img_src} project={project} source={source} />
            ))}
        </section>
    );
}