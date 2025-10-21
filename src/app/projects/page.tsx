import ProjectCard from "../components/projectcard";

export default function Projects() {
    return (
        <main className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
            <ProjectCard project="aa" img_url="/file.svg" img_alt="" source="" />
            <ProjectCard project="aa" img_url="/file.svg" img_alt="" source="" />
        </main>
    );
}