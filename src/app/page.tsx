import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-surface mx-4 md:mx-20 rounded-xl">
      <div className="mx-auto p-4">
        <div>
          <h1 id="about">About Me</h1>
          <div className="relative">
            <Image
              src={`/icon.jpg`}
              alt={"icon"}
              fill={true}
              sizes="(max-width: 768px) 30vw, (max-width: 1200px) 20vw, 33vw"
              className="relative"
            />
          </div>
        </div>

        <h1 id="skills">Skills</h1>
        <h1 id="projects">Projects</h1>
      </div>

    </main>
  );
}
