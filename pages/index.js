import { useContext } from "react";
import Wave from "react-wavify";
// next components
import Head from "next/head";
// custom components
import Intro from "../components/Intro";
import Middle from "../components/Middle";
import Contact from "../components/Contact";

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
          <Intro />
          <Middle />
          <Wave
            style={{ transform: "rotate(180deg)" }}
            fill={darkMode ? "url(#gradientDark)" : "url(#gradientLight)"}
            paused={false}
            options={{
              height: 30,
              amplitude: 40,
              speed: 0.13,
              points: 3,
            }}
          >
            <defs>
              <linearGradient id="gradientLight" gradientTransform="rotate(90)">
                <stop offset="10%" stopColor="rgb(102, 162, 243)" />
                <stop offset="90%" stopColor="rgb(102, 162, 243)" />
              </linearGradient>
              <linearGradient id="gradientDark" gradientTransform="rotate(90)">
                <stop offset="10%" stopColor="rgb(102, 162, 243)" />
                <stop offset="90%" stopColor="rgb(102, 162, 243)" />
              </linearGradient>
            </defs>
          </Wave>
          <Contact />
        </main>
      </div>
    </>
  );
}
