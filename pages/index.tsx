import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../src/components/layout";

const Projects = [
  {
    name: "Workout Tracker (COMING SOON)",
    link: "",
    description:
      "A cross-platform mobile application to track a workout session.",
    tags: ["React Native"],
  },
  {
    name: "Portfolio Website",
    link: "",
    description:
      "My personal portfolio (this website). Built using Next.js, hosted on Vercel.",
    tags: ["Next.js", "React.js", "Tailwindcss"],
  },
  {
    name: "KrowdTrialz",
    link: "https://github.com/CMPUT301W21T05/KrowdTrialz",
    description:
      "Final project for CMPUT 301 (Intro to Software Engineering) at the University of Alberta. An Android application for publishing and contributing data to statistics experiments.",
    tags: ["Android", "Java"],
  },
  {
    name: "Machine Learning Model Comparison",
    link: "https://github.com/vasu-gupta01/ML-mini-project",
    description:
      "Final project for CMPUT 466 (Machine Learning) at the University of Alberta. Comparing the performance of three different ML models on a credit card fraud detection task.",
    tags: ["Machine Learning", "Python"],
  },
];

const Skills = [
  { type: "Languages", skills: ["C", "C++", "Java", "TypeScript", "Python"] },
  {
    type: "Tools & Technologies",
    skills: ["Git", "Android Studio", "Firebase", "MongoDB", "Linux"],
  },

  {
    type: "Frameworks",
    skills: ["Next.js", "React Native", "React.js", "Node.js", "Express"],
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Vasu Gupta</title>
        <meta
          name="description"
          content="Hello! I am a recent Computer Science and Physics graduate from the University of Alberta."
        />
        <meta property="og:url" content="https://www.vasug.space/" />
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="your fb app id" /> */}
        <meta property="og:title" content="Vasu Gupta" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hello! I am a recent Computer Science and Physics graduate from the University of Alberta."
        />
        <meta property="og:image" content={"/banner.png"} />
      </Head>

      {/* About Me */}
      <section
        id="intro-section"
        className="flex flex-col max-w-screen-lg md:flex-row flex-wrap tracking-wide px-4 min-h-screen grow items-center pt-24 md:pt-0"
      >
        <div className="relative flex flex-col lg:basis-2/3 h-fit subpixel-antialiased font-normal">
          <p className="text-5xl mb-2 leading-loose font-light">
            Hi, my name is <span className="font-medium">Vasu Gupta</span>.
          </p>
          <p className="text-xl leading-relaxed mb-8">
            I am a recent Computer Science and Physics graduate from the
            University of Alberta.
          </p>
          <p className="text-xl leading-relaxed">
            My interests include software engineering, embedded software,
            full-stack web development, and machine learning. I am constantly
            learning about new technologies and concepts that interest me!
          </p>
        </div>
        <div className="relative flex flex-col grow lg:basis-1/3 items-center p-2">
          <Image
            className="rounded-full"
            src="/profile.jpeg"
            alt={"Vasu"}
            layout="intrinsic"
            width={240}
            height={240}
          />
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills-section"
        className="flex max-w-screen-xl content-start min-h-screen mx-auto flex-wrap tracking-wide px-4 py-24 text-gray-800"
      >
        <p className="w-full text-5xl font-light grow mb-20">Skills</p>

        <div className="flex max-w-screen-lg flex-wrap w-full justify-center content-center m-auto">
          {Skills.map((skill) => {
            return (
              <div key={`${"div-"} ${skill}`} className="w-full md:w-1/2 p-4">
                <p
                  key={`${"p-"} ${skill}`}
                  className="text-xl font-bold text-center mb-4"
                >
                  {skill.type}:
                </p>
                <div
                  key={`${"div2-"} ${skill}`}
                  className="flex flex-wrap justify-center"
                >
                  {skill.skills.map((val) => {
                    return (
                      <span
                        key={`${"span-"} ${val}`}
                        className="bg-[#E5F6DF] text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                      >
                        {val}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects-section"
        className="flex justify-center max-w-screen-xl min-h-screen flex-wrap tracking-wide px-4 py-24"
      >
        <div className="w-full mb-10">
          <p className="text-5xl font-light grow">Projects</p>
        </div>
        <div className="flex flex-wrap justify-evenly subpixel-antialiased">
          {Projects.map((project) => {
            return (
              <a
                key={`${"a-"} ${project.name}`}
                target="_blank"
                rel="noreferrer"
                href={project.link}
              >
                <div
                  key={`${"div-"} ${project.name}`}
                  className="flex flex-col justify-between m-2 mb-6 p-8 w-80 h-80 shadow-2xl bg-gray-100 rounded-xl transition ease-in-out duration-300 hover:-translate-y-2 hover:bg-gray-200"
                >
                  <div key={`${"div2-"} ${project.name}`}>
                    <p
                      key={`${"p-"} ${project.name}`}
                      className="text-xl mb-4 font-bold"
                    >
                      {project.name}
                    </p>
                    <p className="mb-2 text-sm font-medium">
                      {project.description}
                    </p>
                  </div>
                  <div
                    key={`${"div3-"} ${project.name}`}
                    className="flex flex-wrap"
                  >
                    {project.tags.map((tag) => {
                      return (
                        <span
                          key={`${"span-"} ${tag}`}
                          className="bg-[#E5F6DF] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
