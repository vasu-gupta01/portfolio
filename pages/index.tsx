import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../src/components/layout";

const Projects = [
  {
    name: "Popin",
    link: "https://www.about.popin.ca/",
    description:
      "Popin is a web application that allows students to host and find events. It is built by a group of students from the University of Alberta.",
    tags: ["Next.js", "Firebase"],
  },
  {
    name: "Portfolio Website",
    link: "",
    description:
      "My personal portfolio (this website). Built using Next.js, hosted on Vercel.",
    tags: ["Next.js", "React.js", "Tailwindcss"],
  },
  {
    name: "Canadian Reduced Gravity Experiment Design Challenge (CAN-RGX)",
    link: "#",
    description:
      "Project title: Determining Response Differences to Microgravity in Male and Female Bioengineered Cartilage Tissue. Assisted in designing an electrical system for the project, created electrical schematics. Presented progress reports to SEDS, CSA, and NRC representatives.",
    tags: ["Embedded Systems", "Research"],
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
        className="flex flex-col md:flex-row flex-wrap tracking-wide px-4 xl:px-0 min-h-screen grow items-center pt-24 mx-auto md:pt-0"
      >
        <div className="relative flex flex-col lg:basis-3/4 h-fit">
          <p className="text-5xl mb-10 font-light dark:text-gray-50 font-serif">
            Hi, my name is <span className="font-semibold">Vasu Gupta</span>.
          </p>
          <p className="font-normal text-lg dark:text-gray-300 mb-8 max-w-xl tracking-wide font-sans">
            I am a recent Computer Science and Physics graduate from the
            University of Alberta.
          </p>
          <p className="font-normal text-lg dark:text-gray-300 max-w-xl tracking-wide">
            My interests include software engineering, embedded software,
            full-stack web development, and machine learning. I am constantly
            learning about new technologies and concepts that interest me!
          </p>
        </div>
        <div className="relative flex flex-col grow lg:basis-1/4 items-center p-2">
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

      {/* Projects */}
      <section
        id="projects-section"
        className="flex justify-center min-h-screen flex-wrap tracking-wide px-4 py-8"
      >
        <div className="flex flex-row grow mb-8 py-2 justify-center items-center">
          <div className="h-0.5 grow bg-[#004052] mr-4"></div>
          <p className="text-xl font-semibold font-serif w-fit dark:text-gray-400">
            Projects I&apos;ve Worked On
          </p>
          <div className="h-0.5 grow bg-[#004052] ml-4"></div>
        </div>

        <div className="flex flex-wrap justify-evenly">
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
                  className="flex flex-col justify-between m-2 mb-6 p-7 w-96 h-64 hover:shadow-2xl bg-gray-200 dark:bg-[#002029] dark:text-gray-400 rounded-xl transition ease-in-out duration-300 hover:-translate-y-2 antialiased"
                >
                  <div key={`${"div2-"} ${project.name}`}>
                    <p
                      key={`${"p-"} ${project.name}`}
                      className="text-xl mb-4 font-bold dark:text-gray-200"
                    >
                      {project.name}
                    </p>
                    <p className="mb-2 text-sm font-normal">
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
                          className="font-mono dark:text-gray-400 text-xs font-normal mr-2 my-1 px-2.5 py-0.5 rounded"
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
