import Image from "next/image";
import About from "./components/home/about";
import Projects from "./components/home/projects";
import Skills from "./components/home/skills";

export default function Home() {
  return (
    <main className="bg-surface mx-4 md:mx-20 rounded-xl">
      <div className="mx-auto p-4 md:p-10">
        <About />
        <Skills />
        <Projects />
      </div>

    </main>
  );
}
