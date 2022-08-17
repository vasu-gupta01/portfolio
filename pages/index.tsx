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
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex text-gray-800 tracking-wider max-w-screen-lg mx-auto px-4 h-full ">
          <div>
            <p className="text-4xl mb-2">Hi, my name is Vasu Gupta.</p>
            <p className="text-xl">
              I am a recent Computer Science and Physics graduate from the
              University of Alberta. My interests include software engineering,
              embedded software, full-stack web development, and machine
              learning. I am constantly learning about new technologies and
              concepts that interest me!{" "}
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
