import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vasu Gupta - Portfolio</title>
        <meta
          name="description"
          content="Hello! I am a recent Computer Science and Physics graduate from the University of Alberta."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="flex flex-col font-sans text-gray-800 tracking-wider max-w-4xl m-auto">
          <p className="text-2xl p-y-2">Hi, my name is</p>
          <h1 className="text-8xl font-black pb-4 w-128">Vasu Gupta</h1>
          <p className="w-96 text-mono">
            I am a recent Computer Science and Physics graduate from the
            University of Alberta. My interests include software engineering,
            embedded software, full-stack web development, and machine learning.
            I am constantly learning about new technologies and concepts that
            interest me!{" "}
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        Designed & Built by Vasu Gupta - 2022
      </footer>
    </div>
  );
};

export default Home;
