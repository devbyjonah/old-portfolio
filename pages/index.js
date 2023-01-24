// next components
import Head from "next/head";
// custom components
import Project from "../components/Project";
import Header from "../components/Header";
import Intro from "../components/Intro";
// home page css
import styles from "../styles/pages/Home.module.css";

import Button from "react-bootstrap/Button";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeToggle = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };
  const darkModeButton = (
    <>
      <Button
        variant={darkMode ? "light" : "dark"}
        className="btn-lg"
        onClick={darkModeToggle}
      >
        {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
      </Button>
    </>
  );

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
      <div className={darkMode ? "text-bg-dark" : "text-bg-light"}>
        <main className="min-vh-100 d-flex flex-column justify-content-between align-items-center mt-5">
          <Intro darkMode={darkMode} />
          <Header darkMode={darkMode} darkModeButton={darkModeButton} />
          <div className={styles.grid}>
            <Project
              link="/"
              title="Metronome App"
              description="project utilizing x and y technologies to implement x and y functionality"
              image="/profile.png"
              darkMode={darkMode}
            />
            <Project
              link="/"
              title="Project 2"
              description="project utilizing x and y technologies to implement x and y functionality"
              image="/profile.png"
              darkMode={darkMode}
            />
            <Project
              link="/"
              title="Project 3"
              description="project utilizing x and y technologies to implement x and y functionality"
              image="/profile.png"
              darkMode={darkMode}
            />
            <Project
              link="/"
              title="Project 4"
              description="project utilizing x and y technologies to implement x and y functionality"
              image="/profile.png"
              darkMode={darkMode}
            />
          </div>
        </main>
      </div>
    </>
  );
}
