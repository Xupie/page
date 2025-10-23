import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-surface mx-4 md:mx-20 rounded-xl">
      <div className="mx-auto p-4 md:p-10">
        <section>
          <h1 id="about">About Me</h1>
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full h-">
              <Image
                src={`/icon.jpg`}
                alt={"icon"}
                fill={true}
                sizes="(max-width: 500px) 33vw, (max-width: 1200px) 33vw, 33vw"
                className="rounded-full"
              />
            </div>
            <p>Hello world!</p>
          </div>
        </section>

        <h1 id="skills">Skills</h1>
        <h1 id="projects">Projects</h1>
      </div>

    </main>
  );
}
