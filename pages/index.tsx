import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../src/components/layout";

const Home: NextPage = () => {
  return (
    <div className="">
      <Layout>
        <Head>
          <title>Vasu Gupta - Portfolio</title>
          <meta
            name="description"
            content="Hello! I am a recent Computer Science and Physics graduate from the University of Alberta."
          />
        </Head>

        {/* Intro */}
        <div className="flex flex-col md:flex-row flex-wrap text-gray-800 tracking-wide max-w-screen-xl mx-auto px-4 items-center justify-center h-full text-slate-900">
          <div className="relative md:basis-1/2 lg:basis-2/3 grow h-fit">
            <p className="text-4xl mb-2">Hi, my name is Vasu Gupta.</p>
            <p className="text-xl">
              I am a recent Computer Science and Physics graduate from the
              University of Alberta. My interests include software engineering,
              embedded software, full-stack web development, and machine
              learning. I am constantly learning about new technologies and
              concepts that interest me!{" "}
            </p>
          </div>
          <div className="relative md:basis-1/2 lg:basis-1/3 flex-1 grow justify-center m-auto p-8 h-fit">
            <Image
              className="rounded-full"
              src="/profile.jpeg"
              alt={"Vasu"}
              layout="intrinsic"
              width={340}
              height={340}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
