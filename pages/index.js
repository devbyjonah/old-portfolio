import { useContext } from "react";
// next components
import Head from "next/head";
// custom components
import ProjectGrid from "../components/ProjectGrid";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Wave from "react-wavify";

import { DarkModeContext } from "@/context/DarkModeContext";

export default function Home() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <Head>
        <title>Jonah Wagner | Software Engineer</title>
        <meta
          name="description"
          content="Simple showcasing of my software development work, links to my socials, and contact information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="home" className={darkMode ? "text-bg-dark" : "text-bg-light"}>
        <main className="min-vh-100 d-flex flex-column justify-content-between align-items-center">
          <Header />
          <Intro />
          <ProjectGrid />
        </main>
      </div>
    </>
  );
}
